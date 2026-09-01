import { useState, useEffect } from "react"


function TasksForm({onAddTask, editingTask, onUpdateTask}) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    function handleSubmit(event){
        event.preventDefault()

        if(editingTask){

            onUpdateTask(title, description)

        }else{

            onAddTask(title, description)
            
        }

        

        setTitle("");
        setDescription("");
    }

    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title);
            setDescription(editingTask.description);
        }
    }, [editingTask]);

    return(
        <form action="" className="tasks_form" onSubmit={handleSubmit}>
            <h2 className="form_title"></h2>

            <input type="text" name="title" id="title" placeholder="Título da tarefa:" className="form_input-title" value={title} onChange={(e) => setTitle(e.target.value)}/>


            <input type="text" name="description" id="description" placeholder="Descrição da tarefa:" className="form_input-description" value={description} onChange={(e) => setDescription(e.target.value)}/>

            <button type="submit">Adicionar</button>
            
        </form>
    )
}

export default TasksForm