import React from 'react'
import { makeStyles } from "@material-ui/core"


export default function StickyFooter() {
    const classes = useStyles()

    return (
        <div>
            Footer
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
    }
    
}))