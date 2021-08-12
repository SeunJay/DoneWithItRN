import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import colors from '../config/config';
import AppText from './AppText';

const Card = ({ title, subTitle, image }) => {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.image} source={image} />

      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    backgroundColor: colors.white,
    overflow: 'hidden',
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
