const fs = require('fs')
const csv = require('fast-csv')

const alteraLoteController = {
    index: async(req, res) => {
        var { novoLote } = req.file
        console.log(novoLote)
        fs.readFile('novoLote', 'csv', function(err, data) {
            console.log(data)
        })
    }
}

module.exports = alteraLoteController