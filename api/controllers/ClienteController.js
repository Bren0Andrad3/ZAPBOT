const database = require('../models')
const venom = require('venom-bot');


class Cliente_Controller {

    static async EnviarMenssagemDefinida(req, res) {
        venom
            .create({ multidevice: false })
            .then((client) => start(client))
            .catch((erro) => {
                console.log(erro);
            });
            const buttons = [
                {
                    "buttonText": {
                        "displayText": "sim"
                    }
                },
                {
                    "buttonText": {
                        "displayText": "No"
                    }
                }
            ]
        function start(client) {
            client.onMessage((message) => {
                console.log(message)
                if (message.body === "oi") {
                    console.log("------------------------------------------------------------")
                    console.log(message.from)
                    client.sendButtons(message.from, 'Teste', buttons, 'Escolha um botão')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                    return res.status(200).json({ message: "Menssagem enviada" })
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                    return res.status(500).json(error.message)
                });
                }
            });
        }
    }
    static async EnviarButtom(req, res) {
        venom
            .create({ multidevice: false })
            .then((client) => start(client))
            .catch((erro) => {
                console.log(erro);
            });
        const buttons = [
            {
                "buttonText": {
                    "displayText": "sim"
                }
            },
            {
                "buttonText": {
                    "displayText": "No"
                }
            }
        ]
        function start(client) {
            console.log(client);
            client.sendButtons(`${client.to.remote.user}@c.us`, 'Teste', buttons, 'Escolha um botão')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                    return res.status(200).json({ message: "Menssagem enviada" })
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                    return res.status(500).json(error.message)
                });
        }
    }
}

module.exports = Cliente_Controller 
