import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema( {
    nome: String,
    email: String,
    cargo: String,
    dataCriacao: String, 
}, {collection: "Usuarios"}

);



const Usuario = mongoose.model("Usuarios", UsuarioSchema, "Usuarios");



export default Usuario;