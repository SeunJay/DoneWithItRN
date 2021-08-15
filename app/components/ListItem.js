import React from 'react';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/config';

const ListItem = ({
  image,
  title,
  subTitle,
  IconComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}

          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>

          <MaterialCommunityIcons
            name='chevron-right'
            size={25}
            color={colors.medium}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },

  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 5,
  },

  title: {
    fontWeight: '500',
  },

  subTitle: {
    color: colors.medium,
  },
});
