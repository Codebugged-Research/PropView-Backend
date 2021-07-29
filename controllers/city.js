const CityModel = require("../models/city");

exports.getAllCities = (req, res) => {
  try {
    CityModel.findAllCities((err, cities) => {
      if (err) {
        return res.status(400).json(err);
      } else {
        return res.status(200).json(cities);
      }
    });
  } catch (err) {
    return res.status(500).json(err);
  }
};
