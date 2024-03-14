const dashbaord_loader = async (req, res) => {
  res.render("index.ejs");
};

const basic_form_loader = async (req, res) => {
  res.render("pages/about/about.ejs");
};

module.exports = { dashbaord_loader, basic_form_loader };
