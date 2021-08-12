import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppButton from './app/components/AppButton';
import AppText from './app/components/AppText';
import Card from './app/components/Card';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <View
      style={{
        backgroundColor: '#f4f4f4',
        padding: 20,
        //justifyContent: 'center',
        flex: 1,
        paddingTop: 200,
      }}
    >
      <Card
        title='Red Jacket'
        subTitle='$100'
        image={require('./app/assets/jacket.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
