import TasksCard from "../TasksCard/TasksCard"
import "./TasksList.css"
import TasksSummary from "../TasksSummary/TasksSummary"

function TasksList({tasks, onEditTask, onDeleteTask, loading, editingTask, onToggleTask, error}){

    return(
        <section className="tasks_list">
          

            {tasks.length === 0 && !error && loading.operation !== "get"? (
                <p>Nenhuma tarefa cadastrada.</p>
            ) : (
                tasks.map(task => (
                <TasksCard
                    key={task.id}
                    task={task}
                    onEditTask={onEditTask}
                    onDeleteTask={onDeleteTask}
                    loading={loading}
                    editingTask={editingTask}
                    onToggleTask={onToggleTask}
                />
            )))}
            
        </section>
    )
}

export default TasksList