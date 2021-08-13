import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        icon='email'
        keyboardType='email-address'
        placeholder='Email'
        textContentType='emailAddress'
        onChangeText={(text) => setEmail(text)}
      />

      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        icon='lock'
        // keyboardType='email-address'
        placeholder='Password'
        secureTextEntry
        textContentType='password'
        onChangeText={(text) => setPassword(text)}
      />

      <AppButton
        title='Login'
        onPress={() => {
          console.log(`Email: ${email}`);
          console.log(`Password: ${password}`);
        }}
      />
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});
