import {ADD_TRANSACTION, DELETE_TRANSACTION} from './types';
import AsyncStorage from '@react-native-community/async-storage';

var flag = 0;
var persistentTransactions = [];

const getFlag = async () => {
  var res;
  await AsyncStorage.getItem('Flag')
    .then((response) => (res = response))
    .catch((error) => console.log('error1' + error));
  if (res == null) {
    return false;
  } else {
    return true;
  }
};

export const addTransaction = ({id, title, price}) => (dispatch) => {
  const newTransaction = {
    id,
    title,
    price,
  };

  var errFlag = false;
  getFlag()
    .then((res) => {
      errFlag = res;
      // console.log('errorFlag' + errFlag);
    })
    .catch((error) => {
      // console.log('error' + error.message);
    });

  if (flag == 0 && !errFlag) {
    flag = 1;
    AsyncStorage.setItem('Flag', '1');
  }

  persistentTransactions = [newTransaction, ...persistentTransactions];

  AsyncStorage.setItem('Transactions', persistentTransactions.toString());

  //alert(persistentTransactions);
  dispatch({type: ADD_TRANSACTION, payload: newTransaction});
};

export const deleteTransaction = (id) => (dispatch) => {
  dispatch({type: DELETE_TRANSACTION, payload: id});
};
