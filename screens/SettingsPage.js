import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  View,
  StatusBar,
  Text,
  ImageBackground,
} from "react-native";
import { Button } from "@rneui/themed";
import Property1HomeImage from "../components/Property1HomeImage";
import { useNavigation } from "@react-navigation/native";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import SupportCard from "../components/SupportCard";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const SettingsPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settingsPage}>
      <Image
        style={styles.settingsPageChild}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={styles.settingsPageItem}
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
            source={require("../assets/-icon-book-saved3.png")}
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
            source={require("../assets/-icon-game-controller-outline4.png")}
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
      <Image
        style={styles.settingsPageInner}
        contentFit="cover"
        source={require("../assets/rectangle-1118.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-1119.png")}
      />
      <Button
        title="LOG OUT"
        radius="10"
        iconPosition="left"
        type="clear"
        titleStyle={styles.groupButtonBtn}
        onPress={() => navigation.navigate("MainPage")}
        containerStyle={styles.groupButtonBtn1}
        buttonStyle={styles.groupButtonBtn2}
      />
      <Image
        style={[styles.settingsPageChild1, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-1120.png")}
      />
      <Text style={[styles.support, styles.supportTypo]}>SUPPORT</Text>
      <Text style={[styles.general, styles.supportTypo]}>GENERAL</Text>
      <Text style={[styles.account, styles.supportTypo]}>ACCOUNT</Text>
      <Text style={styles.settings}>SETTINGS</Text>
      <Button
        radius="5"
        iconPosition="left"
        type="clear"
        color="#fff"
        icon={{ name: "chevron-left", type: "material-community" }}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "UserProfile" })
        }
        containerStyle={styles.materialSymbolsarrowBackIoIconBtn}
        buttonStyle={styles.materialSymbolsarrowBackIoIconBtn1}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Button
          title="Password Reset"
          radius="5"
          iconPosition="left"
          type="clear"
          color="#000"
          titleStyle={styles.passwordResetBtn}
          onPress={() => navigation.navigate("PasswordResetInApp")}
          containerStyle={styles.passwordResetBtn1}
          buttonStyle={styles.passwordResetBtn2}
        />
        <View style={styles.editProfileParent}>
          <Button
            title="Edit profile"
            radius="5"
            iconPosition="left"
            type="clear"
            color="#000"
            titleStyle={styles.editProfileBtn}
            onPress={() => navigation.navigate("EditProfile")}
            containerStyle={styles.editProfileBtn1}
            buttonStyle={styles.editProfileBtn2}
          />
          <Button
            title="Notifications"
            radius="5"
            iconPosition="left"
            type="clear"
            color="#000"
            titleStyle={styles.notificationsBtn}
            containerStyle={styles.notificationsBtn1}
            buttonStyle={styles.notificationsBtn2}
          />
          <Image
            style={styles.iconamoonnotification}
            contentFit="cover"
            source={require("../assets/iconamoonnotification.png")}
          />
        </View>
      </View>
      <Image
        style={styles.iconamoonprofileLight}
        contentFit="cover"
        source={require("../assets/iconamoonprofilelight.png")}
      />
      <ImageBackground
        style={styles.padlockOutlineIcon}
        resizeMode="cover"
        source={require("../assets/padlockoutline.png")}
      />
      <SupportCard />
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
  groupButtonBtn: {
    color: "#5a09c1",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
  },
  groupButtonBtn1: {
    left: "50%",
    marginLeft: -179.5,
    top: 624,
    position: "absolute",
  },
  groupButtonBtn2: {
    width: 347,
    height: 45,
  },
  materialSymbolsarrowBackIoIconBtn: {
    left: 41,
    top: 91,
    position: "absolute",
  },
  materialSymbolsarrowBackIoIconBtn1: {
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  passwordResetBtn: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Nunito-SemiBold",
  },
  passwordResetBtn1: {
    left: 76,
    top: 119,
    position: "absolute",
  },
  passwordResetBtn2: {},
  editProfileBtn: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Nunito-SemiBold",
  },
  editProfileBtn1: {
    left: 63,
    top: 0,
    position: "absolute",
  },
  editProfileBtn2: {},
  notificationsBtn: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Nunito-SemiBold",
  },
  notificationsBtn1: {
    left: 65,
    top: 51,
    position: "absolute",
  },
  notificationsBtn2: {},
  iconLayout: {
    width: 33,
    marginLeft: 72,
  },
  iconLayout1: {
    height: 30,
    width: 30,
  },
  rectangleIconLayout: {
    width: 358,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  supportTypo: {
    height: 28,
    width: 101,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.body15Regular_size,
    textAlign: "center",
    color: Color.colorDarkslateblue_100,
    position: "absolute",
  },
  groupChildLayout: {
    height: 165,
    width: 335,
    left: "50%",
    position: "absolute",
  },
  settingsPageChild: {
    left: 26,
    height: 369,
    width: 400,
    top: 0,
    position: "absolute",
  },
  settingsPageItem: {
    top: 472,
    height: 380,
    left: 0,
    width: 400,
    position: "absolute",
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
  settingsPageInner: {
    top: 169,
    width: 351,
    height: 36,
    borderRadius: Border.br_3xs,
    left: 17,
    position: "absolute",
  },
  rectangleIcon: {
    top: 574,
    left: 15,
    height: 33,
  },
  settingsPageChild1: {
    top: 407,
    height: 37,
    left: 17,
  },
  support: {
    top: 416,
    left: 9,
  },
  general: {
    top: 177,
    left: 8,
  },
  account: {
    top: 583,
    left: 7,
  },
  settings: {
    top: 91,
    left: 97,
    fontSize: FontSize.size_7xl,
    letterSpacing: 1,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    width: 206,
    height: 41,
    textAlign: "center",
    color: Color.colorDarkslateblue_100,
    position: "absolute",
  },
  groupChild: {
    marginLeft: -167.5,
    backgroundColor: Color.colorDarkslateblue_200,
    borderRadius: Border.br_3xs,
    top: 0,
    width: 335,
    left: "50%",
  },
  iconamoonnotification: {
    top: 44,
    height: 26,
    borderRadius: Border.br_3xs,
    width: 30,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  editProfileParent: {
    top: 23,
    left: 21,
    width: 164,
    height: 70,
    position: "absolute",
  },
  rectangleParent: {
    marginLeft: -179.5,
    top: 221,
  },
  iconamoonprofileLight: {
    top: 234,
    left: 41,
    width: 31,
    height: 32,
    position: "absolute",
    overflow: "hidden",
  },
  padlockOutlineIcon: {
    top: 334,
    left: 42,
    width: 29,
    height: 29,
    position: "absolute",
  },
  settingsPage: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default SettingsPage;
