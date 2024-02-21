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

app.all("/info" , (req, res)=>{
  res.send("server info")
})

app.get("/search", (req, res)=>{
  if(req.query.q === "javascript books"){
    res.send("lista de lbros de javascript")
  }else{
    res.send("pagina normal")
  }
})


app.get("/hello/:user", (req, res) => {
  res.send(`hola ${req.params.user.toUpperCase()}`);
});

app.get("/add/:x/:y", (req, res) => {
  const { x, y } = req.params;

  const result = parseInt(x) + parseInt(y);
  res.send(`Result:${result}`);
});

app.get("/users/:username/photo", (req, res) => {
  if (req.params.username == "matias") {
    return res.sendFile("./pikachu.png", {
      root: __dirname,
    });
  }

  res.send("El usuario no tiene accceso")

});


app.get("/nombre/:nombre/age/:age", (req,res)=>{
  res.send(`El usuario ${req.params.nombre} tiene ${req.params.age} años`)
})

app.listen(3000);
console.log("server on port 3000");
