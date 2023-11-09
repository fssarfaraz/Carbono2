import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  StatusBar,
  ImageBackground,
  Text,
  View,
} from "react-native";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { FontFamily, Color } from "../GlobalStyles";

const LoadingScreen3 = () => {
  return (
    <View style={styles.loadingScreen3}>
      <Image
        style={[styles.loadingScreen3Child, styles.loadingPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Image
        style={[styles.loadingScreen3Item, styles.loadingPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-25.png")}
      />
      <StyleDefaultDarkModeTrue
        styleDefaultDarkModeTrueAlignSelf="unset"
        styleDefaultDarkModeTruePosition="absolute"
        styleDefaultDarkModeTrueTop={0}
        styleDefaultDarkModeTrueLeft={9}
        styleDefaultDarkModeTrueBackgroundColor="rgba(255, 255, 255, 0)"
        styleDefaultDarkModeTrueWidth={375}
        styleDefaultDarkModeTrueMarginLeft="unset"
        styleDefaultDarkModeTrueMarginTop="unset"
      />
      <ImageBackground
        style={[styles.logoIcon, styles.carbonoLayout]}
        resizeMode="cover"
        source={require("../assets/logo2.png")}
      />
      <Text style={[styles.carbono, styles.carbonoLayout]} numberOfLines={1}>
        CARBONO
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingPosition: {
    position: "absolute",
    left: 0,
  },
  carbonoLayout: {
    width: 393,
    position: "absolute",
  },
  loadingScreen3Child: {
    top: 0,
    width: 569,
    height: 716,
    left: 0,
  },
  loadingScreen3Item: {
    top: 170,
    width: 559,
    height: 682,
    left: 0,
  },
  logoIcon: {
    top: 218,
    height: 417,
    left: 0,
  },
  carbono: {
    top: 669,
    left: 1,
    fontSize: 70,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorDarkslateblue_100,
    textAlign: "center",
    height: 56,
  },
  loadingScreen3: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default LoadingScreen3;
