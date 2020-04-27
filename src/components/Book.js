import React from "react";
import { connect } from "react-redux";
import { deleteBook, editBook } from '../actions';
import {Button} from 'reactstrap';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
export class Book extends React.Component {

    render() {
        let {book} = this.props;

        return (
            <TableRow >
                <TableCell align={'right'}>{book.id}</TableCell>
                <TableCell align={'right'}>{book.autor}</TableCell>
                <TableCell align={'right'}>{book.title}</TableCell>
                <TableCell align={'right'}>
                    <Button color="success" size='small' className={"mr-2"} onClick={this.props.editBook.bind(this, book)} >Edit</Button>
                    <Button color="danger" size='small' onClick={this.props.deleteBook.bind(this, book)}>Delete</Button>
                </TableCell>
            </TableRow>
        );
    }
}


export default connect(null, { deleteBook, editBook })(Book);