import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPen } from "@fortawesome/free-solid-svg-icons";
import { TaskContext } from "../../context/taskContext";

const TaskItem = ({ title, description, id }) => {
    const { dispatch } = useContext(TaskContext);
    return (
        <div className='task-item'>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className='task-item-update'>
                <span
                    className='close'
                    onClick={() => dispatch({ type: "REMOVE_TASK", id })}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
                <span className='update'>
                    <FontAwesomeIcon icon={faPen} />
                </span>
            </div>
        </div>
    );
};

export default TaskItem;
