import './label.css';

const modalCoverAll = '#modalCoverAll';
const modalCoverLabel = (i, t) => `#modalCoverLabel-${t}-${i}`;
const labelOptionWrapper = (i, t) => `#labelOptionWrapper-${t}-${i}`;
const labelValue = (i, t) => `#labelValue-${t}-${i}`;
const getLabelTitle = (i, t) => `#getLabelTitle-${t}-${i}`;
const labelTitleInput = (i, t) => `#labelTitleInput-${t}-${i}`;
const labelWrapper = (i, t) => `#labelWrapper-${t}-${i}`;
const labelWrap = (i, t) => `#s4-labelWrap-${t}-${i}`;
const formLocate = (t) => `#form-${t}`;
const editLabel = (i, t) => `editLabel-${t}-${i}`;
const optI = (T, I) => `#closeLabelOptItm-${T}-${I}`;
const removeCount = (i, t) => `removeCount-${t}-${i}`;
const labelNameClass = (i, t) => `.labelName-${t}-${i}`;
const addLabelOptions = (i, t) => `addLabelOptions-${t}-${i}`;
const closeLabelButton = (i, t) => `closeLabelButton-${t}-${i}`;
const countLabel = (i, t) => `.countLabel-${t}-${i}`;
const labelOpt = (i, t) => `#label-opt-${t}-${i}`;
const closeLabel = (i, t) => `closeLabel-${t}-${i}`;
const moveUpLabel = (i, t) => `moveUpLabel-${t}-${i}`;
const moveDownLabel = (i, t) => `moveDownLabel-${t}-${i}`;

