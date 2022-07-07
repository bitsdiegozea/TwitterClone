import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {tweets} from '../api/api';
import {HeaderComponent} from '../components/HeaderComponent';
import {TweetComponent} from '../components/TweetComponent';
import {Tweet} from '../models/tweet';
import {NavigatorStackParams} from '../navigator/StackNavigator';

export const HomePage = () => {
  const navigation = useNavigation<StackNavigationProp<NavigatorStackParams>>();

  const onPress = (tweet: Tweet, index: number) => {
    navigation.navigate('TweetDetail', {
      tweet: tweet,
      tweetIndex: index,
    });
  };

  return (
    <ScrollView style={styles.home}>
      <HeaderComponent />
      {tweets.map((tweet, index) => (
        <TouchableOpacity
          key={`${index}${tweet.username}.Tweet`}
          activeOpacity={0.7}
          onPress={() => onPress(tweet, index)}>
          <TweetComponent
            key={`${index}${tweet.username}.TweetComponent`}
            index={index}
            tweet={tweet}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#1E2528',
    flex: 1,
    flexDirection: 'column',
  },
});
