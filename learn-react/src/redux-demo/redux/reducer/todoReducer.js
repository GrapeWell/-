const TodoReducer = (prevState = {
  todolist: []
}, action) => {
  let newState = { ...prevState };
  switch (action.type) {
    case 'addItem':
      newState.todolist.push(action.payload);
      return newState
    case 'deleteItem':
      newState.todolist.splice(action.index, 1);
      return newState
    case 'check':
      newState.todolist = newState.todolist.map((item, index) => {
        if (index === action.check) {
          item.checked = !item.checked;
        }
        return item
      })
      return newState
    default:
      return prevState
  }
}
export default TodoReducer