const { query } = require("../config/database");
var dbConn = require("../config/database");

var PropertyOwner = function (propertyOwner) {
  this.owner_id = propertyOwner.owner_id;
  this.salutation = propertyOwner.salutation;
  this.owner_name = propertyOwner.owner_name;
  this.owner_number = propertyOwner.owner_number;
  this.whatsapp_number = propertyOwner.whatsapp_number;
  this.owner_email = propertyOwner.owner_email;
  this.owner_address = propertyOwner.owner_address;
  this.owner_password = propertyOwner.owner_password;
  this.owner_name1 = propertyOwner.owner_name1;
  this.owner_email1 = propertyOwner.owner_email1;
  this.owner_number1 = propertyOwner.owner_number1;
  this.country = propertyOwner.country;
  this.account_name = propertyOwner.account_name;
  this.bank_name = propertyOwner.bank_name;
  this.account_number = propertyOwner.account_number;
  this.bank_ifsc = propertyOwner.bank_ifsc;
  this.account_type = propertyOwner.account_type;
  this.pan_number = propertyOwner.pan_number;
  this.pan_number1 = propertyOwner.pan_number1;
  this.aadhaar = propertyOwner.aadhaar;
  this.aadhaar1 = propertyOwner.aadhaar1;
  this.instruction = propertyOwner.instruction;
  this.ref_name = propertyOwner.ref_name;
  this.ref_email = propertyOwner.ref_email;
  this.ref_number = propertyOwner.ref_number;
  this.ref_relation = propertyOwner.ref_relation;
  this.ref_address = propertyOwner.ref_address;
  this.poa_name = propertyOwner.poa_name;
  this.poa_number = propertyOwner.poa_number;
  this.poa_email = propertyOwner.poa_email;
  this.poa_relation = propertyOwner.poa_relation;
  this.poa_address = propertyOwner.poa_address;
  this.for_ref = propertyOwner.for_ref;
  this.addedon = propertyOwner.addedon;
  this.status = propertyOwner.status;
  this.sendmail = propertyOwner.sendmail;
  this.newsletter = propertyOwner.newsletter;
};

//* Get Property by Owner Id
PropertyOwner.findPropertyByOwnerId = (ownerId, result) => {
  dbConn.query(
    "SELECT * FROM property_owner WHERE owner_id=?",
    ownerId,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

//* Get All Property owner
PropertyOwner.getAllPropertyOwner = (result) => {
  dbConn.query("SELECT * FROM property_owner WHERE status=1", (err, res) => {
    if (err) {
      result(null, err);
    }
    result(null, res);
  });
};

//* Create Property
PropertyOwner.savePropertyOwner = (propertyOwnerReqData, result) => {
  dbConn.query(
    "INSERT INTO property_owner SET ?",
    propertyOwnerReqData,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};


PropertyOwner.searchPropertyOwner = (query1,query2,query3,query4, result) => {
  dbConn.query(
    "SELECT * FROM property_owner WHERE status=1 AND owner_name like ? OR owner_name like ? OR owner_name like ? OR owner_name = ? ",
    [query1,query2,query3,query4],
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
}

PropertyOwner.searchProperty = (query, result) => {
  var nestingOptions = [
    {
      tableName: "tableproperty",
      pkey: "property_id",
      fkeys: [
        { table: "tbl_country", col: "cid" },
        { table: "tbl_state", col: "sid" },
        { table: "tbl_city", col: "ccid" },
        { table: "tbl_locality", col: "locid" },
        { table: "tbl_society", col: "socid" },
      ],
    },
    { tableName: "tbl_country", pkey: "cid" },
    { tableName: "tbl_state", pkey: "sid" },
    { tableName: "tbl_city", pkey: "ccid" },
    { tableName: "tbl_locality", pkey: "locid" },
    { tableName: "tbl_society", pkey: "socid" },
  ];
  dbConn.query(
    {
      sql: "SELECT * from tableproperty JOIN tbl_country ON tableproperty.cid = tbl_country.cid JOIN property_owner ON tableproperty.owner_id = property_owner.owner_id JOIN tbl_state ON tableproperty.sid = tbl_state.sid JOIN tbl_city ON tableproperty.ccid = tbl_city.ccid  JOIN tbl_locality ON tableproperty.locid = tbl_locality.locid JOIN tbl_society ON tableproperty.socid = tbl_society.socid WHERE tableproperty.status=1 AND tableproperty.socid IN (SELECT socid FROM tbl_society WHERE status=1 AND socname like ?)",
      nestTables: true,
    }, 
    query,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
}

//* Update Property Owner
PropertyOwner.findByOwnerIdAndUpdate = (
  ownerId,
  propertyOwnerReqData,
  result
) => {
  dbConn.query(
    "UPDATE property_owner SET owner_id=?,salutation=?,owner_name=?,owner_number=?,whatsapp_number=?,owner_email=?,owner_address=?,owner_password=?,owner_name1=?,owner_email1=?,owner_number1=?,country=?,account_name=?,bank_name=?,account_number=?,bank_ifsc=?,account_type=?,pan_number=?,pan_number1=?,aadhaar=?,aadhaar1=?,instruction=?,ref_name=?,ref_email=?,ref_number=?,ref_relation=?,ref_address=?,poa_name=?,poa_number=?,poa_email=?,poa_relation=?,poa_address=?,for_ref=?,addedon=?,status=?,sendmail=?,newsletter=? WHERE status=1 AND owner_id=?",
    [
      propertyOwnerReqData.owner_id,
      propertyOwnerReqData.salutation,
      propertyOwnerReqData.owner_name,
      propertyOwnerReqData.owner_number,
      propertyOwnerReqData.whatsapp_number,
      propertyOwnerReqData.owner_email,
      propertyOwnerReqData.owner_address,
      propertyOwnerReqData.owner_password,
      propertyOwnerReqData.owner_name1,
      propertyOwnerReqData.owner_email1,
      propertyOwnerReqData.owner_number1,
      propertyOwnerReqData.country,
      propertyOwnerReqData.account_name,
      propertyOwnerReqData.bank_name,
      propertyOwnerReqData.account_number,
      propertyOwnerReqData.bank_ifsc,
      propertyOwnerReqData.account_type,
      propertyOwnerReqData.pan_number,
      propertyOwnerReqData.pan_number1,
      propertyOwnerReqData.aadhaar,
      propertyOwnerReqData.aadhaar1,
      propertyOwnerReqData.instruction,
      propertyOwnerReqData.ref_name,
      propertyOwnerReqData.ref_email,
      propertyOwnerReqData.ref_number,
      propertyOwnerReqData.ref_relation,
      propertyOwnerReqData.ref_address,
      propertyOwnerReqData.poa_name,
      propertyOwnerReqData.poa_number,
      propertyOwnerReqData.poa_email,
      propertyOwnerReqData.poa_relation,
      propertyOwnerReqData.poa_address,
      propertyOwnerReqData.for_ref,
      propertyOwnerReqData.addedon,
      propertyOwnerReqData.status,
      propertyOwnerReqData.sendmail,
      propertyOwnerReqData.newsletter,
      ownerId,
    ],
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

module.exports = PropertyOwner;
