import React from "react";
import "./App.scss";
import TaskContainer from "./container/task-container/task-container";
import TaskProvider from "./context/taskContext";

function App() {
    return (
        <div className='App'>
            <TaskProvider>
                <TaskContainer />
            </TaskProvider>
        </div>
    );
}

export default App;
