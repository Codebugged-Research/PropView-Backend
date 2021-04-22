var dbConn = require("../config/database");

var PropertyOwner = (propertyOwner) => {
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

//Get All Property owner
PropertyOwner.getAllPropertyOwner = (result) => {
    dbConn.query('SELECT * FROM property_owner', (err, res) => {
        if(err) {
            console.log("Error while fetching property_owner!");
            result(null, err);
        }
        console.log("Great Success while fetch property_owner!");
        result(null, res);
    })
}

module.exports = PropertyOwner;