var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: " 🏠 Home" });
});

// About Me
router.get("/about", function (req, res, next) {
  res.render("about", { title: " 😊 About me" });
});

// Projects
router.get("/projects", function (req, res, next) {
  res.render("projects", { title: " 📽️ Projects" });
});

// Contact me
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: " ☎️ Contact me" });
});

module.exports = router;
