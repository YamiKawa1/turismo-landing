import React from 'react';
import { List, ListSubheader } from '@material-ui/core';
import { makeStyles, Paper, GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import galleryData from '../galleryData';

export default function GalleryComponent() {
const classes = useStyles()
  return (
      <Paper variant='outlined' square elevation={0} className={classes.galleryRoot}>
          <div className={classes.mosaic}>
            <GridList cellHeight={220} className={classes.gridList}>
              {
                galleryData.map(data => (
                  <GridListTile key={data.text}>
                      <img src={data.url} alt={data.title} />
                      <GridListTileBar title={data.title}/>
                  </GridListTile>
                ))
              }
            </GridList>
          </div>
      </Paper>
    )
}

const useStyles = makeStyles((theme) => ({
  galleryRoot: {
    height: "auto",     
  },
  mosaic:{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  gridList: {
    width: 1000,
    height: 500,
    "&::-webkit-scrollbar": {
      display: "none"
    }
  }
}))