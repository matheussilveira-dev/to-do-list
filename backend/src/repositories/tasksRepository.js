import pool from "../database/connection.js";

class TasksRepository{

    async getAll() {
        const [rows] = await pool.query('SELECT * FROM tasks')
        return rows
    }
}

export default new TasksRepository()