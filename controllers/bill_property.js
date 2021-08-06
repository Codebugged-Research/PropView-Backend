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
