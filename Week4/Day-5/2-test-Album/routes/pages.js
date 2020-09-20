const express = require("express");
const router = new express.Router();
const AlbumModel = require("../models/album"); 


router.get("/", (req, res) => {
  res.render("home", {
    images: ["DarkSideOfTheMoon.jpg", "IfYoureReadingThis.jpg", "manonthemoonii.jpg","mybeautifuldarktwistedfantasy.jpg", "theeminemshow.jpg", "Trilogy.jpg"], // hardcoded data ... be patient ^^
    css: ["mod.image-gallery"],
  });
});


router.get("/albumsAll", async (req, res, next) => {
  try {
    res.render("albumsAll", {
      album: await AlbumModel.find(),
      css: ["mod.list-grid"],
    });
  } catch (err) {
    next(err); 
  }
});


// router.get("/albums/profile/:id", (req, res, next) => {
//   AlbumModel.findById(req.params.id)
//     .then((album) => {
//       res.render("albumDetails", { album, css: ["mod.form"] });
//     })
//     .catch(next);
// });


// router.get("/add-new-album", (req, res) => {
//   res.render("albumCreate", { css: ["mod.form"] });
// });


// router.get("/albums/:id/delete", async (req, res, next) => {
//   try {
//     await AlbumModel.findByIdAndRemove(req.params.id);
//     res.redirect("/albumsAll");
//   } catch (err) {
//     next(err);
//   }
// });


// router.post("/albums", async (req, res, next) => {

//   try {
//     await AlbumModel.create(req.body);
//     res.redirect("/albumsAll");
//   } catch (databaseError) {
//     next(databaseError);
//   }
// });


// router.post("/albums/:id/update", async (req, res, next) => {
//   try {
//     await AlbumModel.findByIdAndUpdate(req.params.id, req.body);
//     res.redirect("/albumsAll/profile/" + req.params.id);
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
