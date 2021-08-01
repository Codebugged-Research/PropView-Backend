var dbConn = require("../config/database");

var City = function (city) {
  this.ccid = city.ccid;
  this.cid = city.cid;
  this.sid = city.sid;
  this.ccname = city.ccname;
  this.cc_slug = city.cc_slug;
  this.cc_desc = city.cc_desc;
  this.city_icon = city.city_icon;
  this.status = city.status;
  this.meta_title = city.meta_title;
  this.meta_description = city.meta_description;
  this.totalp = city.totalp;
  this.totals = city.totals;
};

City.findAllCities = (result) => {
  dbConn.query("SELECT * FROM tbl_city", (err, res) => {
    if (err) {
      result(null, err);
    }
    result(null, res);
  });
};

City.findCityById = (id, result) => {
  dbConn.query("SELECT * FROM tbl_city WHERE ccid=?", (err, res) => {
    if (err) {
      result(null, err);
    }
    result(null, res);
  });
};

module.exports = City;
