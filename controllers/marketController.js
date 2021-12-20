const marketController = {
    marketshow:(req,res)=>{
        return res.render('market', { title: 'Smart List - Página do Mercado' });
    }
}

module.exports = marketController