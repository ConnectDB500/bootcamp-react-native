import "dotenv/config"
import * as http from "http";
import { app } from "./app";

const server = http.createServer(app);

const porta = process.env.PORT;

server.listen(porta, ()=> {
    console.log(`Sevidor iniciado na porta ${porta}`)
})