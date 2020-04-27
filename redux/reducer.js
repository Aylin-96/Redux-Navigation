const initialState = {
    username: 'Black Cat'
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Username':
            return {
                ...state,
            }
        default:
            return state
    }
}