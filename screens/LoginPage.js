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

import {Button} from "@rneui/themed";
import {useNavigation} from "@react-navigation/native";
import {FontSize, Color, FontFamily, Padding, Border} from "../GlobalStyles";

const LoginPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginPage}>
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

      <ImageBackground
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../assets/logo.png")}
      />
      
      <TouchableOpacity
        style={styles.loginWrapper}
        activeOpacity={0.2}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", {screen: "UserProfile"})
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
  );
};

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

  loginPage: 
  {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default LoginPage;
