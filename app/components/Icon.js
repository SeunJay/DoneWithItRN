import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Icon = ({
  name,
  size = 40,
  backgroundColor = '#000',
  iconColor = '#fff',
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor,
        borderRadius: size / 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
      }}
    >
      <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({});
