import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import defaultStyles from '../config/styles';

const AppText = ({ children, style }) => {
  return (
    <View>
      <Text style={[defaultStyles.text, style]}>{children}</Text>
    </View>
  );
};

export default AppText;

const styles = StyleSheet.create({});
