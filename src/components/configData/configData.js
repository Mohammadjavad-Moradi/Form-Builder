import axios from 'axios';




export const configData = {
    //POST
    proxy: `https://cors-anywhere.herokuapp.com/`,
    //PRESET URL
    presetURL: `Http://testweb.vanlaartso.eu:8080/`,
    //GET
    createApi: `Http://testweb.vanlaartso.eu:8080/form/create`,
    //GET
    getApi: `Http://testweb.vanlaartso.eu:8080/api/forms/get?id=`,
    //GET
    getAllApi: `Http://api.vanlaartso.eu:9090/api/forms/getall`,
    //LOGIN
    loginApi: `Http://testweb.vanlaartso.eu:8080/api/account/login`,
    //UPLOAD
    uploadApi: `Http://testweb.vanlaartso.eu:8080/api/forms/upload`,
    //GETANSWERS
    getAnswers: `Http://testweb.vanlaartso.eu:8080/api/forms/getanswer?id=`,
    // USER&PASSWORD
    postData: {
        email: '',
        password: ''
    },
    //AXIOSCONFIG
    axiosConfig: {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
            // "Access-Control-Allow-Origin": "*"
        }
    }
}

export async function ajaxUpload(element, src, val) {
    val.style.fontWeight = 'bold';
    val.value = `Uploading...`;
    try {
        const getToken = await axios.post(`${configData.loginApi}`, configData.postData, configData.axiosConfig);
        const token = getToken.data.Data;

        let file = new FormData();
        file.append("file", element.files[0]);
        const imageRes = await axios.post(`${configData.uploadApi}`, file, {
            onUploadProgress: function(progressEvent) {        
                var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                if ( percentCompleted < 100) {
                    val.value = `${percentCompleted} %` ;
                } else if (percentCompleted == 100 ) {
                    val.value = `Uploaded`;
                }  
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }        
        })
        console.log(imageRes.data.Data)
        src.value = `${imageRes.data.Data}`;

        val.style.fontWeight = 'normal';

    } catch (error) {
        alert(error)
    }
}
