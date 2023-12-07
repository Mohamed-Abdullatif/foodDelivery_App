import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Colors, Fonts, Images} from '../contants';
import {Display} from '../utils';

const OnboardingCard = ({image, title, content}) => {
  return (
    <View style={styles.container}>
      <Image source={Images[image]} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

export default OnboardingCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Display.setWidth(100),
  },
  image: {
    width: Display.setWidth(60),
    height: Display.setHeight(30),
  },
  title: {
    fontSize: 22,
    fontFamily: Fonts.POPPINS_BOLD,
    textAlign: 'center',
  },
  content: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_LIGHT,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});
