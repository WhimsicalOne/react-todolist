import React from "react";
import TaskItem from "../task-item/task-item";

const TaskItemContainer = ({ tasks }) => {
    return (
        <div className='task-item-container'>
            {tasks.length === 0 ? (
                <p>
                    You have currently no tasks, why not add one! Go on, do it!
                </p>
            ) : (
                tasks.map((task, index) => (
                    <TaskItem
                        key={index}
                        taskTitle={task.title}
                        taskDesc={task.task}
                    />
                ))
            )}
        </div>
    );
};

export default TaskItemContainer;
