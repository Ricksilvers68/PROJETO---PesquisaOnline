const { check, validationResult, body } = require("express-validator");

const validateRegister = [
    check("name")
    .notEmpty().withMessage("Endereço de e-mail e/ou senha incorreta."),
    

    check("email")
    .notEmpty().withMessage("Preencha com seu Email")
    .normalizeEmail()
    .isEmail().withMessage("Deve preencher com um Email válido").bail()

]


module.exports = validateRegister