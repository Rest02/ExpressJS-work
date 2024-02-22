// const http = require("http")
// const fs = require("fs")

// const server = http.createServer((req, res) => {
//     const read = fs.createReadStream("./static/index.html")
//     read.pipe(res)
// })

// server.listen(3000)
// console.log("server on port 3000")

const express = require("express");

const app = express();

app.use((req,res, next)=>{
  console.log(`Route : ${req.url} Metodo: ${req.method}`)
  next()
})

app.get("/profile", (req, res)=>{
  res.send("profile page")
})

app.all("/about", (req , res)=> {
  res.send("about page")
})

app.listen(3000);
console.log("server on port 3000");
