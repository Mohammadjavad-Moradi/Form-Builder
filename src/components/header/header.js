import './header.css';
import {ajaxUpload} from '../configData/configData';

const modalCoverHeader = `#modalCoverHeader`;
const getHeaderTitle = `#getHeaderTitle`;
const formTitle = `#formTitle`;
const addImage = `addImage`;
const headerImgOptWrap = `#headerImgOptWrap`;
const headerImgItems = `.headerImgItem`;
const imageOptItemWrap = `imageOptItemWrap`;
const closeHeaderModal = `closeHeaderModal`;
const imageOptItemWrapClass = `.imageOptItemWrap`;
const headerEditIcon = `headerEditIcon`; 
const headerImages = `#headerImages`;
const headerImgTag = (i) => `#headerImgItem-${i}`;
const uploadImageHeaderBtn = (i) => `#uploadImageHeaderBtn-${i}`;
const uploadBrowseHeaderBtn = (i) => `#uploadBrowseHeaderBtn-${i}`;
const uploadImageHeader = (i) => `#uploadImageHeader-${i}`;
const optI = (T) => `#closeOptItm-${T}`;
const getImageSrc = (i) => `#getImageSrc-${i}`;
const getImageWidth = (i) => `#getImageWidth-${i}`;
const getImageHeight = (i) => `#getImageHeight-${i}`;


class Header {
    editHeader() {
        document.addEventListener('click' , (e) => {
            if ( e.target && e.target.id == headerEditIcon ) {
                document.querySelector(modalCoverHeader).style.display = 'block';
                document.querySelector(headerImgOptWrap).innerHTML = '';
                let optionArray = document.querySelectorAll(headerImgItems);
                let idArray = [];
                optionArray.forEach( (el) => {
                    idArray.push(el.getAttribute('id').substring(14, el.length));
                });
                for (var co = 0;  co < idArray.length; co++) {
                    let imageSrc = document.querySelector(headerImgTag(idArray[co])).getAttribute('src');
                    let imageWidth = parseInt(document.querySelector(headerImgTag(idArray[co])).getAttribute('width'));
                    if ( isNaN(imageWidth) ) {
                        imageWidth = '';
                    } 
                    let imageHeight = parseInt(document.querySelector(headerImgTag(idArray[co])).getAttribute('height'));
                    if ( isNaN(imageHeight) ) {
                        imageHeight = '';
                    } 
                    const imgOptionHtml = `
                    <div class="imageOptItemWrap" id="img-${idArray[co]}">
                        <input type="text" id="getImageWidth-${idArray[co]}" name="width" value="${imageWidth}" placeholder="Width">
                        <input type="text" id="getImageHeight-${idArray[co]}" name="height" value="${imageHeight}" placeholder="Height">
                        <input type="text" id="getImageSrc-${idArray[co]}" name="src" value="${imageSrc}" placeholder="Image src">
                        <input type="button" class="uploadBrowseBtn" id="uploadBrowseHeaderBtn-${idArray[co]}" value="Browse">
                        <input type="file" id="uploadImageHeader-${idArray[co]}" class="uploadFileTag" accept="image/jpeg, image/png">  
                        <input type="button" class="uploadOptBtn" id="uploadImageHeaderBtn-${idArray[co]}" value="Upload">
                        <input type="button" class="removeOptBtn" id="closeOptItm-${idArray[co]}" value="Remove"> 
                    </div>`;
                    document.querySelector(headerImgOptWrap).insertAdjacentHTML('beforeend', imgOptionHtml);
                    this.remover(idArray[co]);
                    this.uploader(idArray[co]);
                }
                //--------------------------get tilte------------------------------------------------
                const getHeaderTitleObj = document.querySelector(getHeaderTitle);
                getHeaderTitleObj.value = document.querySelector(formTitle).innerHTML;
                getHeaderTitleObj.addEventListener('keyup', (e) => {
                    var headerTitle = getHeaderTitleObj.value;
                    document.querySelector(formTitle).innerHTML = headerTitle;
                }, false);
            }
        })
    }

