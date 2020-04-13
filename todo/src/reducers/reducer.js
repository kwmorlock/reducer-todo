import { v4 as uuidv4 } from "uuid";

export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: uuidv4(),
  },
];

// import {v4 as uuidv4} from 'uuid';

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log(action);
      return state.concat(action.payload);

    case "MARK_TODO":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: true } : todo
      );

    case "CLEAR_TODO":
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
};

export default reducer;
