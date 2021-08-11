import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text>Sell What You Don't Need</Text>
      </View>

      <View style={styles.loginButton}></View>

      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  logoContainer: {
    top: 100,
    alignItems: 'center',
    position: 'absolute',
  },

  logo: {
    width: 90,
    height: 90,
  },

  loginButton: {
    width: '100%',
    backgroundColor: '#fc5c65',
    height: 70,
  },

  registerButton: {
    width: '100%',
    backgroundColor: '#4ecdc4',
    height: 70,
  },
});
