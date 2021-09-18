import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

import colors from '../config/config';

const ListingDetailsScreen = ({ route }) => {
  const { title, images, price } = route.params;
  return (
    <View>
      <Image style={styles.image} source={{ uri: images[0].url }} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>${price}</AppText>

        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/mosh.jpg')}
            title='Mosh Hamedani'
            subTitle='5 listing'
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },

  detailsContainer: {
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },

  userContainer: {
    marginVertical: 40,
  },
});
