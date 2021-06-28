import './addimage.css';
import {ajaxUpload} from '../configData/configData';

const modalCoverAll = '#modalCoverAll';
const formLocate = (t) => `#form-${t}`;
const modalCover = (i, t) => `#imageModalCover-${t}-${i}`;
const getImageTitle = (i, t) => `#getImageTitle-${t}-${i}`;
const imageTitleInput = (i, t) => `#imageTitleInput-${t}-${i}`;
const getImageSrc = (i, t) => `#getImageSrc-${t}-${i}`;
const imageSrc = (i, t) => `#imageSrc-${t}-${i}`;
const imageWrapper = (i, t) => `#s5-imageWrapper-${t}-${i}`;
const getImageWidth = (i, t) => `#getImageWidth-${t}-${i}`;
const getImageHeight = (i, t) => `#getImageHeight-${t}-${i}`;
const uploadBrowseImgBtn = (i, t) => `#uploadBrowseImgBtn-${t}-${i}`;
const uploadImageImgBtn = (i, t) => `#uploadImageImgBtn-${t}-${i}`;
const uploadImgImage = (i, t) => `#uploadImgImage-${t}-${i}`;


class AddImage {
    htmlCreator(i, t) {
        const imgHtml = `<section id="s5-imageWrapper-${t}-${i}" class="imageWrapper reader-${t}">
        <div id="${i}-${t}" class="title titleArea"> 
            <p id="imageTitleInput-${t}-${i}">title</p>   
            <div class="allEditIcons">
                <img class="barIcons textIconEdit"  id="editImage-${t}-${i}" src="images/edit.png" alt="edit" width="20px">
                <img class="barIcons textIconClose" id="closeImage-${t}-${i}" src="images/close.png" alt="close" width="20px">
                <img class="barIcons" id="moveUpImage-${t}-${i}" src="images/up.svg" alt="Move up" width="20px">
                <img class="barIcons" id="moveDownImage-${t}-${i}" src="images/down.svg" alt="Move down" width="20px">
            </div>   
        </div>
        <div id="imageHolder-${t}-${i}" class="imageHolder">
            <img id="imageSrc-${t}-${i}" class="imageBox-${t}-${i}" src="" width="0px" height="0px">
        </div>
        </section>`;
        const editMenu = `<section id="imageModalCover-${t}-${i}" class="modalCoverImage">
        <div id="imageEdit-${t}-${i}" class="imageEdit">
            <ul id="imageEditItems-${t}-${i}" class="imageEditItems">
                <li class="allEditTitles"><label for="getImageTitle-${t}-${i}"> Title: </label><input type="text" id="getImageTitle-${t}-${i}" name="title" placeholder="Image tilte"></li>
                <li class="allEditTitles"><label for="getImageSrc-${t}-${i}"> URL: </label><input type="text" id="getImageSrc-${t}-${i}" name="src" placeholder="Image src"></li>
                <li class="allEditTitles"><label for="getImageWidth-${t}-${i}"> Width: </label><input type="number" id="getImageWidth-${t}-${i}" name="width" placeholder="Image width(px)"></li>
                <li class="allEditTitles"><label for="getImageHeight-${t}-${i}"> Height: </label><input type="number" id="getImageHeight-${t}-${i}" name="height" placeholder="Image height(px)"></li>
            </ul>
            <div class="imgUploadwrap">
                <input type="button" class="uploadBrowseBtn" id="uploadBrowseImgBtn-${t}-${i}" value="Browse">
                <input type="file" id="uploadImgImage-${t}-${i}" class="uploadFileTag" accept="image/jpeg, image/png">  
                <input type="button" class="uploadOptBtn" id="uploadImageImgBtn-${t}-${i}" value="Upload">
            </div>
        <div class="editMenuBtn">
            <button id="closeImageModal-${t}-${i}">close</button>
        </div>
        </section>`;



        const innerForm = document.querySelector(formLocate(t)).innerHTML;
        document.querySelector(formLocate(t)).innerHTML = innerForm + imgHtml;
        document.querySelector(modalCoverAll).innerHTML += editMenu;
    }
    imageActivator(i, t) {
        this.editImage(i, t);
        this.closeButton(i, t);
        this.uploader(i, t);
        this.closeImageField(i, t);
        this.moveUp(i, t);
        this.moveDown(i, t);
    }

