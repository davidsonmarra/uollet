export default function selectedCriptoReducer(state = {}, action) {
  switch(action.type) {
    case 'SET_SELECTED':
      return action.payload;
    default:
      return state;
  }
}