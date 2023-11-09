import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  StatusBar,
  ImageBackground,
  Pressable,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from "react-native";
import { Button } from "@rneui/themed";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const LoginPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginPage}>
      <Image
        style={[styles.loginPageChild, styles.loginPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-14.png")}
      />
      <Image
        style={[styles.loginPageItem, styles.loginPosition]}
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
      <TouchableOpacity
        style={styles.loginWrapper}
        activeOpacity={0.2}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "UserProfile" })
        }
      >
        <Text style={styles.login}>Login</Text>
      </TouchableOpacity>
      <TextInput
        style={[styles.loginPageInner, styles.loginPageInnerShadowBox]}
        placeholder="Username"
        placeholderTextColor="#0a0806"
      />
      <TextInput
        style={[styles.frameTextinput, styles.loginPageInnerShadowBox]}
        placeholder="Password"
        placeholderTextColor="#0a0806"
      />
      <Button
        title="Don’t have an account? Register Now"
        radius="5"
        iconPosition="left"
        type="clear"
        titleStyle={styles.frameButton1Btn}
        onPress={() => navigation.navigate("RegistrationPage")}
        containerStyle={styles.frameButton1Btn1}
        buttonStyle={styles.frameButton1Btn2}
      />
      <Button
        title="Click here to Reset Password"
        radius="5"
        iconPosition="left"
        type="clear"
        titleStyle={styles.frameButton2Btn}
        onPress={() => navigation.navigate("ResetPassword")}
        containerStyle={styles.frameButton2Btn1}
        buttonStyle={styles.frameButton2Btn2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameButton1Btn: {
    color: "#000",
    fontSize: 20,
  },
  frameButton1Btn1: {
    left: 27,
    padding: 10,
    top: 622,
    position: "absolute",
  },
  frameButton1Btn2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameButton2Btn: {
    color: "#000",
    fontSize: 20,
  },
  frameButton2Btn1: {
    left: 50,
    padding: 10,
    top: 670,
    position: "absolute",
  },
  frameButton2Btn2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loginPosition: {
    width: 400,
    left: 0,
    position: "absolute",
  },
  loginPageInnerShadowBox: {
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
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: Border.br_11xl,
    left: 69,
    position: "absolute",
  },
  loginPageChild: {
    top: 0,
    height: 455,
  },
  loginPageItem: {
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
  login: {
    fontSize: FontSize.size_11xl,
    letterSpacing: 0,
    color: Color.labelDarkPrimary,
    textAlign: "center",
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
  },
  loginWrapper: {
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
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: Border.br_11xl,
    left: 69,
    position: "absolute",
  },
  loginPageInner: {
    top: 365,
  },
  frameTextinput: {
    top: 451,
  },
  loginPage: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default LoginPage;
