import clsx from 'clsx';
import React, {FC, useState} from 'react'
import {List, ListItem, ListItemIcon, ListItemText, Drawer, Hidden, Toolbar, IconButton} from '@material-ui/core'
import {IRoute, routes} from '@/router'
import useStyles from './stlye'
import {Link} from 'react-router-dom'

export interface ISliderBar {
    open: boolean,
    mobileOpen: boolean,
    setMobileOpen: (mobileOpen: boolean) => void
}


const SliderBar: FC<ISliderBar> = ({open, mobileOpen, setMobileOpen}) => {
    const classes = useStyles()
    const [selectIndex, setSelectIndex] = useState(0);

    const handleClose = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (<>
        <Hidden xsDown implementation="css">
            <Toolbar/>
        </Hidden>
        <List>
            {routes && routes.map((item: IRoute, index) =>
                (<ListItem component={Link} to={item.path} button key={index} selected={selectIndex === index}
                           classes={{selected: classes.selected}}
                           onClick={() => setSelectIndex(index)}>
                    <ListItemIcon className={selectIndex === index ? classes.selected : ''}>
                        <item.icon/>
                    </ListItemIcon>
                    <ListItemText primary={item.title}/>
                </ListItem>)
            )}
        </List>
    </>)


    return (<>
        <Hidden smUp implementation="css">
            <Drawer variant="temporary" className={classes.drawer}
                    open={mobileOpen}
                    onClose={handleClose}
                    classes={{
                        paper: classes.drawerPaper
                    }}
            >
                {drawer}
            </Drawer>
        </Hidden>

        <Hidden xsDown implementation="css">
            <Drawer variant="permanent" className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })} classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
            >
                {drawer}
            </Drawer>
        </Hidden>


    </>)
}

export default SliderBar


