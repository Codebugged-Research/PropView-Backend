const express = require("express");
const router = express.Router();

const {uploadImage, uploadPropertyImage} = require("../controllers/upload-image");

router.post("/upload/image", uploadImage)
router.post("/upload/property", uploadPropertyImage);

module.exports = router;