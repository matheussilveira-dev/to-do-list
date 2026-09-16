import TasksCard from "../TasksCard/TasksCard"
import "./TasksList.css"
import TasksSummary from "../TasksSummary/TasksSummary"
import FeedbackMessage from "../FeedbackMessage/FeedbackMessage"

function TasksList({tasks, onEditTask, onDeleteTask, loading, editingTask, onToggleTask, error}){

    return(
        <section className="tasks_list">
          

            {tasks.length === 0 && !error && loading.operation !== "get"? (
                <FeedbackMessage message="Nenhuma tarefa cadastrada." type="empty"/>
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