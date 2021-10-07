import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import useAuth from '../hooks/useAuth';

import Screen from '../components/Screen';
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from '../components/forms';
import ActivityIndicator from '../components/ActivityIndicator';
import authApi from '../api/auth';
import useApi from '../hooks/useApi';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(3).label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const RegisterScreen = () => {
  const registerApi = useApi(authApi.register);
  const loginApi = useApi(authApi.login);

  const [registerFailed, setRegisterFailed] = useState('');
  const { logIn } = useAuth();

  const handleRegister = async (userInfo) => {
    const response = await registerApi.request(userInfo);

    if (!response.ok) {
      if (response.data.error) setRegisterFailed(response.data.error);
      else {
        setRegisterFailed('An unexpected error occurred');
        console.log(response);
      }
      return;
    }

    const { email, password } = userInfo;

    const { data: authToken } = await loginApi.request(email, password);
    logIn(authToken);
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        {/* <Image style={styles.logo} source={require('../assets/logo-red.png')} /> */}

        <AppForm
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={handleRegister}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            error={registerFailed}
            visible={registerFailed.length > 0}
          />
          <AppFormField
            name='name'
            autoCapitalize='none'
            autoCorrect={false}
            icon='account'
            placeholder='Name'
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

          <SubmitButton name='Register' />
        </AppForm>
      </Screen>
    </>
  );
};

export default RegisterScreen;

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
