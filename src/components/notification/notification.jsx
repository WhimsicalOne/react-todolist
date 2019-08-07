import React from "react";
const Notification = ({ notifications }) => {
    if (notifications) {
        return (
            <div className='notification green'>
                <p>You have added a task! Well done, you!</p>
            </div>
        );
    }
    return (
        <div className='notification red'>
            <p>Those fields are empty!</p>
        </div>
    );
};

export default Notification;
