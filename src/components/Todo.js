import { Button, Input, List, ListItem, ListItemText, makeStyles, Modal } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React, { useState } from 'react';
import './Todo.css';
import { db }  from '../firebase';


const useStyles = makeStyles((theme) => ({
    paper :{
        position : 'absolute',
        width : 400 ,
        backgroundColor : theme.palette.background.paper,
        border : '2px solid #000',
        boxShadow : theme.shadows[5],
        padding : theme.spacing(2,4,3)
    }
}))

function Todo(props) {
    
    const classes =useStyles();

    const [open,setOpen] = useState(false);
    const [ input ,setInput] =useState();

    const handleOpen = () => {
        setOpen(true);
    };

    const updateTodo = () => {
        //to update the data

        db.collection('todos').doc(props.todo.id).set({
            todo : input
        },{ merge : true })
        setOpen(false);
    }

    // const handleClose = () => {
    //     setOpen(false);
    // };
    return (
        // <div>
        //      {/* <li>{props.text}</li> */}

        // </div>
        <>
        <Modal
        open= { open }
        onClose = { e => setOpen(false)}
        >
            <div className= {classes.paper}>
                <h1>Iam a Modal</h1>
                <Input placeholder={props.todo.todo} value = {input} onChange={ event => setInput(event.target.value)}/>
                <Button onClick ={updateTodo}>Update Todo</Button>
            </div>
        </Modal>
        <List className="todo_list">
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary="Dummy Deadline ⏰"/>
            </ListItem>
            <button onClick = { e =>  setOpen(true) }>Edit</button>
            <DeleteForeverIcon onClick={ event =>  {
                db.collection('todos').doc(props.todo.id).delete()
                } 
                 } />
        </List>
        </>
    )
}

export default Todo
