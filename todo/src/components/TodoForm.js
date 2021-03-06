
// import React, {useState} from 'react';

// const TodoForm = props => {
//     const [newTodoText, setNewTodoText] = useState("useState");

//     const handleChanges = (e) => {
//         e.preventDefault();
//         setNewTodoText(e.target.value);
//     };
//     return
// }

// export default TodoForm;


import React, {useState} from 'react';
// import reducer from 'reducer';
import {v4 as uuidv4} from 'uuid';

const TodoForm = (props) => {
   const [newTodoText, setNewTodoText] = useState("");

   const handleChanges =(e) => {
       e.preventDefault();
       setNewTodoText(e.target.value);
   };
   return (
       <form>
           <input
           type='text'
           name='todo'
           value={newTodoText}
           onChange={handleChanges}
           />
<button
onClick={(e) => {
    e.preventDefault();
    props.dispatch({ 
        type: "ADD_TODO",
         payload: {item: newTodoText, completed: false, id: uuidv4() },
         });
}}
>
    add
    </button>
    <button onClick={(e) => {
        e.preventDefault()
        props.dispatch({type: 'CLEAR_TODO'})
    }} >Clear</button>
       </form>
   );
    };

export default TodoForm;