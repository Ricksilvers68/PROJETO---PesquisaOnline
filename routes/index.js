const express = require('express');
const bcrypt = require("bcrypt")
const router = express.Router();
const multer = require("multer")
const produtoController = require('../controllers/produtoController');
const cadSuperController = require("../controllers/cadSuperController");
const dadosSuperController = require("../controllers/dadosSuperController");
const cadSucessoController = require("../controllers/cadSucessoController");
const resultPesquisaController= require("../controllers/resultPesquisaController")

let storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, "uploads")
    },
    filename:(req, file, cb)=>{
        cb(null, file.originalname)
    }
})
const upload = multer({storage})


const {ckeck, validationResult, body} = require("express-validator")
const validateRegister = require("../middlewares/validateRegister")

const { Router } = require('express');



router.get("/produtos", produtoController.index)
router.get("/cad_super", cadSuperController.cadastroSupermercado)
router.get("/dados_super", dadosSuperController.dadosSupermercado)
router.get("/cad_sucesso", cadSucessoController.cadastroComSucesso)
router.get("/resultPesquisa", resultPesquisaController.resultPesquisaSupermercado)

//POST
router.post("/dados_super",upload.single("file"), dadosSuperController.salvarForm)
router.post("/cad_super", validateRegister, cadSuperController.formCad)


module.exports = router;
