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


app.get("/products", (req, res)=> {
    res.send("lista de productos")
})

app.post("/products", (req, res)=> {
    res.send("creando productos")
})

app.put("/products", (req, res)=> {
    res.send("Actualizando producto")
})

app.delete("/products", (req, res)=> {
    res.send("Borrando producto")
})

app.patch("/products", (req, res)=> {
    res.send("Actualizando una parte del productos")
})

app.listen(3000)
console.log("server on port 3000")







// app.get("/", (req, res)=>{
//     res.send("hello wrld")
// })

// app.get("/about", (req, res)=>{
//     res.send("About")
// })


// app.get("/weather", (req, res)=>{
//     res.send("The current wather is Nice")
// })

// app.use((req,res)=>{
//     res.status(404).send("No se encontro tu pagina")
// })



