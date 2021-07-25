const express = require("express");
var router = express();

const Tenant = require("../controllers/tenant");

//Create Tenant
router.post("/tenant/create", Tenant.createTenant);

//Get All Tenants
router.get("/tenant/all", Tenant.getAllTenant);

//Get Tenant by Id
router.get("/tenant/:tenant_id", Tenant.getTenantById);

//Update Tenant by Id
router.put("/tenant/update/:tenant_id", Tenant.updateTenant);

module.exports = router;