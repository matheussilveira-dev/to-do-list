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


    function handleAddTask(title, description) {
        setTasks([
        ...tasks,
        {
            id: 4,
            title: title,
            description: description
        }
    ]);
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