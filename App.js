import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import { AppNavigator } from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import storage from './app/auth/storage';

export default function App() {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await storage.getUser();
    if (!user) return;
    setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {!user ? <AuthNavigator /> : <AppNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
