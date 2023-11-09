import * as React from "react";
import {Image} from "expo-image";
import 
{
  StyleSheet,
  ImageBackground,
  Text,
  View,
} from "react-native";

import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import {FontFamily, Color} from "../GlobalStyles";

const LoadingScreen3 = () => {
  return (
    <View style={styles.loadingScreen3}>
      {/*Ellipse 1 that forms part of the background*/}
      <Image
        style={[styles.loadingScreen3Child]}
        contentFit="cover"
        source={require("../assets/ellipse-15.png")}
      />

      {/*Ellipse 2 that forms part of the background*/}
      <Image
        style={[styles.loadingScreen3Item]}
        contentFit="cover"
        source={require("../assets/ellipse-25.png")}
      />

      {/*Setting up dark mode for younger audience*/}
      <StyleDefaultDarkModeTrue
        styleDefaultDarkModeTrueAlignSelf="unset"
        styleDefaultDarkModeTruePosition="absolute"
        styleDefaultDarkModeTrueTop={0}
        styleDefaultDarkModeTrueLeft={9}
        styleDefaultDarkModeTrueBackgroundColor="null"
        styleDefaultDarkModeTrueWidth={375}
        styleDefaultDarkModeTrueMarginLeft="unset"
        styleDefaultDarkModeTrueMarginTop="unset"
      />

      {/*logo*/}
      <ImageBackground
        style={[styles.logoIcon]}
        resizeMode="cover"
        source={require("../assets/logo2.png")}
      />

      {/*App name*/}
      <Text style={[styles.carbono]} numberOfLines={1}>
        CARBONO
      </Text>
    </View>
  );
};

//container styles for every element
const styles = StyleSheet.create({
  loadingScreen3Child: 
  {
    top: -75,
    width: 569,
    height: 716,
    left: 0,
  },
  
  loadingScreen3Item: 
  {
    top: 370,
    width: 559,
    height: 597,
    left: -131,
    flex: 1,
  },

  logoIcon: 
  {
    top: 218,
    height: 417,
    left: 0,
    width: 393,
    position: "absolute",
  },

  carbono: 
  {
    top: 600,
    left: 1,
    fontSize: 70,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorDarkslateblue_100,
    textAlign: "center",
    height: 89,
    width: 393,
    position: "absolute",
  },

  loadingScreen3: 
  {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default LoadingScreen3;
