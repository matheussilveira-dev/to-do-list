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

    async update(id, task) {

    console.log(task);
    console.log("title:", Object.hasOwn(task, "title"));
    console.log("description:", Object.hasOwn(task, "description"));
    console.log("completed:", Object.hasOwn(task, "completed"));   

    const fields = [];
    const values = [];

    if (Object.hasOwn(task, "title")) {
        fields.push("title = ?");
        values.push(task.title);
    }

    if (Object.hasOwn(task, "description")) {
        fields.push("description = ?");
        values.push(task.description);
    }

    if (Object.hasOwn(task, "completed")) {
        fields.push("completed = ?");
        values.push(task.completed);
    }

    values.push(id);

    const [result] = await pool.query(
        `UPDATE tasks SET ${fields.join(", ")} WHERE id = ?`,
        values
    );

    return result;
    }

    async deleteTask(id){
        const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [id])

        return result
    }
}

export default new TasksRepository()