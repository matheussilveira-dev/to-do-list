import dotenv from 'dotenv';
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
    path: path.resolve(__dirname, "../../.env")
});


const requiredEnv = [
    "DB_HOST",
    "DB_USER",
    "DB_PASSWORD",
    "DB_NAME",
    "DB_PORT",
];

for (const variable of requiredEnv) {
    if (!process.env[variable]) {
        throw new Error(
            `Variável de ambiente não configurada: ${variable}`
        );
    }
}

const env = {
    port: process.env.PORT || 3010,

    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
    }
}

export default env