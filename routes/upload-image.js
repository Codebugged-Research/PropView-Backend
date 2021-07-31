const express = require("express");
const router = express.Router();

const {uploadImage, uploadPropertyImage, uploadInspection} = require("../controllers/upload-image");

router.post("/upload/image", uploadImage);
router.post("/upload/property", uploadPropertyImage);
router.post("/upload/inspection", uploadInspection);

module.exports = router;