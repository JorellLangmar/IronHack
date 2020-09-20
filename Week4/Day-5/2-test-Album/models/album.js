const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
	title: { type: String, required : true },
	artiste: { type: String, required : true },
	year: { type: Number, required : true },
});

const AlbumModel = mongoose.model("albums", AlbumSchema);

module.exports = AlbumModel;
