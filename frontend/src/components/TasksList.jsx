

import TasksCard from "./TasksCard"

function TasksList(){

    return(
        <section className="tasks_list">
            <h2 className="list_title">Minhas Tarefas</h2>

            <TasksCard/>
        </section>
    )
}

export default TasksList