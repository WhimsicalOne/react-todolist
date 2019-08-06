import React from "react";

const Header = () => {
    const number = 0;
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
