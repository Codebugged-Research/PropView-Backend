const RegularInspectionModel = require("../models/regular_inspection");

exports.createRegularInspection = (req, res) => {
  const regularInspectionReqData = new RegularInspectionModel(req.body);
  try {
    RegularInspectionModel.saveInspection(
      regularInspectionReqData,
      (err, regularInspection) => {
        if (err) {
          return res.status(400).json(err);
        } else {
          return res.status(200).json(regularInspection);
        }
      }
    );
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.getRegularInspectionByInspectionId = (req, res) => {
  try {
    RegularInspectionModel.findByInspectionId(
      req.params.inspection_id,
      (err, regularInspection) => {
        if (err) {
          return res.status(400).json(err);
        } else {
          return res.status(200).json(regularInspection);
        }
      }
    );
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.getRegularInspectionByPropertyId = (req, res) => {
  try {
    RegularInspectionModel.findByInspectionId(
      req.params.property_id,
      (err, regularInspection) => {
        if (err) {
          return res.status(400).json(err);
        } else {
          return res.status(200).json(regularInspection);
        }
      }
    );
  } catch (err) {
    return res.status(500).json(err);
  }
};
