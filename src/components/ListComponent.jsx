import React from 'react';
import { List, ListItem, ListSubheader, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import data from '../listData';

export default function ListComponent() {
const classes = useStyles()
  return (
      <List component="nav" aria-labelledby='nested-list-subheader' className={classes.listRoot}>
          {console.log(data)}
        {
        data.map(item => (
            <ListItem>
                <ListItemIcon className={classes.icon}>
                    {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />

                
            </ListItem>
        ))
        }
      </List>
    )
}

const useStyles = makeStyles((theme) => ({
    icon:{
        color: "#ea5933"
    }
    
}))