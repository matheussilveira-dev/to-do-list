

import TasksCard from "./TasksCard"

function TasksList({tasks, onEditTask}){

    return(
        <section className="tasks_list">
            <h2 className="list_title">Minhas Tarefas</h2>

            {tasks.map(task => (
                <TasksCard
                    key={task.id}
                    task={task}
                    onEditTask={onEditTask}
                />
            ))}
        </section>
    )
}

export default TasksList