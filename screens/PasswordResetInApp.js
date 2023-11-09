import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { Button } from "@rneui/themed";
import Property1HomeImage from "../components/Property1HomeImage";
import { useNavigation } from "@react-navigation/native";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const PasswordResetInApp = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.passwordResetInApp, styles.fieldLayout]}>
      <Image
        style={[styles.passwordResetInAppChild, styles.passwordPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.passwordResetInAppItem, styles.passwordPosition1]}
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
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/-icon-person-outline.png")}
        />
        <Image
          style={[styles.iconBookSaved, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-book-saved3.png")}
        />
        <Image
          style={[styles.iconDiscussion, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/-icon-discussion.png")}
        />
        <Image
          style={[styles.iconGameControllerOutline, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-game-controller-outline14.png")}
        />
      </View>
      <View style={styles.iconCalculatorWrapper}>
        <Button
          radius="5"
          iconPosition="left"
          type="clear"
          icon={{ name: "calculator", type: "material-community" }}
          onPress={() => navigation.navigate("Calculator")}
          containerStyle={styles.iconCalculatorBtn}
          buttonStyle={styles.iconCalculatorBtn1}
        />
      </View>
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
      <View style={[styles.passwordField, styles.passwordPosition]}>
        <TextInput style={[styles.field, styles.fieldLayout]} />
        <Text style={styles.supersecure123}>Confirm password</Text>
        <Image
          style={styles.iconseyeSlash}
          contentFit="cover"
          source={require("../assets/iconseyeslash.png")}
        />
      </View>
      <TextInput style={[styles.passwordField1, styles.passwordPosition]} />
      <Button
        title="Reset Password"
        radius={10}
        iconPosition="left"
        type="solid"
        color="linear-gradient(87.88deg, #5a09c1, rgba(90, 9, 193, 0))"
        onPress={() => navigation.navigate("PasswordResetSuccess")}
        containerStyle={styles.signUpBottonBtn}
        buttonStyle={styles.signUpBottonBtn1}
      />
      <Button
        radius={10}
        iconPosition="left"
        type="solid"
        color="linear-gradient(87.88deg, #01427a, #fff)"
        onPress={() => navigation.navigate("SettingsPage")}
        containerStyle={styles.signUpBotton1Btn}
        buttonStyle={styles.signUpBotton1Btn1}
      />
      <Text style={[styles.newPassword, styles.passwordTypo]}>
        New Password
      </Text>
      <Text style={[styles.reEnterPassword, styles.passwordTypo]}>
        Re-Enter Password
      </Text>
      <Pressable
        style={[styles.resetPassword1, styles.cancelPosition]}
        onPress={() => navigation.navigate("PasswordResetSuccess")}
      >
        <Text style={styles.cancelTypo}>Reset Password</Text>
      </Pressable>
      <Text style={[styles.cancel, styles.cancelTypo]}>Cancel</Text>
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
    left: 77,
    right: 103,
    bottom: 407,
    position: "absolute",
  },
  signUpBottonBtn1: {
    borderRadius: 10,
    height: 38,
  },
  signUpBotton1Btn: {
    left: 77,
    right: 103,
    bottom: 345,
    position: "absolute",
  },
  signUpBotton1Btn1: {
    borderRadius: 10,
    height: 38,
  },
  fieldLayout: {
    width: "100%",
    backgroundColor: Color.labelDarkPrimary,
  },
  passwordPosition1: {
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
  passwordPosition: {
    left: 57,
    right: 63,
    height: 30,
    position: "absolute",
  },
  passwordTypo: {
    fontSize: FontSize.paragraphH1Reg_size,
    fontFamily: FontFamily.bodyBody1,
    left: 57,
    textAlign: "left",
    color: Color.colorDarkslateblue_100,
    position: "absolute",
  },
  cancelPosition: {
    left: 117,
    position: "absolute",
  },
  cancelTypo: {
    height: 28,
    width: 141,
    textAlign: "center",
    color: Color.labelDarkPrimary,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.primaryText_size,
  },
  passwordResetInAppChild: {
    top: 0,
    height: 455,
  },
  passwordResetInAppItem: {
    top: 422,
    height: 430,
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
    marginLeft: -133.5,
    top: 90,
    left: "50%",
    fontSize: 36,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    textAlign: "left",
    color: Color.colorDarkslateblue_100,
    position: "absolute",
  },
  field: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: "#d4d4d4",
    borderWidth: 1,
    position: "absolute",
  },
  supersecure123: {
    left: 12,
    fontSize: FontSize.size_sm,
    color: "#333",
    fontFamily: FontFamily.bodyBody1,
    top: "50%",
    marginTop: -8,
    textAlign: "left",
    position: "absolute",
  },
  iconseyeSlash: {
    right: 11,
    width: 18,
    height: 16,
    top: "50%",
    marginTop: -8,
    position: "absolute",
  },
  passwordField: {
    bottom: 498,
  },
  passwordField1: {
    bottom: 590,
  },
  newPassword: {
    top: 202,
  },
  reEnterPassword: {
    top: 294,
  },
  resetPassword1: {
    top: 417,
  },
  cancel: {
    top: 474,
    left: 117,
    position: "absolute",
  },
  passwordResetInApp: {
    flex: 1,
    height: 852,
    overflow: "hidden",
  },
});

export default PasswordResetInApp;
