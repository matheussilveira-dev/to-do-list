

import TasksCard from "./TasksCard"

function TasksList(){

    const tasks = [
    {
        id: 1,
        title: "Estudar React",
        description: "Aprender componentes e props."
    },
    {
        id: 2,
        title: "Estudar Node",
        description: "Continuar a API."
    },
    {
        id: 3,
        title: "Estudar MySQL",
        description: "Praticar consultas."
    }
];

    return(
        <section className="tasks_list">
            <h2 className="list_title">Minhas Tarefas</h2>

            {tasks.map(task => (
                <TasksCard
                    key={task.id}
                    title={task.title}
                    description={task.description}
                />
            ))}
        </section>
    )
}

export default TasksList