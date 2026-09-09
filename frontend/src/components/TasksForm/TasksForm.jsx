import { useState, useEffect } from "react"
import "./TasksForm.css"

import { ListTodo, FileText, Plus } from "lucide-react";

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

    function clearForm(){
        setDescription("")
        setTitle("")
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
        <form className="tasks_form" onSubmit={handleSubmit}>
            <h2 className="form_title">Adicione uma nova tarefa!</h2>

            <input type="text" name="title" id="title" placeholder="Título da tarefa:" className="form_input-title" value={title} onChange={(e) => setTitle(e.target.value)}/>


            <textarea type="text" name="description" id="description" placeholder="Descrição da tarefa:" className="form_input-description" value={description} onChange={(e) => setDescription(e.target.value)}/>

            <div className="form__buttons-container">
                <button className="form__button-add" type="submit" disabled={loading.operation === "update"}>
                    <Plus className="add-icon"/>
                {loading.operation === "update"
                    ? "Atualizando..."
                    : editingTask
                        ? "Atualizar tarefa"
                        : "Adicionar tarefa"}
                </button>
                <button className="form__button-clear" onClick={editingTask ? onCancelEdit : clearForm} type="button">
                    {editingTask ? "Cancelar" : "Limpar"}
                </button>
            </div>
            
        </form>
    )
}

export default TasksForm