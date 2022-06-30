/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Tweet} from '../models/tweet';
import {NavigatorStackParams} from '../navigator/StackNavigator';
import {IconFooter} from '../pages/tweets/components/IconFooter';
import {avatars, icons} from '../utils/data';
import GlobalStyle from '../utils/GlobalStyle';

interface TweetComponentProps {
  index: number;
  tweet: Tweet;
}

export const TweetComponent: React.FC<TweetComponentProps> = ({
  tweet,
  index,
}) => {
  const navigation = useNavigation<StackNavigationProp<NavigatorStackParams>>();
  const getNumberForIcon = (i: number): string => {
    switch (i) {
      case 0:
        return `${tweet.numOfComments}`;
      case 1:
        return `${tweet.numOfRetweets}`;
      case 2:
        return `${tweet.numOfLikes}`;
      default:
        return '';
    }
  };

  const onPress = (image: any) => {
    navigation.navigate('ImageDetail', {image});
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={avatars[index]} />
      </View>

      <View style={styles.tweetContent}>
        {tweet.username && (
          <View style={{flexDirection: 'row'}}>
            <Text style={[GlobalStyle.font, styles.title]}>
              {tweet.username}
            </Text>
            <Text style={[GlobalStyle.font, styles.titleAt]}>
              {' '}
              @{tweet.username.toLowerCase()}
            </Text>
            <Text style={[GlobalStyle.font, styles.titleAt]}>
              {' '}
              {tweet.timeElapsed}
            </Text>
          </View>
        )}
        {tweet.tweetContentText && (
          <Text style={[GlobalStyle.font, styles.tweetContent]}>
            {tweet.tweetContentText}
          </Text>
        )}

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 8,
          }}>
          {tweet.images?.length &&
            tweet.images?.map(image => (
              <TouchableWithoutFeedback onPress={() => onPress(image)}>
                <Image
                  style={
                    tweet.images!.length > 1
                      ? styles.tweetSeveralImages
                      : styles.tweetImage
                  }
                  source={image}
                />
              </TouchableWithoutFeedback>
            ))}
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between',
          }}>
          {icons.map((icon, i) => (
            <IconFooter
              key={`${i}${icon}`}
              iconName={icon}
              number={getNumberForIcon(i)}
              filled={tweet.like}
            />
          ))}
        </View>
      </View>

      <Icon name="more-vert" color="#676D6C" size={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flex: 1,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#2D3434',
  },
  avatarContainer: {
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  tweetContent: {
    flex: 4,
    flexDirection: 'column',
    fontSize: 12.5,
    color: 'white',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
  },
  titleAt: {
    color: '#757A75',
    fontSize: 13,
  },
  content: {
    color: 'white',
    overflow: 'hidden',
    textAlign: 'justify',
  },
  tweetImage: {
    marginTop: 15,
    width: '100%',
    height: 140,
    borderRadius: 8,
  },
  tweetSeveralImages: {
    width: '45%',
    height: 100,
    borderRadius: 8,
    margin: 3,
  },
});
