const homeController = {
    home:(req,res)=>{
        return res.render("home",{title: 'Smart List'})
    }
}

module.exports = homeController