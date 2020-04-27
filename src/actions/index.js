import axios from 'axios';
import API_CALL from "../helpers/API_CALL";

const REQUEST = 'user/REQUEST';

export function addArticle(payload) {
    return {type: 'ADD_ARTICLE', payload}
}

export function getBooks() {
    return API_CALL(
        'api/books',
        'GET',
        [ REQUEST,
            {
                type: 'BOOKS_LOADED',
                payload: (action, state, res) => {
                    return res.json()
                }
            },
            {
                type: 'FAILURE',
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
        ]
    );
}


export function getBooks_OLD() {
    return function (dispatch) {
        return axios.get('http://localhost:3333/api/books')
        // .then(response => response.json())
            .then((json) => {
                dispatch({type: "BOOKS_LOADED", payload: json.data});
            })
            .catch(error => {
                console.log(error);
            });
    };
}

export function deleteBook(book) {
    return function (dispatch) {
        return axios.delete('http://localhost:3333/api/books/' + book.id)
            .then((response) => {
                dispatch(getBooks());
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

export function updateBookData() {
    return {type: 'BOOK_DATA', bookData: this.bookData}
}

export function editBook(book) {
    return {type: 'EDIT_BOOK', book: book};
}

export function addBook(book) {
    return addBook_old(book);
}

export function addBook_old(book) {
    return function (dispatch) {
        if (book.id) {
            return axios.put('http://localhost:3333/api/books/' + book.id, book)
                .then((response) => {
                    dispatch(getBooks());
                    dispatch(toggleNewBookModal());
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        return axios.post('http://localhost:3333/api/books', book)
            .then((response) => {
                dispatch({type: 'ADD_BOOK', book: response.data});
                dispatch(toggleNewBookModal());
            })
            .catch((error) => {
                console.error(error);
            });
    }

}

export function toggleNewBookModal() {
    return {type: 'SWITCH_BOOKS_MODAL'};
}