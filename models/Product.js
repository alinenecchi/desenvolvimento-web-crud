const mongoose = require("mongoose")

const Product = mongoose.model("Product", {
    nome: String,
    preco: Number,
})

module.exports = Product
