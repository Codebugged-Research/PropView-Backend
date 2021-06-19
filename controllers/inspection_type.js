const InspectionTypeModel = require("../models/inspection_type");

exports.createInspectionType = (req, res) => {
  const inspectionTypeReqData = new InspectionTypeModel(req.body);
  InspectionTypeModel.saveInspectionType(
    inspectionTypeReqData,
    (err, inspectionType) => {
      if (err) {
        return res.status(400).json({
          success: false,
        });
      }
      return res.json({
        success: "true",
        data: inspectionType,
      });
    }
  );
};

exports.getInspectionType = (req, res) => {
  InspectionTypeModel.findInspectionType((err, inspectionType) => {
    if (err) {
      return res.status(400).json({
        success: false,
      });
    }
    return res.json({
      success: "true",
      data: inspectionType,
    });
  });
};

exports.updateInspectionType = (req, res) => {
  const inspectionTypeReqData = new InspectionTypeModel(req.body);
  InspectionTypeModel.findByIdAndUpdate(
    req.params.inspectionTypeId,
    inspectionTypeReqData,
    (err, inspectionType) => {
      if (err) {
        res.status(400).json({
          success: false,
        });
      }
      res.json({
        success: true,
      });
    }
  );
};

exports.deleteInspectionType = (req, res) => {
  InspectionTypeModel.findByIdAndDelete(
    req.params.inspectionTypeId,
    (err, inspectionType) => {
      if (err) {
        res.status(400).json({
          success: false,
        });
      }
      res.json({
        success: true,
      });
    }
  );
};
