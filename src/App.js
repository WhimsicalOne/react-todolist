import React from "react";
import "./App.scss";
import TaskContainer from "./container/task-container/task-container";
import Header from "./components/header/header";

function App() {
    return (
        <div className='App'>
            <Header />
            <TaskContainer />
        </div>
    );
}

export default App;
