const express = require("express");
const router = express.Router();

const IssueTable = require("../controllers/issue_table");

router.post("issue/table/create", IssueTable.createIssueTable);
router.get("issue/table/get/:issue_table_id", IssueTable.getIssueTableById);
router.get("issue/table/get/room/:room_id", IssueTable.getIssueTableByRoomId);
router.get(
  "issue/table/get/subroom/:subroom_id",
  IssueTable.getIssueTableBySubRoomId
);
router.get(
  "issue/table/get/property/:property_id",
  IssueTable.getIssueTableByPropertyId
);
router.put("issue/table/update/:issue_table_id", IssueTable.updateIssueTable);
router.delete(
  "issue/table/delete/:issue_table_id",
  IssueTable.deleteIssueTable
);

module.exports = router;
