import "./TasksCard.css"
import { useState, useRef, useEffect } from "react";

import { Check, Pencil, Trash2, LoaderCircle} from "lucide-react";

function TasksCard({task, onEditTask, onDeleteTask, loading, editingTask, onToggleTask}){

    const [expanded, setExpanded] = useState(false);
    const [hasMore, setHasMore] = useState(false);
    const descriptionRef = useRef(null);

    function hasMoreDescription() {
    if (!descriptionRef.current) return false;

    return descriptionRef.current.scrollHeight >
           descriptionRef.current.clientHeight;
    }

    useEffect(() => {
    if (!descriptionRef.current || expanded) return;

    setHasMore(hasMoreDescription());

    }, [task.description, expanded]);
    
    return(
        <article className="tasks__card">
            <div className="card__header">
                <label className="card__checkbox">
                    <input
                        className="card__button-checkbox"
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onToggleTask(task.id, !task.completed)}
                        disabled={loading.operation === "toggle" && loading.id === task.id}
                    />
                    <span className="card__checkbox-custom">
                        <Check 
                        className="card__icon-checkbox"
                        />
                    </span>
                </label>
                <div className="card__informations">
                    <h2 className={`card__title ${task.completed ? "completed" : ""}`}>{task.title}</h2>
                    <p 
                    ref={descriptionRef}
                    className={`card__description ${task.completed ? "completed" : ""} ${expanded ? "expanded" : ""}`}>{task.description ?? ""}</p>
                    {hasMore && (
                        expanded ? (
                            <button 
                            className="card__description-toggle"
                            onClick={() => setExpanded(false)}>
                                Mostrar menos
                            </button>
                        ) : (
                            <button 
                            className="card__description-toggle"
                            onClick={() => setExpanded(true)}>
                                ...
                            </button>
                        )
                    )}
                </div>
            </div>


            <div className="card__buttons">
                <button
                    className="card__button-edit"
                    onClick={() => onEditTask(task)}
                >
                    {editingTask?.id === task.id ? (
                        <LoaderCircle className="card__loading-icon"/>
                    ) : (
                        <Pencil className="icon-edit"/>
                    )}
                </button>
                <button
                    className="card__button-delete"
                    onClick={() => onDeleteTask(task.id)}
                    disabled={
                        loading.operation === "delete" &&
                        loading.id === task.id
                    }
                >
                    {loading.operation === "delete" &&
                    loading.id === task.id ? (
                        <LoaderCircle className="card__loading-icon"/>
                    ) : (
                        <Trash2 className="icon-delete"/>
                    )}
                </button>
            </div>
        </article>
    )
}

export default TasksCard