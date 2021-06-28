import CreateSection from '../sectionCreator/sectionCreator';
import TextBoxCreator from '../textbox/textbox';
import createRadioButtons from '../singleChoice/singleChoice';
import createCheckBox from '../Checkbox/checkbox';
import createLabel from '../label/label';
import axios from 'axios';
import {configData} from '../configData/configData';
import AddImage from '../addimage/addimage';
import NoteCreator from '../note/note';


const createsection = new CreateSection;
const textBoxcreator = new TextBoxCreator;
const createradiobuttons = new createRadioButtons;
const createcheckbox = new createCheckBox;
const createlabel = new createLabel;
const addImage = new AddImage;
const noteCreator = new NoteCreator;

const headerTitle = `#formTitle`;
const headerImages = `#headerImages`

const textTitleInput = (i, t) => `#textTitleInput-${t}-${i}`;
const textBoxItem = (i, t) => `#textBoxItem-${t}-${i}`;

const singleImageSrc = (i, t) => `#singleImageSrc-${t}-${i}`;
const radio = (i, t) => `#radio-${t}-${i}`;
const radioButtonWrapper = (i, t) => `#radioButtonWrapper-${t}-${i}`;
const radioTitleInput = (i, t) => `#radioTitleInput-${t}-${i}`;
const radioTextHolder = (i, t) => `#radioTextHolder-${t}-${i}`;
const radioTextField = (i, t) => `#radioTextField-${t}-${i}`;
const radioOption = (i, t) => `#radio-${t}-${i}`;

const checkBoxTitleInput = (i, t) => `#checkBoxTitleInput-${t}-${i}`;
const checkBoxWrapper = (i, t) => `#checkBoxWrapper-${t}-${i}`;
const checkImageSrc = (i, t) => `#checkImageSrc-${t}-${i}`;
const checkBox = (i, t) => `#checkBox-${t}-${i}`;
const checkBoxTextHolder = (i, t) => `#checkBoxTextHolder-${t}-${i}`;
const checkBoxTextField = (i, t) => `#checkBoxTextField-${t}-${i}`;
const checkBoxOption = (i, t) => `#checkBox-${t}-${i}`;

const labelTitleInput = (i, t) => `#labelTitleInput-${t}-${i}`;
const labelWrapper = (i, t) => `#labelWrapper-${t}-${i}`;
const labelValue = (i, t) => `#labelValue-${t}-${i}`;
const label = (i, t) => `#label-${t}-${i}`;

const imageTitleInput = (i, t) => `#imageTitleInput-${t}-${i}`;
const imageSrc = (i, t) => `#imageSrc-${t}-${i}`;

const noteTitleInput = (i, t) => `#noteTitleInput-${t}-${i}`;
const noteItem = (i, t) => `#noteItem-${t}-${i}`;



class Autofill {

