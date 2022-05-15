exports.uploadImageController = (req, res) => {
   res.send({images : req.body?.imagesDetails})
}