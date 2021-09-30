import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import Constants from 'expo-constants';

import colors from '../config/config';
import AppText from './AppText';

const OfflineNotice = () => {
  const netInfo = useNetInfo();

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  }
  return null;
};

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: '100%',
    height: 50,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: Constants.statusBarHeight,
    zIndex: 1,
  },
  text: {
    color: colors.white,
  },
});
