const { check } = require("express-validator");

const validateRegister = [
    check ("userName")
    .notEmpty().withMessage("Digite seu nome e sobrenome").bail(),

    check ("userEmail")
    .notEmpty().withMessage("Preencha com seu Email")
    .isEmail().withMessage("Deve preencher com um Email válido").bail(),

    check ("password")
    .notEmpty().withMessage("Digite sua senha")
    .isLength({min:8}).withMessage("A senha deve ter no mínimo 8 dígitos")
    

]

module.exports = validateRegister