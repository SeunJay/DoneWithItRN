import React from 'react';
import { StyleSheet, View } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <>
      {/* <WelcomeScreen /> */}
      <ViewImageScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
