const express = require('express');
const server = express();
const googleDriveRoutes = require('./googleDriveRoutes');

(()=>{
server.use(express.urlencoded({extended:true}))
config_routes();
})();


function config_routes() {
    server.use('/google_drive', googleDriveRoutes)
}

module.exports = server