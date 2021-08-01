const RegularInspectionRowModel = require("../models/regular_inspection_row");

exports.createInspectionRows = (req, res) => {
  const inspectionRowReqData = new RegularInspectionRowModel(req.body);
  try {
    RegularInspectionRowModel.saveInspectionRow(
      inspectionRowReqData,
      (err, inspectionRow) => {
        if (err) {
          return res.status(400).json(err);
        } else {
          return res.status(200).json(inspectionRow);
        }
      }
    );
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.getInspectionRowById = (req, res) => {
  try {
    RegularInspectionRowModel.findByRowId(
      req.params.row_id,
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
