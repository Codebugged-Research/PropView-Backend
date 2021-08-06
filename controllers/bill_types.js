const BillTypeModel = require("../models/bill_types");

exports.getAllBillType = (req, res) => {
  try {
    BillTypeModel.findAll((err, billTypes) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(billTypes);
      }
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};

exports.getAllBillTypeById = (req, res) => {
  try {
    BillTypeModel.findBillTypeById(req.params.billTypeId, (err, billTypes) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(billTypes);
      }
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
