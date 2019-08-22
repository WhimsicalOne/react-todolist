import React, { useReducer, createContext, useEffect } from "react";
import { taskReducer } from "../reducer/taskReducer";

export const TaskContext = createContext();

const TaskProvider = props => {
    const [tasks, dispatch] = useReducer(taskReducer, [], () => {
        const local = localStorage.getItem("tasks");
        return local ? JSON.parse(local) : [];
    });
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {props.children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;
