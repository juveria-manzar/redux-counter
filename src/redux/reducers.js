let reducer = (state = 0, reducer) => {
    switch (action.type) {
        case "INCREMENT":
            return state+1;
        default:
            return state;    
    }
}

export default reducer;