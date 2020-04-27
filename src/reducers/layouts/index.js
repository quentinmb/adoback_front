let initialState = {
    sidebarOpen: false
};

export default function layoutReducer(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_SIDEBAR':
            return Object.assign({}, state, {
                sidebarOpen: !state.sidebarOpen
            });
        default:
            return state;
    }
}