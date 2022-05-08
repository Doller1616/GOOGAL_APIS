const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');


const 
    CLIENT_ID = "688224427048...",
    CLIENT_SECRET = "GOCSPX-IBv...",
    REDIRECT_URI = "https://developers.google.com...",

    refresh_token = "1//04Q0ebVUOtQaMCg..."

const auth2Client =  new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

auth2Client.setCredentials({refresh_token});

const drive = google.drive({
    version: 'v3',
    auth : auth2Client
});

const filePath = path.join(__dirname,'images.jpg')

async function uploadFile(){

try {
    const response = await drive.files.create({
        requestBody : {
            name : 'handsome_man.jpg',
            mine_type: 'image/jpg',
        },
        media : {
            mine_type : 'image/jpg',
            body : fs.createReadStream(filePath)
        }
    });
 console.log(response.data)

}catch(err){
    console.log(err.message);
}
}

// uploadFile()

async function deleteFile(){

    try {
        const response = await drive.files.delete({ 
             fileId : "1e06qSCAA22ItJYqtQZOucPkRRlgSrowb"
        })
        console.log(response.data, response.status);
    }catch(err){
        console.log(err.message);
    }

}

// deleteFile();

async function generatePublicURL() {
    try {
       const fileId = '1p978WFzuVDjQjcofUtacjGMTPGLzmZNI';
       await drive.permissions.create({
           fileId,
           requestBody : {
               role : 'reader',
               type : 'anyone'
           }
       })
       const result = await drive.files.get({
           fileId,
           fields: 'webViewLink,  webContentLink'
       })
       console.log("result", result.data);
    } catch (error) {
        console.log(error.message);
    }
}

generatePublicURL();