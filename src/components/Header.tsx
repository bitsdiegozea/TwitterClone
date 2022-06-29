import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image style={styles.avatar} source={require('../assets/avatar1.png')} />
      <Image style={styles.logos} source={require('../assets/twitter.png')} />
      <Icon style={styles.logos} name="flare" size={30} color="#fff" />
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