class createLabel {
    //---------------------------------------label creator-----------------------------------------
    labelCreator (i, t) {
        const labelHtml = `<section id="s4-labelWrap-${t}-${i}" class="labelWrapper reader-${t}">
        <div id="${i}-${t}" class="checkBoxButton titleArea"> 
            <p id="labelTitleInput-${t}-${i}">title</p>   
            <div class="allEditIcons">
                <img class="barIcons labelIconEdit" id="editLabel-${t}-${i}" src="images/edit.png" alt="edit" width="20px">
                <img class="barIcons labelIconClose" id="closeLabel-${t}-${i}" src="images/close.png" alt="close" width="20px">
                <img class="barIcons" id="moveUpLabel-${t}-${i}" src="images/up.svg" alt="Move up" width="20px">
                <img class="barIcons" id="moveDownLabel-${t}-${i}" src="images/down.svg" alt="Move down" width="20px">
            </div>    
        </div>
        <div id="labelHolder-${t}-${i}" class="labelHolder">
            <div id="labelWrapper-${t}-${i}" class="labelwrap">
                <div class="labelItemWrap">
                    <label class ="labelName-${t}-${i} labelItm" id="labelValue-${t}-${i}" for="label-${t}-${i}">value 1</label><input class="labelItm-${t}-${i} labelItm" type="text" id="label-${t}-${i}" name="label-${t}-${i}">
                </div>
            </div>
        </div>
        </section>`;
        const editMenuLabel = `<section id="modalCoverLabel-${t}-${i}" class="modalCoverLabel">
            <div id="LabelEdit-${t}-${i}" class="labelEdit">
                <ul id="LabelItems-${t}-${i}" class="labelItems">
                    <li class="allEditTitles"><label for="LabelTitle"> Enter the Title: </label><input type="text" id="getLabelTitle-${t}-${i}" name="getLabelTitle"></li>
                    <li>
                        <ul class="allEditTitles" id="labelOptionWrapper-${t}-${i}"><p>Edit options: </P></ul>
                        <button id="addLabelOptions-${t}-${i}">Add option</button>    
                    </li>
                </ul>
            <div class="editMenuBtn">
                <button id="closeLabelButton-${t}-${i}">close</button>    
            <div>
            </section>`;
        const innerForm = document.querySelector(formLocate(t)).innerHTML;
        document.querySelector(formLocate(t)).innerHTML = innerForm + labelHtml;
        document.querySelector(modalCoverAll).innerHTML += editMenuLabel;
    }
    //---------------------------------------active event listeners-----------------------------------------
    labelActivator(i, t) {
        this.editLabels(i, t);
        this.addButton(i, t);
        this.closeButton(i, t);
        this.closeLabelField(i, t);
        this.moveUp(i, t);
        this.moveDown(i, t);
    }
    //---------------------------------------edit menu label-----------------------------------------
    editLabels (i, t) {
        document.addEventListener('click' , (e) => {
            if ( e.target && e.target.id == editLabel(i, t)) {
                document.querySelector(modalCoverLabel(i, t)).style.display = 'block';
                document.querySelector(labelOptionWrapper(i, t)).innerHTML = '';
                //--------------get all item's id------------------------------
                let optionArray = document.querySelectorAll(labelNameClass(i, t));
                let idArray = [];
                optionArray.forEach( (el) => {
                    idArray.push(el.getAttribute('id').substring(13, el.length));
                });
                //------------------create edit option html--------------------------------
                for (let co = 0;  co < idArray.length; co++) {
                    let labelLabelName = document.querySelector(labelValue(idArray[co], t)).innerHTML;
                    let optLabel = `<li id="label-count-option-${t}-${idArray[co]}" class="countLabel-${t}-${i} labelValues"><label>Enter value: </label><input type="text" id="label-opt-${t}-${idArray[co]}" name="label-opt${t}--${idArray[co]}" value="${labelLabelName}"><input type="button" class="removeOptBtnLabel removeCount-${t}-${i}" id="closeLabelOptItm-${t}-${idArray[co]}" value="Remove"></li>`
                    document.querySelector(labelOptionWrapper(i, t)).insertAdjacentHTML('beforeend', optLabel);
                    document.querySelector(optI(t, idArray[co])).addEventListener('click', (e) => {
                        if ( document.getElementsByClassName(removeCount(i, t)).length > 1 ) {
                            let removeConfirm = confirm(`Are you sure?`);
                            if( removeConfirm ) {
                                let el = e.target;
                                el.parentNode.parentNode.removeChild(el.parentNode);
                            }
                        }  
                    }, false);
                }
                //-----------------------------insert title----------------------------------------------
                const getLabelTitleObj = document.querySelector(getLabelTitle(i, t));
                getLabelTitleObj.value = document.querySelector(labelTitleInput(i, t)).innerHTML;
                getLabelTitleObj.addEventListener('keyup', (e) => {
                    let labelTitle = getLabelTitleObj.value;
                    document.querySelector(labelTitleInput(i, t)).innerHTML = labelTitle;
                }, false);
            }
        });
    }
    //------------------------------------add button---------------------------------
    addButton(i, t) {
        let n;
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == addLabelOptions(i, t) ) {
                let lastId = document.querySelector(labelOptionWrapper(i, t)).lastChild.getAttribute('id');
                n = parseInt(lastId.substring(21, lastId.length));
                let newOption = `<li id="label-count-option-${t}-${n+1}" class="countLabel-${t}-${i} labelValues"><label>Enter value: </label><input type="text" id="label-opt-${t}-${n+1}" name="label-opt-${t}-${n+1}" value="value ${n-i+2}"><input type="button" class="removeOptBtnLabel removeCount-${t}-${i}" id="closeLabelOptItm-${t}-${n+1}" value="Remove"></li>`;
                document.querySelector(labelOptionWrapper(i, t)).insertAdjacentHTML('beforeend', newOption);
                let newN = n+1;
                document.querySelector(optI(t, newN)).addEventListener('click', (e) => {
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
    closeButton(i, t) {
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == closeLabelButton(i, t)) {
                let findLast = document.querySelectorAll(countLabel(i, t));
                let lastNumber = findLast.length;  
                let existId = [];
                findLast.forEach( (el) => {
                    existId.push(el.getAttribute('id'))
                });
                let existI = [];
                existId.forEach ( (el) => {
                    existI.push(el.split('-')[4])
                });
                const optionHtmlCreator = document.querySelector(labelWrapper(i, t));
                document.querySelector(labelWrapper(i, t)).innerHTML = '';
                for (let c = 0 ; c < lastNumber ; c++ ) {  
                    let optionHtmlLabel = `<div class="labelItemWrap"><label class="labelName-${t}-${i} labelItm" id="labelValue-${t}-${existI[c]}" for="label-${t}-${existI[c]}">value-${t}-${existI[c]}</label><input class="labelItm-${t}-${existI[c]} labelItm" type="text" id="label-${t}-${existI[c]}" name="label-${t}-${existI[c]}"></div>`;
                    optionHtmlCreator.insertAdjacentHTML('beforeend', optionHtmlLabel);
                    document.querySelector(labelValue(existI[c], t)).innerHTML = document.querySelector(labelOpt(existI[c], t)).value;
                }
                const getLabelTitleObj = document.querySelector(getLabelTitle(i, t));
                var labelTitle = getLabelTitleObj.value;
                if ( labelTitle === '' ) {
                    labelTitle = 'Label';
                }
                document.querySelector(labelTitleInput(i, t)).innerHTML = labelTitle;
                document.querySelector(modalCoverLabel(i, t)).style.display = 'none';
            }   
        }, false);
    }
    closeLabelField (i, t) {
        document.addEventListener('click' , function(e) {
            if ( e.target && e.target.id == closeLabel(i, t)) {
                let removeConfirm = confirm(`Are you sure?`);
                if( removeConfirm ) {
                    const labelWrapper = document.querySelector(labelWrap(i, t));
                    labelWrapper.parentNode.removeChild(labelWrapper);
                    let modalWrapper = document.querySelector(modalCoverLabel(i, t));
                    modalWrapper.parentNode.removeChild(modalWrapper);
                }
            }
        })
    }
    moveUp (i, t) {
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == moveUpLabel(i, t)) {
                const targetElement = document.querySelector(labelWrap(i, t));
                const previousElement = targetElement.previousElementSibling;
                const parentElement = targetElement.parentElement;
                parentElement.insertBefore(targetElement, previousElement); 
            }
        })
    }   
    moveDown(i, t) {
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == moveDownLabel(i, t)) {
                
                const targetElement = document.querySelector(labelWrap(i, t));
                const nextElement = targetElement.nextElementSibling;
                const parentElement = targetElement.parentNode;
                parentElement.insertBefore(targetElement, nextElement.nextSibling);
            }
        })
    }
}

export default createLabel;



