// ici on va connecter notre application back à la bdd
// https://mongoosejs.com/

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", () => {
  console.error("We're not connected!");
});

mongoose.connection.on("connected", () => {
  console.log("Sure we are connected! Let's go");
});
