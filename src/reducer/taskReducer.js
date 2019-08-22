export const taskReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TASK":
            return [
                ...state,
                {
                    title: action.task.title,
                    description: action.task.description,
                    id: Math.floor(Math.random() * 1000),
                    completed: false,
                    dateAdded: new Date()
                        .toJSON()
                        .slice(0, 10)
                        .replace(/-/g, "/")
                }
            ];
        case "REMOVE_TASK":
            return state.filter(task => task.id !== action.id);
        default:
            return state;
    }
};
