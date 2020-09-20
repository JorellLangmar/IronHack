const express = require("express");
const router = new express.Router();

router.get("/albums", (req, res) => {
  res.json(albums);
});

module.exports = router;
