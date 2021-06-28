import './singleChoice.css';
import {ajaxUpload} from '../configData/configData';

const modalCoverAll = '#modalCoverAll';
const radioItmClass = '.radioItm';
const modalCoverRadio = (i, t) => `#modalCoverRadio-${t}-${i}`;
const radioOptionWrapper = (i, t) => `#radioOptionWrapper-${t}-${i}`;
const getRadioTitle = (i, t) => `#getRadioTitle-${t}-${i}`;
const radioTitleInput = (i, t) => `#radioTitleInput-${t}-${i}`;
const radioButtonWrapper = (i, t) => `#radioButtonWrapper-${t}-${i}`;
const radio = (i, t) => `#radio-${t}-${i}`;
const radioLabel = (i, t) => `#radioLabel-${t}-${i}`;
const radioItm = (i, t) => `.radioItm-${t}-${i}`;
const formLocate = (t) => `#form-${t}`;
const singleImageSrc = (i, t) => `#singleImageSrc-${t}-${i}`;
const uploadImageBtn = (i, t) => `#uploadImageBtn-${t}-${i}`;
const uploadBrowseBtn = (i, t) => `#uploadBrowseBtn-${t}-${i}`;
const editRadio = (i, t) => `editRadio-${t}-${i}`;
const optI = (I, T) => `#closeRadioOptItm-${I}-${T}`;
const removeCount = (i, t) => `removeCount-${t}-${i}`;
const closeRadioModal = (i, t) => `closeRadioModal-${t}-${i}`;
const countRadio = (i, t) => `.countRadio-${t}-${i}`;
const radioOptName = (i, t) => `#radio-opt-name-${t}-${i}`;
const radioOpt = (i, t) => `#radio-opt-${t}-${i}`;
const getSingleImageSrc = (i, t) => `#getSingleImageSrc-${t}-${i}`;
const getSingleImageWidth = (i, t) => `#getSingleImageWidth-${t}-${i}`;
const getSingleImageHeight = (i, t) => `#getSingleImageHeight-${t}-${i}`;
const getRadioNoteID = (i, t) => `#getRadioNote-${t}-${i}`;
const addRadioNoteID = (i, t) => `#addRadioNote-${t}-${i}`;
const addRadioText = (i, t) => `#addRadioText-${t}-${i}`;
const radioTextHolder = (i, t) => `#radioTextHolder-${t}-${i}`;
const addRadioNote = (i, t) => `addRadioNote-${t}-${i}`;
const radioNoteWrapper = (i, t) => `#radioNoteWrapper-${t}-${i}`;
const addRadioOptions = (i, t) => `addRadioOptions-${t}-${i}`;
const closeRadio = (i, t) => `closeRadio-${t}-${i}`;
const radioButtonWrap = (i, t) => `#s2-radioButtonWrap-${t}-${i}`;
const moveUpRadio = (i, t) => `moveUpRadio-${t}-${i}`;
const moveDownRadio = (i, t) => `moveDownRadio-${t}-${i}`;
const uploadImage = (i, t) => `#uploadImage-${t}-${i}`;

