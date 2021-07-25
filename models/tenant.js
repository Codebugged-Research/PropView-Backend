var dbConn = require("../config/database");

var Tenant = (tenant) => {
  this.tenant_id = tenant.tenant_id;
  this.name = tenant.name;
  this.password = tenant.password;
  this.pemail = tenant.pemail;
  this.semail = tenant.semail;
  this.pmobile = tenant.pmobile;
  this.smobile = tenant.smobile;
  this.hphone = tenant.hphone;
  this.ophone = tenant.ophone;
  this.isFamily = tenant.isFamily;
  this.paddress = tenant.paddress;
  this.city = tenant.city;
  this.state = tenant.state;
  this.pan = tenant.pan;
  this.aadhar = tenant.aadhar;
  this.citizenship = tenant.citizenship;
  this.company = tenant.company;
  this.caddress = tenant.caddress;
  this.designation = tenant.designation;
  this.totalmembers = tenant.totalmembers;
  this.planlord = tenant.planlord;
  this.planlord_number = tenant.planlord_number;
  this.spouse_name = tenant.spouse_name;
  this.spouse_email = tenant.spouse_email;
  this.spouse_mobile = tenant.spouse_mobile;
  this.status = tenant.status;
  this.billing = tenant.billing;
};

//Save Tenant
Tenant.saveTenant = (tenantReqData, result) => {
  dbConn.query("INSERT INTO tbl_tenant SET ?", tenantReqData, (err, res) => {
    if (err) {
      result(null, err);
    }
    result(null, res);
  });
};

//Find all Tenants
Tenant.findAllTenants = (result) => {
  dbConn.query("SELECT * FROM tbl_tenant", (err, res) => {
    if (err) {
      result(null, err);
    }
    result(null, res);
  });
};

//Find Tenant by Id
Tenant.findTenantById = (tenant_id, result) => {
  dbConn.query(
    "SELECT * FROM tbl_tenant WHERE tenant_id=?",
    tenant_id,
    (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

//Update Tenant
Tenant.findByIdAndUpdate = (tenant_id, tenantReqData, result) => {
  dbConn.query(
    "UPDATE tbl_tenant SET tenant_id=?, name=?, password=?, pemail=?, semail=?, pmobile=?, smobile=?, hphone=?, ophone=?, isFamily=?, paddress=?, city=?, state=?, pan=?, aadhar=?, citizenship=?, company=?, caddress=?, designation=?, totalmembers=?, planlord=?, planlord_number=?, spouse_name=?, spouse_email=?, spouse_number=?, status=?, billing=? WHERE tenant_id=?",
    [
      tenantReqData.tenant_id,
      tenantReqData.name,
      tenantReqData.password,
      tenantReqData.pemail,
      tenantReqData.semail,
      tenantReqData.pmobile,
      tenantReqData.smobile,
      tenantReqData.hphone,
      tenantReqData.ophone,
      tenantReqData.isFamily,
      tenantReqData.paddress,
      tenantReqData.city,
      tenantReqData.state,
      tenantReqData.pan,
      tenantReqData.aadhar,
      tenantReqData.citizenship,
      tenantReqData.company,
      tenantReqData.caddress,
      tenantReqData.designation,
      tenantReqData.totalmembers,
      tenantReqData.planlord,
      tenantReqData.planlord_number,
      tenantReqData.spouse_name,
      tenantReqData.spouse_email,
      tenantReqData.spouse_mobile,
      tenantReqData.status,
      tenantReqData.billing,
      tenant_id,
    ],
    (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = Tenant;