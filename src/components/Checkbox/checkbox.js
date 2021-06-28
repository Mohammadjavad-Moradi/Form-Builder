import './checkbox.css';
import {ajaxUpload} from '../configData/configData';

const modalCoverAll = '#modalCoverAll';
const checkBoxLabel = (i, t) => `#checkBoxLabel-${t}-${i}`;
const checkBox = (i, t) => `#checkBox-${t}-${i}`;
const formLocate = (t) => `#form-${t}`;
const checkBoxImageSrc = (i, t) => `#checkImageSrc-${t}-${i}`;
const uploadImageCheckBtn = (i, t) => `#uploadImageCheckBtn-${t}-${i}`;
const uploadBrowseCheckBtn = (i, t) => `#uploadBrowseCheckBtn-${t}-${i}`;
const editCheckBox = (i, t) => `editCheckBox-${t}-${i}`;
const modalCoverCheckBox = (i, t) => `#modalCoverCheckBox-${t}-${i}`;
const CheckBoxOptionWrapper = (i, t) => `#CheckBoxOptionWrapper-${t}-${i}`;
const checkBoxItmClass = (i, t) => `.checkBoxItm-${t}-${i}`;
const getCheckBoxTitleID = (i, t) => `#getCheckBoxTitle-${t}-${i}`;
const optI = (T, I) => `#closeCheckOptItm-${T}-${I}`;
const checkBoxTitleInput = (i, t) => `#checkBoxTitleInput-${t}-${i}`;
const addCheckBoxOptions = (i, t) => `addCheckBoxOptions-${t}-${i}`;
const removeCount = (i, t) => `removeCount-${t}-${i}`;
const closeCheckBoxModal = (i, t) => `closeCheckBoxModal-${t}-${i}`;
const countClass = (i, t) => `.count-${t}-${i}`;
const checkBoxWrapper = (i, t) => `#checkBoxWrapper-${t}-${i}`;
const checkBoxOptName = (i, t) => `#checkBox-opt-name-${t}-${i}`;
const checkBoxOpt = (i, t) => `#checkBox-opt-${t}-${i}`;
const getCheckImageSrc = (i, t) => `#getCheckImageSrc-${t}-${i}`;
const getCheckImageWidth = (i, t) => `#getCheckImageWidth-${t}-${i}`;
const getCheckImageHeight = (i, t) => `#getCheckImageHeight-${t}-${i}`;
const getCheckBoxNoteID = (i, t) => `#getCheckBoxNote-${t}-${i}`;
const addCheckBoxNote = (i, t) => `#addCheckBoxNote-${t}-${i}`;
const addCheckBoxText = (i, t) => `#addCheckBoxText-${t}-${i}`;
const checkBoxTextHolder = (i, t) => `#checkBoxTextHolder-${t}-${i}`;
const addCheckBoxNoteID = (i, t) => `addCheckBoxNote-${t}-${i}`;
const CheckBoxNoteWrapper = (i, t) => `#CheckBoxNoteWrapper-${t}-${i}`;
const closeCheckBox = (i, t) => `closeCheckBox-${t}-${i}`;
const moveUpCheckBox = (i, t) => `moveUpCheckBox-${t}-${i}`;
const moveDownCheckBox = (i, t) => `moveDownCheckBox-${t}-${i}`;
const checkBoxWrap = (i, t) => `#s3-checkBoxWrap-${t}-${i}`;
const uploadImageCheck = (i, t) => `#uploadImageCheck-${t}-${i}`;

