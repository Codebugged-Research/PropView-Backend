const IssueModel = require("../models/issue");

exports.createIssue = (req, res) => {
  const issueReqData = new IssueModel(req.body);
  IssueModel.saveIssue(issueReqData, (err, issue) => {
    if (err) {
      return res.status(400).json({
        success: false,
      });
    }
    return res.json({
      success: true,
      data: issue,
    });
  });
};

exports.getIssuesById = (req, res) => {
  IssueModel.findIssueById(req.params.issue_id, (err, issue) => {
    if (err) {
      return res.status(400).json({
        success: false,
      });
    }
    return res.json({
      success: true,
      data: issue,
    });
  });
};

exports.getIssues = (req, res) => {
  IssueModel.findIssue((err, issue) => {
    if (err) {
      return res.status(400).json({
        success: false,
      });
    }
    return res.json({
      success: true,
      data: issue,
    });
  });
};

exports.updateIssue = (req, res) => {
  const issueReqData = new IssueModel(req.body);
  IssueModel.findByIdAndUpdate(req.params.issue_id, issueReqData, (err, issue) => {
    if (err) {
      return res.status(400).json({
        success: false,
      });
    }
    return res.json({
      success: true,
    });
  });
};

exports.deleteIssue = (req, res) => {
  IssueModel.findByIdAndDelete(req.params.issue_id, (err, issue) => {
    if (err) {
      return res.status(400).json({
        success: false,
      });
    }
    return res.json({
      success: true,
    });
  });
};
