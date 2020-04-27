

let isLogin = !!localStorage.getItem('adoback_back_token');

let initialState = {
    user: {},
    isLoggedIn: isLogin,
    isSignUp: false,
    errorMessages:[]
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_IS_SIGN_up':
            return Object.assign({}, state, {
                isSignUp:false
            });
        case 'USER_SIGN_UP_SUCCESS':
            localStorage.setItem('adoback_back_token', action.payload.token);
            return Object.assign({}, state,{
                user:action.payload,
                isLoggedIn:true,
                isSignUp:true
            });
        case 'USER_SIGN_UP_FAILURE':
            return Object.assign({}, state,{
                errorMessages: action.payload
            });
        case 'USER_LOGGED_IN':
            localStorage.setItem('adoback_back_token', action.payload.token);
            return Object.assign({}, state, {
                user: action.payload,
                isLoggedIn: true
            });

        case 'USER_LOGOUT':
            return Object.assign({}, state, {
                user: {},
                isLoggedIn: false
            });
        default:
            return state;
    }
}
