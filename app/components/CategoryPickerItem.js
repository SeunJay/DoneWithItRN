import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppText from './AppText';
import Icon from './Icon';

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />

      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    width: '33%',
  },

  label: {
    marginTop: 10,
    textAlign: 'center',
  },
});
