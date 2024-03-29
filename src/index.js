const express = require("express");
const morgan = require("morgan");
const path = require("path");
// const connectDB = require("./db")
// require("ejs")

// connectDB()

// app.js
const postgres = require("postgres");
require("dotenv").config();

let {
  PGHOST = "ep-red-rice-a5zv1g82.us-east-2.aws.neon.tech",
  PGDATABASE = "expressdb",
  PGUSER="Rest02",
  PGPASSWORD="5WzPRdelj1YL",
  ENDPOINT_ID="ep-red-rice-a5zv1g82",
} = process.env;

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: "require",
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});

async function getPgVersion() {
  const result = await sql`select 1+1 as result`;
  console.log(result);
}

getPgVersion();
// }}}}}}}}}}}}}}}}}}}}}}}}}

const app = express();

const HomeRoutes = require("./routes/home");
const UserRoutes = require("./routes/users");

app.set("case sensitive routing", true);
app.set("appName", "Express Course");
app.set("port", 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(morgan("dev"));

app.use(HomeRoutes);
app.use(UserRoutes);

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(app.get("port"));
console.log(`server ${app.get("appName")} on port ${app.get("port")}`);
