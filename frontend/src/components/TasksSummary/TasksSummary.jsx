
import "./TasksSummary.css"

function TasksSummary({totalTasks, pendingTasks, completedTasks}) {


    return(
        <section className="tasks__summary">
            <div className="tasks__summary-container">
                <h2 className="summary-title">Suas Tarefas</h2>
                <div className="summary-infos">
                    <div className="tasks-total">
                        <p className="total-title">Total:</p>
                        <p className="total-number">{totalTasks}</p>
                    </div>
                    <div className="tasks-pending">
                        <p className="pending-title">Pendentes:</p>
                        <p className="pending-number">{pendingTasks}</p>
                    </div>
                    <div className="tasks-completed">
                        <p className="completed-title">Concluídas:</p>
                        <p className="completed-number">{completedTasks}</p>
                    </div>
                </div>
            </div>
        </section> 
    )
}

export default TasksSummary