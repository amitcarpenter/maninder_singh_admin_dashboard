const dashbaord_loader = async (req, res) => {
  res.render("index.ejs");
};

const about_page_loader = async (req, res) => {
  res.render("pages/about/about.ejs");
};

const blog_page_loader = async (req, res) => {
  res.render("pages/blog/blog.ejs");
};

const create_blog_page_loader = async (req, res) => {
  res.render("pages/blog/createBlog.ejs");
};

const setting_page_loader = async (req, res) => {
  res.render("pages/setting/setting.ejs");
};

const meta_data_page_loader = async (req, res) => {
  res.render("pages/metadata/meta-data.ejs");
};

const enquiry_page_loader = async (req, res) => {
  res.render("pages/enquiry/enquiry.ejs");
};

const testimonial_page_loader = async (req, res) => {
  res.render("pages/testimonial/testimonial.ejs");
};

const testimonial_create_page_loader = async (req, res) => {
  res.render("pages/testimonial/testimonial-create.ejs");
};

module.exports = {
  dashbaord_loader,
  about_page_loader,
  blog_page_loader,
  create_blog_page_loader,
  setting_page_loader,
  meta_data_page_loader,
  enquiry_page_loader,
  testimonial_page_loader,
  testimonial_create_page_loader,
};