class createRadioButtons {
    //------------------------------create radio box----------------------------------------
    radioButtonCreator(i, t) {
        const radioHtml = `<section id="s2-radioButtonWrap-${t}-${i}" class="radioButtonWrapper reader-${t}">
        <div id="${i}-${t}" class="radioButton titleArea"> 
            <p id="radioTitleInput-${t}-${i}">title</p>   
            <div class="allEditIcons">
                <img class="barIcons" id="editRadio-${t}-${i}" src="images/edit.png" alt="edit" width="20px">
                <img class="barIcons" id="closeRadio-${t}-${i}" src="images/close.png" alt="close" width="20px">
                <img class="barIcons" id="moveUpRadio-${t}-${i}" src="images/up.svg" alt="Move up" width="20px">
                <img class="barIcons" id="moveDownRadio-${t}-${i}" src="images/down.svg" alt="Move down" width="20px">
            </div>
            
        </div>
        <div id="radioHolder-${t}-${i}" class="radioHolder">
            <div id="radioNoteHolder-${t}-${i}" class="checkBoxNoteHolder"><p></p></div>
            <div id="radioButtonWrapper-${t}-${i}" class="radiowrap">
                <div class="radioItemWrap">
                    <img id="singleImageSrc-${t}-${i}" class="singleImageBox-${t}-${i} radioIt" src="" width="" height=""><input class="radioItm-${t}-${i} radioIt" type="radio" id="radio-${t}-${i}" name="radio-title-${t}-${i}" value="value"><label id="radioLabel-${t}-${i}" class="radioIt" for="radio-${t}-${i}">Option 1</label>
                </div>
                <div class="radioItemWrap">
                    <img id="singleImageSrc-${t}-${i+1}" class="singleImageBox-${t}-${i} radioIt" src="" width="" height=""><input class="radioItm-${t}-${i} radioIt" type="radio" id="radio-${t}-${i+1}" name="radio-title-${t}-${i}" value="value"><label id="radioLabel-${t}-${i+1}" class="radioIt" for="radio-${t}-${i+1}">Option 2</label>
                </div>
            </div>
            <div id="radioTextHolder-${t}-${i}" class="radioTextHolder"></div>
        </div>
        </section>`;
        const editMenuRadio = `<section id="modalCoverRadio-${t}-${i}" class="modalCoverRadio">
            <div id="radioEdit-${t}-${i}" class="radioEdit">
                <ul id="radioItems-${t}-${i}" class="radioItems">
                    <li class="allEditTitles"><label for="radioTitle"> Enter the Title: </label><input type="text" id="getRadioTitle-${t}-${i}" name="getRadioTitle"></li>
                    <li>
                        <div id="radioNoteWrapper-${t}-${i}" class="radioNoteWrapper"></div>
                        <ul id="radioOptionWrapper-${t}-${i}"><p>Edit options: </P></ul>
                        <button id="addRadioOptions-${t}-${i}">Add option</button>
                        <div class="radioChBtn">
                            <input class="radioNoteBtn" type="checkbox" id="addRadioNote-${t}-${i}" name="addRadioNote-${t}-${i}" value="value"><label class="radioNoteLabel" for="addRadioNote-${t}-${i}">Add a note</label>
                        </div>
                        <div class="radioChBtn">
                            <input class="radioTextBtn" type="checkbox" id="addRadioText-${t}-${i}" name="addRadioText-${t}-${i}" value="value"><label class="checkRadioLabel" for="addRadioText-${t}-${i}">Add text field</label>
                        </div>
                    </li>
                </ul>
                <div class="editMenuBtn">
                    <button id="closeRadioModal-${t}-${i}">close</button>
                </div>
            </div>
            </section>`

        const innerForm = document.querySelector(formLocate(t)).innerHTML;
        document.querySelector(formLocate(t)).innerHTML = innerForm + radioHtml;
        document.querySelector(modalCoverAll).innerHTML += editMenuRadio; 
    }
    //------------------------------active event listeners----------------------------------------
    radioActivator(i, t) {
        this.editRadioButtons(i, t);
        this.closeButton(i, t);
        this.addButton(i, t);
        this.addNote(i, t);
        this.closeRadioField(i, t);
        this.moveUp(i, t);
        this.moveDown(i, t);
    }
    //-----------------------------------------open radio edit menu---------------------------------
    editRadioButtons(i, t) {
        document.addEventListener('click' , function(e) {
            if ( e.target && e.target.id == editRadio(i, t)) {
                document.querySelector(modalCoverRadio(i, t)).style.display = 'block';
                //------------------------create edit option---------------------------
                document.querySelector(radioOptionWrapper(i, t)).innerHTML = '';
                let optionArray = document.querySelectorAll(radioItm(i, t));
                let idArray = [];
                optionArray.forEach( (el) => {
                    idArray.push(el.getAttribute('id').substring(8, el.length));
                });
                for (let co = 0;  co < idArray.length; co++) {
                    let radioLabelName = document.querySelector(radioLabel(idArray[co], t)).innerHTML;
                    let radioValueName = document.querySelector(radio(idArray[co], t)).getAttribute('value');
                    let radioImageSrc = document.querySelector(singleImageSrc(idArray[co], t)).getAttribute('src');
                    let radioImageWidth = parseInt(document.querySelector(singleImageSrc(idArray[co], t)).getAttribute('width'));
                    if ( isNaN(radioImageWidth) ) {
                        radioImageWidth = '';
                    } 
                    let radioImageHeight = parseInt(document.querySelector(singleImageSrc(idArray[co], t)).getAttribute('height'));
                    if ( isNaN(radioImageHeight) ) {
                        radioImageHeight = '';
                    } 
                    let opt = `<li id="radio-count-option-${t}-${idArray[co]}" class="countRadio-${t}-${i} singleGrid">
                        <input type="text" id="radio-opt-${t}-${idArray[co]}" name="radio-opt-${t}-${idArray[co]}" value="${radioLabelName}">
                        <input type="text" id="radio-opt-name-${t}-${idArray[co]}" name="radio-opt-name-${t}-${idArray[co]}" placeholder="${radioValueName}">
                        <input type="number" id="getSingleImageWidth-${t}-${idArray[co]}" name="width" value="${radioImageWidth}" placeholder="Width">
                        <input type="number" id="getSingleImageHeight-${t}-${idArray[co]}" name="height" value="${radioImageHeight}" placeholder="Height">
                        <input type="text" id="getSingleImageSrc-${t}-${idArray[co]}" name="src" value="${radioImageSrc}" placeholder="Image Source">
                        <input type="button" class="uploadBrowseBtn" id="uploadBrowseBtn-${t}-${idArray[co]}" value="Browse">
                        <input type="file" id="uploadImage-${t}-${idArray[co]}" class="uploadFileTag" accept="image/jpeg, image/png">  
                        <input type="button" class="uploadOptBtn" id="uploadImageBtn-${t}-${idArray[co]}" value="Upload">
                        <input type="button" class="removeOptBtn removeCount-${t}-${i}" id="closeRadioOptItm-${idArray[co]}-${t}" value="Remove">
                        </li>`;
 
                    document.querySelector(radioOptionWrapper(i, t)).insertAdjacentHTML('beforeend', opt);

                    document.querySelector(optI(idArray[co], t)).addEventListener('click', (e) => {
                        if ( document.getElementsByClassName(removeCount(i, t)).length <= 2 ) {
                            alert(`This field needs at least two options!`);
                        }
                        if ( document.getElementsByClassName(removeCount(i, t)).length > 2 ) {
                            let removeConfirm = confirm(`Are you sure?`);
                            if( removeConfirm ) {
                                let el = e.target;
                                el.parentNode.parentNode.removeChild(el.parentNode);
                            }
                        }   
                    });
                    //-------------------------------call uploader function---------------------------------------
                    uploader(idArray[co], t);
                }
                //---------------------------------insert title----------------------------------
                const getRadioTitleObj = document.querySelector(getRadioTitle(i, t));
                getRadioTitleObj.value = document.querySelector(radioTitleInput(i, t)).innerHTML;
                getRadioTitleObj.addEventListener('keyup', (e) => {
                    var radioTitle = getRadioTitleObj.value;
                    document.querySelector(radioTitleInput(i, t)).innerHTML = radioTitle;
                    var radioItms = document.querySelectorAll(radioItm(i, t));                   
                    radioItms.forEach( el => {
                       el.setAttribute('name', radioTitle ); 
                    });
                }, false);   
            }
        })     
    }
    //----------------------------close button---------------------
    closeButton(i, t) {
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == closeRadioModal(i, t)) {
                let findLast = document.querySelectorAll(countRadio(i, t));
                let lastNumber = findLast.length;
                //--------------------------find existed option-----------------------
                let existId = [];
                findLast.forEach( (el) => {
                    existId.push(el.getAttribute('id'))
                });
                let existI = [];
                existId.forEach ( (el) => {
                    existI.push(el.split('-')[4])
                });
                const optionHtmlCreator = document.querySelector(radioButtonWrapper(i, t));
                document.querySelector(radioButtonWrapper(i, t)).innerHTML = '';

                for (var c = 0 ; c < lastNumber ; c++ ) {
                    var optionHtmlText = `<div class="radioItemWrap"><img id="singleImageSrc-${t}-${existI[c]}" class="singleImageBox-${t}-${i} radioIt" src="" width="" height=""><input class="radioItm-${t}-${i} radioIt" type="radio" id="radio-${t}-${existI[c]}" name="radio-title-${t}-${i}" value="value"><label id="radioLabel-${t}-${existI[c]}" class="radioIt" for="radio-${t}-${existI[c]}">value</label></div>`; 
                    optionHtmlCreator.insertAdjacentHTML('beforeend', optionHtmlText);                
                    document.querySelector(radio(existI[c], t)).setAttribute('value', document.querySelector(radioOptName(existI[c], t)).value);
                    document.querySelector(radio(existI[c], t)).nextSibling.innerHTML = document.querySelector(radioOpt(existI[c], t)).value;
                    document.querySelector(singleImageSrc(existI[c], t)).setAttribute('src', document.querySelector(getSingleImageSrc(existI[c], t)).value);
                    document.querySelector(singleImageSrc(existI[c], t)).setAttribute('width', `${document.querySelector(getSingleImageWidth(existI[c], t)).value}px`);
                    document.querySelector(singleImageSrc(existI[c], t)).setAttribute('height', `${document.querySelector(getSingleImageHeight(existI[c], t)).value}px`);
                }
                
                const getRadioTitleObj = document.querySelector(getRadioTitle(i, t));
                let radioTitle = getRadioTitleObj.value;
                if ( radioTitle === '' ) {
                    radioTitle = 'Single choice';
                }
                document.querySelector(radioTitleInput(i, t)).innerHTML = radioTitle;
                let radioItms = document.querySelectorAll(radioItmClass);
                radioItms.forEach( el => {
                    el.setAttribute('name', radioTitle ); 
                });

                let getRadioNote = document.querySelector(getRadioNoteID(i, t));
                let radioNoteHodler = document.querySelector(`#radioNoteHolder-${t}-${i} p` );
                let radioNote = document.querySelector(addRadioNoteID(i, t));
                if (radioNote.checked ) {
                    radioNoteHodler.innerHTML = getRadioNote.value;
                    radioNoteHodler.style.border = '1px solid rgb(245, 203, 92)';
                    radioNoteHodler.style.padding = '1em';
                }   else {
                    radioNoteHodler.innerHTML = '';
                    radioNoteHodler.style.border = '';
                    radioNoteHodler.style.padding = '';
                }
                let radioText = document.querySelector(addRadioText(i, t));
                if ( radioText.checked ) {
                    let radioTextHtml = `<textarea id="radioTextField-${t}-${i}" class="radioTextField" type="text" name="title"></textarea>`;
                    document.querySelector(radioTextHolder(i, t)).innerHTML = radioTextHtml;
                } else {
                    document.querySelector(radioTextHolder(i, t)).innerHTML = '';
                }
                document.querySelector(modalCoverRadio(i, t)).style.display = 'none';
            }  
        }, false);
    }
    //---------------------------------add note box---------------------------------
    addNote (i, t) {
        document.addEventListener('click' , function(e) {
            if ( e.target && e.target.id == addRadioNote(i, t)) {
                let radioNote = document.querySelector(addRadioNoteID(i, t));
                if ( radioNote.checked ) {
                    let noteHtml = `<textarea id="getRadioNote-${t}-${i}" class="radioNote" type="text" name="radioNote">Write your note...</textarea>`; 
                    document.querySelector(radioNoteWrapper(i, t)).innerHTML = noteHtml;
                } else {
                    document.querySelector(radioNoteWrapper(i, t)).innerHTML = '';
                }
            }
        }) 
    }
    //------------------------------------add option menu----------------------------------
    addButton(i, t) {
        var n;
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == addRadioOptions(i, t)) {
                let lastId = document.querySelector(radioOptionWrapper(i, t)).lastElementChild.getAttribute('id');
                n = parseInt(lastId.substring(21, lastId.length));
                let newOption = `<li id="radio-count-option-${t}-${n+1}" class="countRadio-${t}-${i} singleGrid">
                    <input type="text" id="radio-opt-${t}-${n+1}" name="radio-opt-${t}-${n+1}" value="option ${n-i+2}">
                    <input type="text" id="radio-opt-name-${t}-${n+1}" name="radio-opt-name-${t}-${n+1}" placeholder="value ${n-i+2}">
                    <input type="number" id="getSingleImageWidth-${t}-${n+1}" name="width" value="" placeholder="Width">
                    <input type="number" id="getSingleImageHeight-${t}-${n+1}" name="height" value="" placeholder="Height">
                    <input type="text" id="getSingleImageSrc-${t}-${n+1}" name="src" value="" placeholder="Image source">
                    <input type="button" class="uploadBrowseBtn" id="uploadBrowseBtn-${t}-${n+1}" value="Browse">
                    <input type="file" id="uploadImage-${t}-${n+1}" class="uploadFileTag" accept="image/jpeg, image/png">
                    <input type="button" class="uploadOptBtn" id="uploadImageBtn-${t}-${n+1}" value="Upload">
                    <input type="button" class="removeOptBtn removeCount-${t}-${i}" id="closeRadioOptItm-${n+1}-${t}" value="Remove">
                    </li>`;
                document.querySelector(radioOptionWrapper(i, t)).insertAdjacentHTML('beforeend', newOption);
                let newN = n+1;
                //------------------------------------call uploader function------------------------------------
                uploader(newN, t);
                
                document.querySelector(optI(newN, t)).addEventListener('click', (e) => {
                    if ( document.getElementsByClassName(removeCount(i, t)).length <= 2 ) {
                        alert(`This field needs at least two options!`);
                    }
                    if ( document.getElementsByClassName(removeCount(i, t)).length > 2 ) {
                        let removeConfirm = confirm(`Are you sure?`);
                        if( removeConfirm ) {
                            let el = e.target;
                            el.parentNode.parentNode.removeChild(el.parentNode);
                        }
                    }   
                }, false);
                n++; 
            } 
        }, false);
    }
    //---------------------------------------close single choice-----------------------------------------
    closeRadioField(i, t) {
        document.addEventListener('click' , function(e) {
            if ( e.target && e.target.id == closeRadio(i, t)) {
                let removeConfirm = confirm(`Are you sure?`);
                if( removeConfirm ) {
                    const radioWrapper = document.querySelector(radioButtonWrap(i, t));
                    radioWrapper.parentNode.removeChild(radioWrapper);
                    let modalWrapper = document.querySelector(modalCoverRadio(i, t));
                    modalWrapper.parentNode.removeChild(modalWrapper);
                }
            }
        })
    }
    //--------------------------------------move up single choice-----------------------------------------
    moveUp (i, t) {
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == moveUpRadio(i, t)) {
                const targetElement = document.querySelector(radioButtonWrap(i, t));
                const previousElement = targetElement.previousElementSibling;
                const parentElement = targetElement.parentElement;
                parentElement.insertBefore(targetElement, previousElement); 
            }
        })
    }  
    //--------------------------------------move down single choice----------------------------------------- 
    moveDown(i, t) {
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == moveDownRadio(i, t)) {    
                const targetElement = document.querySelector(radioButtonWrap(i, t));
                const nextElement = targetElement.nextElementSibling;
                const parentElement = targetElement.parentNode;
                parentElement.insertBefore(targetElement, nextElement.nextSibling);
            }
        })
    }
}

