
import TasksForm from "../components/TasksForm"
import TasksList from "../components/TasksList"

function Tasks() {
    return(
        <main>
            <h1 className="tasks_title">To-Do List</h1>

            <TasksForm/>

            <TasksList/>
        </main>
    )
}

export default Tasks