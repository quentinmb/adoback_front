import React from 'react';
import { FormGroup, Label, Input} from 'reactstrap';
import {Modal, Backdrop, Fade, Button} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {connect} from "react-redux";
import {toggleNewBookModal, addBook, updateBookData} from "../actions";

import bookModalStyle from "../styles/library/bookModalStyle";


export class BookModal extends React.Component {
    state = {
        book: {
            id: '',
            autor: '',
            title: '',
        },
    };

    render() {
        let {addBook, classes} = this.props;
        return (
            <div>
                <Button color="primary" variant={'contained'} onClick={this.props.toggleNewBookModal.bind(this)}>Add Book</Button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={this.props.newBookModal}
                    onClose={this.props.toggleNewBookModal.bind(this)}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={this.props.newBookModal}>
                        <div className={classes.paper}>
                            <h2 id="transition-modal-title">Add a book</h2>
                            <form noValidate>
                                <FormGroup>
                                    <Label for="autor" className="mr-sm-2">Author</Label>
                                    <Input type="text" id="autor" placeholder="Name of the autor"
                                           value={this.props.bookData.autor}
                                           onChange={e => {
                                               let {bookData} = this.props;
                                               bookData.autor = e.target.value;
                                               this.props.updateBookData();
                                               this.forceUpdate();
                                           }}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="title" className="mr-sm-2">Title</Label>
                                    <Input type="text" id="title" placeholder="Title of the book"
                                           value={this.props.bookData.title}
                                           onChange={(e) => {
                                               let {bookData} = this.props;
                                               bookData.title = e.target.value;
                                               this.props.updateBookData();
                                               this.forceUpdate();
                                           }}
                                    />
                                </FormGroup>
                            </form>
                            <div>
                                <Button color="primary"
                                        variant="contained"
                                        fullWidth
                                        onClick={addBook.bind(this, this.state.book)}
                                >Save</Button>

                            </div>

                        </div>
                    </Fade>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        newBookModal: state.rootReducer.newBookModal,
        bookData: state.rootReducer.bookData
    };
};
BookModal = withStyles(bookModalStyle)(BookModal);

export default connect(mapStateToProps, {toggleNewBookModal, addBook, updateBookData})(BookModal);
