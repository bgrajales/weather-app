
export const searchReducer = (state, action) => {

    switch (action.type) {
        case 'SEARCH_INPUT_AUTOCOMPLETE':
            return {
                ...state,
                searchMatch: action.payload
            };
        default:
            return state;
    }

}