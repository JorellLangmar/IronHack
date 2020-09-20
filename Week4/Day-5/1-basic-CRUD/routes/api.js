const express = require("express");
const router = new express.Router();

router.get("/ironhackers", (req, res) => {
  res.json(users);
});

module.exports = router;
