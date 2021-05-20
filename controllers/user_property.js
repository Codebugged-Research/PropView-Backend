const UserPropertyModel = require("../models/user_property");
const Property = require("../models/property");

//Create User Property
exports.createUserProperty = (req, res) => {
  const userPropertyReqData = UserProperty(req.body);
  try {
    UserPropertyModel.saveUserProperty(
      userPropertyReqData,
      (err, userProperty) => {
        if (err) {
          return res.status(400).json({
            success: "false",
            message: "Failed to save User Property",
          });
        }
        return res.json({
          success: "true",
          data: { userProperty },
        });
      }
    );
  } catch (error) {
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
};

//Get User Properties
exports.getUserProperties = (req, res) => {
  try {
    UserPropertyModel.findAllUserProperty((err, userProperty) => {
      if (err) {
        return res.status(400).json({
          error: "No User Properties found",
        });
      }
      res.json({
        count: userProperty.length,
        data: {
          userProperty,
        },
      });
    });
  } catch (error) {
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
};
//Get User Property by user_id
exports.getUserPropertiesbyUserId = async (req, res) => {
  try {
    UserPropertyModel.findUserPropertyByUserId(
      req.params.user_id,
      (err, userProperty) => {
        if (err) {
          return res.status(400).json({
            error: "No User Property found with user_id",
          });
        }
        propertyData = [];
        for (propertyId of userProperty[0].property_id.split(",")) {
         Property.findPropertyByPropertyId(propertyId, (err, property) => {
            if (err) {
              return res.status(400).json({
                error: "No Property found with property_id",
              });
            }
            propertyData.push(property[0]);
          });
          return res.json({
            count: userProperty.length,
            data: {
              userProperty,
              propertyData: {
                property,
              },
            },
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
};
//Get User Property by user_to_property_id
exports.getUserPropertiesUserToPropertyId = (req, res) => {
  try {
    UserPropertyModel.findUserPropertyByUserToPropertyId(
      req.params.user_to_property_id,
      (err, userProperty) => {
        if (err) {
          return res.status(400).json({
            error: "No User Property found with user_to_property_id",
          });
        }
        return res.json({
          count: userProperty.length,
          data: {
            userProperty,
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
//Update User Property by user_to_property_id
exports.updateUserProperty = (req, res) => {
  const userPropertyReqData = UserProperty(req.body);
  try {
    UserPropertyModel.findByIdAndUpdate(
      req.params.user_to_property_id,
      userPropertyReqData,
      (err, userProperty) => {
        if (err) {
          return res.status(400).json({
            success: "false",
          });
        }
        return res.status(200).json({
          success: "true",
          data: {
            userProperty,
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
//Delete User Property by user_to_property_id
exports.deleteUserProperty = (req, res) => {
  try {
    UserPropertyModel.findByIdAndDelete(
      req.params.user_to_property_id,
      (err, userProperty) => {
        if (err) {
          return res.status(400).json({
            success: "false",
          });
        }
        return res.status(200).json({
          success: "true",
          data: {
            userProperty,
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
