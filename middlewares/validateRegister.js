const { check } = require("express-validator");

const validateRegister = [
    check("userName")
        .notEmpty().withMessage("Digite seu nome e sobrenome")
        .isLength({ min: 4 }).withMessage("Nome deve ter no mínimo 4 dígitos").bail(),

    check("userEmail")
        .notEmpty().withMessage("Preencha com seu Email")
        .isEmail().withMessage("Deve preencher com um Email válido").bail(),

    check("password")
        .notEmpty().withMessage("Digite sua senha")
        .isLength({ min: 6 }).withMessage("A senha deve ter no mínimo 6 dígitos")


]


module.exports = validateRegister