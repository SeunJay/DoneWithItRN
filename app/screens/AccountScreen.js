import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

import colors from '../config/config';

const menuItems = [
  {
    title: 'My listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
  },
];

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title='Mosh Hamedani'
          subTitle='programmingwithmosh@gmail.com'
          image={require('../assets/mosh.jpg')}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          ItemSeparatorComponent={ListItemSeparator}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>

      <View style={styles.container}>
        <ListItem
          title='Log Out'
          IconComponent={<Icon name='logout' backgroundColor='#ffe66d' />}
        />
      </View>
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: colors.white,
  },

  screen: {
    backgroundColor: colors.light,
  },
});
