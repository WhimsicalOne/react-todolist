import React from "react";
import TaskItem from "../task-item/task-item";

const TaskItemContainer = ({ tasks }) => {
    const removeTask = function(event, task) {
        event.preventDefault();
        tasks.filter(function(task) {
            return task.title === task.id;
        });
    };
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
                        removeTask={removeTask}
                    />
                ))
            )}
        </div>
    );
};

export default TaskItemContainer;
