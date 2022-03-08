const { check } = require("express-validator");

const validateRegister = [
    check("name")
    .notEmpty().withMessage("Digite seu nome e sobrenome")
    .isLength({ min: 4 }).withMessage("Nome deve ter no mínimo 4 dígitos").bail(),

    check("email", "Este email não é válido!")
    .notEmpty().withMessage("Preencha com seu Email")
    .normalizeEmail()
    .isEmail().withMessage("Deve preencher com um Email válido").bail(),

    check("password")
    .notEmpty().withMessage("Digite sua senha")
    .isLength({ min: 6 }).withMessage("A senha deve ter no mínimo 6 dígitos")


]


module.exports = validateRegister