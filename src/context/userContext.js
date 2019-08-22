import React, { useState, useContext, createContext } from "react";
import firebase from "firebase/app";
export const UserContext = createContext({
    user: null
});

export const useSession = () => {
    const { user } = useContext(UserContext);
    return user;
};

export const useAuth = () => {
    const [state, setState] = React.useState(() => {
        const user = firebase.auth().currentUser;
        return {
            initializing: !user,
            user
        };
    });

    function onChange(user) {
        setState({ initializing: false, user });
    }

    React.useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChange(onChange);
        return () => unsubscribe();
    }, []);

    return state;
};
