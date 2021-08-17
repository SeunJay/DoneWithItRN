import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

const uselocation = () => {
  const [location, setLocation] = useState();

  const getUserLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;

      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();

      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(`An error occured: ${error}`);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return location;
};

export default uselocation;
