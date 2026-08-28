import { useState } from "react"

import TasksForm from "../components/TasksForm"
import TasksList from "../components/TasksList"

function Tasks() {

    const [count, setCount] = useState(0)

    return(
        <main>
            <h1 className="tasks_title">To-Do List</h1>

            <p>Cliques: {count}</p>

            <button onClick={() => setCount(count + 1)}>
                Clique
            </button>

            <TasksForm/>

            <TasksList/>
        </main>
    )
}

export default Tasks