import {ADD_TRANSACTION, DELETE_TRANSACTION} from '../actions/types';
import AsyncStorage from '@react-native-community/async-storage';

var initialState = {
  transactions: [],
};

const storer = async () => {
  await AsyncStorage.getItem('Transactions')
    .then((response) => {
      initialState.transactions = response;
    })
    .catch((error) => console.log(error));
};

export default (state = initialState, {type, payload}) => {
  storer().catch((error) => console.log(error));
  switch (type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [payload, ...state.transactions],
      };

    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== payload,
        ),
      };

    default:
      return state;
  }
};
