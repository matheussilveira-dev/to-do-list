

function TasksCard({task, onEditTask, onDeleteTask, loading, editingTask, onToggleTask}){

    
    return(
        <article className="tasks_card">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleTask(task.id, !task.completed)}
                disabled={loading.operation === "toggle" && loading.id === task.id}
            />

            <h2 className={`card_title ${task.completed ? "completed" : ""}`}>{task.title}</h2>

            <p className="card_description">{task.description}</p>

            <p className="card_id">{task.id}</p>

            <button className="card_button-edit" onClick={() => onEditTask(task)}>
                {editingTask?.id === task.id ? "Editando..." : "Editar"}
            </button>

            <button className="card_button-delete" onClick={() => onDeleteTask(task.id)} disabled={loading.operation === "delete" && loading.id === task.id}>
                {loading.operation === "delete" && loading.id === task.id
                    ? "Excluindo..."
                    : "Excluir"}
            </button>
        </article>
    )
}

export default TasksCard