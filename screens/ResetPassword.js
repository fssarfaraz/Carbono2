import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  StatusBar,
  ImageBackground,
  TextInput,
  View,
} from "react-native";
import { Button } from "@rneui/themed";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Padding, Color, Border } from "../GlobalStyles";

const ResetPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.resetPassword}>
      <Image
        style={[styles.resetPasswordChild, styles.resetPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-14.png")}
      />
      <Image
        style={[styles.resetPasswordItem, styles.resetPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-14.png")}
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
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../assets/logo.png")}
      />
      <Button
        title="Reset Password"
        radius={30}
        iconPosition="left"
        type="solid"
        color="#428df8"
        titleStyle={styles.frameButtonBtn}
        onPress={() => navigation.navigate("LoginPage")}
        containerStyle={styles.frameButtonBtn1}
        buttonStyle={styles.frameButtonBtn2}
      />
      <TextInput
        style={[styles.resetPasswordInner, styles.resetShadowBox]}
        placeholder="Enter Username"
        placeholderTextColor="#0a0806"
      />
      <TextInput
        style={[styles.frameTextinput, styles.resetShadowBox]}
        placeholder="Enter New Password"
        placeholderTextColor="#0a0806"
      />
      <TextInput
        style={[styles.resetPasswordChild1, styles.resetShadowBox]}
        placeholder="Re-Enter Password"
        placeholderTextColor="#0a0806"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameButtonBtn: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "300",
    fontFamily: "Nunito-Light",
  },
  frameButtonBtn1: {
    left: 69,
    padding: 10,
    top: 585,
    position: "absolute",
  },
  frameButtonBtn2: {
    borderRadius: 30,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 256,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  resetPosition: {
    width: 400,
    left: 0,
    position: "absolute",
  },
  resetShadowBox: {
    fontSize: FontSize.body15Regular_size,
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
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_11xl,
    left: 69,
    position: "absolute",
  },
  resetPasswordChild: {
    top: 0,
    height: 455,
  },
  resetPasswordItem: {
    top: 422,
    height: 430,
  },
  logoIcon: {
    top: 44,
    left: 80,
    width: 233,
    height: 238,
    position: "absolute",
  },
  resetPasswordInner: {
    top: 316,
  },
  frameTextinput: {
    top: 401,
  },
  resetPasswordChild1: {
    top: 485,
  },
  resetPassword: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default ResetPassword;
