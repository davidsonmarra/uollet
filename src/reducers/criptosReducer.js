export default function criptoReducer(state = [], action) {
  switch(action.type) {
    case 'SET_INFOS':
      return action.payload;
    default:
      return state;
  }
}