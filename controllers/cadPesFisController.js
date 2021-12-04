const cadPesFisController = {
     cadastroPessoaFisica:(req,res)=>{
         return res.render("cad_PesFisica")
     },

     formCad_pessoaFicica:(req,res)=>{
         let{name,cpf,rg,tel,endereco,estado,cidade,bairro} = req.body
        return res.send("formulario recebido com sucesso!!!")

     }
}

module.exports = cadPesFisController