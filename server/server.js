const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;

const app = express();

//BODY PARSER MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB CONFIG
const db = require("./config/keys").mongoUri;

//CONNECT TO MOGODB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("MONGODB Connected");
  })
  .catch(error => {
    console.log(error);
  });

//USE ROUTES
const sample = require("./routes/sample/sample");
app.use("/sample", sample);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("../client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve__dir, "client", "build", "index.html");
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
