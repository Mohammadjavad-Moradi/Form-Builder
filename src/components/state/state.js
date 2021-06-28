import axios from 'axios';
import {configData} from '../configData/configData';

export let state = {
    header : [],
    sections: [

    ],
    t: 1,
    i: 1,
    tArray: [],
    name: ''
}
export let saveFile = {
    structure: state,
    name: '',
    description: '',
    id: null
}

const header = () => {
    const headerImgArray = document.querySelectorAll('.headerImgItem');
    let i = 0;
    state.name = document.querySelector('#formTitle').innerHTML;
    headerImgArray.forEach( (el => {
        state.header.push({});
        state.header[i].src = el.getAttribute('src');
        state.header[i].width = el.getAttribute('width');
        state.header[i].height = el.getAttribute('height');
        i++;
    }));
}

//-------------------------find id of active sections---------------------------
const getAllSectionIDs = () => {
    let sectionClassArray = document.querySelectorAll('.sectionWrapper');
    const idArray = [];
    sectionClassArray.forEach( (el) => {
        idArray.push(el.getAttribute('id'));
    })
    const idCode = [];
    idArray.forEach( (el) => {
        idCode.push( parseInt(el.substring(15, el.length)) )
    })
    state.tArray = idCode;

    for ( let c = 0; c < idCode.length; c++) {
        state.sections.push( {} );
        state.sections[c].id = idCode[c];
    }
    //---------------------------calculate max t-----------------------------------
    if ( idCode.length > 0 ) {
        const tValue = Math.max( ...idCode);
        state.t = tValue + 1;
    } else {
        state.t = 1
    }
}
//-----------------------------store secton title-------------------------
const getSectionTitles = () => {
    let sectionTitleArray = document.querySelectorAll('.sectionTitles');
    let titleArray = [];
    sectionTitleArray.forEach( (el) => {
        titleArray.push(el.innerHTML);
    })
    for ( let c = 0; c < titleArray.length; c++) {
        state.sections[c].title = titleArray[c]
    }
}
//--------------------------setup i and t---------------------------------
const getAllBoxIDs = () => {
    for ( let i = 0; i < state.sections.length; i++) {
        let formClassArray = document.querySelectorAll(`.reader-${state.tArray[i]}`);
        if ( formClassArray.length > 0 ) {
            const typeArray = [];
            formClassArray.forEach( (el) => {
                typeArray.push(parseInt(el.getAttribute('id').substring(1, 2)));
            });
            state.sections[i].fields = [];
            for ( let c = 0; c < typeArray.length; c++) {          
                state.sections[i].fields.push( {} );
                state.sections[i].fields[c].type = typeArray[c];
                //-----------------------find i------------------------
                const Ivalue = formClassArray[c].firstElementChild.getAttribute('id').split('-');
                state.sections[i].fields[c].id = parseInt(Ivalue[0]);
            }            
        }
    }
}
const setProperties = () => {
    for ( let i = 0; i < state.sections.length; i++) {
        if ( state.sections[i].fields ) {
        for ( let c = 0; c < state.sections[i].fields.length; c++) {
            state.sections[i].fields[c].properties = {}
            if ( state.sections[i].fields[c].type === 1 ) {
                const titlevalue = document.querySelector(`#textTitleInput-${state.sections[i].id}-${state.sections[i].fields[c].id}`).innerHTML;
                state.sections[i].fields[c].properties.title = titlevalue;
            } else if ( state.sections[i].fields[c].type === 2 ) {
                const titlevalue = document.querySelector(`#radioTitleInput-${state.sections[i].id}-${state.sections[i].fields[c].id}`).innerHTML;
                state.sections[i].fields[c].properties.title = titlevalue;
                if ( document.querySelector(`#radioNoteHolder-${state.sections[i].id}-${state.sections[i].fields[c].id} p`).innerHTML !== '') {
                    state.sections[i].fields[c].properties.noteField = true;
                    const noteValue = document.querySelector(`#radioNoteHolder-${state.sections[i].id}-${state.sections[i].fields[c].id} p`).innerHTML;
                    state.sections[i].fields[c].properties.noteValue = noteValue;
                } else {
                    state.sections[i].fields[c].properties.noteField = false;
                }
                if ( document.querySelector(`#radioTextHolder-${state.sections[i].id}-${state.sections[i].fields[c].id}`).innerHTML !== '') {
                    state.sections[i].fields[c].properties.textField = true;
                } else {
                    state.sections[i].fields[c].properties.textField = false;
                }
                state.sections[i].fields[c].properties.options = [];
                const optionNumber = document.querySelectorAll(`.radioItm-${state.sections[i].id}-${state.sections[i].fields[c].id}`);
                const optionImgNumber = document.querySelectorAll(`.singleImageBox-${state.sections[i].id}-${state.sections[i].fields[c].id}`);

                for ( let d = 0; d < optionNumber.length; d++) {
                    state.sections[i].fields[c].properties.options.push({});
                    state.sections[i].fields[c].properties.options[d].value = optionNumber[d].getAttribute('value');
                    state.sections[i].fields[c].properties.options[d].label = optionNumber[d].nextElementSibling.innerHTML;
                    state.sections[i].fields[c].properties.options[d].src = optionImgNumber[d].getAttribute('src');
                    state.sections[i].fields[c].properties.options[d].width = optionImgNumber[d].getAttribute('width');
                    state.sections[i].fields[c].properties.options[d].height = optionImgNumber[d].getAttribute('height');
                }
            } else if ( state.sections[i].fields[c].type === 3 ) {
                const titlevalue = document.querySelector(`#checkBoxTitleInput-${state.sections[i].id}-${state.sections[i].fields[c].id}`).innerHTML;
                state.sections[i].fields[c].properties.title = titlevalue;
                // const noteValue = document.querySelector(`#checkBoxNoteHolder-${state.sections[i].id}-${state.sections[i].fields[c].id} p`).innerHTML;
                // state.sections[i].fields[c].properties.noteValue = noteValue;
                if ( document.querySelector(`#checkBoxNoteHolder-${state.sections[i].id}-${state.sections[i].fields[c].id} p`).innerHTML !== '') {
                    state.sections[i].fields[c].properties.noteField = true;
                    const noteValue = document.querySelector(`#checkBoxNoteHolder-${state.sections[i].id}-${state.sections[i].fields[c].id} p`).innerHTML;
                    state.sections[i].fields[c].properties.noteValue = noteValue;
                } else {
                    state.sections[i].fields[c].properties.noteField = false;
                }
                if ( document.querySelector(`#checkBoxTextHolder-${state.sections[i].id}-${state.sections[i].fields[c].id}`).innerHTML !== '') {
                    state.sections[i].fields[c].properties.textField = true;
                } else {
                    state.sections[i].fields[c].properties.textField = false;
                }
                state.sections[i].fields[c].properties.options = [];
                const optionNumber = document.querySelectorAll(`.checkBoxItm-${state.sections[i].id}-${state.sections[i].fields[c].id}`);
                const optionImgNumber = document.querySelectorAll(`.checkImageBox-${state.sections[i].id}-${state.sections[i].fields[c].id}`);
                
                for ( let d = 0; d < optionNumber.length; d++) {
                    state.sections[i].fields[c].properties.options.push({});
                    state.sections[i].fields[c].properties.options[d].value = optionNumber[d].getAttribute('value');
                    state.sections[i].fields[c].properties.options[d].label = optionNumber[d].nextElementSibling.innerHTML;
                    state.sections[i].fields[c].properties.options[d].src = optionImgNumber[d].getAttribute('src');
                    state.sections[i].fields[c].properties.options[d].width = optionImgNumber[d].getAttribute('width');
                    state.sections[i].fields[c].properties.options[d].height = optionImgNumber[d].getAttribute('height');
                }
            } else if ( state.sections[i].fields[c].type === 4 ) {
                const titlevalue = document.querySelector(`#labelTitleInput-${state.sections[i].id}-${state.sections[i].fields[c].id}`).innerHTML;
                state.sections[i].fields[c].properties.title = titlevalue;
                state.sections[i].fields[c].properties.options = [];
                const optionNumber = document.querySelectorAll(`.labelName-${state.sections[i].id}-${state.sections[i].fields[c].id}`);

                for ( let d = 0; d < optionNumber.length; d++) {
                    state.sections[i].fields[c].properties.options.push({});
                    state.sections[i].fields[c].properties.options[d].label = optionNumber[d].innerHTML;
                }
            } else if ( state.sections[i].fields[c].type === 5 ) {
                const titlevalue = document.querySelector(`#imageTitleInput-${state.sections[i].id}-${state.sections[i].fields[c].id}`).innerHTML;
                state.sections[i].fields[c].properties.title = titlevalue;
                state.sections[i].fields[c].properties.options = [];
                const optionNumber = document.querySelectorAll(`.imageBox-${state.sections[i].id}-${state.sections[i].fields[c].id}`);

                for ( let d = 0; d < optionNumber.length; d++) {
                    state.sections[i].fields[c].properties.options.push({});
                    state.sections[i].fields[c].properties.options[d].src = optionNumber[d].getAttribute('src');
                    state.sections[i].fields[c].properties.options[d].width = optionNumber[d].getAttribute('width');
                    state.sections[i].fields[c].properties.options[d].height = optionNumber[d].getAttribute('height');
                }
            } else if ( state.sections[i].fields[c].type === 6 ) {
                const titlevalue = document.querySelector(`#noteTitleInput-${state.sections[i].id}-${state.sections[i].fields[c].id}`).innerHTML;
                state.sections[i].fields[c].properties.title = titlevalue;
                const noteValue = document.querySelector(`#noteItem-${state.sections[i].id}-${state.sections[i].fields[c].id}`).innerHTML;
                state.sections[i].fields[c].properties.noteValue = noteValue;
            }
        }
        }
    }
    const iCounterArray = [];
    for ( let d = 0; d < state.sections.length; d++) {
        if ( state.sections[d].fields ) {
            for ( let f = 0; f < state.sections[d].fields.length; f++) {
                iCounterArray.push( state.sections[d].fields[f].id );
            }
        }    
    }
    if ( iCounterArray.length > 0 ) {
        const iValue = Math.max( ...iCounterArray);
    state.i = iValue + 100;
    } else {
        state.i = 1
    }
}

