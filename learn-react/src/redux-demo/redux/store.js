import { createStore, combineReducers } from 'redux'
import CountReducer from './reducer/countReducer';
import TodoReducer from './reducer/todoReducer';
const defaultState = {
  count: 0
}

const reducer = combineReducers(
  {
    CountReducer,
    TodoReducer,
  }
)

const store = createStore(reducer);

export default store