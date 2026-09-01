

function TasksCard({task, onEditTask, onDeleteTask}){

    
    return(
        <article className="tasks_card">
            <h2 className="card_title">{task.title}</h2>

            <p className="card_description">{task.description}</p>

            <p className="card_id">{task.id}</p>

            <button className="card_button-edit" onClick={() => onEditTask(task)}>Editar</button>
            <button className="card_button-delete" onClick={() => onDeleteTask(task.id)}>Excluir</button>
        </article>
    )
}

export default TasksCard