import React from 'react'
import { makeStyles, Paper } from "@material-ui/core"

export default function Banner() {
    const classes = useStyles()
    return (
        <>
            <Paper variant="outlined" square elevation={0} className={classes.banner}>

            </Paper>
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    banner: {
        width: "inherit",
        height: "55vh",
    }
    
}))
