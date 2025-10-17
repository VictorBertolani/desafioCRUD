import {Router, Request, Response} from "express";

import Usuario from "../models/Usuario.js";

const router = Router();

interface IUsuario {
    nome: string;
    email: string;
    cargo: string;
    dataCriacao: Date;
}

router.post(`/`, async (req: Request, res: Response) => {

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

router.get(`/`, async (req: Request, res: Response) => {
    try {
        
        const usuario = await Usuario.find()
          res.status(200).json(usuario); 

    } catch (error) {
         res.status(500).json({ error: error }); 
    }
})

router.get(`/:id`, async (req: Request, res: Response) =>{
    const id = req.params.id;

    try {
        const usuario = await Usuario.findOne({_id: id});
        
    } catch (error) {
        
    }
})

router.put(`/:id`, async (req: Request, res: Response) =>{

    const id = req.params.id;

    const {nome, email, cargo, dataCriacao} = req.body

    const usuario = {
        nome,
        email,
        cargo,
        dataCriacao
    }

    try {
        const usuarioAtualizado = await Usuario.updateOne({_id: id, usuario})
    } catch (error) {
        
    }
})

router.delete(`/:id`, async (req: Request, res: Response) =>{

    const id = req.params.id;

    const usuario = await Usuario.findOne({_id: id})

    try {
        await Usuario.deleteOne({_id:id})
    } catch (error) {
        
    }


})

export default router;