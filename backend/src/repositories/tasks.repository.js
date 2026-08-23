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

    async create(task){
        const {
            title,
            description,
            completed
        } = task

        const [result] = await pool.query('INSERT INTO tasks(title, description, completed) VALUES (?, ?, ?)', [title, description, completed])

        return result.insertId
    }
}

export default new TasksRepository()