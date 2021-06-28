import './textbox.css';

const modalCoverAll = '#modalCoverAll';
const modalCover = (i, t) => `#modalCover-${t}-${i}`;
const getTextTitle = (i, t) => `#getTextTitle-${t}-${i}`;
const textTitleInput = (i, t) => `#textTitleInput-${t}-${i}`;
const textBoxWrapper = (i, t) => `#s1-textBoxWrapper-${t}-${i}`;
const formLocate = (t) => `#form-${t}`;
const edit = (i, t) => `edit-${t}-${i}`;
const closeTextModal = (i, t) => `closeTextModal-${t}-${i}`;
const close = (i, t) => `close-${t}-${i}`;
const moveUpText = (i, t) => `moveUpText-${t}-${i}`;
const moveDownText = (i, t) => `moveDownText-${t}-${i}`;

class TextBoxCreator {
    //---------------------------------------create textbox----------------------------------------------
    boxCreator (i, t) {
        const title = `<section id="s1-textBoxWrapper-${t}-${i}" class="textBoxWrapper reader-${t}">
        <div id="${i}-${t}" class="title titleArea"> 
            <p id="textTitleInput-${t}-${i}">Title</p>   
            <div class="allEditIcons">
                <img class="barIcons"  id="edit-${t}-${i}" src="images/edit.png" alt="edit" width="20px">
                <img class="barIcons" id="close-${t}-${i}" src="images/close.png" alt="close" width="20px">
                <img class="barIcons" id="moveUpText-${t}-${i}" src="images/up.svg" alt="Move up" width="20px">
                <img class="barIcons" id="moveDownText-${t}-${i}" src="images/down.svg" alt="Move down" width="20px">
            </div>    
        </div>
            <div id="textfieldHolder-${t}-${i}" class="textfieldHolder">
                <textarea id="textBoxItem-${t}-${i}" class="textBoxItem" type="text" name="title"></textarea>
            </div>
        </section>`
        const editMenu = `<section id="modalCover-${t}-${i}" class="modalCoverTextbox">
        <div id="textBoxEdit-${t}-${i}" class="textBoxEdit">
            <ul id="editItems-${t}-${i}" class="allEditTitles">
                <li><label for="getTitle"> Enter the Title: </label><input type="text" id="getTextTitle-${t}-${i}" name="title" placeholder="text box"></li>
            </ul>
        <div class="editMenuBtn">
            <button id="closeTextModal-${t}-${i}">close</button>
        </div>
        </section>`;
        var innerForm = document.querySelector(formLocate(t)).innerHTML;
        document.querySelector(formLocate(t)).innerHTML = innerForm + title ;
        document.querySelector(modalCoverAll).innerHTML += editMenu;
    }
    //---------------------------------------active event listener----------------------------------------------
    textActivator(i, t) {
        this.editTextbox(i, t);
        this.closeButton(i, t);
        this.closeTextField(i, t);
        this.moveUp(i, t);
        this.moveDown(i, t);
    }
    //---------------------------------------edit menu----------------------------------------------
    editTextbox(i, t) {
        document.addEventListener('click' , (e) => {
            if ( e.target && e.target.id == edit(i, t)) {
                document.querySelector(modalCover(i, t)).style.display = 'block';
                //-----------------------------insert title----------------------------------------------
                const getTextTitleObj = document.querySelector(getTextTitle(i, t));
                getTextTitleObj.value = document.querySelector(textTitleInput(i, t)).innerHTML;
                getTextTitleObj.addEventListener('keyup', (e) => {
                    var textTitle = getTextTitleObj.value;
                    document.querySelector(textTitleInput(i, t)).innerHTML = textTitle;
                }, false);
            }
        })
    }
    //---------------------------------------close edit menu---------------------------------------------
    closeButton(i, t) {
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == closeTextModal(i, t)) {
                const getTextTitleObj = document.querySelector(getTextTitle(i, t));
                let textTitle = getTextTitleObj.value;
                if ( textTitle === '' ) {
                    textTitle = 'Text area';
                }
                document.querySelector(textTitleInput(i, t)).innerHTML = textTitle;
                document.querySelector(modalCover(i, t)).style.display = 'none';
            }   
        }, false);            
    }
    //---------------------------------------close textbox----------------------------------------------
    closeTextField(i, t) {
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == close(i, t)) {
                let removeConfirm = confirm(`Are you sure?`);
                if( removeConfirm ) {
                    const textWrapper = document.querySelector(textBoxWrapper(i, t));
                    textWrapper.parentNode.removeChild(textWrapper);
                    const modalWrapper = document.querySelector(modalCover(i, t));
                    modalWrapper.parentNode.removeChild(modalWrapper);
                }
            }   
        }, false);
    }
    //---------------------------------------move up textbox----------------------------------------------
    moveUp (i, t) {
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == moveUpText(i, t)) {
                const targetElement = document.querySelector(textBoxWrapper(i, t));
                const previousElement = targetElement.previousElementSibling;
                const parentElement = targetElement.parentElement;
                parentElement.insertBefore(targetElement, previousElement); 
            }
        })
    } 
    //---------------------------------------move down textbox----------------------------------------------
    moveDown(i, t) {
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == moveDownText(i, t)) {
                const targetElement = document.querySelector(textBoxWrapper(i, t));
                const nextElement = targetElement.nextElementSibling;
                const parentElement = targetElement.parentNode;
                parentElement.insertBefore(targetElement, nextElement.nextSibling);
            }
        })
    }
}
export default TextBoxCreator;

