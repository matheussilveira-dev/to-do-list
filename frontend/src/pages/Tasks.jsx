import { useState, useEffect } from "react"
import axios from "axios";

import TasksForm from "../components/TasksForm"
import TasksList from "../components/TasksList"

function Tasks() {

    const [tasks, setTasks] = useState([])

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


    return(
        <main>
            <h1 className="tasks_title">To-Do List</h1>

            <TasksForm onAddTask={handleAddTask}/>

            <TasksList
                tasks={tasks}
            />

        </main>
    )
}

export default Tasks