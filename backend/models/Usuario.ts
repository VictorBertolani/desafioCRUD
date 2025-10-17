import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema( {
    nome: String,
    email: String,
    cargo: String,
    dataCriacao: {type: Date, default: Date.now}, 
}, {collection: "Users"});



const Usuario = mongoose.model("Users", UsuarioSchema);



export default Usuario;