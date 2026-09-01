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
        console.log(response.data)
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

    useEffect(() => {
        console.log("editingTask mudou:", editingTask);
    }, [editingTask]);

    async function handleUpdateTask(title, description) {
        const response = await axios.put(
        `http://localhost:3010/tasks/${editingTask.id}`,
        {
            title,
            description
        }
    );

    console.log(response.data);
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
            />

        </main>
    )
}

export default Tasks