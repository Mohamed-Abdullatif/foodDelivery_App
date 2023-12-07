import React from 'react';
import {View} from 'react-native';

const Seperator = ({width, height, ...extraProps}) => {
  return <View style={{width, height, ...extraProps}} />;
};

Seperator.defaultProps = {
  width: 0,
  height: 0,
};

export default Seperator;
