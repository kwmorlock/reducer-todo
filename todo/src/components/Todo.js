// import React, {useState, useReducer} from 'react';
// import reducer, {initialState} from '../reducers/reducer';

// const Todo = props 


// const addTodo = () => {
//     const [state, dispatch] = useReducer(reducer, initialState)
//     const [newTodoText, setNewTodoText] = useState('');
//     const handleChanges = e => {
//         setNewTodoText(e.target.value);
//     };
//     return (
//         <div>
//             {!state.editing ? (
//                 <h1>
//             {state.todo}{''}
//             <i
//             onClick={() => dispatch({type: 'ADD_TODO'})}
//             className='far fa-edit'
//             />
//             </h1>
//             ) : (
//                 <div>
//             <input
//             className='todo-input'
//             type='text'
//             name='newTodoText'
//             value={newTodoText}
//             onChange={handleChanges}
            
//             />
//         </div>
//         <button
//         onClick={() =>
//             dispatch({ type: 'MARK_TODO', payload: newTodoText})
//         }
//         >
//          Mark Todo
//         </button>
//         </div>
//     );

// };

// export default Todo;

import React from "react";
import "./Todo.css";

const Todo = props => {
//extends is a class that comes after extends
//has all the variables and methods that a react component has




    return (
    <p onClick={() => props.dispatch({type: 'MARK_TODO', payload: props.todo.id}) } className= {props.todo.completed ? "strike" : ""} >{props.todo.item}</p>
    );
  }



export default Todo;