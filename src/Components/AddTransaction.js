import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Container, Button, Content, Form, Input, Item} from 'native-base';

// Redux
import {useDispatch} from 'react-redux';
import {addTransaction} from '../store/actions/transactionAction';

const AddTransaction = ({navigation}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const onSubmit = () => {
    if (!title || !price) {
      return alert('Please fill all the fields');
    }

    const id = Math.floor(Math.random() * 1000000007);

    const newTransaction = {
      id,
      title,
      price: +price,
    };

    dispatch(addTransaction({...newTransaction}));
    navigation.navigate('Home');
  };

  return (
    <Container>
      <Content>
        <Form>
          <Item style={{...styles.item}}>
            <Input
              placeholder="Enter Description"
              onChangeText={(title) => setTitle(title)}
            />
          </Item>
          <Item style={{...styles.item}}>
            <Input
              placeholder="Enter transaction amount"
              keyboardType="number-pad"
              onChangeText={(price) => setPrice(price)}
              onSubmitEditing={onSubmit}
            />
          </Item>
          <Button block onPress={onSubmit} style={{marginHorizontal: 20}}>
            <Text style={{color: '#fff', fontWeight: '700', fontSize: 16}}>
              Add Transaction
            </Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  item: {
    marginVertical: 20,
  },
});

export default AddTransaction;
