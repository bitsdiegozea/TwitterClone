import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {Header} from '../components/Header';
import {Tweet} from '../components/Tweet';
import {avatars} from '../utils/data';
import {tweets} from '../utils/Tweets';

export const Home = () => {
  return (
    <ScrollView style={styles.home}>
      <Header />
      {tweets.map((tweet, index) => (
        <TouchableOpacity activeOpacity={0.7}>
          <Tweet
            key={tweet.username}
            tweetContentText={tweet.tweetContentText}
            username={tweet.username}
            image={tweet.image}
            timeElapsed={tweet.timeElapsed}
            avatar={avatars[index]}
            numOfComments={tweet.numOfComments}
            numOfRetweets={tweet.numOfRetweets}
            numOfLikes={tweet.numOfLikes}
            like={tweet.like}
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
