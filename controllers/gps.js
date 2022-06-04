const GeoModel = require("../models/gps");

exports.createGPS = (req, res) => {
    try {
        GeoModel.createGeo(req.body, (err, gps) => {
            if (err) {
                return res.status(400).json(err);
            } else {
                return res.status(200).json(gps);
            }
        });
    } catch (err) {
        return res.status(500).json(err);
    }
};

exports.getGPSByUserId = (req, res) => {
    try {
        GeoModel.findGeoByUseryId(req.params.user_id, (err, gps) => {
            if (err) {
                return res.status(400).json(err);
            } else {
                return res.status(200).json(gps);
            }
        });
    } catch (err) {
        return res.status(500).json(err);
    }
}

exports.getAllGPS = (req, res) => {
    try {
        GeoModel.findAll((err, gps) => {
            if (err) {
                return res.status(400).json(err);
            } else {
                return res.status(200).json(gps);
            }
        });
    } catch (err) {
        return res.status(500).json(err);
    }
}