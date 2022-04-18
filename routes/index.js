const express = require('express');
const bcrypt = require("bcrypt")
const router = express.Router();
const multer = require("multer")

//require controllers
const produtoController = require('../controllers/produtoController');
const cadSuperController = require("../controllers/cadSuperController");
const dadosSuperController = require("../controllers/dadosSuperController");
const cadSucessoController = require("../controllers/cadSucessoController");
const resultPesquisaController = require("../controllers/resultPesquisaController")
const cadPesFisController = require("../controllers/cadPesFisController")
const homeController = require("../controllers/homeController")
const userController = require("../controllers/userController")
const loginController = require("../controllers/loginController")
const marketController = require("../controllers/marketController")
const masterController = require("../controllers/masterController")
const alteraLoteController = require("../controllers/alteraLoteController")

//require middlewares
const validateRegister = require("../middlewares/validateRegister")
const authentication = require('../middlewares/auth')
const validateClient = require('../middlewares/validateClient')
const validateUser = require('../middlewares/validateUser')
const validateMaster = require('../middlewares/validateMaster')
const validateUserClientMaster = require('../middlewares/validateUserClientMaster')

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage })
const { ckeck, validationResult, body } = require("express-validator")



//GET
router.get("/", homeController.home)
router.get("/users", validateUserClientMaster, userController.users)
router.get("/loginSupermercado", /* validateClient, */ loginController.login)
router.get("/logout", loginController.logout)
router.get("/market", validateUser, marketController.marketshow)
router.get("/produtos", /* validateUserClientMaster, */ produtoController.categorias)
router.get("/cad_super", cadSuperController.cadastroSupermercado)
router.get("/dados_super", validateMaster, dadosSuperController.dadosSupermercado)
router.get("/cad_sucesso", cadSucessoController.cadastroComSucesso)
router.get("/resultPesquisa", resultPesquisaController.resultPesquisaSupermercado)
router.get("/cad_pes_fisica", cadPesFisController.cadastroPessoaFisica)

//POST
router.post('/loginSupermercado', alteraLoteController.index)
router.post("/dados_super", upload.single("file"), dadosSuperController.salvarForm)
router.post("/cad_super", validateRegister, cadSuperController.formCad)
router.post("/cad_pes_fisica", upload.single("file"), cadPesFisController.formCadPessoaFisica)
router.post("/", homeController.forMenuDrop)

//DB usuarios
router.get("/usuarios", validateMaster, cadSuperController.index)
router.put("/usuarios/:id", validateMaster, cadSuperController.update)
router.delete("/usuarios/:id", validateMaster, cadSuperController.delete)


//rota para formulário usuário master supermercado
router.get("/formSuper", masterController.master)
router.post("/formSuper", masterController.resForm)


//DB supermercados
router.get("/supermercados", validateMaster, dadosSuperController.index)
router.put("/supermercados/:id", validateMaster, dadosSuperController.update)
router.delete("/supermercados/:id", validateMaster, dadosSuperController.delete)



module.exports = router;