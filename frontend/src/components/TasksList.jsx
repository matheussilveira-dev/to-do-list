

import TasksCard from "./TasksCard"

function TasksList({tasks}){

    return(
        <section className="tasks_list">
            <h2 className="list_title">Minhas Tarefas</h2>

            {tasks.map(task => (
                <TasksCard
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    description={task.description}
                />
            ))}
        </section>
    )
}

export default TasksList