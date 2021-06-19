var dbConn = require("../config/database");

var Issue = function (issue) {
  this.issue_id = inspectionType.issue_id;
  this.issue_name = inspectionType.issue_name;
  this.status = issue.status;
  this.remarks = issue.remarks;
  this.photo = issue.photo;
  this.createdAt = inspectionType.createdAt;
  this.updatedAt = inspectionType.updatedAt;
};

//Create issue
Issue.saveIssue = (issueReqData, result) => {
  dbConn.query("INSERT INTO app_issue SET?", issueReqData, (err, res) => {
    if (err) {
      result(null, err);
    }
    result(null, res);
  });
};

//get Issues
Issue.findIssue = (result) => {
  dbConn.query("SELECT * FROM app_issue", (err, res) => {
    if (err) {
      result(null, err);
    }
    result(null, res);
  });
};

//Get Issues by id
Issue.findIssueById = (issue_id, result) => {
  dbConn.query(
    "SELECT * FROM app_issue WHERE issue_id=?",
    issue_id,
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

//Update Issue
Issue.findByIdAndUpdate = (issue_id, issueReqData, result) => {
  dbConn.query(
    "UPDATE app_issue SET issue_id=?, issue_name=?,status=?, remarks=?,photo=? WHERE issue_id=?",
    [
      issueReqData.issue_id,
      issueReqData.issue_name,
      issueReqData.status,
      issueReqData.remarks,
      issueReqData.photo,
      issue_id,
    ],
    (err, res) => {
      if (err) {
        result(null, err);
      }
      result(null, res);
    }
  );
};

//Delete Issue
Issue.findByIdAndDelete = (issue_id, result) => {
  dbConn.query("DELETE app_issue WHERE issue_id=?", issue_id, (err, res) => {
    if (err) {
      result(null, err);
    }
    result(null, res);
  });
};

module.exports = Issue;
