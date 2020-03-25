const express = require("express");
const logger=require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 5000;

const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
const models = require("./models/index");



var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout"
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  
});


require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});