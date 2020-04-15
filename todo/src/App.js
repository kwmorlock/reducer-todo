import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import reducer, {initialState} from './reducers/reducer';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
<TodoList todos={state} dispatch={dispatch}  />
<TodoForm dispatch={dispatch}/>
    </div>
  );
}

export default App;
