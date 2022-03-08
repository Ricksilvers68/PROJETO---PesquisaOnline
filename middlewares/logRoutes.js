const fs = require("fs")

function logRoutes(req, res, next) {

   fs.appendFileSync("log.text", "A rota acessada foi: " + req.url)
   next()
}

module.exports = logRoutes