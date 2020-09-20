const express = require("express");
const router = new express.Router();
const UserModel = require("./../models/User"); // go one level up and fetch User.js file in models folder

// hardcoded data ... be patient ^^
const images = ["1.jpg", "2.jpg", "3.gif"];

router.get("/", (req, res) => {
  res.render("home", { images, css: ["mod.image-gallery"] });
});

router.get("/my-dev-squad", async (req, res, next) => {
  const users = await UserModel.find(); // wait for db results
  res.render("userAll", { users, css: ["mod.list-grid"] });
});

router.get("/add-new-ironhacker", (req, res) => {
  res.render("userCreate", { css: ["mod.form"] });
});

module.exports = router;
