const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.post('/contato', (req, res) => {
    let query = req.query
    let database = []

    data = {
        nome: query.nome,
        telefone: query.telefone,
        email: query.email,
        datahora: query.datahora,
        comentario: query.comentario
    }

    fs.readFile('database.json', 'utf8', (err, fileData)=> {
        if (err){
            console.log(err)
        } else {
            let cont = 1

            database = JSON.parse(fileData)

            database.forEach(element => {
                cont = cont+1
            });

            database.push(data)
            json = JSON.stringify(database)
            fs.writeFile('database.json', json, 'utf8', () => {})
            console.log(`${cont} contatos registrados`)
        }
    })

    res.sendStatus(200)

})

app.listen(port, () =>{
    console.log('Listening on port 3000')
})