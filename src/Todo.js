import React from 'react';
import { ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';

function Todo(props) {
    return (
            <ListItem>
                <ListItemAvatar></ListItemAvatar>
                <ListItemText primary={props.text} secondary="Dummy Deadline"/>
            </ListItem>
        
    )
}

export default Todo