    //---------------------set header value----------------------------------
    setHeader() {
        document.querySelector(headerTitle).innerHTML = state.name;
        if ( state.header.length > 0 ) {
            for ( let i = 0; i < state.header.length; i++) {
                let optionHtmlImg = `<img class="headerImgItem" id="headerImgItem-${i+1}" src="" alt="edit" width="" height="">`;
                document.querySelector(headerImages).insertAdjacentHTML('beforeend', optionHtmlImg);
                document.querySelector(`#headerImgItem-${i+1}`).setAttribute('src', state.header[i].src);
                document.querySelector(`#headerImgItem-${i+1}`).setAttribute('width', state.header[i].width);
                document.querySelector(`#headerImgItem-${i+1}`).setAttribute('height', state.header[i].height);
            }
        }
    }
    //---------------------create html and put properties--------------------
    createSectionHtml () {      
        for ( let i = 0; i < state.sections.length; i++) {
            createsection.htmlCreator(state.i, state.sections[i].id);
            document.querySelector(`#sectionTitleInput-${state.sections[i].id}`).innerHTML = state.sections[i].title;
            if ( state.sections[i].fields ) {
                for ( let c = 0; c < state.sections[i].fields.length; c++) {
                    let I = state.sections[i].fields[c].id;
                    let T = state.sections[i].id;
                    let TYPE = state.sections[i].fields[c].type;
                    let properties = state.sections[i].fields[c].properties;
                    //----------------------------text box html-------------------------------
                    if ( TYPE === 1 ) {
                        //---------------------------set title--------------------------------
                        textBoxcreator.boxCreator(I , T);
                        document.querySelector(textTitleInput(I, T)).innerHTML = properties.title;
                        if ( queryAnswer ) {
                            for ( let i = 0; i < queryAnswer.length; i++) {
                                if ( queryAnswer[i].section == T && queryAnswer[i].id == I && queryAnswer[i].type == TYPE ) {
                                    document.querySelector(textBoxItem(I, T)).innerHTML = queryAnswer[i].value;
                                }
                            }
                        }
                    //-----------------------------radio html----------------------------------------
                    } else if ( TYPE === 2 ) {
                        //------------------------------set title-----------------------------------
                        createradiobuttons.radioButtonCreator(I , T);
                        document.querySelector(radioTitleInput(I, T)).innerHTML = properties.title;
                        //-----------------------------set note and text fields----------------------
                        if ( properties.noteField ) {
                            let radioNoteHodler = document.querySelector(`#radioNoteHolder-${T}-${I} p`);
                            radioNoteHodler.innerHTML = properties.noteValue;
                            radioNoteHodler.style.border = '1px solid rgb(245, 203, 92)';
                            radioNoteHodler.style.padding = '1em';
                        }
                        if ( properties.textField) {
                            let radioTextHtml = `<textarea id="radioTextField-${T}-${I}" class="radioTextField" type="text" name="title"></textarea>`;
                            document.querySelector(radioTextHolder(I, T)).innerHTML = radioTextHtml;
                        }
                        document.querySelector(radioButtonWrapper(I, T)).innerHTML = '';
                        //-------------------------------set options--------------------------------
                        let newI = state.sections[i].fields[c].id;
                        for ( let d = 0; d < properties.options.length; d++) {
                            //-------------------option html--------------------------------
                            let optionHtmlText = `<div class="radioItemWrap"><img id="singleImageSrc-${T}-${newI}" class="singleImageBox-${T}-${I} radioIt" src="" width="" height=""><input class="radioItm-${T}-${I} radioIt" type="radio" id="radio-${T}-${newI}" name="radio-title-${T}-${I}" value="value"><label id="radioLabel-${T}-${newI}" class="radioIt" for="radio-${T}-${newI}">value</label></div>`;
                            document.querySelector(radioButtonWrapper(I, T)).insertAdjacentHTML('beforeend', optionHtmlText);
                            //-------------------set option value-----------------------------
                            document.querySelector(singleImageSrc(newI, T)).setAttribute('src', properties.options[d].src);
                            document.querySelector(singleImageSrc(newI, T)).setAttribute('width', properties.options[d].width);
                            document.querySelector(singleImageSrc(newI, T)).setAttribute('height', properties.options[d].height);
                            document.querySelector(radio(newI, T)).setAttribute('value', properties.options[d].value);
                            document.querySelector(radio(newI, T)).nextElementSibling.innerHTML = properties.options[d].label;

                            if ( queryAnswer ) {
                                for ( let i = 0; i < queryAnswer.length; i++) {
                                    if ( queryAnswer[i].section == T && queryAnswer[i].id == I && queryAnswer[i].type == TYPE ) {
                                        if ( properties.options[d].label === queryAnswer[i].value ) {
                                            document.querySelector(radioOption(newI, T)).setAttribute('checked', 'checked');
                                        }
                                    }
                                }
                            }

                            newI++;
                            //-------------------set answer value-------------------------------
                        }
                        if ( queryAnswer ) {
                            for ( let i = 0; i < queryAnswer.length; i++) {
                                if ( queryAnswer[i].section == T && queryAnswer[i].id == I && queryAnswer[i].type == TYPE && queryAnswer[i].custom ) {
                                    document.querySelector(radioTextField(I, T)).innerHTML = queryAnswer[i].custom;
                                }
                            }
                        }
                    //----------------------------------------checkbox html---------------------------------
                    } else if ( state.sections[i].fields[c].type === 3 ) {
                         //------------------------------set title-----------------------------------
                        createcheckbox.checkBoxCreator(I , T);
                        document.querySelector(checkBoxTitleInput(I, T)).innerHTML = properties.title;
                        //-----------------------------set note and text fields----------------------
                        if ( properties.noteField ) {
                            let radioNoteHodler = document.querySelector(`#checkBoxNoteHolder-${T}-${I} p`);
                            radioNoteHodler.innerHTML = properties.noteValue;
                            radioNoteHodler.style.border = '1px solid rgb(245, 203, 92)';
                            radioNoteHodler.style.padding = '1em';
                        }
                        if ( properties.textField) {
                            let radioTextHtml = `<textarea id="checkBoxTextField-${T}-${I}" class="checkBoxTextField" type="text" name="title"></textarea>`;
                            document.querySelector(checkBoxTextHolder(I, T)).innerHTML = radioTextHtml;
                        }
                        //-------------------------------set options-------------------------------
                        document.querySelector(checkBoxWrapper(I, T)).innerHTML = '';
                        let newI = state.sections[i].fields[c].id;
                        for ( let d = 0; d < properties.options.length; d++) {
                            //-------------------option html---------------------------------------
                            const optionHtmlcheck = `<div class="checkItemWrap"><img id="checkImageSrc-${T}-${newI}" class="checkImageBox-${T}-${I} checkItm" src="" width="" height=""><input class="checkBoxItm-${T}-${I} checkItm" type="checkbox" id="checkBox-${T}-${newI}" name="checkBox-title-${T}-${I}" value="value"><label id="checkBoxLabel-${T}-${newI}" class="checkItm" for="checkBox-${T}-${newI}">value1</label></div>`;
    
                            document.querySelector(checkBoxWrapper(I, T)).insertAdjacentHTML('beforeend', optionHtmlcheck);
                            //-------------------set option value----------------------------------
                            document.querySelector(checkImageSrc(newI, T)).setAttribute('src', properties.options[d].src);
                            document.querySelector(checkImageSrc(newI, T)).setAttribute('width', properties.options[d].width);
                            document.querySelector(checkImageSrc(newI, T)).setAttribute('height', properties.options[d].height);
                            document.querySelector(checkBox(newI, T)).setAttribute('value', properties.options[d].value);
                            document.querySelector(checkBox(newI, T)).nextSibling.innerHTML = properties.options[d].label;

                            if ( queryAnswer ) {
                                for ( let i = 0; i < queryAnswer.length; i++) {
                                    if ( queryAnswer[i].section == T && queryAnswer[i].id == I && queryAnswer[i].type == TYPE ) {
                                        for ( let s = 0; s < queryAnswer[i].values.length; s++ ) {
                                            if ( properties.options[d].label === queryAnswer[i].values[s] ) {
                                                document.querySelector(checkBoxOption(newI, T)).setAttribute('checked', 'checked');
                                            }
                                        }
                                    }
                                }
                            }
                            newI++;
                        }
                        if ( queryAnswer ) {
                            for ( let i = 0; i < queryAnswer.length; i++) {
                                if ( queryAnswer[i].section == T && queryAnswer[i].id == I && queryAnswer[i].type == TYPE && queryAnswer[i].custom ) {
                                    document.querySelector(checkBoxTextField(I, T)).innerHTML = queryAnswer[i].custom;
                                }
                            }
                        }
                    //---------------------------------------label html------------------------------
                    } else if ( TYPE === 4 ) {
                         //------------------------------set title-----------------------------------
                        createlabel.labelCreator(I , T);
                        document.querySelector(labelTitleInput(I, T)).innerHTML = properties.title;
                        //-------------------------------set options---------------------------------
                        document.querySelector(labelWrapper(I, T)).innerHTML = '';
                        let newI = state.sections[i].fields[c].id;
                        for ( let d = 0; d < properties.options.length; d++) {
                            //-------------------option html-----------------------------------------
                            let optionHtmlLabel = `<div class="labelItemWrap"><label class="labelName-${T}-${I} labelItm" id="labelValue-${T}-${newI}" for="label-${T}-${newI}">value-${T}-${newI}</label><input class="labelItm-${T}-${newI} labelItm" type="text" id="label-${T}-${newI}" name="label-${T}-${newI}"></div>`;
                            document.querySelector(labelWrapper(I, T)).insertAdjacentHTML('beforeend', optionHtmlLabel);
                            //-------------------set option value-----------------------------------
                            document.querySelector(labelValue(newI, T)).innerHTML = properties.options[d].label;
                             if ( queryAnswer ) {
                                 for ( let i = 0; i < queryAnswer.length; i++) {
                                     if ( queryAnswer[i].section == T && queryAnswer[i].id == I && queryAnswer[i].type == TYPE ) {
                                         for ( let s = 0; s < queryAnswer[i].values.length; s++ ) {
                                            let keys = Object.keys(queryAnswer[i].values[s]);
                                            let labelValue = keys[0]
                                             if ( properties.options[d].label === labelValue ) {
                                                 console.log(queryAnswer[i].values[s][labelValue])
                                                 console.log(document.querySelector(label(newI, T)).id)
                                                document.querySelector(label(newI, T)).setAttribute('value',queryAnswer[i].values[s][labelValue]);
                                             }
                                        }
                                    }
                                }
                            }
                            newI++;
                        }
                    //----------------------------------------image html-----------------------------
                    } else if ( TYPE === 5 ) {
                        //------------------------------set title and properties---------------------
                        addImage.htmlCreator(I, T);
                        document.querySelector(imageTitleInput(I, T)).innerHTML = properties.title;
                        document.querySelector(imageSrc(I, T)).setAttribute('src', properties.options[0].src);
                        document.querySelector(imageSrc(I, T)).setAttribute('width', properties.options[0].width);
                        document.querySelector(imageSrc(I, T)).setAttribute('height', properties.options[0].height);
                    //----------------------------------------note html------------------------------
                    } else if ( TYPE === 6 ) {
                        //------------------------------set title and properties---------------------
                        noteCreator.htmlCreator(I, T);
                        document.querySelector(noteTitleInput(I, T)).innerHTML = properties.title;
                        document.querySelector(noteItem(I, T)).innerHTML = properties.noteValue;
                    }  
                } 
            }
            
        }
        if ( queryAnswer ) {
            const signature = `<p>Signature:<p><img id="signature" src=${signSrc} width="100" height="100">`;
            document.querySelector(`#sectionCreatorButton`).insertAdjacentHTML('afterend', signature);
            this.deactivator();   
        }
    }

