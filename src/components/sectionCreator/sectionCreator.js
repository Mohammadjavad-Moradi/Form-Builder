import {dragndrop} from '../drag/drag.js';
import './sectionCreator.css';

const modalCoverAll = '#modalCoverAll';
const formID = '#form';
const sectionCreatorButton = '#sectionCreatorButton';
const editSection = (i) => `editSection-${i}`;
const sectionModalCover = (i) => `#sectionModalCover-${i}`;
const getSectionTitle = (i) => `#getSectionTitle-${i}`;
const sectionTitleInput = (i) => `#sectionTitleInput-${i}`;
const closeSectionModal = (i) => `closeSectionModal-${i}`;
const closeSection = (i) => `closeSection-${i}`;
const sectionWrapperID = (i) => `#sectionWrapper-${i}`;
const collapseSection = (i) => `collapseSection-${i}`;
const sectionTitle = (i) => `#sectionTitle-${i}`;
const collapseSectionID = (i) => `#collapseSection-${i}`;
const moveUpSection = (i) => `moveUpSection-${i}`;
const moveDownSection = (i) => `moveDownSection-${i}`;


class CreateSection {
    //-----------------------------------create section Html----------------------------------------
    htmlCreator (i, t) {
        const sectionHtml = `<section id="sectionWrapper-${t}" class="sectionWrapper">
            <div id="sectionTitle-${t}" class="sectionTitle">
                <p id="sectionTitleInput-${t}" class="sectionTitles">Section Title</p>
                <div class="sectionButtons">
                    <img class="sectionButton" id="editSection-${t}" src="images/edit.png" alt="edit" width="20px">
                    <img class="sectionButton collapseIcon" id="collapseSection-${t}" src="images/collapse.svg" alt="Collapse" width="18px">
                    <img class="sectionButton" id="closeSection-${t}" src="images/close.png" alt="Close" width="20px">
                    <img class="sectionButton" id="moveUpSection-${t}" src="images/up.svg" alt="Move up" width="20px">
                    <img class="sectionButton" id="moveDownSection-${t}" src="images/down.svg" alt="Move down" width="20px">
                </div>
            </div>
            <div id="panel-${t}" class="panel">
                <div id="form-${t}" class="formWrapper"></div>
                <div id="drop-zone-${t}" class="drop-zone">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        + add a field
                </div>
            </div>
            </section>`;
        const editMenu = `<section id="sectionModalCover-${t}" class="modalCoverSection">
                <div id="sectionEdit-${t}" class="sectionEdit">
                    <ul id="sectionEditItems-${t}" class="allEditTitles">
                        <li><label for="getSectionTitle-${t}"> Enter the Title: </label><input type="text" id="getSectionTitle-${t}" name="section title" placeholder="Section title"></li>
                    </ul>
                <div class="editMenuBtn">
                    <button class="closeModal" id="closeSectionModal-${t}">close</button>
                </div>
                </section>`;
        document.querySelector(modalCoverAll).innerHTML += editMenu;
        document.querySelector(formID).insertAdjacentHTML('beforeend', sectionHtml);
        dragndrop(i, t);
    }
    //-----------------------------------create sections----------------------------------------
    sectionCreator (i, t) {
        document.querySelector(sectionCreatorButton).addEventListener('click' , (e) => {
            this.htmlCreator(i, t);
            this.eventActivator(t);
            t++;
        }, false);
    }
    //-----------------------------------active event listener----------------------------------------
    eventActivator(t) {
        this.edit(t);
        this.closeEditModal(t);
        this.collapse(t);
        this.close(t);
        this.moveUp(t);
        this.moveDown(t);
    }
    //-----------------------------------edit menu----------------------------------------
    edit (t) {
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == editSection(t) ) {
                document.querySelector(sectionModalCover(t)).style.display = 'block';
                    //-----------------------------insert title----------------------------------------------
                    const getSectionTitleObj = document.querySelector(getSectionTitle(t));
                    getSectionTitleObj.value = document.querySelector(sectionTitleInput(t)).innerHTML;
                    getSectionTitleObj.addEventListener('keyup', (e) => {
                        let sectionTitle = getSectionTitleObj.value;
                        document.querySelector(sectionTitleInput(t)).innerHTML = sectionTitle;
                }, false); 
            }
        })
    }
    //-----------------------------------close edit menu----------------------------------------
    closeEditModal (t) {
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == closeSectionModal(t)) {
                const getSectionTitleObj = document.querySelector(getSectionTitle(t));   
                let sectionTitle = getSectionTitleObj.value;
                if ( sectionTitle === '' ) {
                    sectionTitle = `Section ${t}`;
                }
                document.querySelector(sectionTitleInput(t)).innerHTML = sectionTitle;
                document.querySelector(sectionModalCover(t)).style.display = 'none';   
            }
        })
    }
    //-----------------------------------close section----------------------------------------
    close (t) {
        document.addEventListener('click', (e) => {
            if (e.target && e.target.id == closeSection(t)) {
                let removeConfirm = confirm(`Are you sure?`);
                if( removeConfirm ) {
                    let sectionWrapper = document.querySelector(sectionWrapperID(t));
                    sectionWrapper.parentNode.removeChild(sectionWrapper);
                    let modalWrapper = document.querySelector(sectionModalCover(t));
                    modalWrapper.parentNode.removeChild(modalWrapper);
                }
            }
        })
    }
    //-----------------------------------collapse section accordion----------------------------------------    
    collapse (t) {
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == collapseSection(t) ) {
                let panel = document.querySelector(sectionTitle(t)).nextElementSibling;
                document.querySelector(collapseSectionID(t)).classList.toggle('rotate');
                panel.classList.toggle('deactivePanel');
            }
        })
    }
    //-----------------------------------move up section accordion----------------------------------------
    moveUp (t) {
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == moveUpSection(t)) {
                const targetElement = document.querySelector(sectionWrapperID(t));
                const previousElement = targetElement.previousElementSibling;
                const parentElement = targetElement.parentElement;
                parentElement.insertBefore(targetElement, previousElement); 
            }
        })
    }
    //-----------------------------------move down section accordion----------------------------------------
    moveDown (t) {
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == moveDownSection(t)) {
                const targetElement = document.querySelector(sectionWrapperID(t));
                const nextElement = targetElement.nextElementSibling;
                const parentElement = targetElement.parentNode;
                parentElement.insertBefore(targetElement, nextElement.nextSibling);
            }
        })     
    }
}


export default CreateSection; 