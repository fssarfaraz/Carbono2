import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  StatusBar,
  ImageBackground,
  TextInput,
  Text,
  View,
} from "react-native";
import { Button } from "@rneui/themed";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Padding, Color, Border, FontFamily } from "../GlobalStyles";

const RegistrationPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registrationPage}>
      <Image
        style={[styles.registrationPageChild, styles.registrationPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-14.png")}
      />
      <Image
        style={[styles.registrationPageItem, styles.registrationPosition]}
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
        title="Register Now"
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
        style={[
          styles.registrationPageInner,
          styles.registrationChildShadowBox,
        ]}
        placeholder="Email Address *"
        placeholderTextColor="#0a0806"
      />
      <TextInput
        style={[styles.frameTextinput, styles.registrationChildShadowBox]}
        placeholder="Password *"
        placeholderTextColor="#0a0806"
      />
      <TextInput
        style={[
          styles.registrationPageChild1,
          styles.registrationChildShadowBox,
        ]}
        placeholder="Gender"
        placeholderTextColor="#0a0806"
      />
      <TextInput
        style={[
          styles.registrationPageChild2,
          styles.registrationChildShadowBox,
        ]}
        placeholder="Address"
        placeholderTextColor="#0a0806"
      />
      <TextInput
        style={[
          styles.registrationPageChild3,
          styles.registrationChildShadowBox,
        ]}
        placeholder="Name *"
        placeholderTextColor="#0a0806"
      />
      <TextInput
        style={[
          styles.registrationPageChild4,
          styles.registrationChildShadowBox,
        ]}
        placeholder="Username *"
        placeholderTextColor="#0a0806"
      />
      <Text
        style={[styles.byRegisteringWith, styles.byRegisteringWithTypo]}
      >{`By registering with Carbono, you agree to the T&Cs`}</Text>
      <Text style={[styles.mandatoryFieldsAre, styles.byRegisteringWithTypo]}>
        Mandatory Fields are marked with *
      </Text>
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
    top: 708,
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
  registrationPosition: {
    width: 400,
    left: 0,
    position: "absolute",
  },
  registrationChildShadowBox: {
    fontSize: FontSize.body15Regular_size,
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
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
    position: "absolute",
  },
  byRegisteringWithTypo: {
    textAlign: "center",
    color: Color.black,
    letterSpacing: 0,
    fontSize: FontSize.body15Regular_size,
    position: "absolute",
  },
  registrationPageChild: {
    top: 0,
    height: 455,
  },
  registrationPageItem: {
    top: 422,
    height: 430,
  },
  logoIcon: {
    top: 44,
    width: 233,
    height: 238,
    left: 80,
    position: "absolute",
  },
  registrationPageInner: {
    top: 331,
  },
  frameTextinput: {
    top: 479,
  },
  registrationPageChild1: {
    top: 555,
  },
  registrationPageChild2: {
    top: 629,
  },
  registrationPageChild3: {
    top: 257,
  },
  registrationPageChild4: {
    top: 405,
  },
  byRegisteringWith: {
    top: 812,
    left: 35,
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
    textAlign: "center",
    color: Color.black,
    letterSpacing: 0,
  },
  mandatoryFieldsAre: {
    top: 787,
    fontWeight: "500",
    fontFamily: FontFamily.nunitoMedium,
    left: 80,
  },
  registrationPage: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default RegistrationPage;
