function addItem(value) {
  return {
    type: 'addItem',
    payload: {
      content: value,
      checked: false
    }
  }
}

function deleteItem(value) {
  return {
    type: 'deleteItem',
    index: value
  }
}


function check(value) {
  return {
    type: 'check',
    check: value
  }
}
export { addItem, deleteItem, check }