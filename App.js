import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

/* Components*/ 
import HomeScreen from './src/Components/HomeScreen';
import AddTransaction from './src/Components/AddTransaction';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Add" component={AddTransaction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;