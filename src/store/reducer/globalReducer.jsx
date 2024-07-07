const defaultValue = {
    scrollY: 0
}

const globalReducer = (state = defaultValue, action) => {
    switch(action.type) {
        case "scrollY": 
            return {...state, scrollY: action.value}
        default:
            return {...state}
    }
}

export default globalReducer;