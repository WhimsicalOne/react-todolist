import React from "react";
import TaskItem from "../task-item/task-item";

const TaskItemContainer = () => {
    return (
        <div className='task-item-container'>
            <TaskItem />
            <TaskItem />
            <TaskItem />
        </div>
    );
};

export default TaskItemContainer;