    setFormName () {
        document.querySelector(`#formValue`).value = formValue;
        document.querySelector(`#formDes`).value = formDes;
    }

    deactivator () {
        document.querySelector(`#headerEditIcon`).style.display = 'none';
        document.querySelector(`#buttons`).style.display = `none`;
        document.querySelector(`#formLocation`).style.width = `100%`;
        const allSectionsButtons = document.querySelectorAll(`.sectionButtons`);
        allSectionsButtons.forEach(el => el.style.display = 'none');
        const allEditIcons = document.querySelectorAll(`.allEditIcons`);
        allEditIcons.forEach(el => el.style.display = 'none');
        const dropZones = document.querySelectorAll(`.drop-zone`);
        dropZones.forEach(el => el.style.display = `none`);
        document.querySelector(`#sectionCreatorButton`).style.display = `none`;
        document.querySelector(`#btns`).style.display = `none`;
    }

    activator() {
        //-------------------active sections--------------------
        for ( let i = 0; i < state.sections.length; i++) { 
            let T = state.sections[i].id;
            createsection.eventActivator(T);
            if ( state.sections[i].fields ) {
                for ( let c = 0; c < state.sections[i].fields.length; c++) {
                    let I = state.sections[i].fields[c].id;
                    if ( state.sections[i].fields[c].type === 1 ) {
                        textBoxcreator.textActivator(I , T);
                    } else if ( state.sections[i].fields[c].type === 2 ) {
                        createradiobuttons.radioActivator(I , T);
                    } else if ( state.sections[i].fields[c].type === 3 ) {
                        createcheckbox.checkBoxActivator(I , T);
                    } else if ( state.sections[i].fields[c].type === 4 ) {
                        createlabel.labelActivator(I , T);
                    } else if ( state.sections[i].fields[c].type === 5 ) {
                        addImage.imageActivator(I , T);
                    } else if ( state.sections[i].fields[c].type === 6 ) {
                        noteCreator.noteActivator(I , T);
                    }
                }
            }   
        }     
    }
    autoFillActivator () {
        this.setFormName();
        this.setHeader();
        this.createSectionHtml();
        this.activator();
    }
}

