// A reducer takes in 2 things:
// 1. Action
// 2. Copy of current state

function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;