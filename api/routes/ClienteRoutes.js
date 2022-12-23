const { Router } = require('express')
const cliente = require('../controllers/ClienteController')


const router = Router()

router.get('/EnviarMenssagem', cliente.EnviarMenssagemDefinida)
router.get('/EnviarButtom', cliente.EnviarButtom)


module.exports = router