import mysql from "mysql2/promise";
import env from "../config/env.js";

const pool = mysql.createPool(env.db);

async function testConnection() {
    try {
        const connection = await pool.getConnection();

        console.log("✅ Conexão com MySQL estabelecida!");

        connection.release();
    } catch (error) {
        console.error("❌ Erro ao conectar ao MySQL:", error.message);
        console.error(error)
        process.exit(1);
    }
}

testConnection();

export default pool;