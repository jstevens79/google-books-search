const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

let db = "mongodb://localhost/googleBooks"


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  db = process.env.MONGODB_URI || "mongodb://user1:password1@ds237267.mlab.com:37267/heroku_t9xqk005 "
}

mongoose.connect(db, { useNewUrlParser: true, useFindAndModify: false });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const routes = require('./routes');
app.use(routes);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
