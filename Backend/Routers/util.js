const express = require('express')
const router = express.Router();
const multer  = require('multer')

const storage = multer.diskStorage({
    destination:  (req, file, cb) => {
      cb(null, './static/uploads')
    },

    filename:  (req, file, cb) => {
      
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

  router.post("/uploadfile", upload.single("myfile"), (req, res) => {
    res.status(200).json({status: "success"});
  });

  module.exports= router;
  