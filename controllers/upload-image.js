const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const {
  BUCKET_ENDPOINT,
  BUCKET_ACCESS_KEY,
  BUCKET_SECRET_KEY,
} = require("../config/config");

exports.uploadImage = (req, res) => {
  const spacesEndpoint = new aws.Endpoint(BUCKET_ENDPOINT);
  const s3 = new aws.S3({
    endpoint: spacesEndpoint,
    accessKeyId: BUCKET_ACCESS_KEY,
    secretAccessKey: BUCKET_SECRET_KEY,
  });
  const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: "propview/User",
      acl: "public-read",
      key: function (request, file, cb) {
        cb(null, file.originalname);
      },
    }),
  }).array("upload", 1);
  upload(req, res, function (error) {
    if (error) {
      return res.status(400).json({
        error: error,
      });
    }
    res.json({ message: "success" });
  });
};

exports.uploadPropertyImage = (req, res) => {
  const spacesEndpoint = new aws.Endpoint(BUCKET_ENDPOINT);
  const s3 = new aws.S3({
    endpoint: spacesEndpoint,
    accessKeyId: BUCKET_ACCESS_KEY,
    secretAccessKey: BUCKET_SECRET_KEY,
  });
  const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: "propview/Property",
      acl: "public-read",
      key: function (request, file, cb) {
        cb(null, file.originalname);
      },
    }),
  }).array("upload", 1);
  upload(req, res, function (error) {
    if (error) {
      return res.status(400).json({
        error: error,
      });
    }
    res.json({ message: "success" });
  });
};

exports.uploadInspection = (req, res) => {
  const spacesEndpoint = new aws.Endpoint(BUCKET_ENDPOINT);
  const s3 = new aws.S3({
    endpoint: spacesEndpoint,
    accessKeyId: BUCKET_ACCESS_KEY,
    secretAccessKey: BUCKET_SECRET_KEY,
  });
  const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: "propview/Inspection",
      acl: "public-read",
      key: function (request, file, cb) {
        cb(null, file.originalname);
      },
    }),
  }).array("upload", 1);
  upload(req, res, function (error) {
    if (error) {
      return res.status(400).json({
        error: error,
      });
    }
    res.json({ message: "success" });
  });
}
