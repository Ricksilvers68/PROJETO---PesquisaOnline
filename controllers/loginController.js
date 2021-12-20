const loginController = {
    login:(req,res)=>{
        return res.render('loginCliente', { title: 'Smart List - Página de Login' });
    }
}

module.exports = loginController