import React from 'react';
import {Home} from './src/pages/Home';

// const Tab = createBottomTabNavigator();

const App = () => {
  return <Home />;
  // return (
  //   <NavigationContainer>
  //     <Tab.Navigator>
  //       <Tab.Screen name="Home" component={Home} />
  //       <Tab.Screen name="Search" component={Home} />
  //       <Tab.Screen name="Notifications" component={Home} />
  //       <Tab.Screen name="Messages" component={Home} />
  //     </Tab.Navigator>
  //   </NavigationContainer>
  // );
};

export default App;
