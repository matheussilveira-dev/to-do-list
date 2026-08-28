

function TasksCard(){

    
    return(
        <article className="tasks_card">
            <h2 className="card_title">Estudar React</h2>

            <p className="card_description">Aprender components e props.</p>

            <button className="card_button-edit">Editar</button>
            <button className="card_button-delete">Excluir</button>
        </article>
    )
}

export default TasksCard