    insertImages() {
        let n = 1;
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == addImage ) {
                if( document.querySelector(headerImgOptWrap).lastElementChild ) {
                    let lastId = document.querySelector(headerImgOptWrap).lastElementChild.getAttribute('id');
                    n = parseInt(lastId.substring(4, lastId.length))+1;
                }
                //--------------------add html tag-------------------------
                const imgOptionHtml = `
                <div class="imageOptItemWrap" id="img-${n}">
                    <input type="number" id="getImageWidth-${n}" name="width" placeholder="Width">
                    <input type="number" id="getImageHeight-${n}" name="height" placeholder="Height">
                    <input type="text" id="getImageSrc-${n}" name="src" placeholder="Image src">
                    <input type="button" class="uploadBrowseBtn" id="uploadBrowseHeaderBtn-${n}" value="Browse">
                    <input type="file" id="uploadImageHeader-${n}" class="uploadFileTag" accept="image/jpeg, image/png">  
                    <input type="button" class="uploadOptBtn" id="uploadImageHeaderBtn-${n}" value="Upload">
                    <input type="button" class="removeOptBtn" id="closeOptItm-${n}" value="Remove">
                </div>`;
                document.querySelector(headerImgOptWrap).insertAdjacentHTML('beforeend', imgOptionHtml);
                this.uploader(n);
                this.remover(n);
                n++
            }
        })
    }
    //-----------------------------------remove images--------------------------------------------
    remover (indicator) {
        document.querySelector(optI(indicator)).addEventListener('click', (e) => {
            if ( document.getElementsByClassName(imageOptItemWrap).length > 0 ) {
                let removeConfirm = confirm(`Are you sure?`);
                if( removeConfirm ) {
                    let el = e.target;
                    el.parentNode.parentNode.removeChild(el.parentNode);
                }
            }    
        }, false);
    }
    //------------------------------------upload images--------------------------------------------
    uploader (indicator) {
        document.querySelector(uploadBrowseHeaderBtn(indicator)).addEventListener('click', (e) => {
            e.target.nextElementSibling.click();
        }, false);

        document.querySelector(uploadImageHeader(indicator)).addEventListener('change', (e) => {
            let file = document.querySelector(uploadImageHeader(indicator));
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
        })

        document.querySelector(uploadImageHeaderBtn(indicator)).addEventListener('click', (e) => {
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

    closeHeaderModal() {
        document.addEventListener('click', (e) => {
            if ( e.target && e.target.id == closeHeaderModal ) {
                let findLast = document.querySelectorAll(imageOptItemWrapClass);
                let lastNumber = findLast.length;
                let existId = [];
                findLast.forEach( (el) => {
                    existId.push(el.getAttribute('id'))
                });
                let existI = [];
                existId.forEach ( (el) => {
                    existI.push(el.split('-')[1])
                });
                const optionHtmlCreator = document.querySelector(headerImages);
                document.querySelector(headerImages).innerHTML = '';
                for (let c = 0 ; c < lastNumber ; c++ ) {
                    let optionHtmlImg = `<img class="headerImgItem" id="headerImgItem-${existI[c]}" src="" alt="edit" width="" height="">`;
                    optionHtmlCreator.insertAdjacentHTML('beforeend', optionHtmlImg); 
                    document.querySelector(headerImgTag(existI[c])).setAttribute('src', document.querySelector(getImageSrc(existI[c])).value);
                    document.querySelector(headerImgTag(existI[c])).setAttribute('width', `${document.querySelector(getImageWidth(existI[c])).value}px`);
                    document.querySelector(headerImgTag(existI[c])).setAttribute('height', `${document.querySelector(getImageHeight(existI[c])).value}px`);
                }
                document.querySelector(modalCoverHeader).style.display = 'none';
            }
        })
    }
}

export default Header;
