const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const cadSuperController = require("../controllers/cadSuperController");
const dadosSuperController = require("../controllers/dadosSuperController");
const cadSucessoController = require("../controllers/cadSucessoController");

const { Router } = require('express');



router.get("/produtos", produtoController.index)
router.get("/cad_super", cadSuperController.cadastroSupermercado)
router.get("/dados_super", dadosSuperController.dadosSupermercado)
router.get("/cad_sucesso", cadSucessoController.cadastroComSucesso)

//POST
router.post("/dados_super", dadosSuperController.salvarForm)
router.post("/cad_super", cadSuperController.formCad)


module.exports = router;
