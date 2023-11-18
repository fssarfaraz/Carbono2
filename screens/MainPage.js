// React, React Native and expo imports
import * as React from "react";
import {View, StyleSheet, ImageBackground} from "react-native";
import {Image} from "expo-image";

import {Button} from "@rneui/themed"; // Themed button component
import {useNavigation} from "@react-navigation/native"; // Navigation hook
import {Color} from "../GlobalStyles"; //  Consistent coloring accross the app

// Declaration of MainPage as a functional component
const MainPage = () => {
  // useNavigation hook to enable navigation actions within the component
  const navigation = useNavigation();

  return (
    // View container for the entire main page
    <View style={styles.mainPage}>
      {/* Ellipse image 1 for decorative background */}
      <Image
        style={[styles.mainPageChild]}
        contentFit="cover"
        source={require("../assets/ellipse-14.png")}
      />

 {/* Ellipse image 2 for decorative background */}
      <Image
        style={[styles.mainPageItem]}
        contentFit="cover"
        source={require("../assets/ellipse-14.png")}
      />

{/* Logo displayed using ImageBackground for additional styling options */}
      <ImageBackground
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../assets/logo1.png")}
      />

{/* Button to navigate to the Login page */}
      <Button
        title="LOGIN"
        radius={18}
        iconPosition="left"
        type="solid"
        titleStyle={styles.logBtnText}
        onPress={() => navigation.navigate("LoginPage")}
        containerStyle={styles.logBtnCont}
        buttonStyle={styles.logBtn}
      />

{/* Button to navigate to the Registration page */}
      <Button
        title="SIGN UP"
        radius={18}
        iconPosition="left"
        type="solid"
        titleStyle={styles.sigBtnText}
        onPress={() => navigation.navigate("RegistrationPage")}
        containerStyle={styles.sigBtnCont}
        buttonStyle={styles.sigBtn}
      />
    </View>
  );
};

// styles for the MainPage component
const styles = StyleSheet.create(
  {
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

  sigBtnText: 
  {
    color: "#fff",
    fontSize: 20,
    fontWeight: "300",
    fontFamily: "Nunito-Light",
  },

  sigBtnCont: 
  {
    left: 230,
    top: 701,
    position: "absolute",
  },

  sigBtn: 
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

  mainPageChild: 
  {
    top: -150,
    height: 600,
    width: 500,
    position: "absolute",
    left: 130,
  },

  mainPageItem: 
  {
    top: 450,
    height: 600,
    width: 500,
    left: -146,
    position: "absolute",
  },

  logoIcon: 
  {
    top: 174,
    left: 38,
    width: 318,
    height: 318,
    position: "absolute",
  },

  mainPage: 
  {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
}
);

// Exporting the MainPage component 
export default MainPage;

