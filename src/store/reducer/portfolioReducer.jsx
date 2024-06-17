const defaultValue = {
    listTag: [],
}

const portfolioReducer = (state = defaultValue, action) => {
    switch(action.type) {
        case "addTag":
            return {...state, listTag: [...state.listTag, action.value]}
        case "removeTag": 
            return {...state, listTag: state.listTag.filter((v) => v != action.value)}
        default: 
            return state
    }
}

export default portfolioReducer