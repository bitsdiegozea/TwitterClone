import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {TweetComponent} from '../components/TweetComponent';
import {TweetDetailComponent} from '../components/TweetDetailComponent';
import {Tweet} from '../models/tweet';
import {NavigatorStackParams} from '../navigator/StackNavigator';

interface TweetDetailPageProps
  extends StackScreenProps<NavigatorStackParams, 'TweetDetail'> {
  tweet: Tweet;
}

export const TweetDetailPage: React.FC<TweetDetailPageProps> = ({route}) => {
  const {tweet, tweetIndex} = route.params;

  return (
    <ScrollView style={styles.scrollView}>
      <TweetDetailComponent tweet={tweet} index={tweetIndex} />
      {tweet.comments?.map((comment, index) => (
        <TweetComponent
          key={`${index}${comment.username}`}
          index={index}
          tweet={comment}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flexDirection: 'column',
    flex: 2,
  },
  scrollView: {
    flex: 1,
  },
});
