// React, React Native and expo imports
import * as React from "react";
import {Image} from "expo-image";
import 
{
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from "react-native";

import {Button} from "@rneui/themed"; // Themed button component
import {useNavigation} from "@react-navigation/native"; // Navigation hook
import {FontSize, Color, FontFamily, Padding, Border} from "../GlobalStyles"; // Custom global styles
import {getAuth, signInWithEmailAndPassword, initializeAuth} from 'firebase/auth'; //Firebase authentication
import {ScrollView} from 'react-native';
import {useState} from "react";
import { app } from "../App"; // Firebase app

// LoginPage functional component definition
const LoginPage = () => {
  const navigation = useNavigation(); // Initializing navigation hook

  // State variables to store user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle login process
  const handleLogin = async () => 
  {
    const auth = getAuth(app); //Initializing Firebase auth with the app instance

    try 
    {
      // Attempting to sign in with email and password
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => 
        {
          // Navigation to user profile page upon successful login
          navigation.navigate("BottomTabsRoot", {screen: "UserProfile"});  
        })
        .catch((error) => 
        {
          // Alerting the user in case of an error
          alert(error.message);
        });
  
    } catch (error) 
    {
      alert(error.message);
    }
  };

  return (
    // ScrollView to allow scrolling through the page
    <ScrollView>
{/* Main View container for the login page */}
    <View style={styles.loginPage}>
      {/* Background Ellipse images */}
      <Image
        style={[styles.loginPageChild]}
        contentFit="cover"
        source={require("../assets/ellipse-14.png")}
      />

      <Image
        style={[styles.loginPageItem]}
        contentFit="cover"
        source={require("../assets/ellipse-14.png")}
      />

  {/* Logo at the top of the page */}
      <ImageBackground
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../assets/logo.png")}
      />
    
     {/* TouchableOpacity for the login button */}
      <TouchableOpacity
        style={styles.loginWrapper}
        activeOpacity={0.2}
        onPress={handleLogin}
      >
        <Text style={styles.login}>Login</Text>
      </TouchableOpacity>

  {/* Text input for email */}
      <TextInput
        style={[styles.loginPageInner, styles.loginPageInnerShadowBox]}
        placeholder="Email"
        placeholderTextColor="#0a0806"
        onChangeText={setEmail}
        value={email}
      />

  {/* Text input for password */}
      <TextInput
        secureTextEntry 
        style={[styles.frameTextinput, styles.loginPageInnerShadowBox]}
        placeholder="Password"
        placeholderTextColor="#0a0806"
        onChangeText={setPassword}
        value={password}
      />
  {/* Buttons for registering a new account and resetting password */}
      <Button
        title="Don’t have an account? Register Now"
        radius="5"
        iconPosition="left"
        type="clear"
        titleStyle={styles.regsBtnText}
        onPress={() => navigation.navigate("RegistrationPage")}
        containerStyle={styles.regsBtnCont}
        buttonStyle={styles.regsBtn}
      />

      <Button
        title="Click here to Reset Password"
        radius="5"
        iconPosition="left"
        type="clear"
        titleStyle={styles.resetBtnText}
        onPress={() => navigation.navigate("ResetPassword")}
        containerStyle={styles.resetBtnCont}
        buttonStyle={styles.resetBtn}
      />
    </View>
    </ScrollView>
  );
};

// Styles for the Login page component
const styles = StyleSheet.create(
  {
  regsBtnText: 
  {
    color: "#000",
    fontSize: 17,
  },

  regsBtnCont: 
  {
    left: 35,
    padding: 10,
    top: 622,
    position: "absolute",
  },

  regsBtn: 
  {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  resetBtnText: 
  {
    color: "#000",
    fontSize: 17,
  },

  resetBtnCont: 
  {
    left: 58,
    padding: 10,
    top: 670,
    position: "absolute",
  },

  resetBtn: 
  {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  loginPageInnerShadowBox: 
  {
    fontSize: FontSize.body15Regular_size,
    backgroundColor: Color.colorWhitesmoke_200,
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    width: 256,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: 
    {
      width: 0,
      height: 20,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: Border.br_11xl,
    left: 69,
    position: "absolute",
  },

  loginPageChild: 
  {
    top: -150,
    height: 600,
    width: 500,
    position: "absolute",
    left: 130,
  },

  loginPageItem: 
  {
    top: 450,
    height: 600,
    width: 500,
    left: -146,
    position: "absolute",
  },

  logoIcon: 
  {
    top: 75,
    left: 80,
    width: 233,
    height: 238,
    position: "absolute",
  },

  login: 
  {
    fontSize: 24,
    letterSpacing: 0,
    color: Color.labelDarkPrimary,
    textAlign: "center",
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
  },

  loginWrapper: 
  {
    top: 537,
    backgroundColor: Color.colorDodgerblue_100,
    justifyContent: "center",
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    width: 256,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: 
    {
      width: 0,
      height: 20,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: Border.br_11xl,
    left: 69,
    position: "absolute",
  },

  loginPageInner: 
  {
    top: 365,
  },

  frameTextinput: 
  {
    top: 451,
  },

  logBtnText: 
  {
    color: "#fff",
    fontSize: 20,
    fontWeight: "300",
    fontFamily: "Nunito-Light",
  },

  logBtnCont: 
  {
    left: 26,
    top: 701,
    position: "absolute",
  },

  logBtn: 
  {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: 
    {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 151,
    height: 61,
  },

  loginPage: 
  {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

// Exporting the login page component
export default LoginPage;