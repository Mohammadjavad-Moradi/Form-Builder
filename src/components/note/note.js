import './note.css';

const modalCoverAll = '#modalCoverAll';
const formLocate = (t) => `#form-${t}`;
const modalCoverNote = (i, t) => `#modalCoverNote-${t}-${i}`;
const getNoteTitle = (i, t) => `#getNoteTitle-${t}-${i}`;
const noteTitleInput = (i, t) => `#noteTitleInput-${t}-${i}`;
const noteContent = (i, t) => `#noteContent-${t}-${i}`;
const noteItem = (i, t) => `#noteItem-${t}-${i}`;
const noteWrapper = (i, t) => `#s6-noteWrapper-${t}-${i}`;
const editNote = (i, t) => `editNote-${t}-${i}`;
const closeNoteModal = (i, t) => `closeNoteModal-${t}-${i}`;
const closeNote = (i, t) => `closeNote-${t}-${i}`;
const moveUpNote = (i, t) => `moveUpNote-${t}-${i}`;
const moveDownNote = (i, t) => `moveDownNote-${t}-${i}`;

class NoteCreator {

    static name2 = 0;
    htmlCreator(i, t) {
        const note = `<section id="s6-noteWrapper-${t}-${i}" class="noteWrapper reader-${t}">
        <div id="${i}-${t}" class="title titleArea"> 
            <p id="noteTitleInput-${t}-${i}">title</p>   
            <div class="allEditIcons">
                <img class="barIcons"  id="editNote-${t}-${i}" src="images/edit.png" alt="edit" width="20px">
                <img class="barIcons" id="closeNote-${t}-${i}" src="images/close.png" alt="close" width="20px">
                <img class="barIcons" id="moveUpNote-${t}-${i}" src="images/up.svg" alt="Move up" width="20px">
                <img class="barIcons" id="moveDownNote-${t}-${i}" src="images/down.svg" alt="Move down" width="20px">
            </div>    
        </div>
            <div id="noteHolder-${t}-${i}" class="noteHolder">
                <p id="noteItem-${t}-${i}" class="noteItem"></p>
            </div>
        </section>`;
        const noteMenu = `<section id="modalCoverNote-${t}-${i}" class="modalCoverNote">
        <div id="NoteEdit-${t}-${i}" class="noteEdit">
            <ul id="NoteItems-${t}-${i}" class="allEditTitles">
                <li><label for="getTitle"> Enter the Title: </label><input type="text" id="getNoteTitle-${t}-${i}" name="title" placeholder="Note"></li>
                <li><textarea id="noteContent-${t}-${i}" class="noteContent" type="text" name="noteContent"></textarea></li> 
            </ul>
        <div class="editMenuBtn">
            <button id="closeNoteModal-${t}-${i}">close</button>
        </div>
        </section>`;
        const innerForm = document.querySelector(formLocate(t)).innerHTML;
        document.querySelector(formLocate(t)).innerHTML = innerForm + note ;
        document.querySelector(modalCoverAll).innerHTML += noteMenu;
    } 

    noteActivator(i, t) {
        this.editNote(i, t);
        this.closeButton(i, t);
        this.closeTextField(i, t);
        this.moveUp(i, t);
        this.moveDown(i, t);
    }

    editNote(i, t) {
        document.addEventListener('click' , (e) => {
            if ( e.target && e.target.id == editNote(i, t)) {
                document.querySelector(modalCoverNote(i, t)).style.display = 'block';
                let noteContentObj = document.querySelector(noteContent(i, t));
                let noteItemObj = document.querySelector(noteItem(i, t));
                noteContentObj.value = noteItemObj.innerHTML;
                //-----------------------------insert title----------------------------------------------
                const getNoteTitleObj = document.querySelector(getNoteTitle(i, t));
                getNoteTitleObj.value = document.querySelector(noteTitleInput(i, t)).innerHTML;
                getNoteTitleObj.addEventListener('keyup', (e) => {
                    var noteTitle = getNoteTitleObj.value;
                    document.querySelector(noteTitleInput(i, t)).innerHTML = noteTitle;
                }, false);
            }
        })
    }

    closeButton(i, t) {
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == closeNoteModal(i, t)) {
                //-------------------------get note------------------------------------------------------
                let noteContentObj = document.querySelector(noteContent(i, t));
                let noteItemObj = document.querySelector(noteItem(i, t));
                noteItemObj.innerHTML = noteContentObj.value;
                //--------------------------get title----------------------------------------------------
                const getNoteTitleObj = document.querySelector(getNoteTitle(i, t));
                let noteTitle = getNoteTitleObj.value;
                document.querySelector(noteTitleInput(i, t)).innerHTML = noteTitle;
                document.querySelector(modalCoverNote(i, t)).style.display = 'none';
            }   
        }, false);            
    }

    closeTextField(i, t) {
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == closeNote(i, t)) {
                let removeConfirm = confirm(`Are you sure?`);
                if( removeConfirm ) {
                    const noteWrap = document.querySelector(noteWrapper(i, t));
                    noteWrap.parentNode.removeChild(noteWrap);
                    const modalWrapper = document.querySelector(modalCoverNote(i, t));
                    modalWrapper.parentNode.removeChild(modalWrapper);
                }
            }   
        }, false);
    }

    moveUp(i, t) {
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == moveUpNote(i, t)) {
                const targetElement = document.querySelector(noteWrapper(i, t));
                const previousElement = targetElement.previousElementSibling;
                const parentElement = targetElement.parentElement;
                parentElement.insertBefore(targetElement, previousElement); 
            }
        })
    }

    moveDown(i, t) {
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == moveDownNote(i, t)) {   
                const targetElement = document.querySelector(noteWrapper(i, t));
                const nextElement = targetElement.nextElementSibling;
                const parentElement = targetElement.parentNode;
                parentElement.insertBefore(targetElement, nextElement.nextSibling);
            }
        })
    } 
}

export default NoteCreator;