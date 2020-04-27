import React from "react";
import {
    Drawer,
    withStyles,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    withTheme
} from "@material-ui/core";
import sideBarStyle from '../../styles/layouts/SideBar';
import clsx from 'clsx';
import {connect} from "react-redux";
import {
    Home as HomeIcon,
    VideoLibrary,
    ChevronRight as ChevronRightIcon,
    ChevronLeft as ChevronLeftIcon,
    LibraryBooks as LibraryIcon
} from '@material-ui/icons';
import {withRouter} from "react-router";
import {toggleSidebar} from "../../actions/layouts";
import {
    isMobile
} from "react-device-detect";

class SideBar extends React.Component {

    theme = this.props.theme;

    library = () => {
        this.props.history.push('/library');
    };

    home = () => {
        this.props.history.push('/');
    };
    video = () => {
        this.props.history.push('/video');
    };

    render() {
        let open = this.props.sidebarOpen;
        let {classes} = this.props;
        let sideBarButton = null;

        if (!isMobile) {
            sideBarButton = <IconButton onClick={this.props.toggleSidebar}>
                {this.theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
            </IconButton>
        }

        return <Drawer
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={isMobile ? null : {
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
            variant={'permanent'}
            anchor={isMobile ? 'bottom' : 'left'}

            open={open}>
            {sideBarButton}
            <Divider/>
            <List className={isMobile ? clsx(classes.listMobile) : clsx(classes.list)}>
                <ListItem button key={'home'} onClick={this.home}>
                    <ListItemIcon children={<HomeIcon/>} />
                    <ListItemText primary={'home'}/>
                </ListItem>
                <ListItem button key={'library'} onClick={this.library}>
                    <ListItemIcon children={<LibraryIcon/>} />
                    <ListItemText primary={'library'}/>
                </ListItem>
                <ListItem button key={'video'} onClick={this.video}>
                    <ListItemIcon children={<VideoLibrary/>} />
                    <ListItemText primary={'Video'}/>
                </ListItem>
            </List>
        </Drawer>
    }
}

const mapStateToProps = (state) => {
    return {
        sidebarOpen: state.layoutReducer.sidebarOpen,
    };
};

SideBar = withStyles(sideBarStyle)(SideBar);
SideBar = withTheme(SideBar);
SideBar = withRouter(SideBar);

export default connect(mapStateToProps, {toggleSidebar})(SideBar);