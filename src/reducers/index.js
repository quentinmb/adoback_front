import { combineReducers } from 'redux';
import authReducer from "./auth";
import layoutReducer from "./layouts";
import videoReducer from './videos';

const initialState = {
    articles: [],
    books: [],
    newBookModal: false,
    bookData:{
        id:'',
        autor:'',
        title:'',
    },
    error:{}
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ARTICLE':
            return Object.assign({}, state, {
                articles: state.articles.concat(action.payload)
            });
        case 'BOOKS_LOADED':
            return Object.assign({}, state, {
                books: action.payload
            });
        case 'SWITCH_BOOKS_MODAL':
            return Object.assign({}, state, {
                newBookModal: !state.newBookModal
            });
        case 'BOOK_DATA':
            return Object.assign({}, state, {
                bookData: action.bookData
            });
        case 'ADD_BOOK':
            let books = [...state.books];
            books.push(action.book);
            return Object.assign({}, state, {
                books: books
            });
        case 'REQUEST_FAILURE':
            return Object.assign({}, state, {
                error: action.payload
            });
        case 'EDIT_BOOK':
            return Object.assign({}, state, {
                bookData: action.book,
                newBookModal: true
            });
        default:
            return state;
    }
}

export default combineReducers({
    rootReducer,
    authReducer,
    videoReducer,
    layoutReducer
})