import app from "./app.js";
import env from "./config/env.js";
import "./database/connection.js";

app.listen(env.port, () => {
    console.log(`Servidor rodando em: http://localhost:${env.port}`)
})