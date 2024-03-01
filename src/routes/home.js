const { Router } = require("express");
const router = Router();

router.all("/about", (req, res) => {
  res.send("about page");
});

router.get("/dashboard", (req, res) => {
  res.sendFile("Dashboard page");
});

module.exports = router;
