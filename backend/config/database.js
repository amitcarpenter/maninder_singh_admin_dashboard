const mongoose = require("mongoose");
require("dotenv").config();

const DbConnect = mongoose
  .connect(process.env.DB_URI, {
    dbName: "real_estate_dashboard",
  })
  .then(() => {
    console.log("dbConnected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = DbConnect;
