const express = require('express');
const bcrypt = require("bcrypt")
const router = express.Router();
const multer = require("multer")
const produtoController = require('../controllers/produtoController');
const cadSuperController = require("../controllers/cadSuperController");
const dadosSuperController = require("../controllers/dadosSuperController");
const cadSucessoController = require("../controllers/cadSucessoController");
const resultPesquisaController = require("../controllers/resultPesquisaController")
const cadPesFisController = require("../controllers/cadPesFisController")
const validateRegister = require("../middlewares/validateRegister")

const homeController = require("../controllers/homeController")
const userController = require("../controllers/userController")
const loginController = require("../controllers/loginController")
const marketController = require("../controllers/marketController")

//DB
const UserDBcontroller = require("../controllers/UserDBcontroller")

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




router.get("/", homeController.home)
router.get("/users", userController.users)
router.get("/loginCliente", loginController.login)
router.get("/market", marketController.marketshow)

router.get("/produtos", produtoController.index)
router.get("/cad_super", cadSuperController.cadastroSupermercado)
router.get("/dados_super", dadosSuperController.dadosSupermercado)
router.get("/cad_sucesso", cadSucessoController.cadastroComSucesso)
router.get("/resultPesquisa", resultPesquisaController.resultPesquisaSupermercado)
router.get("/cad_pes_fisica", cadPesFisController.cadastroPessoaFisica)

//POST
router.post("/dados_super", upload.single("file"), dadosSuperController.salvarForm)
router.post("/cad_super", validateRegister, cadSuperController.formCad)
router.post("/cad_pes_fisica", upload.single("file"), cadPesFisController.formCadPessoaFisica)

//DB
//router.post("/usuarios", UserDBcontroller.store)
router.get("/usuarios", UserDBcontroller.index)
//router.put("/usuarios/:id", UserDBcontroller.update)
//router.delete("/usuarios/:id", UserDBcontroller.delete)



module.exports = router;