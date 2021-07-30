const express = require("express");
var router = express();

const TenantController = require("../controllers/tenant");
const TenantMiddleware = require("../middlewares/tenant");
const PropertyController = require("../controllers/property");

//Create Tenant
router.post(
  "/tenant/create/:property_id",
  TenantMiddleware.createTenant,
  PropertyController.updatePropertyForTenant
);

//Get All Tenants
router.get("/tenant/all", TenantController.getAllTenant);

//Get Tenant by Id
router.get("/tenant/:tenant_id", TenantController.getTenantById);

//Update Tenant by Id
router.put("/tenant/update/:tenant_id", TenantController.updateTenant);

module.exports = router;
