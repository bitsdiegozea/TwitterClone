import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {NavigatorStackParams} from './src/navigator/StackNavigator';
import {TabNavigator} from './src/navigator/TabNavigator';
import {ImageDetailPage} from './src/pages/ImageDetailPage';

const Stack = createStackNavigator<NavigatorStackParams>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#192023',
          },
          headerTintColor: 'white',
          cardStyle: {
            backgroundColor: '#192023',
          },
        }}>
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ImageDetail"
          component={ImageDetailPage}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#192023',
              elevation: 0,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
