const mongoose = require(`mongoose`)

const Usuario = mongoose.model(`person`, {
    nome: String,
    email: String,
    cargo: String,
    dataCriacao: String,
})

module.exports = Usuario