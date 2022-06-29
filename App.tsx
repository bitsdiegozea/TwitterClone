import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Home} from './src/pages/Home';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Search') {
              iconName = 'search-outline';
            } else if (route.name === 'Notifications') {
              iconName = 'notifications-outline';
            } else {
              iconName = 'mail-outline';
            }

            if (focused) {
              iconName = iconName.replace('-outline', '');
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
          tabBarBadgeStyle: {
            color: '#fff',
            backgroundColor: '#179CF0',
            fontSize: 7.5,
            fontWeight: 'bold',
            maxWidth: 12,
            maxHeight: 12,
            lineHeight: 10,
            marginTop: 5,
            marginLeft: -2,
          },
          tabBarStyle: {
            backgroundColor: '#1E2528',
            borderTopColor: 'transparent',
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Home} />
        <Tab.Screen
          name="Notifications"
          component={Home}
          options={{tabBarBadge: 1}}
        />
        <Tab.Screen name="Messages" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
