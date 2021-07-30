const Property = require("../models/property");
var dbConn = require("../config/database");
//Create Property
exports.createProperty = (req, res) => {
  const propertyReqData = Property(req.body);
  try {
    Property.saveProperty(propertyReqData, (err, property) => {
      if (err) {
        return res.status(400).json({
          success: "false",
        });
      }
      return res.json({
        success: "true",
        data: { property },
      });
    });
  } catch (error) {
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
};
//Get Property by PropertyId
exports.getPropertyByPropertyId = (req, res) => {
  try {
    Property.findPropertyByPropertyId(
      req.params.property_id,
      (err, property) => {
        if (err) {
          return res.status(400).json({
            error: "No Property found with property_id",
          });
        }
        return res.json({
          count: property.length,
          data: {
            property,
          },
        });
      }
    );
  } catch (error) {
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
};
//Get Property by OwnerId
exports.getPropertyByOwnerId = (req, res) => {
  try {
    Property.findPropertyByOwnerId(req.params.owner_id, (err, property) => {
      if (err) {
        return res.status(400).json({
          error: "No Property found with owner_id",
        });
      }
      return res.json({
        count: property.length,
        data: {
          property,
        },
      });
    });
  } catch (error) {
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
};

//Get All Properties
exports.getProperties = (req, res) => {
  try {
    Property.findAllProperty((err, property) => {
      if (err) {
        return res.status(400).json({
          error: "No Properties found",
        });
      }

      return res.json({
        count: property.length,
        data: {
          property,
        },
      });
    });
  } catch (error) {
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
};

//Get All Properties - Limit
exports.getPropertiesLimit = (req, res) => {
  try {
    Property.findAllPropertyLimit(
      req.body.offset,
      req.body.limit,
      (err, property) => {
        if (err) {
          return res.status(400).json({
            error: "No Properties found",
          });
        }
        return res.json({
          count: property.length,
          data: {
            property,
          },
        });
      }
    );
  } catch (error) {
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
};

//Get All User Property
exports.getAllUserProperty = (req, res) => {
  try {
    Property.findAllUserProperty(req.params.user_id, (err, property) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          error: "No Properties found",
        });
      }

      return res.json({
        count: property.length,
        data: {
          property,
        },
      });
    });
  } catch (e) {
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
};

//Get All User Property - Limit
exports.getAllUserPropertyLimit = (req, res) => {
  try {
    Property.findAllUserPropertyLimit(
      req.params.user_id,
      req.body.offset,
      req.body.limit,
      (err, property) => {
        if (err) {
          console.log(err);
          return res.status(400).json({
            error: "No Properties found",
          });
        }
        return res.json({
          count: property.length,
          data: {
            property,
          },
        });
      }
    );
  } catch (e) {
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
};

//Update Properties
exports.updateProperty = (req, res) => {
  const propertyReqData = Property(req.body);
  try {
    Property.findByIdAndUpdate(
      req.params.property_id,
      propertyReqData,
      (err, property) => {
        if (err) {
          return res.status(400).json({
            success: "false",
          });
        }
        return res.status(200).json({
          success: "true",
          data: {
            property,
          },
        });
      }
    );
  } catch (error) {
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
};

//For Tenent
exports.updatePropertyForTenant = (req, res) => {
  try {
    Property.findPropertyByPropertyId(
      req.params.property_id,
      (err, property) => {
        if (err) {
          return res.status(400).json({
            error: "No Property found with owner_id",
          });
        } else {
          property = property[0]["tableproperty"];
          if (property.tenant_id === " " || property.tenant_id === "") {
            property.tenant_id = `${req.tenantId}`;
            Property.findByIdAndUpdate(
              req.params.property_id,
              property,
              (err, propertyData) => {
                if (err) {
                  console.log(err);
                  return res.status(400).json({
                    success: "false",
                  });
                }
                return res.status(200).json({
                  success: "true",
                });
              }
            );
          } else {
            property.tenant_id = property.tenant_id + "," + req.tenantId;
            Property.findByIdAndUpdate(
              req.params.property_id,
              property,
              (err, propertyData) => {
                if (err) {
                  console.log(err);
                  return res.status(400).json({
                    success: "false",
                  });
                }
                return res.status(200).json({
                  success: "true",
                });
              }
            );
          }
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
};

//Delete Properties
exports.deleteProperty = (req, res) => {
  try {
    Property.findByIdAndDelete(req.params.property_id, (err, property) => {
      if (err) {
        return res.status(400).json({
          success: "false",
        });
      }
      return res.status(200).json({
        success: "true",
      });
    });
  } catch (error) {
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
};

exports.getSociety = (req, res) => {
  // SELECT socname from tbl_society where socid = 119
  dbConn.query(
    "SELECT socname from tbl_society where socid = ?",
    req.params.id,
    (err, result) => {
      if (err) {
        return res.status(400).json({
          error: "Something went wrong!",
        });
      }
      res.json(result);
    }
  );
};

exports.getCountry = (req, res) => {
  // SELECT socname from tbl_society where socid = 119
  dbConn.query(
    "SELECT cname from tbl_country where cid = ?",
    req.params.id,
    (err, result) => {
      if (err) {
        return res.status(400).json({
          error: "Something went wrong!",
        });
      }
      res.json(result);
    }
  );
};
