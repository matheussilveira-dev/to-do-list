import { useState, useEffect } from "react"
import axios from "axios";

import TasksForm from "../../components/TasksForm/TasksForm"
import TasksList from "../../components/TasksList/TasksList"

import "./Tasks.css"

import { CircleCheckBig } from "lucide-react";

function Tasks() {

    const [tasks, setTasks] = useState([])
    const [editingTask, setEditingTask] = useState(null);

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState({
        operation: null,
        id: null
    })

    useEffect(() => {
        async function getTasks() {
            setLoading({
                operation: "get",
                id: null
            });
            try {

                const response = await axios.get('http://localhost:3010/tasks')
                

                setTasks(response.data)

                setError(null)
            } catch (error) {
                setError("Não foi possível carregar as tarefas!")
            }finally{
                setLoading({
                    operation: null,
                    id: null
                });
            }
            
        }

        getTasks()
    
    }, []);


    async function handleAddTask(title, description) {
        setLoading({
            operation: "create",
            id: null
        });
        try {
            
            const response = await axios.post("http://localhost:3010/tasks", 
                {
                    title: title,
                    description: description
                }
            )

            setTasks([
                ...tasks,
                response.data.data
            ])

            setError(null)
            return true;

        } catch (error) {
            setError("Não foi possível adicionar a nova tarefa!")
            return false;
        }finally{
            setLoading({
                operation: null,
                id: null
            });
        }
        
    }

    function handleEditTask(task) {
        setEditingTask(task)
    }

    function handleCancelEdit() {
        setEditingTask(null);
    }

    async function handleUpdateTask(title, description) {
        setLoading({
            operation: "update",
            id: editingTask.id
        });
        try {
            
            const response = await axios.put(
        `http://localhost:3010/tasks/${editingTask.id}`,
            {
                title,
                description
            }
        );

        const updatedTask = response.data.data 

        setTasks(
            tasks.map(task => 
                task.id === updatedTask.id
                    ? updatedTask
                    : task
            )
        )

        setEditingTask(null)

        setError(null)
        return true

        } catch (error) {
            
            setError("Não foi possível atualizar a tarefa!")
            return false

        }finally{
            setLoading({
                operation: null,
                id: null
            });
        }
        
    }

    async function handleDeleteTask(id) {

        const confirmDelete = window.confirm("Tem certeza que deseja excluir esta tarefa?");
        if (!confirmDelete) {
            return;
        }

        setLoading({
            operation: 'delete',
            id: id
        })
        try {
            
            await axios.delete(
            `http://localhost:3010/tasks/${id}`
            );

            setTasks(
                tasks.filter(task => task.id !== id)
            );

            setError(null)

        } catch (error) {
            
            setError("Não foi possível excluir essa tarefa!")

        }finally{
            setLoading({
                operation: null,
                id: null
            });
        }
        
    }

    async function handleToggleTask(id, completed) {

        setLoading({
            operation: "toggle",
            id: id
        });

        try {
            
            const response = await axios.put(
            `http://localhost:3010/tasks/${id}`,
            {
                completed: completed
            }
        )

        const updatedTask = response.data.data

        setTasks(tasks
            .map(task =>
            task.id === updatedTask.id
                ? updatedTask
                : task
            )
        )

        setError(null)

        } catch (error) {
            
            setError("Não foi possível marcar essa tarefa como concluída!")

        } finally{

            setLoading({
                operation: null,
                id: null
            });

        }
    }


    return(
        <main className="main">
            <div className="main__container">
                <div className="main__title-box">
                    <div className="icon">
                        <CircleCheckBig className="title-icon"/>
                    </div>
                    <div className="title-main">
                        <h1 className="tasks_title">Minhas tarefas</h1>
                        <p className="tasks_text-description">Organize seu dia, conquiste suas metas.</p>
                    </div>
                </div>
                

            <TasksForm 
                onAddTask={handleAddTask}
                editingTask={editingTask}
                onUpdateTask={handleUpdateTask}
                loading={loading}
                onCancelEdit={handleCancelEdit}
            />
            
            {error && <p>{error}</p>}
            {loading.operation === 'get' && <p className="load__loading-tasks">Carregando tarefas...</p>}
            {loading.operation === "create" && <p className="load__add-tasks">Adicionando tarefa...</p>}

            <TasksList
                tasks={tasks}
                onEditTask={handleEditTask}
                onDeleteTask={handleDeleteTask}
                loading={loading}
                editingTask={editingTask}
                onToggleTask={handleToggleTask}
                error={error}
            />
            </div>
        </main>
    )
}

export default Tasks