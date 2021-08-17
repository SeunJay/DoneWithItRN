import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFormikContext } from 'formik';

import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';

const AppFormImagePicker = ({ name }) => {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  const imagUris = values[name];


  const handleAdd = (uri) => {
    setFieldValue(name, [uri, ...imagUris]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imagUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
        imageUris={imagUris}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormImagePicker;

const styles = StyleSheet.create({});
