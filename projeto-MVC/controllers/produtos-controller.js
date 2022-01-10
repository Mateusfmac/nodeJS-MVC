//importando o modelo do banco 
//const Produtos = require("../models/produtos-model")
const produto_db = require("../models/produtos-model")

//exporta a var listar_produtos com a funcionalidade abaixo
exports.listar_produtos = (req, res) => {
  produto_db.find({}, (err, produto) => {
    if (err)
      return res.status(500).send("erro")
    res.render("views/pages/produtos", {
      produto_itens: produto
    })
  })
}

exports.cadastrar_produtos_get = (req, res) => {
  res.render("views/pages/formProdutos")
}

exports.cadastrar_produtos_post = (req, res) => {
  let salva_produto = new produto_db

  salva_produto.nome = req.body.nome
  salva_produto.vlUnit = req.body.valor
  salva_produto.codigoBarras = req.body.codBarras

  salva_produto.save((err) => {
    if (err)
      return res.status(500).send("Erro ao cadastrar")

    return res.redirect("/produtos")
  })
}

exports.deletar_produto = (req, res) => {
  id = req.params.id
  produto_db.deleteOne({
    _id: id
  }, (err) => {
    if (err)
      return res.status(500).send("Erro ao deletar")
    res.redirect("/produtos")
  })
}

exports.editar_produto_get = (req, res) => {
  var id = req.params.id
  produto_db.findById(id, (err, produto) => {
    if (err)
      return res.status(500).send("Erro ao editar")
    res.render("views/pages/formEditarProduto", {
      produto_itens: produto
    })
  })
}

exports.editar_produto_post = (req, res) => {
  var id = req.body.id
  produto_db.findById(id, (err, produto) => {
    if (err)
      return res.status(500).send("Erro ao editar")
    produto.nome = req.body.nome
    produto.vlUnit = req.body.valor
    produto.codigoBarras = req.body.codBarras

    produto.save((err) => {
      if (err)
        return res.status(500).send("erro ao editar")
      return res.redirect("/produtos")
    })
  })
}