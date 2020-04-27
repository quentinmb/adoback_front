import React from 'react';
import BookModal from "../BookModal";
import Books from "../Books";

export default class Library extends React.Component{


    render(){
        return <div>
            <BookModal />
            <Books/>
        </div>
    }

}