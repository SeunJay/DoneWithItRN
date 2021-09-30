import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Switch,
  Button,
  Image,
} from 'react-native';
import AppPicker from './app/components/AppPicker';
import AppButton from './app/components/AppButton';
import AppText from './app/components/AppText';
import AppTextInput from './app/components/AppTextInput';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';
import AccountScreen from './app/screens/AccountScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import * as ImagePicker from 'expo-image-picker';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthNavigator } from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import { AppNavigator } from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title='View Tweet'
      onPress={() => navigation.navigate('TweetDetails', { id: 1 })}
    />
  </Screen>
);

const TweetsDetails = ({ navigation, route }) => {
  return (
    <Screen>
      <Text>Tweets Details {route.params.id}</Text>
      <Button title='View' onPress={() => navigation.navigate('Tweets')} />
    </Screen>
  );
};

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Tweets' component={Tweets} />
    <Stack.Screen name='TweetDetails' component={TweetsDetails} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name='Feed'
      component={FeedNavigator}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name='Account'
      component={Account}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
