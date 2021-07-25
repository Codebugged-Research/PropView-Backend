const TenantModel = require("../models/tenant");

exports.createTenant = (req, res) => {
  const tenenatReqData = new TenantModel(req.body);
  try {
    TenantModel.saveTenant(tenenatReqData, (err, tenant) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json({ success: true });
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getAllTenant = (req, res) => {
  try {
    TenantModel.findAllTenants((err, tenant) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json(tenant);
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getTenantById = (req, res) => {
  try {
    TenantModel.findTenantById(req.params.tenant_id, (err, tenant) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json(tenant);
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.updateTenant = (req, res) => {
  const tenenatReqData = new TenantModel(req.body);
  try {
    TenantModel.findByIdAndUpdate(
      req.params.tenant_id,
      tenenatReqData,
      (err, tenant) => {
        if (err) {
          return res.status(400).json({ error: err });
        }
        return res.status(200).json({ success: true });
      }
    );
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
