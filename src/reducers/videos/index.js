let initialState = {
    videos: []
};

export default function videoReducer(state = initialState, action) {
    switch (action.type) {
        case 'VIDEOS_RESULT':
            return Object.assign({}, state, {
                videos: action.payload
            });
        default:
            return state;
    }
}