require("dotenv").config();
require("./../config/mongodb");

const AlbumModel = require("./../models/album");

const albums = [
  {
    title: "Trilogy",
    artiste: "The Weeknd",
    year: 2012,
  },
];

AlbumModel.insertMany(albums)
.then(dbRes => console.log(dbRes))
.catch(dbErr => console.log(dbErr));
