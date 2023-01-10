const express = require('express')
const app = express()
const path = require("path")

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(path.join(__dirname, "public")))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.get("/", (req, res) => {
    res.render('index')
})

app.get("/productCart", (req, res)=>{
    res.render('productCart')
})

app.get("/productDetail", (req, res)=>{
    res.render('productDetail')
})

app.get("/register", (req, res)=>{
    res.render('register')
})

app.get("/login", (req, res)=>{
    res.render('login')
})