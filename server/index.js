const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const { mongoose, MongoURI } = require("./database/database.js");
const routes = require("./routes/routes.js");

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/", routes);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.resolve(__dirname, "..", "client", "build")));

  // Handle React routing, return all requests to React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
} else {
  // Serve any static files
  app.use(express.static(path.resolve(__dirname, "..", "client", "public")));

  // Handle React routing, return all requests to React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/public", "index.html"));
  });
}

const PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV === "test") {
  mongoose.connect(MongoURI, { useNewUrlParser: true }).then(() => {
    app.listen(7000);
  });
} else {
  mongoose.connect(MongoURI, { useNewUrlParser: true }).then(() => {
    app.listen(PORT);
  });
}

module.exports = app;
