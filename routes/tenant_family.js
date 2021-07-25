const express = require("express");
const router = express();

const TenantFamily = require("../controllers/tenant_family");

//Create a family
router.post("/tenant/family/create", TenantFamily.createTenantFamily);

//Get a Family by Tenant ID
router.get("/tenant/family/get/:tenant_id", TenantFamily.getTenantFamilyById);

//Update Family by Family Id
router.put("/tenant/family/update/:family_id", TenantFamily.updateTenantFamily);

module.exports = router;