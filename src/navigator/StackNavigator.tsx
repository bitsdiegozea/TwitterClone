import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Tweet} from '../models/tweet';
import {HomePage} from '../pages/HomePage';
import {TweetDetailPage} from '../pages/TweetDetailPage';

export type NavigatorStackParams = {
  HomeStack: undefined;
  Tabs: undefined;
  TweetDetail: {
    tweet: Tweet;
    tweetIndex: number;
  };
  ImageDetail: {
    image: any;
  };
};
interface NavigatorProps {}

const Stack = createStackNavigator<NavigatorStackParams>();

export const StackNavigator: React.FC<NavigatorProps> = ({}) => {
  return (
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
        name="HomeStack"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TweetDetail"
        component={TweetDetailPage}
        options={{title: 'Tweet'}}
      />
    </Stack.Navigator>
  );
};