//-------------------------get name of the form---------------------------------
const getFormName = () => {
    saveFile.structure = state;
    document.querySelector(`#modalFormCover`).style.display = 'block';  
}

const stateObjCreator = () => {  
    header();  
    getAllSectionIDs();  
    getSectionTitles();   
    getAllBoxIDs(); 
    setProperties();
    getFormName();
}
export const save = () => {   
    state = {
        header : [],
        sections: [

        ],
        t: 1,
        i: 1,
        tArray: [],
        name: ''
    }
    stateObjCreator();
}


async function postJson() {
    
    let url = window.location.href;
    console.log(url)
    let name = 'id';
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) {
        console.log('null')
        let saveObj = {
            structure: JSON.stringify(state),
            title: saveFile.name,
            description: saveFile.description,
            id: saveFile.id
        }
    
        const saveJson = JSON.stringify(saveObj);
    
        try {
            const getToken = await axios.post(`${configData.loginApi}`, configData.postData, configData.axiosConfig);
            const token = getToken.data.Data;
            const postRes = await axios.post(`${configData.createApi}`, saveObj, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            alert(`ID of this file: ${postRes.data.Data}`);
            console.log(saveJson);
        } catch (error) {
            alert(error)
        }
        return null;
    }
    if (!results[2]) return '';
    let queryId = decodeURIComponent(results[2].replace(/\+/g, ' '));
    console.log(`id:${queryId}`)
    if ( queryId) {
        saveFile.id = queryId 
    }


    let saveObj = {
        structure: JSON.stringify(state),
        title: saveFile.name,
        description: saveFile.description,
        id: saveFile.id
    }

    const saveJson = JSON.stringify(saveObj);

    try {
        const getToken = await axios.post(`${configData.loginApi}`, configData.postData, configData.axiosConfig);
        const token = getToken.data.Data;
        const postRes = await axios.post(`${configData.createApi}`, saveObj, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
        })
        alert(`ID of this file: ${postRes.data.Data}`);
        console.log(saveJson);
    } catch (error) {
        alert(error)
    }
}

document.addEventListener('click', (e) => {
    if ( e.target && e.target.id == 'sendSave') {
        saveFile.name = document.querySelector('#formValue').value;
        saveFile.description = document.querySelector('#formDes').value;
        document.querySelector(`#modalFormCover`).style.display = 'none';
        postJson();
    }   
})

document.addEventListener('click', (e) => {
    if ( e.target && e.target.id == 'cancelSave') {
        document.querySelector(`#modalFormCover`).style.display = 'none';
    }   
})



