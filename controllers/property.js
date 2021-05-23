const Property = require("../models/property");
const redis = require("redis");
const client = redis.createClient(process.env.REDIS_PORT);

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
      client.setex("propertyData", 3600, JSON.stringify(property));
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

//Get All User Property
exports.getAllUserProperty = (req, res) => {
  try {
    Property.findAllUserProperty(req.params.user_id, (err, property) => {
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
