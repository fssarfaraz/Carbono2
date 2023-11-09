import * as React from "react";
import { View, StyleSheet, ImageBackground, StatusBar } from "react-native";
import { Image } from "expo-image";
import { Button } from "@rneui/themed";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const MainPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainPage}>
      <Image
        style={[styles.mainPageChild, styles.mainPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-14.png")}
      />
      <Image
        style={[styles.mainPageItem, styles.mainPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-14.png")}
      />
      <ImageBackground
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../assets/logo1.png")}
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
      <Button
        title="LOGIN"
        radius={18}
        iconPosition="left"
        type="solid"
        titleStyle={styles.lOGINBUTTONBtn}
        onPress={() => navigation.navigate("LoginPage")}
        containerStyle={styles.lOGINBUTTONBtn1}
        buttonStyle={styles.lOGINBUTTONBtn2}
      />
      <Button
        title="SIGN UP"
        radius={18}
        iconPosition="left"
        type="solid"
        titleStyle={styles.sIGNUPBUTTONBtn}
        onPress={() => navigation.navigate("RegistrationPage")}
        containerStyle={styles.sIGNUPBUTTONBtn1}
        buttonStyle={styles.sIGNUPBUTTONBtn2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lOGINBUTTONBtn: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "300",
    fontFamily: "Nunito-Light",
  },
  lOGINBUTTONBtn1: {
    left: 23,
    top: 701,
    position: "absolute",
  },
  lOGINBUTTONBtn2: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 151,
    height: 61,
  },
  sIGNUPBUTTONBtn: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "300",
    fontFamily: "Nunito-Light",
  },
  sIGNUPBUTTONBtn1: {
    left: 219,
    top: 701,
    position: "absolute",
  },
  sIGNUPBUTTONBtn2: {
    width: 151,
    height: 61,
  },
  mainPosition: {
    width: 400,
    left: 0,
    position: "absolute",
  },
  mainPageChild: {
    top: 0,
    height: 455,
  },
  mainPageItem: {
    top: 422,
    height: 430,
  },
  logoIcon: {
    top: 174,
    left: 38,
    width: 318,
    height: 318,
    position: "absolute",
  },
  mainPage: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default MainPage;
