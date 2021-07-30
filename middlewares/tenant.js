const TenantModel = require("../models/tenant");

exports.createTenant = (req, res, next) => {
  const tenenatReqData = new TenantModel(req.body);
  try {
    TenantModel.saveTenant(tenenatReqData, (err, tenant) => {
      if (err) {
        console.log(err);
      }
      req.tenantId = tenant.insertId;
      next();
    });
  } catch (err) {
    console.log(err);
  }
};
