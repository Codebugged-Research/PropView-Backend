const TenantFamilyModel = require("../models/tenant_family");

exports.createTenantFamily = (req, res) => {
  try {
    const tenantFamilyReqData = new TenantFamilyModel(req.body);
    TenantFamilyModel.saveTenantFamily(
      tenantFamilyReqData,
      (err, tenantFamily) => {
        if (err) {
          return res.status(400).json({ error: err });
        } else {
          return res.status(200).json({
            message: "Successfully created tenant family",
          });
        }
      }
    );
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

exports.getTenantFamilyById = (req, res) => {
  try {
    TenantFamilyModel.findTenantByTenantId(
      req.params.tenant_id,
      (err, tenantFamily) => {
        if (err) {
          return res.status(400).json({ error: err });
        } else {
          return res.status(200).json(tenantFamily);
        }
      }
    );
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

exports.updateTenantFamily = (req, res) => {
  try {
    const tenantFamilyReqData = new TenantFamilyModel(req.body);
    TenantFamilyModel.findByIdAndUpdate(
      req.params.family_id,
      tenantFamilyReqData,
      (err, tenantFamily) => {
        if (err) {
          return res.status(400).json({ error: err });
        } else {
          return res.status(200).json({
            message: "Successfully updated tenant family",
          });
        }
      }
    );
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};
