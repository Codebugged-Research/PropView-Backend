const BillPropertyModel = require("../models/bill_property");

exports.getBillPropertyByPropertyId = (req, res) => {
  try {
    BillPropertyModel.findByPropertyId(
      req.params.property_id,
      (err, billProperty) => {
        if (err) {
          return res.status(400).json(err);
        } else {
          return res.status(200).json(billProperty);
        }
      }
    );
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};

exports.updateBillProperty = (req, res) => {
  try {
    const billPropertyReqData = new BillPropertyModel(req.body);
    BillPropertyModel.findByIdAndUpdate(
      req.params.bill_property_id,
      billPropertyReqData,
      (err, billProperty) => {
        if (err) {
          console.log(err);
          return res.status(400).json({
            success: false,
          });
        } else {
          return res.status(200).json({
            success: true,
          });
        }
      }
    );
  } catch (err) {
    return res.status(500).json({
      success: false,
    });
  }
};
