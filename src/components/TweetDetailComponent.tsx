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

interface TweetDetailComponentProps {
  index: number;
  tweet: Tweet;
  isDetail?: boolean;
}

export const TweetDetailComponent: React.FC<TweetDetailComponentProps> = ({
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
  const getNumberLabelForIcon = (i: number): string => {
    switch (i) {
      case 0:
        return 'Tweets citados';
      case 1:
        return 'Retweets';
      case 2:
        return 'Me gusta';
      default:
        return '';
    }
  };

  const onPress = (image: any) => {
    navigation.navigate('ImageDetail', {image});
  };

  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 20}}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={avatars[index]} />
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginLeft: 10,
              flex: 1,
            }}>
            <Text style={styles.title}>{tweet.username}</Text>
            <Text style={styles.titleAt}>@{tweet.username.toLowerCase()}</Text>
          </View>

          <Icon name="more-vert" color="#676D6C" size={20} />
        </View>

        <View style={styles.tweetContent}>
          {tweet.tweetContentText && (
            <Text style={styles.tweetContent}>{tweet.tweetContentText}</Text>
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

          <View style={{flexDirection: 'row'}}>
            <Text style={{...styles.titleAt, marginTop: 10}}>
              2:57 p. m. - 28 jun. 22 -
            </Text>
            <Text
              style={{
                ...styles.titleAt,
                marginTop: 10,
                marginLeft: 5,
                color: '#00AEE1',
              }}>
              Twitter Web App
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          borderBottomColor: '#2D3434',
          paddingHorizontal: 20,
        }}>
        {icons.map((icon, i) => (
          <IconFooter
            key={`${i}${icon}`}
            iconName={icon}
            number={getNumberForIcon(i)}
            numberLabel={getNumberLabelForIcon(i)}
            filled={tweet.like}
            showIcon={false}
          />
        ))}
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-around',
          paddingHorizontal: 20,
        }}>
        {icons.map((icon, i) => (
          <IconFooter
            key={`${icon}${i}`}
            iconName={icon}
            number={''}
            numberLabel={getNumberLabelForIcon(i)}
            filled={tweet.like}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#2D3434',
  },
  avatarContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
  },
  tweetContent: {
    marginTop: 5,
    flex: 4,
    flexDirection: 'column',
    fontSize: 12.5,
    color: 'white',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  },
  titleAt: {
    color: '#757A75',
    fontSize: 12,
  },
  tweetImage: {
    marginTop: 15,
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  tweetSeveralImages: {
    width: '45%',
    height: 100,
    borderRadius: 8,
    margin: 3,
  },
});
