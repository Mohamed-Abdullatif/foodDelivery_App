import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {Seperator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, Fonts, Images} from '../contants';
import {Display} from '../utils';

const LoginScreen = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={Colors.DEFAULT_WHITE}
          translucent
        />
        <Seperator height={StatusBar.currentHeight} />
        <View style={styles.headerContainer}>
          <Ionicons
            name="chevron-back-outline"
            size={30}
            onPress={() => navigation.goBack()}
            color={Colors.DEFAULT_BLACK}
          />
          <Text style={styles.headerTitle}>Login</Text>
        </View>
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.content}>
          Enter your Phone number or Email address for sign in. Enjoy your food.
        </Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputSubContainer}>
            <Feather
              name="user"
              size={22}
              color={Colors.DEFAULT_BLACK}
              style={{
                marginRight: 10,
                alignItems: 'center',
              }}
            />
            <TextInput
              placeholder="Username"
              placeholderTextColor={Colors.DEFAULT_GREY}
              style={styles.inputText}
            />
          </View>
        </View>
        <Seperator height={20} />
        <View style={styles.inputContainer}>
          <View style={styles.inputSubContainer}>
            <Feather
              name="lock"
              size={22}
              color={Colors.DEFAULT_BLACK}
              style={{
                marginRight: 10,
                alignItems: 'center',
              }}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor={Colors.DEFAULT_GREY}
              style={styles.inputText}
              secureTextEntry={showPassword ? false : true}
            />
            <Feather
              name={showPassword ? 'eye' : 'eye-off'}
              size={22}
              color={Colors.DEFAULT_BLACK}
              style={{
                marginRight: 10,
                alignItems: 'center',
              }}
              onPress={() => setShowPassword(!showPassword)}
            />
          </View>
        </View>

        <Text></Text>

        <View style={styles.forgotPasswordContainer}>
          <View>
            <Text style={styles.rememberMeText}>Remember me</Text>
          </View>

          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Sign in </Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={styles.accountText}>Don't have an account?</Text>
          <Text style={styles.signupText}> Signup</Text>
        </View>
        <View>
          <Text style={styles.orText}>OR</Text>
        </View>
        <TouchableOpacity style={styles.facebookButton}>
          <View>
            <View style={styles.signinButtonLogoContainer}>
              <Image
                source={Images.FACEBOOK}
                style={styles.signinFacebookLogo}
              />
            </View>
            <Text>connect with facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton}>
          <View>
            <View>
              <Image source={Images.GOOGLE} style={styles.signinGoogleLogo} />
            </View>
            <Text>connect with Google</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
    paddingTop: Platform.OS === 'android' ? 28 : 0,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
    color: Colors.DEFAULT_BLACK,
  },
  title: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 22,
    paddingHorizontal: 20,
    marginTop: 50,
    marginBottom: 10,
    lineHeight: 22 * 1.4,
    color: Colors.DEFAULT_BLACK,
  },
  content: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    lineHeight: 22 * 1.4,
    color: Colors.DEFAULT_BLACK,
  },
  inputContainer: {
    backgroundColor: Colors.LIGHT_GREY2,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    justifyContent: 'center',
    //padding: Platform.OS === 'android' ? 4 : 12,
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    textAlignVertical: 'center',
    fontSize: 18,
    color: Colors.DEFAULT_BLACK,
    height: Display.setHeight(6),
    padding: 0,
    flex: 1,
  },
  forgotPasswordContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  rememberMeText: {
    marginLeft: 10,
    fontSize: 12,
    lineHeight: 12 * 1.4,
    color: Colors.DEFAULT_GREY,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  forgotPasswordText: {
    marginLeft: 10,
    fontSize: 12,
    lineHeight: 12 * 1.4,
    color: Colors.DEFAULT_GREEN,
    fontFamily: Fonts.POPPINS_BOLD,
  },
  loginButton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 8,
    marginHorizontal: 20,
    height: Display.setHeight(5.5),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: Colors.DEFAULT_WHITE,
    marginLeft: 10,
    fontSize: 18,
    lineHeight: 18 * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  signupContainer: {
    marginHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountText: {
    marginLeft: 10,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_BLACK,
  },
  signupText: {
    marginLeft: 10,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_GREEN,
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
  orText: {
    fontSize: 15,
    lineHeight: 15 * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_BLACK,
    marginLeft: 5,
    alignSelf: 'center',
    // marginVertical: 10,
  },
  facebookButton: {
    backgroundColor: Colors.FABEBOOK_BLUE,
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  googleButton: {
    backgroundColor: Colors.GOOGLE_BLUE,
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  signinFacebookLogo: {
    width: 18,
    height: 18,
  },
  signinButtonLogoContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    padding: 2,
    borderRadius: 3,
  },
  signinGoogleLogo: {},
});
