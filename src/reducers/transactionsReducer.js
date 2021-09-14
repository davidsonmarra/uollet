export default function transactionsReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_TRANSACTION':
      return [action.payload, ...state];
    case 'GET_TRANSACTION_INITIAL':
      return action.payload;
    case 'RESET_TRANSACTIONS':
      return [];
    default:
      return state;
  }
}