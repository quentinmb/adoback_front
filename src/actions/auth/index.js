import API_CALL from "../../helpers/API_CALL";

export function login(data) {
    return API_CALL(
        'login',
        'POST',
        ['LOGIN REQUEST',
            {
                type: 'USER_LOGGED_IN',
                payload: (action, state, res) => {
                    return res.json();
                }
            }
        ],
        data
    );
}

export function signUp(user) {
    if (user.email && user.firstname && user.lastname && user.password)
        return API_CALL(
            'create-account',
            'POST',
            ['SIGN_UP_REQUEST',
                {
                    type: 'USER_SIGN_UP_SUCCESS',
                    payload: (action, state, res) => {
                        return res.json();
                    }
                },
                {
                    type: 'USER_SIGN_UP_FAILURE',
                    payload: (action, state, res) => {
                        return res.json();
                    }
                }
            ],
            user
        );
}

export function logout() {
    localStorage.removeItem('adoback_back_token');
    return {type: 'USER_LOGOUT'};
}