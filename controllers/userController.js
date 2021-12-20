const userController = {
    users:(req,res)=>{
        return res.render('user', { title: 'Smart List - Página do Usuário' })
    }
}

module.exports = userController