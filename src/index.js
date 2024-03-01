const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

const HomeRoutes = require("./routes/home")
const UserRoutes = require("./routes/users")

app.set("case sensitive routing", true);
app.set("appName", "Express Course");
app.set("port", 3000);

app.use(express.json());
app.use(morgan("dev"));

app.use(HomeRoutes)
app.use(UserRoutes)

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(app.get("port"));
console.log(`server ${app.get("appName")} on port ${app.get("port")}`);
