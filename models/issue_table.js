var dbConn = require("../config/database");
var func = require("node-mysql-nesting");

var IssueTable = function (issueTable) {
  this.id = issueTable.id;
  this.roomsubroom_id = issueTable.roomsubroom_id;
  this.roomsubroom_name = issueTable.roomsubroom_name;
  this.issub = issueTable.issub;
  this.issue_row_id = issueTable.issue_row_id; //List of issues
  this.property_id = issueTable.property_id;
  this.created_at = issueTable.created_at;
  this.updated_at = issueTable.updated_at;
};

// Create Issue Table
IssueTable.saveIssueTable = (issueTableReqData, result) => {
  dbConn.query(
    "INSERT app_issue_table SET ?",
    issueTableReqData,
    (err, res) => {
      if (err) {
        result(err);
      } else {
        result(null, res);
      }
    }
  );
};

//Get Issue Table by id
IssueTable.getIssueTableById = (issueTableId, result) => {
  dbConn.query(
    "SELECT * FROM app_issue_table WHERE id =?",
    issueTableId,
    (err, res) => {
      if (err) {
        result(err);
      } else {
        result(null, res);
      }
    }
  );
};

// Get Issue Table by Room id
IssueTable.getIssueTableByRoomId = (roomId, result) => {
  dbConn.query(
    "SELECT * FROM app_issue_table WHERE roomsubroom_id =? AND issub = 0",
    roomId,
    (err, res) => {
      if (err) {
        result(err);
      } else {
        result(null, res);
      }
    }
  );
};

// Get Issue Table by sub room id
IssueTable.getIssueTableBySubRoomId = (subRoomId, result) => {
  dbConn.query(
    "SELECT * FROM app_issue_table WHERE roomsubroom_id =? AND issub = 1",
    subRoomId,
    (err, res) => {
      if (err) {
        result(err);
      } else {
        result(null, res);
      }
    }
  );
};

// Get Issue Table by property id
IssueTable.getIssueTableByPropertyId = (propertyId, result) => {
  dbConn.query(
    "SELECT * FROM app_issue_table WHERE property_id =?",
    propertyId,
    (err, res) => {
      if (err) {
        result(err);
      } else {
        result(null, res);
      }
    }
  );
};

// Update Issue Table by issue_table_id
IssueTable.findByIdAndUpdate = (issueTableId, issueTableReqData, result) => {
  dbConn.query(
    "UPDATE app_issue_table SET id=?, roomsubroom_id=?, roomsubroom_name=?, issub=?, issue_row_id=?, property_id=? WHERE id =?",
    issueTableId,
    [
      issueTableReqData.id,
      issueTableReqData.roomsubroom_id,
      issueTableReqData.roomsubroom_name,
      issueTableReqData.issub,
      issueTableReqData.issue_row_id,
      issueTableReqData.property_id,
      issueTableId,
    ],
    (err, res) => {
      if (err) {
        result(err);
      } else {
        result(null, res);
      }
    }
  );
};

// Delete issue Table by issue_table_id
IssueTable.findByIdAndDelete = (issueTableId, result) => {
  dbConn.query(
    "DELETE FROM app_issue_table WHERE id =?",
    issueTableId,
    (err, res) => {
      if (err) {
        result(err);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = IssueTable;
