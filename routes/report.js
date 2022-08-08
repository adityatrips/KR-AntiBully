const express = require("express");
const { addReport, getReports } = require("../controllers/report");

const router = express.Router();

router.post("/report", addReport);
router.get("/reports", getReports);

module.exports = router;
