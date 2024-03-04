const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  let isActive = true

  const users = [
    {
      id:1,
      name : "ryan",
      lastname : "perez"
    },
    {
      id:2,
      name : "joe",
      lastname : "mc millan"
    }
  ]


  res.render("index", {
    title : "Index page",
    isActive,
    users
  })
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
