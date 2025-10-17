import express, { Request, Response } from "express"
import mongoose from "mongoose";
import usuarioRoutes from "./routes/usuariosRoutes.js"
import cors from "cors";


const app = express();


app.use(cors({
  origin: "http://localhost:3001",
  }));


app.use(
    express.urlencoded({
        extended:true,
    })
)

app.use(express.json());



app.use(`/Usuario`, usuarioRoutes)

app.get(`/`, (req: Request, res: Response) => {
    res.json({message: 'HelloWorld'})
    


})

mongoose.pluralize(null);

mongoose.connect(`mongodb+srv://victorbertolanipro:victoradmin123@cruddesafio.xhlhhct.mongodb.net/?retryWrites=true&w=majority&appName=CRUDdesafio`)
.then(() =>{
    console.log("Conectado ao MongoDB")
    app.listen(3000, () =>{
        console.log("Servidor rodando na porta 3000");
    })
})
.catch((err: Error) => console.log(err.message))

