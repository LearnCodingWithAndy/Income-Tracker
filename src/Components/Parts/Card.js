import React, {Fragment} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'native-base';
import {useSelector} from 'react-redux';

function Card({navigation}) {
  const {transactions} = useSelector((state) => state.transactions);

  const prices = transactions.map((transaction) => transaction.price);
  const totalPrice = prices.reduce((prev, cur) => (prev += cur), 0).toFixed(2);
  const expense =
    prices
      .filter((price) => price < 0)
      .reduce((prev, cur) => (prev += cur), 0)
      .toFixed(2) * -1;

  return (
    <LinearGradient
      colors={['#FAAD3D', '#EFC90A', '#F1CB0C']}
      style={styles.Box}>
      <View style={styles.balance}>
        <Text style={styles.balanceText}>Current Balance</Text>
        <Text style={styles.balanceValue}>₹{totalPrice}</Text>
      </View>

      <View
        style={{
          alignItems: 'flex-end',
          width: '30%',
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            fontWeight: '700',
          }}>
          Rupee
        </Text>
        <View style={{flex: 1}}>
          <Button
            rounded
            light
            style={{
              padding: 10,
              marginTop: 32,
              borderWidth: 3,
              borderColor: '#fff',
              backgroundColor: '#E10C62',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              navigation.navigate('Add');
            }}>
            <Text
              style={{
                color: '#fff',
                fontWeight: '700',
                fontSize: 15,
              }}>
              Add
            </Text>
          </Button>
          <Text
            style={{
              marginTop: 20,
              color: '#fff',
              fontSize: 17,
              fontWeight: '700',
            }}>
            Debit
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: '700',
            }}>
            ₹{expense}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  Box: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 20,
  },
  balance: {
    width: '70%',
    alignItems: 'flex-start',
  },
  balanceText: {
    fontSize: 17,
    color: '#fff',
    fontFamily: 'Lato-Regular',
    fontWeight: '700',
  },
  balanceValue: {
    fontFamily: 'Lato-Medium',
    fontSize: 32,
    color: '#fff',
    fontWeight: '700',
  },
});

export default Card;
