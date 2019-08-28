import React from "react";
import { useAuth } from "../../context/userContext";

const Header = ({ amountOfTasks: number }) => {
    const auth = useAuth();
    console.log(auth);
    return (
        <div className='header'>
            <h1 className='head'>ToDoList Application</h1>
            <p className='sentence'>
                Amount of tasks:
                <span>{number === null ? "error" : number}</span>
            </p>
        </div>
    );
};

export default Header;
