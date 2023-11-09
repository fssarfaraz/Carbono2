import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Pressable,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import Property1HomeImage from "../components/Property1HomeImage";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Articles = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.articles}>
      <Image
        style={[styles.articlesChild, styles.articlesPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.articlesItem, styles.articlesPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.gradientLayerIcon, styles.gradientPosition]}
        contentFit="cover"
        source={require("../assets/gradient-layer.png")}
      />
      <ScrollView
        style={styles.modal}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
      >
        <View style={[styles.header, styles.headerPosition]}>
          <View style={styles.titleWrapper}>
            <View style={[styles.title, styles.gradientPosition]}>
              <View>
                <Text style={[styles.theGlobalEffect, styles.dummyFlexBox]}>
                  The Global Effect Of Car Emissions
                </Text>
                <Text style={[styles.dummyTextDummy, styles.dummyFlexBox]}>
                  Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                  Text Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text
                  Dummy Text Dummy Text Dummy Text
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.headerChild, styles.headerPosition]} />
          <Image
            style={styles.maskIcon}
            contentFit="cover"
            source={require("../assets/mask.png")}
          />
          <LinearGradient
            style={[styles.gradientLayer, styles.gradientPosition]}
            locations={[0, 1]}
            colors={["#01427a", "rgba(44, 44, 46, 0)"]}
          />
        </View>
        <Button
          title="Close"
          radius="5"
          iconPosition="left"
          type="clear"
          titleStyle={styles.backBtn}
          icon={{ name: "chevron-down", type: "material-community" }}
          onPress={() => navigation.goBack()}
          containerStyle={styles.backBtn1}
          buttonStyle={styles.backBtn2}
        />
      </ScrollView>
      <Property1HomeImage
        imageDimensions={require("../assets/navigation-barr16.png")}
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
        <Image
          style={[styles.iconBookSaved, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-book-saved.png")}
        />
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
    </View>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
  },
  backBtn1: {
    left: "50%",
    paddingLeft: 20,
    paddingTop: 32,
    marginLeft: -197,
    marginTop: -374,
    top: "50%",
    position: "absolute",
  },
  backBtn2: {
    width: 102,
    height: 52,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconCalculatorBtn: {
    position: "relative",
  },
  iconCalculatorBtn1: {
    width: 41,
    height: 45,
  },
  articlesPosition: {
    width: 400,
    left: 0,
    position: "absolute",
  },
  gradientPosition: {
    left: 0,
    position: "absolute",
  },
  headerPosition: {
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  dummyFlexBox: {
    textAlign: "left",
    color: Color.black,
    width: 342,
  },
  iconLayout: {
    width: 33,
    marginLeft: 72,
  },
  iconLayout1: {
    height: 30,
    width: 30,
  },
  articlesChild: {
    height: 394,
    top: 0,
  },
  articlesItem: {
    top: 435,
    height: 417,
  },
  gradientLayerIcon: {
    top: 44,
    borderRadius: Border.br_xl,
    height: 46,
    width: 394,
  },
  theGlobalEffect: {
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
  },
  dummyTextDummy: {
    fontSize: FontSize.body17Regular_size,
    lineHeight: 22,
    fontFamily: FontFamily.body15Regular,
    marginTop: 10,
  },
  title: {
    top: 0,
  },
  titleWrapper: {
    top: 412,
    left: 15,
    height: 176,
    width: 342,
    position: "absolute",
  },
  headerChild: {
    width: 375,
    height: 710,
  },
  maskIcon: {
    left: 1,
    width: 658,
    height: 482,
    top: 0,
    position: "absolute",
  },
  gradientLayer: {
    top: 665,
    height: 81,
    backgroundColor: "transparent",
    width: 394,
  },
  header: {
    height: 748,
    width: 394,
    overflow: "hidden",
  },
  modal: {
    top: 65,
    left: -1,
    maxWidth: 394,
    width: 394,
    position: "absolute",
    flex: 1,
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
  articles: {
    backgroundColor: Color.labelDarkPrimary,
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Articles;
