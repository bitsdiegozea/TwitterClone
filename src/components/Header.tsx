/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image style={styles.avatar} source={require('../assets/avatar1.png')} />
      <Image style={styles.logos} source={require('../assets/twitter.png')} />
      <Image
        style={{...styles.logos, width: 25, height: 25}}
        source={require('../assets/icons/sparkle.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 25,
    height: 25,
  },
  logos: {
    width: 20,
    height: 20,
  },
});
