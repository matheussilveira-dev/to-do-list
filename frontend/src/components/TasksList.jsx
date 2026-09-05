

import TasksCard from "./TasksCard"

function TasksList({tasks, onEditTask, onDeleteTask, loading, editingTask}){

    return(
        <section className="tasks_list">
            <h2 className="list_title">Minhas Tarefas</h2>

            {tasks.map(task => (
                <TasksCard
                    key={task.id}
                    task={task}
                    onEditTask={onEditTask}
                    onDeleteTask={onDeleteTask}
                    loading={loading}
                    editingTask={editingTask}
                />
            ))}
        </section>
    )
}

export default TasksList