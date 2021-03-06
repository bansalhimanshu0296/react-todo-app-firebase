import React, {useState, useEffect} from 'react';
import './App.css';
import {Button, FormControl, InputLabel, Input, List} from '@material-ui/core';
import Todo from './Todo';
import db from './Firebase'
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // when app loads, we need to listen to the database and fetch todos and also need to fetch new todos as they get added/removed
  useEffect(()=>{
    // this code here... fires when the app.js loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      let tTodos = snapshot.docs.map(doc=>doc.data().task)
      setTodos(tTodos);
    })
  },[]);

  const addTodo = (event) =>{
    // this will fire off when we click the button
    event.preventDefault(); // will stop REFRESH

    db.collection('todos').add({
      task:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput(''); //will clear input after hitting todo
  };

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <form>
        {/* <input value={input} onChange={event=>setInput(event.target.value)}/> */}
        <FormControl>
          <InputLabel> Write a Todo </InputLabel>
          <Input value={input} onChange={event=>setInput(event.target.value)}/>
        </FormControl>
        <Button variant="contained" onClick={addTodo} type="submit" disabled={!input} color="primary">
          Add Todo
        </Button>
        {/* <button onClick={addTodo}>Add Todo</button> */}
     </form>
     <List>
       {todos.map(todo =>(
         <Todo text={todo}/>
       ))}
     </List>
    </div>
  );
}

export default App;