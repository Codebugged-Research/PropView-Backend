var dbConn = require("../config/database");

var GeoData = function (geoData) {
    this.id = geoData.id;
    this.user_id = geoData.user_id;
    this.lat = geoData.lat;
    this.lon = geoData.lon;
    this.created_at = geoData.created_at;
};

GeoData.createGeo = (newGeo, result) => {
    dbConn.query(
        "INSERT INTO app_geo_data SET ?",
        newGeo,
        (err, res) => {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        }
    );
}

GeoData.findAll = (result) => {
    dbConn.query("SELECT * FROM app_geo_data", (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

GeoData.findGeoByUseryId = (userid, result) => {
    dbConn.query(
        "SELECT * FROM app_geo_data WHERE user_id=?",
        userid,
        (err, res) => {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        }
    );
};

module.exports = GeoData;