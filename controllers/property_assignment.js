const PropertyAssignment = require("../models/property_assignment");

exports.createPropertyAssignment = (req, res) => {
  const property_assignment = new PropertyAssignment(req.body);
  try {
    PropertyAssignment.savePropertyAssignment(
      property_assignment,
      (err, propertyAssignment) => {
        if (err) {
          return res.status(500).json({
            error: "No Property List is not saved!",
          });
        }
        return res.json({
          success: "true",
        });
      }
    );
  } catch (err) {
    return res.status(400).json({
      success: false,
    });
  }
};

exports.getPropertyAssignmentByUserId = (req, res) => {
  try {
    PropertyAssignment.findByUserId(
      req.params.userId,
      (err, propertyAssignment) => {
        if (err) {
          return res.status(500).json({
            success: "false",
          });
        }
        return res.json({
          success: "true",
          count: propertyAssignment.length,
          data: {
            propertyAssignment,
          },
        });
      }
    );
  } catch (err) {
    return res.status(400).json({
      success: false,
    });
  }
};

exports.isAssigned = (req, res) => {
  try {
    PropertyAssignment.isPropertyAssigned(
      req.body.id_1,
      req.body.id_2,
      req.body.id_3,
      req.body.id_4,
      (err, propertyAssignment) => {
        if (err) {
          return res.status(500).json({
            success: "false",
          });
        }
        return res.json({
          success: "true",
          count: propertyAssignment.length,
          data: {
            propertyAssignment,
          },
        });
      }
    );
  } catch (err) {
    return res.status(400).json({
      success: false,
    });
  }
}

exports.updatePropertyAssignment = (req, res) => {
  const property_assignment = new PropertyAssignment(req.body);
  try {
    PropertyAssignment.findByIdAndUpdate(
      req.params.id,
      property_assignment,
      (err, propertyAssignment) => {
        if (err) {
          return res.status(500).json({
            success: "false",
          });
        }
        return res.json({
          success: "true",
        });
      }
    );
  } catch (err) {
    return res.status(400).json({
      success: false,
    });
  }
};
