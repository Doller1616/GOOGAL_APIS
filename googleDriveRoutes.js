const Routes = require('express').Router();
const googleDriveOperations = require('./googleDriveMW');
const { uploadImageController } = require('./googleDriveController')
const { multer, uploadFileToGoogleDrive } = googleDriveOperations;

(() => {

    getRoutes();
    postRoutes();
    patchRoutes();
    deleteRoutes();

})();

function getRoutes() {

}
function postRoutes() {
   Routes.post('/upload',multer.any(), uploadFileToGoogleDrive, uploadImageController )
}
function patchRoutes() {

}
function deleteRoutes() {

}


module.exports = Routes