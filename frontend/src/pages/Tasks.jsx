import { useState, useEffect } from "react"
import axios from "axios";

import TasksForm from "../components/TasksForm"
import TasksList from "../components/TasksList"

function Tasks() {

    const [tasks, setTasks] = useState([])
    const [editingTask, setEditingTask] = useState(null);

    useEffect(() => {
    axios.get('http://localhost:3010/tasks')
    .then(response => {
        setTasks(response.data)
    })
    }, []);


    async function handleAddTask(title, description) {
        const response = await axios.post("http://localhost:3010/tasks", 
            {
                title: title,
                description: description
            }
        )
        setTasks([
            ...tasks,
            response.data.data
        ])
    }

    function handleEditTask(task) {
        setEditingTask(task)
    }

    async function handleUpdateTask(title, description) {
        const response = await axios.put(
        `http://localhost:3010/tasks/${editingTask.id}`,
            {
                title,
                description
            }
        );

        const updatedTask = response.data.data 

        setTasks(
            tasks.map(task => 
                task.id === updatedTask.id
                    ? updatedTask
                    : task
            )
        )

        setEditingTask(null)
    }

    async function handleDeleteTask(id) {
        await axios.delete(
            `http://localhost:3010/tasks/${id}`
        );

        setTasks(
            tasks.filter(task => task.id !== id)
        );
    }


    return(
        <main>
            <h1 className="tasks_title">To-Do List</h1>

            <TasksForm 
                onAddTask={handleAddTask}
                editingTask={editingTask}
                onUpdateTask={handleUpdateTask}
            />

            <TasksList
                tasks={tasks}
                onEditTask={handleEditTask}
                onDeleteTask={handleDeleteTask}
            />

        </main>
    )
}

export default Tasks