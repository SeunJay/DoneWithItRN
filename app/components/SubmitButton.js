import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFormikContext } from 'formik';

import AppButton from './AppButton';

const SubmitButton = ({ name }) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={name} onPress={handleSubmit} />;
};

export default SubmitButton;

const styles = StyleSheet.create({});
