import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Container, CheckBox, Body, Right, ListItem} from 'native-base';
import Animated from 'react-native-reanimated';

// Parts
import Card from './Parts/Card';
import Empty from './Parts/Empty';

// Redux
import {useSelector, useDispatch} from 'react-redux';
import {deleteTransaction} from '../store/actions/transactionAction';

const Item = ({title, id, price}) => {
  const dispatch = useDispatch();

  return (
    <View
      style={{
        marginVertical: 5,
        paddingVertical: 10,
      }}>
      <ListItem>
        <CheckBox
          color="#ff4500"
          checked={true}
          onPress={() => {
            dispatch(deleteTransaction(id));
          }}
        />

        <Body>
          <Text style={{fontSize: 15, fontWeight: '700', marginLeft: 10}}>
            {title}
          </Text>
        </Body>

        <Right>
          <Text
            style={{
              fontFamily: 'Lato Regular',
              fontSize: 12,
              fontWeight: '400',
              color: price > 0 ? '#009BFC' : '#FF4500',
            }}>
            {price > 0 ? `₹${price}` : `₹${Math.abs(price)}`}
          </Text>
        </Right>
      </ListItem>
    </View>
  );
};

const HomeScreen = ({navigation}) => {
  const {transactions} = useSelector((state) => state.transactions);
  return (
    <Container>
      <Animated.View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: 15,
          paddingVertical: 15,
        }}>
        <Card navigation={navigation} />
      </Animated.View>

      <View style={{flex: 1, marginTop: -180}}>
        {transactions.length > 0 ? (
          <FlatList
            data={transactions}
            renderItem={({item}) => (
              <Item title={item.title} price={item.price} id={item.id} />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <Empty />
        )}
      </View>
    </Container>
  );
};

export default HomeScreen;
