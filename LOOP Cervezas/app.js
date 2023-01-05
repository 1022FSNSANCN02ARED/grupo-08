const path = require("path")

const express = require('express')

const app = express()

app.use(express.static(path.join(__dirname, "public")))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "views/index.html"))
})

app.get("/productCart", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "views/productCart.html"))
})

app.get("/productDetail", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "views/productDetail.html"))
})

app.get("/register", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "views/register.html"))
})

app.get("/login", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "views/login.html"))
})