



function TasksForm() {

    return(
        <form action="" className="tasks_form">
            <h2 className="form_title"></h2>

            <input type="text" name="title" id="title" placeholder="Título da tarefa:" className="form_input-title" />

            <input type="text" name="description" id="description" placeholder="Descrição da tarefa:" className="form_input-description" />

            <button type="submit">Adicionar</button>
        </form>
    )
}

export default TasksForm