const express = require("express");
const {
  dashbaord_loader,
  about_page_loader,
  blog_page_loader,
  create_blog_page_loader,
  setting_page_loader,
  meta_data_page_loader,
  enquiry_page_loader,
  testimonial_page_loader,
  testimonial_create_page_loader
} = require("../controllers/loaderController");

const loader_router = express.Router();

loader_router.get("/", dashbaord_loader);

loader_router.get("/about", about_page_loader);

loader_router.get("/blog", blog_page_loader);

loader_router.get("/blog-create", create_blog_page_loader);

loader_router.get("/setting", setting_page_loader);

loader_router.get("/meta-data", meta_data_page_loader);

loader_router.get("/enquiry", enquiry_page_loader);

loader_router.get("/testimonial", testimonial_page_loader);

loader_router.get("/testimonial-create", testimonial_create_page_loader);



module.exports = loader_router;