class createCheckBox {
    //------------------------------create checkbox----------------------------------------
    checkBoxCreator (i, t) {
        const checkBoxHtml = `<section id="s3-checkBoxWrap-${t}-${i}" class="checkBoxWrapper reader-${t}">
        <div id="${i}-${t}" class="checkBoxButton titleArea"> 
            <p id="checkBoxTitleInput-${t}-${i}">title</p>   
            <div class="allEditIcons">
                <img class="barIcons checkBoxIconEdit" id="editCheckBox-${t}-${i}" src="images/edit.png" alt="edit" width="20px">
                <img class="barIcons checkBoxIconClose" id="closeCheckBox-${t}-${i}" src="images/close.png" alt="close" width="20px">
                <img class="barIcons" id="moveUpCheckBox-${t}-${i}" src="images/up.svg" alt="Move up" width="20px">
                <img class="barIcons" id="moveDownCheckBox-${t}-${i}" src="images/down.svg" alt="Move down" width="20px">
            </div>    
        </div>
        <div id="checkBoxHolder-${t}-${i}" class="checkBoxHolder">
            <div id="checkBoxNoteHolder-${t}-${i}" class="checkBoxNoteHolder"><p></p></div>
            <div id="checkBoxWrapper-${t}-${i}" class="checkwrap">
                <div class="checkItemWrap">
                    <img id="checkImageSrc-${t}-${i}" class="checkImageBox-${t}-${i} checkItm" src="" width="" height=""><input class="checkBoxItm-${t}-${i} checkItm" type="checkbox" id="checkBox-${t}-${i}" name="checkBox-title-${t}-${i}" value="value"><label id="checkBoxLabel-${t}-${i}" class="checkItm" for="checkBox-${t}-${i}">Option 1</label>
                </div>
            </div>
            <div id="checkBoxTextHolder-${t}-${i}" class="checkBoxTextHolder"></div>
        </div>
        </section>`;
        const editMenuCheckBox = `<section id="modalCoverCheckBox-${t}-${i}" class="modalCoverCheckBox">
            <div id="CheckBoxEdit-${t}-${i}" class="CheckBoxEdit">
                <ul id="CheckBoxItems-${t}-${i}" class="CheckBoxItems">
                    <li class="allEditTitles"><label for="CheckBoxTitle"> Enter the Title: </label><input type="text" id="getCheckBoxTitle-${t}-${i}" name="getCheckBoxTitle"></li>
                    <li>
                        <div id="CheckBoxNoteWrapper-${t}-${i}" class="CheckBoxNoteWrapper"></div>
                        <ul id="CheckBoxOptionWrapper-${t}-${i}"><p>Edit options: </P></ul>
                        <button id="addCheckBoxOptions-${t}-${i}">Add option</button>
                        <div class="checkBoxChBtn">
                            <input class="checkBoxNoteBtn" type="checkbox" id="addCheckBoxNote-${t}-${i}" name="addCheckBoxNote-${t}-${i}" value="value"><label class="checkBoxNoteLabel" for="addCheckBoxNote-${t}-${i}">Add a note</label>
                        </div>
                        <div class="checkBoxChBtn">
                            <input class="checkBoxTextBtn" type="checkbox" id="addCheckBoxText-${t}-${i}" name="addCheckBoxText-${t}-${i}" value="value"><label class="checkBoxTextLabel" for="addCheckBoxText-${t}-${i}">Add text field</label>
                        </div>
                    </li>
                </ul>
            <div class="editMenuBtn">
                <button id="closeCheckBoxModal-${t}-${i}">close</button>
            </div>
            </section>`;
        const innerForm = document.querySelector(formLocate(t)).innerHTML;
        document.querySelector(formLocate(t)).innerHTML = innerForm + checkBoxHtml;
        document.querySelector(modalCoverAll).innerHTML += editMenuCheckBox;
    }
    //------------------------------active event listeners----------------------------------------
    checkBoxActivator(i, t) {
        this.editCheckBoxes(i, t);
        this.addButton(i, t);
        this.addNote(i, t);
        this.closeButton(i, t);
        this.closeCheckBoxField(i, t);
        this.moveUp(i, t);
        this.moveDown(i, t);
    }
    //-----------------------------------------open checkbox edit menu---------------------------------
    editCheckBoxes (i, t) {
        document.addEventListener('click' , (e) => {
            if ( e.target && e.target.id == editCheckBox(i, t)) {
                document.querySelector(modalCoverCheckBox(i, t)).style.display = 'block';
                document.querySelector(CheckBoxOptionWrapper(i, t)).innerHTML = '';
                //--------------get all item's id------------------------------
                let optionArray = document.querySelectorAll(checkBoxItmClass(i, t));
                let idArray = [];
                optionArray.forEach( (el) => {
                    idArray.push(el.getAttribute('id').substring(11, el.length));
                });
                //------------------create edit option html--------------------------------
                for (let co = 0;  co < idArray.length; co++) {
                    let checkBoxLabelName = document.querySelector(checkBoxLabel(idArray[co], t)).innerHTML;
                    let checkBoxValueName = document.querySelector(checkBox(idArray[co], t)).getAttribute('value');
                    let checkImageSrc = document.querySelector(checkBoxImageSrc(idArray[co], t)).getAttribute('src');
                    let checkImageWidth = parseInt(document.querySelector(checkBoxImageSrc(idArray[co], t)).getAttribute('width'));
                    if ( isNaN(checkImageWidth) ) {
                        checkImageWidth = '';
                    } 
                    let checkImageHeight = parseInt(document.querySelector(checkBoxImageSrc(idArray[co], t)).getAttribute('height'));
                    if ( isNaN(checkImageHeight) ) {
                        checkImageHeight = '';
                    } 
                    let optCheck = `<li id="checkBox-count-option-${t}-${idArray[co]}" class="count-${t}-${i} multiGrid">
                        <input type="text" id="checkBox-opt-${t}-${idArray[co]}" name="checkBox-opt-${t}-${idArray[co]}" value="${checkBoxLabelName}">
                        <input type="text" id="checkBox-opt-name-${t}-${idArray[co]}" name="checkBox-opt-name-${t}-${idArray[co]}" placeholder="${checkBoxValueName}">
                        <input type="number" id="getCheckImageWidth-${t}-${idArray[co]}" name="width" value="${checkImageWidth}" placeholder="Width">
                        <input type="number" id="getCheckImageHeight-${t}-${idArray[co]}" name="height" value="${checkImageHeight}" placeholder="Height">
                        <input type="text" id="getCheckImageSrc-${t}-${idArray[co]}" name="src" value="${checkImageSrc}" placeholder="Image source">
                        <input type="button" class="uploadBrowseBtn" id="uploadBrowseCheckBtn-${t}-${idArray[co]}" value="Browse">
                        <input type="file" id="uploadImageCheck-${t}-${idArray[co]}" class="uploadFileTag" accept="image/jpeg, image/png">  
                        <input type="button" class="uploadOptBtn" id="uploadImageCheckBtn-${t}-${idArray[co]}" value="Upload">
                        <input type="button" class="removeOptBtn removeCount-${t}-${i}" id="closeCheckOptItm-${t}-${idArray[co]}" value="Remove">
                    </li>`;
                    document.querySelector(CheckBoxOptionWrapper(i, t)).insertAdjacentHTML('beforeend', optCheck);
                    document.querySelector(optI(t, idArray[co])).addEventListener('click', (e) => {
                        if ( document.getElementsByClassName(removeCount(i, t)).length <= 1 ) {
                            alert(`This field needs at least one option!`);
                        }
                        if ( document.getElementsByClassName(`removeCount-${t}-${i}`).length > 1 ) {
                            
                            let removeConfirm = confirm(`Are you sure?`);
                            if( removeConfirm ) {
                                let el = e.target;
                                el.parentNode.parentNode.removeChild(el.parentNode);
                            }
                        }   
                    }, false);
                    //-------------------------------call uploader function---------------------------------------
                    uploader(idArray[co], t);
                }               
                //-----------------------------insert title----------------------------------------------
                const getCheckBoxTitle = document.querySelector(getCheckBoxTitleID(i, t));
                getCheckBoxTitle.value = document.querySelector(checkBoxTitleInput(i, t)).innerHTML;
                getCheckBoxTitle.addEventListener('keyup', (e) => {
                    var checkBoxTitle = getCheckBoxTitle.value;
                    document.querySelector(checkBoxTitleInput(i, t)).innerHTML = checkBoxTitle;
                }, false);
            }
        });
    }
    //------------------------------------add button---------------------------------
    addButton(i, t) {
        let n;
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == addCheckBoxOptions(i, t) ) {
                let lastId = document.querySelector(CheckBoxOptionWrapper(i, t)).lastChild.getAttribute('id');
                n = parseInt(lastId.substring(24, lastId.length));
                let newOption = `<li id="checkBox-count-option-${t}-${n+1}" class="count-${t}-${i} multiGrid">
                    <input type="text" id="checkBox-opt-${t}-${n+1}" name="checkBox-opt-${t}-${n+1}" value="option ${n-i+2}">
                    <input type="text" id="checkBox-opt-name-${t}-${n+1}" name="checkBox-opt-name-${t}-${n+1}" placeholder="value ${n-i+2}">
                    <input type="number" id="getCheckImageWidth-${t}-${n+1}" name="width" value="" placeholder="Width">
                    <input type="number" id="getCheckImageHeight-${t}-${n+1}" name="height" value="" placeholder="Height">
                    <input type="text" id="getCheckImageSrc-${t}-${n+1}" name="src" value="" placeholder="Image source">
                    <input type="button" class="uploadBrowseBtn" id="uploadBrowseCheckBtn-${t}-${n+1}" value="Browse">
                    <input type="file" id="uploadImageCheck-${t}-${n+1}" class="uploadFileTag" accept="image/jpeg, image/png">
                    <input type="button" class="uploadOptBtn" id="uploadImageCheckBtn-${t}-${n+1}" value="Upload">
                    <input type="button" class="removeOptBtn removeCount-${t}-${i}" id="closeCheckOptItm-${t}-${n+1}" value="Remove">
                </li>`;
                document.querySelector(CheckBoxOptionWrapper(i, t)).insertAdjacentHTML('beforeend', newOption);
                let newN = n+1;
                uploader(newN, t);
                document.querySelector(optI(t, newN)).addEventListener('click', (e) => {
                    if ( document.getElementsByClassName(removeCount(i, t)).length <= 1 ) {
                        alert(`This field needs at least one option!`);
                    }
                    if ( document.getElementsByClassName(removeCount(i, t)).length > 1 ) {
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
    //----------------------------close button---------------------
    closeButton(i, t) {
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == closeCheckBoxModal(i, t)) {
                var findLast = document.querySelectorAll(countClass(i, t));
                var lastNumber = findLast.length;
                //--------------------------find existed option-----------------------
                let existId = [];
                findLast.forEach( (el) => {
                    existId.push(el.getAttribute('id'))
                });
                let existI = [];
                existId.forEach ( (el) => {
                    existI.push(el.split('-')[4])
                });
                const optionHtmlCreator = document.querySelector(checkBoxWrapper(i, t));
                document.querySelector(checkBoxWrapper(i, t)).innerHTML = '';
                var nn = i;
                for (let c = 0 ; c < lastNumber ; c++ ) {
                    const optionHtmlText = `<div class="checkItemWrap"><img id="checkImageSrc-${t}-${existI[c]}" class="checkImageBox-${t}-${i} checkItm" src="" width="" height=""><input class="checkBoxItm-${t}-${i} checkItm" type="checkbox" id="checkBox-${t}-${existI[c]}" name="checkBox-title-${t}-${i}" value="value"><label id="checkBoxLabel-${t}-${existI[c]}" class="checkItm" for="checkBox-${t}-${existI[c]}">value1</label></div>`;
                    optionHtmlCreator.insertAdjacentHTML('beforeend', optionHtmlText);
                    document.querySelector(checkBox(existI[c], t)).setAttribute('value', document.querySelector(checkBoxOptName(existI[c], t)).value);
                    document.querySelector(checkBox(existI[c], t)).nextSibling.innerHTML = document.querySelector(checkBoxOpt(existI[c], t)).value;
                    document.querySelector(checkBoxImageSrc(existI[c], t)).setAttribute('src', document.querySelector(getCheckImageSrc(existI[c], t)).value);
                    document.querySelector(checkBoxImageSrc(existI[c], t)).setAttribute('width', document.querySelector(getCheckImageWidth(existI[c], t)).value);
                    document.querySelector(checkBoxImageSrc(existI[c], t)).setAttribute('height', document.querySelector(getCheckImageHeight(existI[c], t)).value);
                    nn++;
                }
                const getCheckBoxTitle = document.querySelector(getCheckBoxTitleID(i, t));
                var checkBoxTitle = getCheckBoxTitle.value; 
                if ( checkBoxTitle === '' ) {
                    checkBoxTitle = 'Multiple choice';
                }
                document.querySelector(checkBoxTitleInput(i, t)).innerHTML = checkBoxTitle;
                let getCheckBoxNote = document.querySelector(getCheckBoxNoteID(i, t));
                let checkBoxNoteHodler = document.querySelector(`#checkBoxNoteHolder-${t}-${i} p` );
                let checkBoxNote = document.querySelector(addCheckBoxNote(i, t));
                if (checkBoxNote.checked ) {
                    checkBoxNoteHodler.innerHTML = getCheckBoxNote.value;
                    checkBoxNoteHodler.style.border = '1px solid rgb(245, 203, 92)';
                    checkBoxNoteHodler.style.padding = '1em';
                }   else {
                    checkBoxNoteHodler.innerHTML = '';
                    checkBoxNoteHodler.style.border = '';
                    checkBoxNoteHodler.style.padding = '';
                }
                let checkBoxText = document.querySelector(addCheckBoxText(i, t));
                if ( checkBoxText.checked ) {
                    let checkBoxTextHtml = `<textarea id="checkBoxTextField-${t}-${i}" class="checkBoxTextField" type="text" name="title"></textarea>`;
                    document.querySelector(checkBoxTextHolder(i, t)).innerHTML = checkBoxTextHtml;
                } else {
                    document.querySelector(checkBoxTextHolder(i, t)).innerHTML = '';
                }
                document.querySelector(modalCoverCheckBox(i, t)).style.display = 'none';
            }            
        }, false);
    }
    //---------------------------------add note box---------------------------------
    addNote (i, t) {
        document.addEventListener('click' , function(e) {
            if ( e.target && e.target.id == addCheckBoxNoteID(i, t)) {
                let checkBoxNote = document.querySelector(addCheckBoxNote(i, t));
                if ( checkBoxNote.checked ) {
                    let noteHtml = `<textarea id="getCheckBoxNote-${t}-${i}" class="checkBoxNote" type="text" name="checkBoxNote">Write your note...</textarea>`; 
                    document.querySelector(CheckBoxNoteWrapper(i, t)).innerHTML = noteHtml;
                } else {
                    document.querySelector(CheckBoxNoteWrapper(i, t)).innerHTML = '';
                }
            }
        }) 
    }
    //------------------------------------close checkbox----------------------------------
    closeCheckBoxField (i, t) {
        document.addEventListener('click' , function(e) {
            if ( e.target && e.target.id == closeCheckBox(i, t)) {
                let removeConfirm = confirm(`Are you sure?`);
                if( removeConfirm ) {
                    const checkBoxWrapper = document.querySelector(checkBoxWrap(i, t));
                    checkBoxWrapper.parentNode.removeChild(checkBoxWrapper);
                    let modalWrapper = document.querySelector(modalCoverCheckBox(i, t));
                    modalWrapper.parentNode.removeChild(modalWrapper);
                }
            }
        })
    }
    //------------------------------------move up checkbox----------------------------------
    moveUp (i, t) {
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == moveUpCheckBox(i, t)) {
                const targetElement = document.querySelector(checkBoxWrap(i, t));
                const previousElement = targetElement.previousElementSibling;
                const parentElement = targetElement.parentElement;
                parentElement.insertBefore(targetElement, previousElement); 
            }
        })
    } 
    //------------------------------------move down checkbox----------------------------------  
    moveDown(i, t) {
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == moveDownCheckBox(i, t)) { 
                const targetElement = document.querySelector(checkBoxWrap(i, t));
                const nextElement = targetElement.nextElementSibling;
                const parentElement = targetElement.parentNode;
                parentElement.insertBefore(targetElement, nextElement.nextSibling);
            }
        })

    }
}
//------------------------------------uploader function----------------------------------
const uploader = (indicator, t) => {
    document.querySelector(uploadBrowseCheckBtn(indicator, t)).addEventListener('click', (e) => {
        e.target.nextElementSibling.click();
    }, false);
     //-------------------------------------show file name-----------------------------------------
     document.querySelector(uploadImageCheck(indicator, t)).addEventListener('change', (e) => {
        let file = document.querySelector(uploadImageCheck(indicator, t));
        let browse = file.previousElementSibling;
        if( file.length != 0 ) {
            let fileName = file.files[0].name.split('.');
            browse.value = fileName[0];
        }
    });
    //-------------------------------check file---------------------------------------
    document.querySelector(uploadImageCheckBtn(indicator, t)).addEventListener('click', (e) => {
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

export default createCheckBox;