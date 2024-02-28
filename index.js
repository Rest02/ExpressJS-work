// const http = require("http")
// const fs = require("fs")

// const server = http.createServer((req, res) => {
//     const read = fs.createReadStream("./static/index.html")
//     read.pipe(res)
// })

// server.listen(3000)
// console.log("server on port 3000")

const express = require("express");
const morgan = require("morgan")





const app = express();

app.set("case sensitive routing", true)
app.set("appName", "Express Course")
app.set("port", 3000)

app.use(morgan("dev"))

app.get("/profile", (req, res)=>{
  res.send("profile page")
})

app.all("/about", (req , res)=> {
  res.send("about page")
})

app.all("/UserName", (req , res)=> {
  res.send("Username page")
})


app.use((req,res, next)=>{
  if(req.query.login == "matias@gmail.com"){
    next()
  }else{
    res.send("No autorizado")
  }
})

app.get("/dashboard" , (req , res)=>{
  res.send("Dashboard page")
})


app.listen(app.get("port"));
console.log(`server ${app.get("appName")} on port ${app.get("port")}`);
