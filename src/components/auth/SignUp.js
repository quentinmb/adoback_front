import React from 'react';
import {signUp} from '../../actions/auth';
import {connect} from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {Button} from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import signUpStyle from "../../styles/auth/signUpStyle";
import {withRouter} from "react-router";

class SignUp extends React.Component {

    state = {
        user: {
            email: '',
            firstname: '',
            lastname: '',
            password: ''
        },
        passwordRepeat: '',
        error: {
            id: '',
            message: '',
        }
    };

    handleInput = e => {
        const {user} = {...this.state};
        const currentState = user;
        const {id, value} = e.target;
        currentState[id] = value;

        this.setState({user: currentState});
    };

    handleUserPass = e => {
        const {user} = {...this.state};
        const currentState = user;
        const {id, value} = e.target;
        currentState[id] = value;

        this.setState({user: currentState}, () => this.checkPassword());
    };

    handlePasswordRepeat = e => {
        this.setState({passwordRepeat: e.target.value}, () => this.checkPassword());
    };

    checkPassword = () => {
        if (this.state.passwordRepeat !== this.state.user.password) {
            this.setState({error: {id: 'password-repeat'}});
        } else {
            this.setState({error: {id: ''}});
        }
    };

    render() {
        let {classes} = this.props;

        if ( this.props.isSignUp ) this.props.history.push('/');

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    onChange={this.handleInput}
                                    fullWidth
                                    id="firstname"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    onChange={this.handleInput}
                                    fullWidth
                                    id="lastname"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    onChange={this.handleInput}
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    onChange={this.handleUserPass}
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password-repeat"
                                    label="Reapet the Password"
                                    type="password"
                                    id="password-repeat"
                                    autoComplete="new-password"
                                    onChange={this.handlePasswordRepeat}
                                />
                                {(this.state.error.id === 'password-repeat') ? 'Passwords aren\'t the same !' : ''}
                            </Grid>
                        </Grid>

                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={() => { if (this.state.error.id !== 'password-repeat') this.props.signUp.bind(this, this.state.user);}}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2" onClick={() => this.props.history.push('/login')}>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        isLoggedIn: state.authReducer.isLoggedIn,
        isSignUp: state.authReducer.isSignUp
    };
};

SignUp = withStyles(signUpStyle)(SignUp);
SignUp = withRouter(SignUp);

export default connect(mapStateToProps, {signUp})(SignUp);