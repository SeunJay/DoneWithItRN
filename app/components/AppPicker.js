import React, { useState } from 'react';
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/config';
import AppText from './AppText';
import Screen from './Screen';
import ListItem from './ListItem';
import PickerItem from './PickerItem';

const AppPicker = ({
  icon,
  items,
  onSelectItem,
  placeholder,
  selectedItem,
}) => {
  const [modalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType='slide'>
        <Screen>
          <Button title='Close' onPress={() => setIsModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  onSelectItem(item);
                  setIsModalVisible(false);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flexDirection: 'row',
    borderRadius: 25,
    width: '100%',
    padding: 13,
    marginVertical: 10,
  },

  icon: {
    marginRight: 10,
  },

  text: {
    flex: 1,
  },
});
