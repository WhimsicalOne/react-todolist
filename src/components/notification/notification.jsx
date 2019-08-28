import React, { useContext } from "react";
import { TaskContext } from "../../context/taskContext";

const Notification = ({ hidden }) => {
    const { tasks } = useContext(TaskContext);
    return (
        <p style={{ display: hidden === true ? "none" : "block" }}>
            Update each time the state changes:
            <b>{tasks.length}</b>
        </p>
    );
};

export default Notification;
