import React from 'react'
import { makeStyles, Paper, Typography, Divider, Button } from "@material-ui/core"
import EmailIcon from "@material-ui/icons/Email"

export default function Explanation() {
    const classes = useStyles()

    return (
        <Paper variant="outlined" elevation={0} square className={classes.explanation}>
            <Typography variant="subtitle2" paragraph gutterBottom>
                <strong>Lorem ipsum</strong>  dolor sit amet consectetur adipisicing elit. Laboriosam nisi nulla beatae, <strong>ex culpa nemo</strong> deserunt repudiandae quia iusto quo fuga sunt officia iure eaque officiis nostrum, tempora molestiae earum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nisi nulla beatae ex culpa nemo, deserunt repudiandae quia iusto quo fuga sunt officia iure <strong>eaque officiis</strong>  nostrum, tempora molestiae earum?
            </Typography>
            <Divider/>
            <Typography variant="subtitle1" paragraph gutterBottom style={{margin: "1rem 1.5rem"}}> 
                <strong>Lorem ipsum</strong> dolor sit amet consectetur adipisicing elit. Laboriosam nisi nulla beatae ex culpa nemo, deserunt repudiandae quia iusto quo fuga sunt officia iure eaque officiis nostrum, tempora molestiae earum?            </Typography>
            <Typography variant="subtitle1" paragraph gutterBottom style={{margin: "1rem 1.5rem"}}>
                <strong>Lorem ipsum</strong> dolor sit amet consectetur adipisicing elit. Laboriosam nisi nulla beatae ex culpa nemo, deserunt repudiandae quia iusto quo fuga sunt officia iure eaque officiis nostrum, tempora molestiae earum?
            </Typography>
            <Typography variant="subtitle1" paragraph gutterBottom style={{margin: "1rem 1.5rem"}}>
                <strong>Lorem ipsum</strong> dolor sit amet consectetur adipisicing elit. Laboriosam nisi nulla beatae ex culpa nemo, deserunt repudiandae quia iusto quo fuga sunt officia iure eaque officiis nostrum, tempora molestiae earum?
            </Typography>
            <Typography variant="subtitle1" paragraph gutterBottom style={{margin: "1rem 1.5rem"}}>
                <strong>Lorem ipsum</strong> dolor sit amet consectetur adipisicing elit. Laboriosam nisi nulla beatae ex culpa nemo, deserunt repudiandae quia iusto quo fuga sunt officia iure eaque officiis nostrum, tempora molestiae earum?
            </Typography>
            <Typography variant="subtitle1" paragraph gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nisi nulla beatae ex culpa nemo, deserunt repudiandae quia iusto quo fuga sunt officia iure eaque officiis nostrum, tempora molestiae earum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nisi nulla beatae ex culpa nemo, deserunt repudiandae quia iusto quo fuga sunt officia iure eaque officiis nostrum, tempora molestiae earum?
            </Typography>

            <div className={classes.action}>
                <Button variant="contained" startIcon={<EmailIcon/>} style={{margin: "2rem 0", backgroundColor: "#ea5933"}}>
                    <a href="mailto:blablabla@gmail.com" className={classes.link}>
                        Send me a email <span className={classes.extendText}> to learn more...</span>
                    </a>
                </Button>
                <br />
                <Typography variant="h6">
                    Or get in touch at blablabla@gmail.com
                </Typography>
            </div>
        </Paper>
    )
}

const useStyles = makeStyles((theme) => ({
    explanation: {
        width: "inherit",
        height: "auto",
        padding: theme.spacing(2)
    },
    action: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "& button:hover": {
            backgroundColor: "#ccc !important"
        }
    },
    link:{
        textDecoration: "none",
        color: "#fff",
        fontsize: "1rem",
        fontWeight: "bold",
        fontStyle: "italic"
    },
    [theme.breakpoints.down("sm")]: {
        extendText: {
            display: "none",
        }
    }
    
}))
