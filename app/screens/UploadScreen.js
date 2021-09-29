import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import LottieView from 'lottie-react-native';

import colors from '../config/config';

const UploadScreen = ({ onDone, progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <ProgressBar
            color={colors.primary}
            progress={progress}
            style={styles.progressBar}
          />
        ) : (
          <LottieView
            style={styles.animation}
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require('../assets/animations/done.json')}
          />
        )}
      </View>
    </Modal>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  progressBar: {
    width: 300,
    height: 10,
  },
  animation: {
    width: 150,
  },
});
