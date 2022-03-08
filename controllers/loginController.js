const loginController = {
    login: (req, res) => {
        return res.render('loginSupermercado', { title: 'Smart List - Página de Login' });
    }
}

module.exports = loginController