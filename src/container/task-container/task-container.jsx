import React, { Component } from "react";
import TaskItemContainer from "../../components/task-item-container/task-item-container";
import TaskInputContainer from "../../components/task-input-container/task-input-container";
import Header from "../../components/header/header";
import Notification from "../../components/notification/notification";

class TaskContainer extends Component {
    state = {
        taskList: [],
        taskAdded: false,
        hidden: false
    };
    addTask = task => {
        //Strictly adding...
        this.setState({
            taskList: [...this.state.taskList, task]
        });
        localStorage.setItem(
            "tasks",
            JSON.stringify([...this.state.taskList, task])
        );
    };
    removeTask = task => {
        // Removing only..
        this.setState({
            taskList: this.state.taskList.filter(_task => task !== _task.id)
        });
    };
    taskHasBeenAdded = condition => {
        this.setState({
            taskAdded: condition
        });
    };
    deleteTasksFromLS = task => {
        // Delete from LS and renew task
        localStorage.removeItem(task);
        localStorage.setItem("tasks", [...this.state.taskList]);
    };
    render() {
        const { taskList, taskAdded } = this.state;
        return (
            <React.Fragment>
                <Header amountOfTasks={taskList.length} />
                <div className='task-container'>
                    <div className='task-inputs'>
                        <TaskInputContainer
                            addTask={this.addTask}
                            taskAdded={this.taskIsAdded}
                            taskHasBeenAdded={this.taskHasBeenAdded}
                        />
                        {taskAdded === false ? (
                            <Notification error />
                        ) : (
                            <Notification success />
                        )}
                    </div>
                    <div className='task-items'>
                        <TaskItemContainer
                            tasks={this.state.taskList}
                            removeTaskFn={this.removeTask}
                        />
                    </div>
                </div>
                <div className='buttons'>
                    <button onClick={() => this.deleteTasksFromLS("tasks")}>
                        Delete Tasks (Permanently)
                    </button>
                </div>
            </React.Fragment>
        );
    }
}

export default TaskContainer;
