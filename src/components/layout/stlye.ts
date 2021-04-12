import {createStyles, makeStyles, Theme} from "@material-ui/core";
import {red} from "@material-ui/core/colors";

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    headerWrapper: {
        flexGrow: 1
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',


    },
    drawerPaper: {
        width: drawerWidth,
    },
    selected: {
        color: red[800]
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        minWidth: 0,
    },
    drawerOpen: {
        width: drawerWidth,
        overflow: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflow: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
}))

export default useStyles