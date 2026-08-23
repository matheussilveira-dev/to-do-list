import pool from "../database/connection.js";

class TasksRepository{

    async getAll() {
        const [rows] = await pool.query('SELECT * FROM tasks')
        return rows
    }

    async getById(id) {
        const [rows] = await pool.query('SELECT * FROM tasks WHERE id = ?', [id])
        return rows[0]
    }
}

export default new TasksRepository()