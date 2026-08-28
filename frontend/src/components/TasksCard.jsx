

function TasksCard({title, description}){

    
    return(
        <article className="tasks_card">
            <h2 className="card_title">{title}</h2>

            <p className="card_description">{description}</p>

            <button className="card_button-edit">Editar</button>
            <button className="card_button-delete">Excluir</button>
        </article>
    )
}

export default TasksCard