    editImage(i, t) {
        document.addEventListener('click' , (e) => {
            if ( e.target && e.target.id == `editImage-${t}-${i}`) {
                document.querySelector(modalCover(i, t)).style.display = 'block';
                //---------------------------insert image URL-------------------------------------------
                const getImageSrcObj = document.querySelector(getImageSrc(i, t));
                getImageSrcObj.value = document.querySelector(imageSrc(i, t)).getAttribute('src');
                //---------------------------insert image width-----------------------------------------
                const getImageWidthObj = document.querySelector(getImageWidth(i, t));
                getImageWidthObj.value = parseInt(document.querySelector(imageSrc(i, t)).getAttribute('width'));
                //---------------------------insert image height-----------------------------------------
                const getImageHeightObj = document.querySelector(getImageHeight(i, t));
                getImageHeightObj.value = parseInt(document.querySelector(imageSrc(i, t)).getAttribute('height'));
                //-----------------------------insert title----------------------------------------------
                const getImageTitleObj = document.querySelector(getImageTitle(i, t));
                getImageTitleObj.value = document.querySelector(imageTitleInput(i, t)).innerHTML;
                getImageTitleObj.addEventListener('keyup', (e) => {
                    var imageTitle = getImageTitleObj.value;
                    document.querySelector(imageTitleInput(i, t)).innerHTML = imageTitle;
                }, false);
            }
        })
    }

    closeButton(i, t) {
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == `closeImageModal-${t}-${i}`) {
                const getImageTitleObj = document.querySelector(getImageTitle(i, t));
                var imageTitle = getImageTitleObj.value;
                if ( imageTitle === '' ) {
                    imageTitle = 'image';
                }
                document.querySelector(imageTitleInput(i, t)).innerHTML = imageTitle;
                //----------------------------set image src-----------------------------
                const getImageSrcObj = document.querySelector(getImageSrc(i, t));
                document.querySelector(imageSrc(i, t)).setAttribute('src', getImageSrcObj.value);
                //----------------------------set image width----------------------------
                const getImageWidthObj = document.querySelector(getImageWidth(i, t));
                document.querySelector(imageSrc(i, t)).setAttribute('width', `${getImageWidthObj.value}px`);
                //----------------------------set image height----------------------------
                const getImageHeightObj = document.querySelector(getImageHeight(i, t));
                document.querySelector(imageSrc(i, t)).setAttribute('height', `${getImageHeightObj.value}px`);
                document.querySelector(modalCover(i, t)).style.display = 'none';
            }   
        }, false);            
    }
    closeImageField(i, t) {
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == `closeImage-${t}-${i}`) {
                let removeConfirm = confirm(`Are you sure?`);
                if( removeConfirm ) {
                    const imageWrapperObj = document.querySelector(imageWrapper(i, t));
                    imageWrapperObj.parentNode.removeChild(imageWrapperObj);
                    const modalWrapper = document.querySelector(modalCover(i, t));
                    modalWrapper.parentNode.removeChild(modalWrapper);
                }
            }   
        }, false);
    }
    moveUp (i, t) {
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == `moveUpImage-${t}-${i}`) {
                const targetElement = document.querySelector(imageWrapper(i, t));
                const previousElement = targetElement.previousElementSibling;
                const parentElement = targetElement.parentElement;
                parentElement.insertBefore(targetElement, previousElement); 
            }
        })

    }
    moveDown(i, t) {
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == `moveDownImage-${t}-${i}`) {             
                const targetElement = document.querySelector(imageWrapper(i, t));
                const nextElement = targetElement.nextElementSibling;
                const parentElement = targetElement.parentNode;
                parentElement.insertBefore(targetElement, nextElement.nextSibling);
            }
        })
    }

    uploader (indicator, t) {
        document.querySelector(uploadBrowseImgBtn(indicator, t)).addEventListener('click', (e) => {
            e.target.nextElementSibling.click();
        }, false);

        document.querySelector(uploadImgImage(indicator, t)).addEventListener('change', (e) => {
            let file = document.querySelector(uploadImgImage(indicator, t));
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

        document.querySelector(uploadImageImgBtn(indicator, t)).addEventListener('click', (e) => {
            let val = e.target;
            let el = e.target.previousElementSibling;
            let src = document.querySelector(getImageSrc(indicator, t));
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
}


export default AddImage;
