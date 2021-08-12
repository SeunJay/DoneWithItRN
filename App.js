import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppButton from './app/components/AppButton';
import AppText from './app/components/AppText';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return <MessagesScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
