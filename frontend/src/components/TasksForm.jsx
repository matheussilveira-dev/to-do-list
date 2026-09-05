import { useState, useEffect } from "react"


function TasksForm({onAddTask, editingTask, onUpdateTask, loading, onCancelEdit}) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    async function handleSubmit(event){
        event.preventDefault()

        if(editingTask){

            await onUpdateTask(title, description)

        }else{

            const success = await onAddTask(title, description)
            
            if (success) {
                setTitle("");
                setDescription("");
            }

        }
    }

    useEffect(() => {

        if (editingTask) {
            setTitle(editingTask.title);
            setDescription(editingTask.description);
        }else{
            setTitle("");
            setDescription("");
        }

    }, [editingTask]);

    return(
        <form action="" className="tasks_form" onSubmit={handleSubmit}>
            <h2 className="form_title"></h2>

            <input type="text" name="title" id="title" placeholder="Título da tarefa:" className="form_input-title" value={title} onChange={(e) => setTitle(e.target.value)}/>


            <input type="text" name="description" id="description" placeholder="Descrição da tarefa:" className="form_input-description" value={description} onChange={(e) => setDescription(e.target.value)}/>

            <button type="submit" disabled={loading.operation === "update"}>
            {loading.operation === "update"
                ? "Atualizando..."
                : editingTask
                    ? "Atualizar tarefa"
                    : "Adicionar tarefa"}
            </button>
            {editingTask && (
            <button type="button" onClick={onCancelEdit}>
                Cancelar
            </button>
            )}
            
        </form>
    )
}

export default TasksForm