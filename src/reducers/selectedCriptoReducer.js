export default function criptoReducer(state = {}, action) {
  switch(action.type) {
    case 'SET_SELECTED':
      return action.payload;
    default:
      return state;
  }
}