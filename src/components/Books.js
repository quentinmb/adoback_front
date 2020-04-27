import React from "react";
import {connect} from "react-redux";
import {getBooks} from "../actions";
import Book from './Book';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {withStyles} from "@material-ui/core";
import booksStyle from "../styles/library/booksStyle";


const mapStateToProps = (state) => {
    return {books: state.rootReducer.books};
};

class Books extends React.Component {
    componentDidMount() {
        this.props.getBooks();
    }

    render() {
        let books;
        let {classes} = this.props;
        if (this.props.books){
            books = this.props.books.map((book) => {
                return (
                    <Book key={book.id} book={book}/>
                );
            });
        }

        return (
            <Paper className={classes.paper}>
                <Table className={classes.table} size="small" aria-label="a books list">

                    <TableHead>
                    <TableRow>
                        <TableCell align={'right'}>#</TableCell>
                        <TableCell align={'right'}>Autor</TableCell>
                        <TableCell align={'right'}>title</TableCell>
                        <TableCell align={'right'}>Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {books}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

Books = withStyles(booksStyle)(Books);

export default connect(mapStateToProps, {getBooks})(Books);