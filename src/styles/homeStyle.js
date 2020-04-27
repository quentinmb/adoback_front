import {drawerWidth} from './constantes/homeConstants';
const homeStyle = theme => ({
    root: {
        display: 'flex'
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        width:'80%'
    },
    contentMobile: {
        flexGrow: 1,
        padding: theme.spacing(1),
        width:'100%',
        position: 'absolute',
        left: '0px',
    },
    menuButton: {
        marginRight: theme.spacing(5),
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
});
export default homeStyle;