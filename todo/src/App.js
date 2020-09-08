import React, {useState, useReducer} from 'react';
import {initialState, todoReducer } from './reducers/reducer'
import './App.css';
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'


function App() {
  const [formData, setFormData] = useState()
  const [state, dispatch] = useReducer(todoReducer,initialState)

  const onHandleChanges = evt => {
    setFormData(evt.target.value)
  }

  const completedTodo = id => {
    console.log("Clicked, bitch", id)
    dispatch({type:"TODO_TOGGLE", payload: id})
  }

  return (
      <div className='App'>
        <h1>Daily Tasks</h1>
        <AddTodo
          onHandleChanges = {onHandleChanges}
          formData = {formData}
          setFormData = {setFormData}
          dispatch = {dispatch}
         />
         <TodoList
         completedTodo = {completedTodo}
         todos = {state.todo}
         />
      </ div>
  );
}

export default App;
