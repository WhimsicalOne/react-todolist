import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const TaskItem = ({ taskTitle, taskDesc, removeTask, id }) => {
    return (
        <div className='task-item'>
            <h3>{taskTitle}</h3>
            <p>{taskDesc}</p>
            <span className='close' onClick={() => removeTask(id)}>
                <FontAwesomeIcon icon={faTimes} />
            </span>
        </div>
    );
};

export default TaskItem;
