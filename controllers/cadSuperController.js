const session = require("express-session")
const {validationResult} = require("express-validator")
const validateRegister = require("../middlewares/validateRegister")
const bcrypt = require("bcrypt")
const fs = require("fs")
const path = require("path")

let hash = bcrypt.hashSync("46780545",10)
let usuarioJson = path.join("usuarios.json")


const cadSuperController = {
    cadastroSupermercado: (req, res)=>{
        return res.render("cad_super")
    },

    formCad:(req, res)=>{
        let errors = validationResult(req)
        if(errors.isEmpty()){   //para verificar se há erros no formulário O campo por acaso está vazio? 
            let {userName, userEmail, password} = req.body
            //seguimos adiante se não houver erros
            let passwordC = bcrypt.hashSync(password,10)                                             
            let usuario = JSON.stringify({userName, userEmail, password:passwordC})
            fs.appendFileSync(usuarioJson, usuario)
            res.redirect("dados_super")

        }else{
            return res.render("cad_super",{errors:errors}) //se houver erros, voltamos ao formulário com as mensagens de erros. Com o método mapped teremos um objeto literal com os erros. Através do old:req.body, enviaremos o restante dos dados preenchidos pelo usuário "os que não estão com erros"
        }
        
    }
}

module.exports = cadSuperController;