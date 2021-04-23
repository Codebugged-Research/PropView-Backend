var dbConn = require("../config/database");

var User = (user) => {
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
};

//Get All Property owner
User.getAllUsers = (result) => {
    dbConn.query('SELECT * FROM tbl_users', (err, res) => {
        if(err) {
            result(null, err);
        }
        result(null, res);
    })
}

module.exports = User;
