import {RSAA} from "redux-api-middleware";

const API_URL = 'http://localhost:3333/';

export default function callApi(endpoint, method, types, body = {}, headers = null) {
    if (!headers) {
        headers = getHeaders()
    }

    if ( !types[2]) {
        types[2] = {
            type: 'REQUEST_FAILURE',
            payload: (action, state, res) => {
                if (res) {
                    return {
                        status: res.status,
                        statusText: res.statusText
                    };
                } else {
                    return {
                        status: 'Network request failed'
                    }
                }
            }
        }
    }

    let request = {
        headers: headers,
        endpoint: API_URL + endpoint,
        method: method,
        types: [types[0], types[1], types[2]]
    };

    if ( method !== 'GET'){
        request['body'] = JSON.stringify(body);
    }

    return {
        [RSAA]: request
    }
}

export function getHeaders() {
    let headers = {
        'Content-Type': 'application/json',
    };

    if(localStorage.getItem('adoback_back_token')){
        headers['AUTHORIZATION'] = 'Bearer ' + localStorage.getItem('adoback_back_token');
    }
    return headers;
}