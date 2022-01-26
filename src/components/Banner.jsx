import React from 'react'
import { makeStyles, Paper, Typography } from "@material-ui/core"
import StarsIcon from "@material-ui/icons/Stars"

export default function Banner() {
    const classes = useStyles()
    return (
        <>
            <Paper variant="outlined" square elevation={0} className={classes.banner}>
                <div className= {classes.titleContainer}>
                    <Typography variant='h4' component="h1" className={classes.title}>
                        Reserve your events in <span style={{color: "#ea5933"}}>BCN</span> 
                    </Typography>
                    <img src="https://cdn.pixabay.com/photo/2017/10/05/10/05/leaf-2818896_960_720.jpg" alt="logo" className={classes.logo} />
                </div>
                <div className={classes.subtitleContainer}>
                    <Typography className={classes.subtitle} variant='h6'>
                        Oranize your meeting in a ... 
                        <br />
                        100% certified eco-resort <StarsIcon className={classes.icon} fontSize='small'/>
                        Best-in-class-speed-connection <StarsIcon className={classes.icon} fontSize='small'/>
                        Sorrounded by nature <StarsIcon className={classes.icon} fontSize='small'/>
                        20-min from barcelona 
                    </Typography>
                </div>
            </Paper>
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    banner: {
        width: "inherit",
        height: "55vh",
        backgroundImage: "url(https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863_960_720.jpg)",       
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        color: "#fff",
        fontWeight: "bold",
        position: "relative"
    },
    titleContainer: {
        background: "#000",
        opacity: 0.8,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
    },
    logo: {
        width: "6rem",
        height: "auto",
        padding: theme.spacing(0),
    },
    title: {
        padding: theme.spacing(1)
    },
    subtitleContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#000",
        opacity: 0.9
    },
    subtitle: {
        color: "#ea5933",
        fontWeight: "bold",
        padding: theme.spacing(3),
        height: "auto",
        textAlign: "center",
    },
    icon: {
        verticalAlign: "middle",
        margin: theme.spacing(0, 1)
    },
    [theme.breakpoints.down("sm")]: {
        title: {
            fontSize: "1.5rem"
        },
        logo: {
            width: "4rem",
        },
        subtitle: {
            fontSize: ".9rem"
        }
    },
    [theme.breakpoints.down("xs")]: {
        subtitle: {
            fontSize: "0.7rem"
        }
    }
    
}))
