import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, StatusBar, Text } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import CardView from "../components/CardView";
import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const UserProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.userProfile}>
      <Image
        style={[styles.userProfileChild, styles.userPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.userProfileItem, styles.userPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Pressable
        style={[styles.iconCalculatorWrapper, styles.wrapperSpaceBlock]}
        onPress={() => navigation.navigate("Calculator")}
      />
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
      <View style={[styles.card, styles.cardLayout]}>
        <View style={styles.cardBody}>
          <Text
            style={[
              styles.reducingYourTransport,
              styles.managingTravelInFlexBox,
            ]}
            numberOfLines={2}
          >
            Reducing your Transport Footprint
          </Text>
          <Text
            style={[styles.managingTravelIn, styles.managingTravelInFlexBox]}
          >
            Managing Travel In Today’s Connected World
          </Text>
        </View>
        <View style={styles.cardFooter}>
          <Button
            style={[styles.button, styles.cardLayout]}
            title="Read Article"
            radius="5"
            iconPosition="left"
            type="outline"
            titleStyle={styles.buttonBtn}
          />
        </View>
      </View>
      <CardView />
      <View style={[styles.tipsForYouWrapper, styles.wrapperSpaceBlock]}>
        <Text style={styles.tipsForYou} numberOfLines={1}>
          Tips for you
        </Text>
      </View>
      <View style={styles.name}>
        <Text style={styles.helloSavannah} numberOfLines={1}>
          Hello Savannah!
        </Text>
        <Button
          style={styles.icroundSettings}
          radius="5"
          iconPosition="left"
          type="clear"
          color="#fff"
          icon={{ name: "cog", type: "material-community" }}
          onPress={() => navigation.navigate("SettingsPage")}
          containerStyle={styles.icroundSettingsIconBtn}
          buttonStyle={styles.icroundSettingsIconBtn1}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBtn: {
    color: "#000",
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Roboto-Bold",
  },
  icroundSettingsIconBtn: {
    position: "relative",
  },
  icroundSettingsIconBtn1: {
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  userPosition: {
    width: 400,
    left: 0,
    position: "absolute",
  },
  wrapperSpaceBlock: {
    padding: Padding.p_3xs,
    position: "absolute",
  },
  iconLayout: {
    height: 30,
    width: 30,
  },
  cardLayout: {
    borderRadius: Border.br_xl,
    alignItems: "center",
  },
  managingTravelInFlexBox: {
    lineHeight: 23,
    letterSpacing: 1,
    textAlign: "left",
    color: Color.black,
    alignSelf: "stretch",
  },
  userProfileChild: {
    top: 0,
    height: 455,
  },
  userProfileItem: {
    top: 422,
    height: 430,
  },
  iconCalculatorWrapper: {
    top: 749,
    left: 166,
  },
  reducingYourTransport: {
    fontSize: FontSize.size_3xl,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    textAlign: "left",
    color: Color.black,
  },
  managingTravelIn: {
    fontSize: FontSize.bodyBody1_size,
    fontFamily: FontFamily.bodyBody1,
    marginTop: 15,
    textAlign: "left",
    color: Color.black,
  },
  cardBody: {
    padding: Padding.p_6xl,
    alignSelf: "stretch",
    alignItems: "center",
  },
  button: {
    borderStyle: "solid",
    width: 132,
    height: 39,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  cardFooter: {
    paddingHorizontal: Padding.p_6xl,
    paddingBottom: Padding.p_6xl,
    alignSelf: "stretch",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  card: {
    top: 511,
    left: 9,
    backgroundColor: "rgba(66, 141, 248, 0.12)",
    width: 360,
    height: 221,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  tipsForYou: {
    fontSize: FontSize.size_11xl,
    letterSpacing: 0,
    fontWeight: "300",
    fontFamily: FontFamily.nunitoLight,
    textAlign: "center",
    color: Color.black,
  },
  tipsForYouWrapper: {
    top: 450,
    left: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  helloSavannah: {
    fontSize: FontSize.size_9xl,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    color: Color.colorGray_100,
    width: 209,
    textAlign: "left",
  },
  icroundSettings: {
    marginLeft: 130,
  },
  name: {
    top: 53,
    left: 21,
    width: 372,
    height: 42,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  userProfile: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default UserProfile;
