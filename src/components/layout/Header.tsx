import React, {FC} from "react";
import {AppBar, Toolbar, IconButton, Hidden} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {Typography} from "@material-ui/core";
import useStyles from "@/components/layout/stlye";

export interface IHeader {
    setOpen: (open: boolean) => void,
    open: boolean,
    mobileOpen: boolean,
    setMobileOpen: (mobileOpen: boolean) => void
}

const Header: FC<IHeader> = ({setOpen, mobileOpen, open, setMobileOpen}) => {
    const classes = useStyles()

    return (<>
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton className={classes.menuButton} color="inherit">
                    <Hidden xsDown implementation="css">
                        <MenuIcon aria-label="menu" fontSize={'large'} onClick={() => setOpen(!open)}/>
                    </Hidden>

                    <Hidden smUp implementation="css">
                        <MenuIcon aria-label="menu" fontSize={'large'}
                                  onClick={() => setMobileOpen(!mobileOpen)}/>
                    </Hidden>
                </IconButton>
                <Typography variant="h5" className={classes.headerWrapper}>MUSIC</Typography>
            </Toolbar>
        </AppBar>
    </>)
}

export default Header