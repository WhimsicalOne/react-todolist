import React from "react";

const Header = ({ amountOfTasks: number }) => {
    return (
        <div className='header'>
            <h1 className='head'>ToDoList Application</h1>
            <p className='sentence'>
                Amount of tasks: <span>{number}</span>
            </p>
        </div>
    );
};

export default Header;
