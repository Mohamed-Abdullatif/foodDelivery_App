import React, {useEffect} from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Colors, Fonts, Images} from '../contants';
import {Display} from '../utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.DEFAULT_GREEN}
        translucent
      />
      <Image source={Images.PLATE} style={styles.logo} />
      <Text style={styles.text}>FoodDelivery</Text>
      <Text style={styles.bottomText}>Welcome to FoodDelivery</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_GREEN,
  },
  logo: {
    width: Display.setWidth(60),
    height: Display.setHeight(30),
    resizeMode: 'contain',
  },
  text: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 22,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  bottomText: {
    position: 'absolute',
    bottom: 30,
    color: Colors.DEFAULT_WHITE,
    fontSize: 17,
    fontFamily: Fonts.POPPINS_LIGHT,
  },
});
