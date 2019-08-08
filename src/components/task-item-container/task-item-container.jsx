import React from "react";
import TaskItem from "../task-item/task-item";

const TaskItemContainer = ({ tasks, removeTaskFn }) => {
    return (
        <div className='task-item-container'>
            {tasks.length === 0 || tasks === null ? (
                <p>
                    You have currently no tasks, why not add one! Go on, do it!
                </p>
            ) : (
                tasks.map((task, index) => (
                    <TaskItem
                        key={index}
                        taskTitle={task.title}
                        taskDesc={task.task}
                        id={task.id}
                        removeTask={removeTaskFn}
                    />
                ))
            )}
        </div>
    );
};

export default TaskItemContainer;
