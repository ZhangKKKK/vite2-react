import { createStore } from "redux";
function user (state = { token: '' }, action) {
  switch (action.type) {
    case 'SET_TOKEN':
      return state.token = action.text
    default:
      return state
  }
}
const store = createStore(user)

// store.dispatch({
//   type: 'SET_TOKEN',
//   text: true
// })

export default store