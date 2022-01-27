import React from 'react';
import { makeStyles, Grid } from "@material-ui/core"
import ListComponent from './ListComponent';
import GalleryComponent from './GalleryComponent';

export default function ListGallery() {
    const classes = useStyles()
  return (
  <div className={classes.gridRoot}>
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <ListComponent/>
            </Grid>
            <Grid item xs={12} md={6}>
                <GalleryComponent/>
            </Grid>
        </Grid>
  </div>
)}

const useStyles = makeStyles((theme) => ({
    root: {
        
    }
    
}))
