const PropertyFacilityModel = require("../models/property_facility.js");

exports.getAllFacility = (req, res) => {
  try {
    PropertyFacilityModel.findPropertyFacility((err, facilities) => {
      if (err) {
        return res.status(400).json(err);
      } else {
        return res.status(200).json(facilities);
      }
    });
  } catch (err) {
    return res.status(500).json(err);
  }
};
