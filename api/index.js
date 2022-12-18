const express = require('express');
const routes = require('./routes/index')
const app = express()
const port = normalizePort(process.env.PORT || '3000');
routes(app)

function normalizePort(val){
    const port = parseInt(val,10);

    if(isNaN(port)){
        return val;
    }
    if(port >= 0 ){
        return port;
    }
    return false;
}



app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PATCH,DELETE')
    response.header('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type')
    next()
})

app.listen(port, ()=> console.log(`Running on ${port}`))

module.exports = app