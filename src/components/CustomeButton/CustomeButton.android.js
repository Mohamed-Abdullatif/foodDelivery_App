import React from 'react';
import {Pressable, Text} from 'react-native';

const CustomeButton = ({title, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        borderRadius: 10,
        padding: 10,
        width: '40%',
      }}>
      <Text style={{fontSize: 18, color: 'red'}}>{title}</Text>
    </Pressable>
  );
};

export default CustomeButton;
