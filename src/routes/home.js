const { Router } = require("express");
const router = Router();

router.all("/about", (req, res) => {
  const title = 30;

  res.render("index", { title });
});

router.get("/dashboard", (req, res) => {
  res.sendFile("Dashboard page");
});

module.exports = router;
