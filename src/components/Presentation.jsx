import React from 'react'
import { makeStyles, Paper, Typography } from "@material-ui/core"
import ListGallery from "./ListGallery"

export default function Presentation() {
    const classes = useStyles()
    return (
        <Paper variant='outlined' square elevation={0} className={classes.presentation}>
            <Typography variant="h5">Our package includes</Typography>
            <ListGallery></ListGallery>
        </Paper>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        
    }
    
}))