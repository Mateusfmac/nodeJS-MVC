var express = require("express")
const router = express.Router()

//const produtosController recebe o conteudo importado
const produtosController = require("../controllers/produtos-controller")

//rota raiz, pega no arquivo produtosController a var listar_produtos
router.get("/", produtosController.listar_produtos)

router.get("/cadastrarProdutos", produtosController.cadastrar_produtos_get)

router.post("/cadastrarProdutos", produtosController.cadastrar_produtos_post)

router.get("/deletarProduto/:id", produtosController.deletar_produto)

router.get("/editarProduto/:id", produtosController.editar_produto_get)

router.post("/editarProduto", produtosController.editar_produto_post)

module.exports = router