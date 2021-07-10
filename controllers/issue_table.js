const IssueTableModel = require("../models/issue_table");

//Save the Issue Table
exports.createIssueTable = (req, res) => {
  const issueTableReqData = new IssueTableModel(req.body);
  try {
    IssueTableModel.saveIssueTable(issueTableReqData, (err, issueTable) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          success: false,
        });
      }
      return res.json({
        success: "true",
        data: issueTable,
      });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
    });
  }
};

//Get Issue Table by issue_table_id
exports.getIssueTableById = (req, res) => {
  try {
    IssueTableModel.getIssueTableById(req.params.issue_table_id, (err, issueTable) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          success: false,
        });
      }
      return res.json({
        success: "true",
        data: issueTable,
      });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
    });
  }
};

//Get Issue Table by Room id
exports.getIssueTableByRoomId = (req, res) => {
  try {
    IssueTableModel.getIssueTableByRoomId(
      req.params.room_id,
      (err, issueTable) => {
        if (err) {
          return res.status(400).json({
            success: false,
          });
        }
        return res.json({
          success: "true",
          data: issueTable,
        });
      }
    );
  } catch (err) {
    return res.status(500).json({
      success: false,
    });
  }
};

// Get Issue Table by sub room id
exports.getIssueTableBySubRoomId = (req, res) => {
  try {
    IssueTableModel.getIssueTableBySubRoomId(
      req.params.subroom_id,
      (err, issueTable) => {
        if (err) {
          return res.status(400).json({
            success: false,
          });
        }
        return res.json({
          success: "true",
          data: issueTable,
        });
      }
    );
  } catch (err) {
    return res.status(500).json({
      success: false,
    });
  }
};

// Get Issue Table by property id
exports.getIssueTableByPropertyId = (req, res) => {
  try {
    IssueTableModel.getIssueTableByPropertyId(
      req.params.property_id,
      (err, issueTable) => {
        if (err) {
          return res.status(400).json({
            success: false,
          });
        }
        return res.json({
          success: "true",
          data: issueTable,
        });
      }
    );
  } catch (err) {
    return res.status(500).json({
      success: false,
    });
  }
};

// Update Issue Table by issue_table_id
exports.updateIssueTable = (req, res) => {
  try {
    const issueTableReqData = new IssueTableModel(req.body);
    IssueTableModel.findByIdAndUpdate(
      req.params.issue_table_id,
      issueTableReqData,
      (err, issueTable) => {
        if (err) {
          res.status(400).json({
            success: false,
          });
        }
        res.json({
          success: true,
        });
      }
    );
  } catch (err) {
    return res.status(400).json({
      success: false,
    });
  }
};

// Delete Issue Table by issue_table_id
exports.deleteIssueTable = (req, res) => {
  try {
    IssueTableModel.findByIdAndDelete(
      req.params.issue_table_id,
      (err, issueTable) => {
        if (err) {
          return res.status(400).json({
            success: false,
          });
        }
        return res.json({
          success: true,
        });
      }
    );
  } catch (err) {
    return res.status(500).json({
      success: false,
    });
  }
};
