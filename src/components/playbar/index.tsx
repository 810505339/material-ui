import React, {FC} from 'react'
import {useStyles} from './stlye'

const PlayBar: FC = () => {
    const classes = useStyles()

    return (<>
        <div className={classes.root}>
            App
        </div>
    </>)
}

export default PlayBar