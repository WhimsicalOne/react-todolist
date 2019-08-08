import React from "react";
const Notification = ({ error, success }) => {
    if (error) {
        return (
            <div className='notification error'>
                <p>Fields are empty.</p>
            </div>
        );
    }
    if (success) {
        return (
            <div className='notification success'>
                <p>Task has been added</p>
            </div>
        );
    }
};

export default Notification;
