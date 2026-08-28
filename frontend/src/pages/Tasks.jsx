import { useState } from "react"

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

    function addTask() {
    setTasks([
        ...tasks,
        {
            id: 4,
            title: "Nova tarefa",
            description: "Essa tarefa foi adicionada pelo React."
        }
    ]);
}

    return(
        <main>
            <h1 className="tasks_title">To-Do List</h1>

            <TasksForm/>

            <TasksList
                tasks={tasks}
            />

            <button onClick={addTask}>
                Adicionar tarefa de teste
            </button>
        </main>
    )
}

export default Tasks