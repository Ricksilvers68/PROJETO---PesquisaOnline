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

//controller master
const masterController = require("../controllers/masterController")


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
router.get("/loginSupermercado", loginController.login)
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
router.post("/", validateRegister, homeController.forMenuDrop)

//DB usuarios
router.get("/usuarios", cadSuperController.index)
router.put("/usuarios/:id", cadSuperController.update)
router.delete("/usuarios/:id", cadSuperController.delete)


//rota para formulário usuário master supermercado
router.get("/formSuper", masterController.master)
router.post("/formSuper", masterController.resForm)


//DB supermercados
router.get("/supermercados", dadosSuperController.index)
router.put("/supermercados/:id", dadosSuperController.update)
router.delete("/supermercados/:id", dadosSuperController.delete)



module.exports = router;