const express = require("express");
const router = express();

const Issue = require("../controllers/issue");

router.post("issue/create/", Issue.createIssue);
router.get("issue/get/", Issue.getIssues);
router.get("issue/get/:issue_id", Issue.getIssuesById);
router.put("issue/update/:issue_id", Issue.updateIssue);
router.delete("issue/delete/:issue_id", Issue.deleteIssue);

module.exports = router;
