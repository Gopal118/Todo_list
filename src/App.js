import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import { db } from './firebase';
import  firebase  from 'firebase';

function App() {
  //data present in tyhe arrray
  const [todos,setTodos]=useState([]);
  
  //to store the input from the user 
  //at first it is set to empty
  const [input,setInput]=useState('');


//when the app loads,we need to load the data from the database and then able to add/ remove the data.
useEffect(()=>{
  // this code will fire when the app.js loads
  db.collection('todos').orderBy('timestamp','asc').onSnapshot(snapshot=>{
    setTodos(snapshot.docs.map(doc=>({id : doc.id , todo : doc.data().todo})))
  })
},[]);


  //this function will add the data to setInput
  // this will fire off when button is clicked
  const addTodo = (event)=>{

    // it will not allow to refresh the page
    event.preventDefault();
    
    // to check
    console.log("clicked ");


    //store the data in the database 
    db.collection('todos').add({
      todo : input,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    });

    // //... is a spread 
    // // it will spread the data present in the array;
    // // it will push the data from input to setInput
    // setTodos([...todos,input]);

    //to clear the data present in the input field.
    setInput('');
  }

  return (
    <div className="App">
      <h1>🎉🎉Hello World🎉🎉</h1>

    <form>

   
      <FormControl>
        <InputLabel>Write the Todo</InputLabel>
        <Input  value={input} onChange={event =>setInput(event.target.value)} />
        
      </FormControl>
      <Button disabled={!input} type="submit"  onClick={addTodo} variant="contained" color="primary">
      Add Todo
      </Button>
      </form>
      
      <ul>
      {  /* Print the data from the array */}
        {
          todos.map(todo=>(
           <Todo  todo={todo} />
          ))
        }
        
      </ul>
    </div>
  );
}

export default App;
