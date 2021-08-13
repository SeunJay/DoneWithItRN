import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import ErrorMessage from '../components/ErrorMessage';

const validationObject = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationObject}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              icon='email'
              keyboardType='email-address'
              placeholder='Email'
              textContentType='emailAddress'
              onChangeText={handleChange('email')}
            />
            <ErrorMessage error={errors.email} />

            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              icon='lock'
              // keyboardType='email-address'
              placeholder='Password'
              secureTextEntry
              textContentType='password'
              onChangeText={handleChange('password')}
            />

            <ErrorMessage error={errors.password} />

            <AppButton title='Login' onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