//-----------------------------------------uploader-----------------------------------------
const uploader = (indicator, t) => {
    document.querySelector(uploadBrowseBtn(indicator, t)).addEventListener('click', (e) => {
        e.target.nextElementSibling.click();
    }, false)
    //-------------------------------------show file name-----------------------------------------
    document.querySelector(uploadImage(indicator, t)).addEventListener('change', (e) => {
        let file = document.querySelector(uploadImage(indicator, t));
        let browse = file.previousElementSibling;
        if( file.length != 0 ) {
            let fileName = file.files[0].name.split('.');

            if ( fileName[0].length > 13 ) {
                let newName = fileName[0].substring(0, 13);
                browse.value = `${newName}...` 
            } else {
                browse.value = fileName[0];
            }            
        }
    });
    //-------------------------------check file---------------------------------------
    document.querySelector(uploadImageBtn(indicator, t)).addEventListener('click', (e) => {
            let val = e.target;
            let el = e.target.previousElementSibling;
            let src = e.target.previousElementSibling.previousElementSibling.previousElementSibling;
            //----------check for choosen file--------------------------------
            if( el.files.length == 0) {
                alert('Error : No file selected');
                return;
            }
            let file = el.files[0];
            //-------------check for type----------------------------------
            let mime_types = [ 'image/jpeg', 'image/png' ];
            if ( mime_types.indexOf(file.type) == -1 ) {
                alert('Error : Incorrect file type');
                return;
            }
            //-----------------check for size------------------------------
            if(file.size > 10*1024*1024) {
                alert('Error : Exceeded size 10MB');
                return;
            }
            ajaxUpload(el, src, val);
    }, false)
}

export default createRadioButtons;