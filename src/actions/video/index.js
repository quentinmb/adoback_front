import API_CALL from "../../helpers/API_CALL";

export function allVideos() {
    return API_CALL(
        'api/videos',
        'GET',
        ['REQUEST_ALL_VIDEOS',
            {
                type: 'VIDEOS_RESULT',
                payload: (action, state, res) => {
                    return res.json();
                }
            }
        ]
    );
}

export function localResearch(data) {
    return API_CALL(
        'api/videos/' + data,
        'GET',
        ['LOGIN REQUEST',
            {
                type: 'USER_LOGGED_IN',
                payload: (action, state, res) => {
                    return res.json();
                }
            }
        ]
    );
}