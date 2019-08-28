import React from "react";
import "./App.scss";
import TaskContainer from "./container/task-container/task-container";
import TaskProvider from "./context/taskContext";
import { ProvideAuth } from "./context/userContext";

function App() {
    return (
        <ProvideAuth>
            <div className='App'>
                <TaskProvider>
                    <TaskContainer />
                </TaskProvider>
            </div>
        </ProvideAuth>
    );
}

export default App;
