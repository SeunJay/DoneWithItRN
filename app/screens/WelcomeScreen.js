import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import AppButton from '../components/AppButton';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <AppButton
          title='login'
          kind=''
          onPress={() => navigation.navigate('Login')}
        />
        <AppButton
          title='register'
          color='secondary'
          onPress={() => navigation.navigate('Register')}
        />
      </View>
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

  buttonsContainer: {
    width: '100%',
    padding: 20,
  },

  tagline: {
    fontSize: 22,
    fontWeight: '600',
    padding: 20,
  },
});
