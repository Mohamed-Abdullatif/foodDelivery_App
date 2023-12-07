import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AuthHeader = ({icon, size = 52, color = 'red', title}) => {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} />
      <Text>{title}</Text>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
