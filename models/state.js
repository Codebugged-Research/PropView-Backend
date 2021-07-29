var dbConn = require("../config/database");

var State = (state) => {
  this.sid = state.sid;
  this.cid = state.cid;
  this.sname = state.sname;
  this.scode = state.scode;
  this.scode_gst = state.scode_gst;
  this.state_icon = state.state_icon;
  this.status = state.status;
};

State.findAllStates = (result) => {
  dbConn.query("SELECT * FROM tbl_state", (err, res) => {
    if (err) {
      result(null, err);
    }
    result(null, res);
  });
};

module.exports = State;
