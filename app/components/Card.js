import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import colors from '../config/config';
import AppText from './AppText';

const Card = ({ title, subTitle, image, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardContainer}>
        <Image style={styles.image} source={image} />

        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    backgroundColor: colors.white,
    overflow: 'hidden',
    marginVertical: 10,
  },

  image: {
    width: '100%',
    height: 200,
  },

  detailsContainer: {
    padding: 20,
  },

  title: {
    marginBottom: 7,
  },

  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
});
