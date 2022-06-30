/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Animated, Dimensions, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigatorStackParams} from '../navigator/StackNavigator';
import {icons} from '../utils/data';
import {IconFooter} from './tweets/components/IconFooter';

const windowWith = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface ImageDetailPageProps
  extends StackScreenProps<NavigatorStackParams, 'ImageDetail'> {}

export const ImageDetailPage: React.FC<ImageDetailPageProps> = ({route}) => {
  const image = route.params.image;
  const navigation = useNavigation();
  const width = new Animated.Value(0);
  const height = new Animated.Value(0);
  navigation.setOptions({
    headerRight: () => <Icon name="more-vert" color="#fff" size={25} />,
  });

  useEffect(() => {
    Animated.timing(width, {
      toValue: windowWith / 1.02,
      duration: 350,
      useNativeDriver: false,
    }).start();
    Animated.timing(height, {
      toValue: windowHeight / 2,
      duration: 350,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        style={{
          width: width,
          height: height,
        }}
        source={image}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 5,
          width: '100%',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        {icons.map((icon, i) => (
          <IconFooter
            key={`${i}${icon}`}
            iconName={icon}
            number={'10'}
            filled={false}
            color={'white'}
            size={25}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 5,
    justifyContent: 'center',
    flex: 1,
    marginBottom: 15,
    alignItems: 'center',
  },
});
