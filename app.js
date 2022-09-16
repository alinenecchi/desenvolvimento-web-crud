const mongoose = require('mongoose');
const { response } = require('express');
const express = require('express');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// rota de autenticação
const authRoutes = require("./routes/AuthRoutes")
app.use("/auth", authRoutes)

// rotas da API de produtos
const productRoutes = require("./routes/ProductRoutes")
app.use("/product", productRoutes)

const trataLog = (req, res, next) => {
  console.log("Metodo", req.method);  
  console.log("URI", req.originalUrl);
  next();
  console.log("Status",res.statusCode);
}

//Configuração da conexão com o Mongo
mongoose.connect('mongodb://127.0.0.1:27017/app_produtos')
  .then(() => {
    console.log("Conectado ao Mongo..");
  }).catch((error) => { 
    console.log("Erro>:", error) 
  });

app.use(trataLog);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})