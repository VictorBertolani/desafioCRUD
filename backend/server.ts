const express = require(`express`);
const mongoose = require(`mongoose`);
const app = express();
import type { Request, Response } from "express";


const Usuario = require(`./models/Usuario`)

app.use(
    express.urlencoded({
        extended:true,
    })
)

app.use(express.json());

app.post(`/Usuario`, async (req: Request, res: Response) => {

    const {nome, email, cargo, dataCriacao} = req.body

    const usuario = {
        nome,
        email,
        cargo,
        dataCriacao
    }

    try{

        await Usuario.create(usuario)

        res.status(201).json({message: 'Usuario criado com sucesso!'})

    } catch(error){
        res.status(500).json({error: error})
    }

})

app.get(`/`, (req: Request, res: Response) => {
    res.json({message: 'HelloWorld'})
    


})

mongoose.connect(`mongodb+srv://victorbertolanipro:victoradmin123@cruddesafio.xhlhhct.mongodb.net/?retryWrites=true&w=majority&appName=CRUDdesafio`)
.then(() =>{
    console.log("Conectado ao MongoDB")
    app.listen(3000, () =>{
        console.log("Servidor rodando na porta 3000");
    })
})
.catch((err: Error) => console.log(err.message))

