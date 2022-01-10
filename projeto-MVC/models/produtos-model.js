
var mongoose = require("mongoose")

// criando o modelo do banco
const Produtos = mongoose.model("produtos", {
  nome: String,
  vlUnit: String,
  codigoBarras: String
})

//exporta o modelo de objetos do banco de dados
module.exports = Produtos