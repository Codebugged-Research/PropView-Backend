const PropertyOwnerModel = require("../models/property_owner");

exports.createPropertyOwner = (req, res) => {
  const propertyOwnerReqData = new PropertyOwnerModel(req.body);
  PropertyOwnerModel.savePropertyOwner(
    propertyOwnerReqData,
    (err, propertyOwner) => {
      if (err) {
        return res.status(400).json({
          success: "false",
        });
      }
      return res.json({
        success: "true",
        data: { propertyOwner },
      });
    }
  );
};

exports.getPropertyList = (req, res) => {
  PropertyOwnerModel.getAllPropertyOwner((err, propertyOwner) => {
    if (err) {
      return res.status(400).json({
        error: "No Property Owner List is found!",
      });
    }
    return res.json({
      count: propertyOwner.length,
      data: {
        propertyOwner,
      },
    });
  });
};

exports.getPropertyByOwnerId = (req, res) => {
  PropertyOwnerModel.findPropertyByOwnerId(
    req.params.owner_id,
    (err, propertyOwner) => {
      if (err) {
        return res.status(400).json({
          error: "No Property Owner List is found!",
        });
      }
      return res.json({
        count: propertyOwner.length,
        data: {
          propertyOwner,
        },
      });
    }
  );
};

exports.updatePropertyOwner = (req, res) => {
  const propertyOwnerReqData = new PropertyOwnerModel(req.body);
  PropertyOwnerModel.findByOwnerIdAndUpdate(
    req.params.owner_id,
    propertyOwnerReqData,
    (err, propertyOwner) => {
      if (err) {
        return res.status(400).json({
          success: "false",
        });
      }
      res.json({
        success: "true",
      });
    }
  );
};

exports.searchPropertyOwner = (req, res) => {
  PropertyOwnerModel.searchPropertyOwner(
    req.body.query,
    (err, propertyOwner) => {
      if (err) {
        return res.status(400).json({
          error: "No Property Owner List is found!",
        });
      }
      return res.json({
        count: propertyOwner.length,
        propertyOwner,
      });
    }
  );
};
