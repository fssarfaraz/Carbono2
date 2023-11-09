import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, StatusBar, Text } from "react-native";
import { Button } from "@rneui/themed";
import Property1HomeImage from "../components/Property1HomeImage";
import { useNavigation } from "@react-navigation/native";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const PasswordResetSuccess = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.passwordResetSuccess}>
      <Image
        style={[styles.passwordResetSuccessChild, styles.passwordPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.passwordResetSuccessItem, styles.passwordPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Property1HomeImage
        imageDimensions={require("../assets/navigation-barr7.png")}
        property1HomeIconPosition="absolute"
        property1HomeIconWidth={394}
        property1HomeIconHeight={106}
        property1HomeIconTop={746}
        property1HomeIconLeft={0}
      />
      <View style={styles.iconPersonOutlineParent}>
        <Pressable
          style={styles.iconLayout1}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "UserProfile" })
          }
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/-icon-person-outline.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.iconBookSaved, styles.iconLayout]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Educational" })
          }
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/-icon-book-saved1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.iconDiscussion, styles.iconLayout1]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Forum" })
          }
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/-icon-discussion.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.iconGameControllerOutline, styles.iconLayout]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Games" })
          }
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/-icon-game-controller-outline15.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={styles.iconCalculatorWrapper}
        onPress={() => navigation.navigate("Calculator")}
      >
        <Button
          radius="5"
          iconPosition="left"
          type="clear"
          icon={{ name: "calculator", type: "material-community" }}
          onPress={() => navigation.navigate("Calculator")}
          containerStyle={styles.iconCalculatorBtn}
          buttonStyle={styles.iconCalculatorBtn1}
        />
      </Pressable>
      <StyleDefaultDarkModeTrue
        styleDefaultDarkModeTrueAlignSelf="unset"
        styleDefaultDarkModeTruePosition="absolute"
        styleDefaultDarkModeTrueTop={10}
        styleDefaultDarkModeTrueLeft={9}
        styleDefaultDarkModeTrueBackgroundColor="rgba(255, 255, 255, 0)"
        styleDefaultDarkModeTrueWidth={375}
        styleDefaultDarkModeTrueMarginLeft="unset"
        styleDefaultDarkModeTrueMarginTop="unset"
      />
      <Text style={styles.resetPassword}>Reset Password</Text>
      <Button
        title="Continue"
        radius={10}
        iconPosition="left"
        type="solid"
        color="linear-gradient(87.88deg, #01427a, #fff)"
        onPress={() => navigation.navigate("LoginPage")}
        containerStyle={styles.signUpBottonBtn}
        buttonStyle={styles.signUpBottonBtn1}
      />
      <Text style={[styles.resetPassword1, styles.continueTypo]}>
        Reset Password
      </Text>
      <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <Text
        style={styles.yourPasswordHas}
        numberOfLines={2}
      >{`Your password has been reset successfully `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconCalculatorBtn: {
    position: "relative",
  },
  iconCalculatorBtn1: {
    width: 41,
    height: 45,
  },
  signUpBottonBtn: {
    left: 82,
    right: 98,
    bottom: 258,
    position: "absolute",
  },
  signUpBottonBtn1: {
    borderRadius: 10,
    height: 38,
  },
  passwordPosition: {
    width: 400,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    width: 33,
    marginLeft: 72,
  },
  iconLayout1: {
    height: 30,
    width: 30,
  },
  continueTypo: {
    height: 28,
    width: 141,
    color: Color.labelDarkPrimary,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.primaryText_size,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  passwordResetSuccessChild: {
    top: 0,
    height: 455,
  },
  passwordResetSuccessItem: {
    top: 422,
    height: 430,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconBookSaved: {
    height: 31,
    marginLeft: 72,
  },
  iconDiscussion: {
    marginLeft: 72,
  },
  iconGameControllerOutline: {
    height: 24,
    marginLeft: 72,
  },
  iconPersonOutlineParent: {
    top: 807,
    left: 24,
    width: 385,
    flexDirection: "row",
    alignItems: "flex-end",
    position: "absolute",
  },
  iconCalculatorWrapper: {
    top: 745,
    left: 165,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  resetPassword: {
    marginLeft: -152.5,
    top: 382,
    fontSize: FontSize.size_21xl,
    lineHeight: 35,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  resetPassword1: {
    top: 417,
    left: 117,
  },
  continue: {
    marginTop: 140,
    marginLeft: -73.5,
    top: "50%",
    left: "50%",
  },
  vectorIcon: {
    height: "12.21%",
    width: "22.65%",
    top: "21.6%",
    right: "40.2%",
    bottom: "66.2%",
    left: "37.15%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  yourPasswordHas: {
    top: 445,
    left: 34,
    fontSize: 21,
    fontFamily: FontFamily.nunitoSemiBold,
    color: "#404040",
    width: 327,
    height: 69,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  passwordResetSuccess: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default PasswordResetSuccess;
