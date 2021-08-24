//function that actually modifies the state

let loginReducer = (state = false, action) => {
    switch (action.type) {
        case "LOGIN":
            return true;
        case "LOGOUT":
            return false;
        default:
            return state;
    }
}

export default loginReducer;