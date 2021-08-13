import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/config';
import defaultStyles from '../config/styles';

const AppTextInput = ({ icon, ...otherprops }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...otherprops} />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flexDirection: 'row',
    borderRadius: 25,
    width: '100%',
    padding: 13,
    marginVertical: 10,
  },

  icon: {
    marginRight: 10,
  },
});
