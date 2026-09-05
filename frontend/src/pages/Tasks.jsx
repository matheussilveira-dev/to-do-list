import { useState, useEffect } from "react"
import axios from "axios";

import TasksForm from "../components/TasksForm"
import TasksList from "../components/TasksList"

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

        } catch (error) {
            setError("Não foi possível adicionar a nova tarefa!")
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

        } catch (error) {
            
            setError("Não foi possível atualizar a tarefa!")

        }finally{
            setLoading({
                operation: null,
                id: null
            });
        }
        
    }

    async function handleDeleteTask(id) {
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


    return(
        <main>
            <h1 className="tasks_title">To-Do List</h1>

            <TasksForm 
                onAddTask={handleAddTask}
                editingTask={editingTask}
                onUpdateTask={handleUpdateTask}
                loading={loading}
            />
            
            {error && <p>{error}</p>}
            {loading === 'get' && <p>Carregando tarefas...</p>}
            {loading === "create" && <p>Adicionando tarefa...</p>}

            <TasksList
                tasks={tasks}
                onEditTask={handleEditTask}
                onDeleteTask={handleDeleteTask}
                loading={loading}
                editingTask={editingTask}
            />

        </main>
    )
}

export default Tasks