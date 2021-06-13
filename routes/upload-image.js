const express = require("express");
const router = express.Router();

const {uploadImage} = require("../controllers/upload-image");

router.post("/upload/image", uploadImage)

module.exports = router;