import React from 'react'
import { makeStyles, Container, Typography } from "@material-ui/core"
import  FavoriteIcon from "@material-ui/icons/Favorite"

export default function StickyFooter() {
    const classes = useStyles()
    return (

        <footer className={classes.footer}>
            <Container maxWidth="sm">
                <Typography variant="body1">
                    Created with <FavoriteIcon style={{color: "red"}}/> By Tal Company 
                    <span>
                        <a href="pagina.com" target="_blank" rel='noreferrer'>Yamikawa</a>
                    </span>
                </Typography>
            </Container>
        </footer>
    )
}

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(2),
        marginTop: "auto"
    }
    
}))