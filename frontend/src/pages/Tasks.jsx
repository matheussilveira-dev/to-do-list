import { useState, useEffect } from "react"
import axios from "axios";

import TasksForm from "../components/TasksForm"
import TasksList from "../components/TasksList"

function Tasks() {

    const [tasks, setTasks] = useState([
    {
        id: 1,
        title: "Estudar React",
        description: "Aprender componentes e props."
    },
    {
        id: 2,
        title: "Estudar Node",
        description: "Continuar a API."
    },
    {
        id: 3,
        title: "Estudar MySQL",
        description: "Praticar consultas."
    }
    ])

    useEffect(() => {
    axios.get('http://localhost:3010/tasks')
    .then(response => {
        console.log(response.data)
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