
import { Todo } from './model';

enum ActionType {
  Add = 'Add',
  Delete = 'Delete',
  isDone = 'isDone',
}

interface Action {
  type: ActionType,
  payload: string | number
}

// type Action =
//   | { type: "add"; payload: string}
//   | { type: "delete"; payload: number}
//   | { type: "done"; payload: boolean }


const TodoReducer = (state: Todo[], action: Action) => {
  const {type, payload} = action;
  switch (type) {
    case ActionType.Add:
      return [...state, {id: Date.now(), payload, isDone: false}]
    case ActionType.Delete:
      return state.filter((todo) => todo.id !== payload)
    case ActionType.isDone:
      return state.map((todo) => todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo)
    default:
      return state;
  }
}

export default TodoReducer;