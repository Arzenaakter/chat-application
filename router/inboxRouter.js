const express = require("express");
const { getInbox } = require("../controller/inboxController");
const router = express.Router();

router.get("/inbox", getInbox);

module.exports = router;
