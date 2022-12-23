const bodyparser = require('body-parser')
const cliente = require('./ClienteRoutes')


module.exports = app =>{
    app.use(bodyparser.json())
    app.use(cliente)
    app.get('/', (req, res) => res
    .status(200)
    .send({mensagem: 'boas vindas a api'
}))
}