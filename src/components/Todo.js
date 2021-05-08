import { List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import './Todo.css';

function Todo(props) {
    return (
        // <div>
        //      {/* <li>{props.text}</li> */}

        // </div>
        <List className="todo_list">
            <ListItem>
                <ListItemText primary={props.text} secondary="Dummy Deadline ⏰"/>
            </ListItem>
        </List>
    )
}

export default Todo
