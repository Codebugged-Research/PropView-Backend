const AWS = require("aws-sdk");
const uuid = require("uuid");

const {
  BUCKET_NAME,
  BUCKET_ENDPOINT,
  BUCKET_ACCESS_KEY,
  BUCKET_SECRET_KEY,
} = require("../config/config");

exports.uploadImage = (req, res) => {
  const s3 = new AWS.S3({
    endpoint: BUCKET_ENDPOINT,
    accessKeyId: BUCKET_ACCESS_KEY,
    secretAccessKey: BUCKET_SECRET_KEY,
  });

  let fileType = req.body.fileType;
  if (fileType != ".jpg" && fileType != ".png" && fileType != ".jpeg") {
    return res
      .status(403)
      .json({ success: false, message: "Image format invalid" });
  }

  fileType = fileType.substring(1, fileType.length);

  const fileName = uuid.v4();

  const s3Params = {
    Bucket: BUCKET_NAME,
    Key: fileName + "." + fileType,
    Expires: 60 * 60,
    ContentType: "image/" + fileType,
    ACL: "public-read",
  };

  s3.getSignedUrl("putObject", s3Params, (err, data) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    const returnData = {
      success: true,
      uploadUrl: data,
      downloadUrl:
        `https://${BUCKET_NAME}.sgp1.digitaloceanspaces.com/User/${fileName}` + "." + fileType,
    };
    return res.status(201).json(returnData);
  });
};
