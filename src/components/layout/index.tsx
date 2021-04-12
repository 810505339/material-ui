import React, {FC, useState} from "react";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import SliderBar from "@/components/layout/SliderBar";
import useStyles from "@/components/layout/stlye";

const Layout: FC = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false)

    const option = {
        setOpen, open, mobileOpen, setMobileOpen
    }

    return (<>
        <div className={classes.root}>
            <Header {...option}/>
            <SliderBar {...option}/>
            <Main/>
        </div>
    </>)
}

export default Layout