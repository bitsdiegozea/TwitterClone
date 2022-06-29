/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {IconFooter} from '../pages/tweets/components/IconFooter';
import {icons} from '../utils/data';

interface TweetProps {
  username: string;
  tweetContentText: string;
  image: boolean;
  timeElapsed: string;
  avatar: any;
  numOfComments: number;
  numOfRetweets: number;
  numOfLikes: number;
  like: boolean;
}

export const Tweet: React.FC<TweetProps> = ({
  username,
  tweetContentText,
  image,
  timeElapsed,
  avatar,
  numOfComments,
  numOfRetweets,
  numOfLikes,
  like,
}) => {
  const getNumberForIcon = (index: number): number => {
    switch (index) {
      case 0:
        return numOfComments;
      case 1:
        return numOfRetweets;
      case 2:
        return numOfLikes;
      default:
        return -1;
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={avatar} />
        </View>

        <View style={styles.tweetContent}>
          {username && (
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.title}>{username}</Text>
              <Text style={styles.titleAt}> @{username.toLowerCase()}</Text>
              <Text style={styles.titleAt}> {timeElapsed}</Text>
            </View>
          )}
          {tweetContentText && (
            <Text style={styles.tweetContent}>{tweetContentText}</Text>
          )}
          {image && (
            <Image
              style={styles.tweetImage}
              source={require('../assets/tweet2.webp')}
            />
          )}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              padding: 10,
              justifyContent: 'space-between',
            }}>
            {icons.map((icon, index) => (
              <IconFooter
                key={`${index}${icon}`}
                iconName={icon}
                number={getNumberForIcon(index)}
                filled={like}
              />
            ))}
          </View>
        </View>

        <Icon name="more-vert" color="#fff" size={20} />
      </View>
    </TouchableOpacity>
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
    borderBottomColor: '#192023',
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
});
