import React from "react";

const TaskItem = ({ taskTitle, taskDesc, removeTask }) => {
    return (
        <div className='task-item'>
            <h3>{taskTitle}</h3>
            <p>{taskDesc}</p>
            <span className='close' onClick={removeTask}>
                X
            </span>
        </div>
    );
};

export default TaskItem;
