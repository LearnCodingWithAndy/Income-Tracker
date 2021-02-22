import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView, StyleSheet} from 'react-native';
import CodePush from 'react-native-code-push';

// Redux
import {Provider} from 'react-redux';
import store from './src/store';

/* Components*/
import HomeScreen from './src/Components/HomeScreen';
import AddTransaction from './src/Components/AddTransaction';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    CodePush.sync({installMode: CodePush.InstallMode.IMMEDIATE});
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Income Tracker',
              }}
            />
            <Stack.Screen
              name="Add"
              component={AddTransaction}
              options={{
                title: 'Add Transaction',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const CODE_PUSH_OPTIONS = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
  installMode: CodePush.InstallMode.IMMEDIATE,
};

export default CodePush(CODE_PUSH_OPTIONS)(App);
