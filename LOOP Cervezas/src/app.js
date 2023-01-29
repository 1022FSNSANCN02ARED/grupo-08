const express = require('express')
const app = express()
const path = require("path")
const mainRouter = require("./routes/mainRouter")

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(path.join(__dirname, "../public")))
app.use(mainRouter)