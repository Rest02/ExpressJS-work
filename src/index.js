const express = require("express");
const morgan = require("morgan");
const path = require("path");
// const connectDB = require("./db")
// require("ejs")


// connectDB()

// app.js

const postgres = require('postgres');
require('dotenv').config();

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: 'require',
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});

async function getPgVersion() {
  const result = await sql`select version()`;
  console.log(result);
}

getPgVersion();

// }}}}}}}}}}}}}}}}}}}}}}}}}


const app = express();

const HomeRoutes = require("./routes/home")
const UserRoutes = require("./routes/users")

app.set("case sensitive routing", true);
app.set("appName", "Express Course");
app.set("port", 3000);
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(express.json());
app.use(morgan("dev"));

app.use(HomeRoutes)
app.use(UserRoutes)

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(app.get("port"));
console.log(`server ${app.get("appName")} on port ${app.get("port")}`);
