const PropertyOwnerModel = require("../models/property_owner");

exports.getPropertyList = (req, res) => {
  PropertyOwnerModel.getAllPropertyOwner((err, propertyOwner) => {
    if (err) {
      return res.status(400).json({
        error: "No Property Owner List is found!",
      });
    }
    res.json(propertyOwner);
  });
};
