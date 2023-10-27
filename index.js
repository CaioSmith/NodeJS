const express = require('express');
const app = express();

//Estou dizendo para o express utilizar o EJS como View engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/questions", (req, res) => {
    res.render("questions");
})

app.listen(8000, () => {
    console.log("Servidor rodando na porta 8000");
})
