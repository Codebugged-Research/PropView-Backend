const dbConn = require("../config/database");

var TenantFamily = (tenantFamily) => {
  this.family_id = tenantFamily.family_id;
  this.tenant_id = tenantFamily.tenant_id;
  this.name = tenantFamily.name;
  this.sex = tenantFamily.sex;
  this.age = tenantFamily.age;
  this.mobile = tenantFamily.mobile;
  this.email = tenantFamily.email;
  this.relationship = tenantFamily.relationship;
};

TenantFamily.saveTenantFamily = (tenantFamilyReqData, result) => {
  dbConn.query(
    "INSERT INTO tbl_tenant_family SET ?",
    tenantFamilyReqData,
    (err, res) => {
      if (err) {
        result(err);
      } else {
        result(null, res);
      }
    }
  );
};

TenantFamily.findTenantByTenantId = (tenant_id, result) => {
  dbConn.query(
    "SELECT * FROM tbl_tenant_family WHERE tenant_id=?",
    tenant_id,
    (err, res) => {
      if (err) {
        result(err);
      } else {
        result(null, res);
      }
    }
  );
};

TenantFamily.findByIdAndUpdate = (family_id, tenantFamilyReqData, result) => {
  dbConn.query(
    "UPDATE tbl_tenant_family SET family_id=?, tenant_id=?, name=?, sex=?, age=?, mobile=?, email=?, relationship=? WHERE family_id=?",
    [
      tenantFamilyReqData.family_id,
      tenantFamilyReqData.tenant_id,
      tenantFamilyReqData.name,
      tenantFamilyReqData.sex,
      tenantFamilyReqData.age,
      tenantFamilyReqData.mobile,
      tenantFamilyReqData.email,
      tenantFamilyReqData.relationship,
      family_id,
    ],
    (err, res) => {
      if (err) {
        result(err);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = TenantFamily;
