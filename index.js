// const http = require("http")
// const fs = require("fs")

// const server = http.createServer((req, res) => {
//     const read = fs.createReadStream("./static/index.html")
//     read.pipe(res)
// })

// server.listen(3000)
// console.log("server on port 3000")



const express = require("express")

const app = express()

app.listen(3000)

app.get("/", (req, res)=>{
    res.send("hello wrld")
})

app.get("/about", (req, res)=>{
    res.send("About")
})


app.get("/weather", (req, res)=>{
    res.send("The current wather is Nice")
})

app.use((req,res)=>{
    res.status(404).send("No se encontro tu pagina")
})



console.log("server on port 3000")