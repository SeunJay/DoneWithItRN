import React, { useState, useContext } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import jwtDecode from 'jwt-decode';

import authApi from '../api/auth';
import Screen from '../components/Screen';
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from '../components/forms';
import AuthContext from '../auth/context';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  const [loginFailed, setLoginFailed] = useState(false);
  const authContext = useContext(AuthContext);

  const handleSubmit = async ({ email, password }) => {
    const response = await authApi.login(email, password);

    if (!response.ok) return setLoginFailed(true);

    setLoginFailed(false);
    const user = jwtDecode(response.data);
    authContext.setUser(user);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error='Invalid email and/or password'
          visible={loginFailed}
        />
        <AppFormField
          name='email'
          autoCapitalize='none'
          autoCorrect={false}
          icon='email'
          keyboardType='email-address'
          placeholder='Email'
          textContentType='emailAddress'
        />

        <AppFormField
          name='password'
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          placeholder='Password'
          secureTextEntry
          textContentType='password'
        />

        <SubmitButton name='Login' />
      </AppForm>
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
