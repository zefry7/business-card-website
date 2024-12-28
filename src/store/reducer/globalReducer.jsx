const defaultValue = {
    page: 1,
};

const globalReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case "prev-page": {
            let oldPage = state.page;

            if (oldPage != 1) {
                --oldPage;
            }

            return { ...state, page: oldPage };
        }
        case "next-page": {
            let oldPage = state.page;
            
            if (oldPage != 3) {
                ++oldPage;
            }

            return { ...state, page: oldPage };
        }
        default:
            return { ...state };
    }
};

export default globalReducer;
