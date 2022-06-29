import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

interface IconFooterProps {
  iconName: string;
  number: number;
  filled: boolean;
}

export const IconFooter: React.FC<IconFooterProps> = ({
  iconName,
  number,
  filled,
}) => {
  return (
    <View style={styles.container}>
      <IonIcon
        name={filled && iconName === 'heart-outline' ? 'heart' : iconName}
        size={17}
        color={filled && iconName === 'heart-outline' ? '#F91880' : '#757A75'}
      />
      <Text style={styles.numberText}>{number === -1 ? '' : number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'row', alignItems: 'center'},
  numberText: {color: '#757A75', fontSize: 10, marginLeft: 7},
});
