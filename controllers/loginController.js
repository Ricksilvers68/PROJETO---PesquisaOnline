const session = require("express-session")
const loginController = {
    login: (req, res) => {
        option = req.query.option
        console.log(option)
        if (option !== undefined) {
            console.log(content)
            if (option == 'inserir') {
                var contentTop = 'Inserir novo lote'
                var content = 'Bora inserir um lote cambada!'
                return res.render('loginSupermercado', { title: 'Smart List - Página de Login', nome: req.session.nome, content: content, contentTop })
            }
            if (option == 'excluir-lote') {
                var contentTop = 'Excluir lote'
                var content = 'Vish, você errou? Vamos excluir então!'
                return res.render('loginSupermercado', { title: 'Smart List - Página de Login', nome: req.session.nome, content: content, contentTop })
            }
            if (option == 'apagar-produto') {
                var contentTop = 'Apagar produto'
                var content = 'Vamos apagar um produto então!'
                return res.render('loginSupermercado', { title: 'Smart List - Página de Login', nome: req.session.nome, content: content, contentTop })
            }
            if (option == 'alterar-preco') {
                var contentTop = 'Alterar preço de produto'
                var content = 'Bora trocar o preço, parece que mudou né ?!'
                return res.render('loginSupermercado', { title: 'Smart List - Página de Login', nome: req.session.nome, content: content, contentTop })
            }
        } else {
            var contentTop = 'O que fará hoje?'
            let content = 'Escolha uma das opções ao lado!'
            console.log(content)
            return res.render('loginSupermercado', { title: 'Smart List - Página de Login', nome: req.session.nome, content: content, contentTop });
        }
    },
    logout: (req, res) => {
        console.log("Deslogando " + req.session.nome)
        req.session.destroy();
        console.log("Deslogado")
        return res.render('home');
    }
}

/* <%}else if (option == 'excluir-lote'){%>
    <p>Selecione um dos lotes abaixo</p>
    <%}else if (option == 'apagar-produto'){%>
        <p>Apague um dos produtos abaixo</p>
        <%}else if (option == 'alterar-preco'){%>
            <p>Digite um novo preço para algum produto abaixo</p>
            <%}else{%>
                <p>Escolha uma das opções ao lado</p>
                <%}%>
 */
/* /loginSupermercado?option=<%=option%> */

module.exports = loginController