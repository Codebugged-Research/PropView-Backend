const InspectionModel = require("../models/inspection");

exports.createInspection = (req, res) => {
  const inspectionReqData = new InspectionModel(req.body);
    InspectionModel.saveInspection(inspectionReqData, (err, inspection) => {
      if (err) {
        res.status(400).json({
          success: false,
          message: "Error while creating inspection",
        });
      } else {
        res.json({
          success: true,
          data: { inspection },
        });
      }
    });
};

exports.getInspectionById = (req, res) => {
  try {
    InspectionModel.findInspectionById(
      req.params.inspection_id,
      (err, inspection) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: "Error while getting inspection",
          });
        } else {
          return res.status(200).json({
            success: true,
            data: { inspection },
          });
        }
      }
    );
  } catch (err) {
    return res.status(500).json({
      success: false,
    });
  }
};

exports.getInspection = (req, res) => {
  try {
    InspectionModel.findAllInspection((err, inspection) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: "Error while getting inspection",
        });
      } else {
        return res.status(200).json({
          success: true,
          data: { inspection },
        });
      }
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
    });
  }
};

exports.getInspectionByPropertyId = (req, res) => {
  try{
    InspectionModel.findInspectionByPropertyId(
      req.params.property_id,
      (err, inspection) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: "Error while getting inspection",
          });
        } else {
          return res.status(200).json({
            success: true,
            data: { inspection },
          });
        }
      }
    );
  } catch(err) {
    return res.status(500).json({
      success: false,

    });
  }
};

exports.getInspectionByPropertyIdAndType = (req, res) => {
  try {
    InspectionModel.findInspectionByPropertyIdAndType(
      req.params.property_id,
      req.params.type,
      (err, inspection) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: "Error while getting inspection",
          });
        } else {
          return res.status(200).json({
            success: true,
            data: { inspection },
          });
        }
      }
    );
  } catch (err) {
    return res.status(500).json({
      success: false,
    });
  }
}


exports.getInspectionByEmployeeId = (req, res) => {
  try{
    InspectionModel.findInspectionByEmployeeId(
      req.params.employee_id,
      (err, inspection) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: "Error while getting inspection",
          });
        } else {
          return res.status(200).json({
            success: true,
            data: { inspection },
          });
        }
      }
    );
  } catch(err) {
    return res.status(500).json({
      success: false,
    });
  }
};


exports.updateInspection = (req, res) => {
  try {
    const inspectionReqData = new InspectionModel(req.body);
    InspectionModel.updateInspection(
      req.params.inspection_id,
      inspectionReqData,
      (err, inspection) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: "Error while updating inspection",
          });
        } else {
          return res.status(200).json({
            success: true,
          });
        }
      }
    );
  } catch (err) {
    return res.status(500).json({
      success: false,
    });
  }
};

exports.deleteInspection = (req, res) => {
  try {
    InspectionModel.deleteInspection(
      req.params.inspection_id,
      (err, inspection) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: "Error while deleting inspection",
          });
        } else {
          return res.status(200).json({
            success: true,
          });
        }
      }
    );
  } catch (err) {
    return res.status(500).json({
      success: false,
    });
  }
};