let formValue = null;
let formDes = null;
let state = {};
let queryAnswer = null;
let signSrc = null;
const autofill = new Autofill;

export async function loaderAjax(query) {
    document.querySelector('#loadingModal').style.display = 'block';

    const url = window.location.href;
    console.log(url)
    let name = 'answerid';
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) {
        try {
            const getToken = await axios.post(`${configData.loginApi}`, configData.postData, configData.axiosConfig);
            const token = getToken.data.Data;
            const result = await axios.get(`${configData.getApi}${query}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
       
            state = JSON.parse(result.data.Data.structure);
            formValue = result.data.Data.title;
            formDes = result.data.Data.description;
            console.log(state);
            autofill.autoFillActivator(state.i, state.t);
            createsection.sectionCreator(state.i, state.t);
            document.querySelector('#loadingModal').style.display = 'none';
        } catch (error) {
            alert(error)
        }
        return null;
    }    
    if (!results[2]) return '';
    let answer = decodeURIComponent(results[2].replace(/\+/g, ' '));
    console.log(`answer: ${answer}`);

    try {
        const getToken = await axios.post(`${configData.loginApi}`, configData.postData, configData.axiosConfig);
        const token = getToken.data.Data;
        const result = await axios.get(`${configData.getApi}${query}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if ( answer) {
            const answerObj = await axios.get(`${configData.getAnswers}${answer}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(answerObj);
            queryAnswer = JSON.parse(answerObj.data.Data.structure);
            signSrc = answerObj.data.Data.signPath;
            console.log(queryAnswer)
        }
        state = JSON.parse(result.data.Data.structure);
        formValue = result.data.Data.title;
        formDes = result.data.Data.description;
        console.log(state);
        autofill.autoFillActivator(state.i, state.t);
        createsection.sectionCreator(state.i, state.t);
        document.querySelector('#loadingModal').style.display = 'none';
    } catch (error) {
        alert(error)
    }
}