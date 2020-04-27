import React from 'react';
import {connect} from "react-redux";
import {logout} from "../actions/auth";
import {toggleSidebar} from '../actions/layouts';
import CssBaseline from '@material-ui/core/CssBaseline';
import {AppBar, IconButton, Toolbar, Typography, Button} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import withStyles from "@material-ui/core/styles/withStyles";
import SideBar from "./layouts/SideBar";
import homeStyle from "../styles/homeStyle";
import clsx from 'clsx';
import { withRouter } from "react-router-dom";
import {isMobile} from "react-device-detect";

class Home extends React.Component {
    state = {
        logComponent : '',
        sideBar : '',
        content : '',
    };

    componentDidMount() {

        let logComponent, sideBar, content = '';
        if (this.props.isLoggedIn) {
            sideBar = <SideBar/>;
            content = this.props.content;
            logComponent = <Button color="inherit" onClick={this.props.logout}>Log out</Button>;
        }
        this.setState({logComponent, sideBar, content});

        if (this.props.isSignUp) this.props.toggleSignUp();
    }

    render() {
        let open = this.props.sidebarOpen;
        let {classes,  isLoggedIn} = this.props;
        let {logComponent, sideBar, content} = this.state;

        if (!isLoggedIn) {
            this.props.history.push('/login');
        }

        return (
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar position="fixed"
                        style={{'backgroundColor': '#1976d2'}}
                        className={clsx(classes.appBar, {
                            [classes.appBarShift]: open,
                        })}
                >
                    <Toolbar>
                        {
                            isMobile ?
                                ''
                                :
                                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={this.props.toggleSidebar}>
                                    <MenuIcon />
                                </IconButton>
                        }
                        <Typography variant="h6" className={classes.title}>
                            React/Redux + AdonisJS
                        </Typography>
                        {logComponent}
                    </Toolbar>
                </AppBar>
                {sideBar}
                <main className={ isMobile ? classes.contentMobile : classes.content}>
                    <div className={ isMobile ? classes.toolbar : classes.toolbar} />
                    {content}
                </main>
            </div>
        );
    }
}

const toggleSignUp = () => {
    return { type: 'TOGGLE_IS_SIGN_up'}
};

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.authReducer.isLoggedIn,
        isSignUp: state.authReducer.isSignUp,
        sidebarOpen: state.layoutReducer.sidebarOpen,
    };
};

Home = withStyles(homeStyle)(Home);
Home = withRouter(Home)

export default connect(mapStateToProps, {logout, toggleSidebar, toggleSignUp})(Home);