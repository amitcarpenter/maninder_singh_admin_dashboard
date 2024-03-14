const express = require("express");
const {
  dashbaord_loader,
  basic_form_loader,
} = require("../controllers/loaderController");

const loader_router = express.Router();

loader_router.get("/", dashbaord_loader);

loader_router.get("/about", basic_form_loader);

module.exports = loader_router;
