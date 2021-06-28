import TextBoxCreator from '../textbox/textbox.js';
import createRadioButtons from '../singleChoice/singleChoice.js';
import createCheckBox from '../Checkbox/checkbox.js';
import createLabel from '../label/label.js';
import AddImage from '../addimage/addimage.js';
import NoteCreator from '../note/note';

const textBox = new TextBoxCreator;
const radioButtons = new createRadioButtons;
const checkbox = new createCheckBox;
const createlabel = new createLabel;
const addImage = new AddImage;
const noteCreator = new NoteCreator;

const dropZone = (t) => `#drop-zone-${t}`;

export var dragndrop = (i, t) => {

    var whichBtn = '';
    function moveStart(e) {
        whichBtn = e.target.getAttribute('id');    
    }
    function dragOver(e) {
        e.preventDefault();
    }
    function moveDrop(e) {
        const Type = String(whichBtn);
        e.preventDefault();
        if ( Type === '1' ) {
            textBox.boxCreator(i, t);
            textBox.textActivator(i, t);
        } else if ( Type === '2' ) {
            radioButtons.radioButtonCreator(i, t);
            radioButtons.radioActivator(i, t)
        } else if ( Type === '3' ) {
            checkbox.checkBoxCreator(i, t);
            checkbox.checkBoxActivator(i, t);
        } else if ( Type === '4' ) {
            createlabel.labelCreator(i, t);
            createlabel.labelActivator(i, t);
        } else if ( Type === '5' ) {
            addImage.htmlCreator(i, t);
            addImage.imageActivator(i, t);
        } else if ( Type === '6' ) {
            noteCreator.htmlCreator(i, t);
            noteCreator.noteActivator(i, t);
        }   
        i = i + 100;  
    }

    document.querySelector('body').addEventListener('dragstart', moveStart, false);
    document.querySelector(dropZone(t)).addEventListener('dragover', dragOver, false);
    document.querySelector(dropZone(t)).addEventListener('drop', moveDrop, false);
    
    function touchStart(e) {
        switch (e.touches.length) {
            case 1: handle_one_touch(e); break;
            case 2: break;
            case 3: break;
            case 4: break;
            case 5: break;
            case 6: break;
            case 7: break;
            default: break;
        }
        
        function handle_one_touch(e) {
            //console.log(`start`)
            e.preventDefault();
            whichBtn = e.target.parentElement.getAttribute('id');
        }
    }
    function touchend(e) {
    let changedTouch = e.changedTouches[0];
    let elem = document.elementFromPoint(changedTouch.clientX, changedTouch.clientY);
    if (elem === document.querySelector(dropZone(t)) ) {
        const Type = String(whichBtn);
        if ( Type === '1' ) {
            textBox.boxCreator(i, t);
            textBox.textActivator(i, t);
        } else if ( Type === '2' ) {
            radioButtons.radioButtonCreator(i, t);
            radioButtons.radioActivator(i, t)
        } else if ( Type === '3' ) {
            checkbox.checkBoxCreator(i, t);
            checkbox.checkBoxActivator(i, t);
        } else if ( Type === '4' ) {
            createlabel.labelCreator(i, t);
            createlabel.labelActivator(i, t);
        } else if ( Type === '5' ) {
            addImage.htmlCreator(i, t);
            addImage.imageActivator(i, t);
        } else if ( Type === '6' ) {
            noteCreator.htmlCreator(i, t);
            noteCreator.noteActivator(i, t);
        }   
        i = i + 100; 
            }
        
    }

    
    document.querySelectorAll('.Btn').forEach((el) => {
        el.addEventListener('touchstart', touchStart, false);
        el.addEventListener('touchend', touchend, false);
    })
}

