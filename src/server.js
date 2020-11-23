//importar dependência
const express = require('express');

//iniciando o express
const server = express()

//criar uma rota
server.get('/', (request, response) => {
    return response.send('Oi direto do')
})

//ligar o servidor
server.listen(5500)