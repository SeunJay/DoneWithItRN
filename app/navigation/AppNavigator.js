import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListingsScreen from '../screens/ListingsScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name='Listings'
      component={ListingsScreen}
      //   options={{ headerShown: false }}
    />
    <Tab.Screen
      name='ListingEdit'
      component={ListingEditScreen}
      //   options={{ headerShown: false }}
    />
    <Tab.Screen
      name='Account'
      component={AccountScreen}
      //   options={{ headerShown: false }}
    />
  </Tab.Navigator>
);
