import React, {FC} from "react";
import useStyles from "@/components/layout/stlye";
import {Toolbar} from "@material-ui/core";
import RouterView from "@/router/RtouerView";

const Main: FC = () => {
    const classes = useStyles()
    return (<>
        <main className={classes.content}>
            <Toolbar/>
            <RouterView/>
        </main>
    </>)
}

export default Main