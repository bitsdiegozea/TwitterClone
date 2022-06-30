/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

interface IconFooterProps {
  iconName: string;
  number: string;
  numberLabel?: string;
  filled: boolean;
  showIcon?: boolean;
  color?: string;
  size?: number;
}

export const IconFooter: React.FC<IconFooterProps> = ({
  iconName,
  number,
  filled,
  showIcon = true,
  numberLabel = '',
  color = '#676B67',
  size = 17,
}) => {
  if (!showIcon) {
    return (
      <View style={{...styles.container}}>
        <Text style={{fontSize: 11, fontWeight: 'bold', color: 'white'}}>
          {number}
        </Text>
        <Text
          style={{
            fontSize: 11,
            fontWeight: 'bold',
            color: color,
            marginLeft: 5,
          }}>
          {numberLabel}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <IonIcon
        name={filled && iconName === 'heart-outline' ? 'heart' : iconName}
        size={size}
        color={filled && iconName === 'heart-outline' ? '#F91880' : color}
      />
      <Text style={styles.numberText}>{number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  numberText: {color: '#757A75', fontSize: 10, marginLeft: 7},
});
