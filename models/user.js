var dbConn = require("../config/database");

var User = function (user) {
  this.user_id = user.user_id;
  this.parent_id = user.parent_id;
  this.name = user.name;
  this.designation = user.designation;
  this.official_email = user.official_email;
  this.personal_email = user.personal_email;
  this.official_number = user.official_number;
  this.personal_number = user.personal_number;
  this.password = user.password;
  this.local_address = user.local_address;
  this.permanent_address = user.permanent_address;
  this.state = user.state;
  this.city = user.city;
  this.cid = user.cid;
  this.sid = user.sid;
  this.ccid = user.ccid;
  this.ref_name1 = user.ref_name1;
  this.ref_email1 = user.ref_email1;
  this.ref_mobile1 = user.ref_mobile1;
  this.ref_address1 = user.ref_address1;
  this.ref_name2 = user.ref_name2;
  this.ref_email2 = user.ref_email2;
  this.ref_mobile2 = user.ref_mobile2;
  this.ref_address2 = user.ref_address2;
  this.user_type = user.user_type;
  this.status = user.status;
  this.added_on = user.added_on;
  this.device_token = user.device_token;
};

//Get All Users
User.getAllUsers = (result) => {
  dbConn.query("SELECT * FROM tbl_users WHERE status=1 ORDER BY name ASC", (err, res) => {
    if (err) {
      result(null, err);
    }
    result(null, res);
  });
};

User.findEmail = (email, result) => {
  dbConn.query(
    "SELECT * FROM tbl_users WHERE official_email=? OR official_number=?",
    [email, email],
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

User.findUserById = (id, result) => {
  dbConn.query("SELECT * FROM tbl_users WHERE user_id=?", id, (err, res) => {
    if (err) {
      result(null, err);
    }
    result(null, res);
  });
};

User.findDeviceTokenByUserId = (id, result) => {
  dbConn.query(
    "SELECT device_token FROM tbl_users WHERE user_id=?",
    id,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

User.findByIdAndUpdate = (id, userReqData, result) => {
  dbConn.query(
    "UPDATE tbl_users SET name=?,designation=?,official_email=?,personal_email=?,official_number=?,personal_number=?,password=?,local_address=?,permanent_address=?,state=?,city=?,cid=?,sid=?,ccid=?,ref_name1=?,ref_email1=?,ref_mobile1=?,ref_address1=?,ref_name2=?,ref_email2=?,ref_mobile2=?,ref_address2=?,user_type=?,status=?,added_on=?,device_token=? WHERE user_id=?",
    [
      userReqData.name,
      userReqData.designation,
      userReqData.official_email,
      userReqData.personal_email,
      userReqData.official_number,
      userReqData.personal_number,
      userReqData.password,
      userReqData.local_address,
      userReqData.permanent_address,
      userReqData.state,
      userReqData.city,
      userReqData.cid,
      userReqData.sid,
      userReqData.ccid,
      userReqData.ref_name1,
      userReqData.ref_email1,
      userReqData.ref_mobile1,
      userReqData.ref_address1,
      userReqData.ref_name2,
      userReqData.ref_email2,
      userReqData.ref_mobile2,
      userReqData.ref_address2,
      userReqData.user_type,
      userReqData.status,
      userReqData.added_on,
      userReqData.device_token,
      id,
    ],
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

User.updateDeviceToken = (id, device_token, result) => {
  dbConn.query(
    "UPDATE tbl_users SET device_token=? WHERE tbl_users.user_id=?",
    [device_token, id],
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

User.findUserByUserType = (userType, result) => {
  dbConn.query(
    "SELECT * FROM tbl_users WHERE user_type=?",
    userType,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

User.findUsersByManger = (id, result) => {
  dbConn.query(
    "SELECT * FROM tbl_users WHERE parent_id=? AND status=1 ORDER BY name ASC",
    id,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

module.exports = User;
