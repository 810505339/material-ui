import {createStyles, makeStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: theme.zIndex.drawer + 1,
        background: theme.palette.common.white,
        boxShadow: theme.shadows[3],
        height: 64,
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        flexBasis: 0
    }
}))

export {
    useStyles
}