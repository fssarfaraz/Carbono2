import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, StatusBar, Text } from "react-native";
import { Button } from "@rneui/themed";
import Property1HomeImage from "../components/Property1HomeImage";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const GameSelectedScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.gameSelectedScreen, styles.stChildLayout]}>
      <Image
        style={[styles.gameSelectedScreenChild, styles.gamePosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.gameSelectedScreenItem, styles.gamePosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <View style={[styles.st, styles.stPosition]}>
        <Image
          style={[styles.stChild, styles.stPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-45.png")}
        />
      </View>
      <Property1HomeImage
        imageDimensions={require("../assets/navigation-barr14.png")}
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
          source={require("../assets/-icon-book-saved1.png")}
        />
        <Image
          style={[styles.iconDiscussion, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/-icon-discussion.png")}
        />
        <Image
          style={[styles.iconGameControllerOutline, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-game-controller-outline13.png")}
        />
      </View>
      <Pressable
        style={[styles.iconCalculatorWrapper, styles.wrapperSpaceBlock]}
      >
        <Image
          style={styles.iconCalculator}
          contentFit="cover"
          source={require("../assets/-icon-calculator1.png")}
        />
      </Pressable>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector6.png")}
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
      <Button
        radius={5}
        iconPosition="left"
        type="solid"
        color="#fff"
        icon={{ name: "chevron-left", type: "material-community" }}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Games" })
        }
        containerStyle={styles.materialSymbolsarrowBackIoIconBtn}
        buttonStyle={styles.materialSymbolsarrowBackIoIconBtn1}
      />
      <Text style={[styles.monumentValley2, styles.informationTypo]}>
        Monument Valley 2
      </Text>
      <Text style={[styles.information, styles.informationTypo]}>
        Information
      </Text>
      <View style={[styles.genre, styles.genrePosition]}>
        <Text style={[styles.genre1, styles.genre1Typo]}>Genre</Text>
        <Text style={styles.adventure}>Adventure</Text>
      </View>
      <View style={[styles.created, styles.genrePosition]}>
        <Text style={[styles.sept2023, styles.oct2023Typo]}>09 Sept 2023</Text>
        <Text style={[styles.created1, styles.genre1Typo]}>Created</Text>
      </View>
      <View style={styles.updated}>
        <Text style={[styles.oct2023, styles.oct2023Typo]}>16 Oct 2023</Text>
        <Text style={[styles.updated1, styles.genre1Typo]}>Updated</Text>
      </View>
      <Image
        style={styles.monumnetValley2Logo2}
        contentFit="cover"
        source={require("../assets/monumnet-valley-2-logo-1.png")}
      />
      <View style={[styles.letsPlayWrapper, styles.wrapperSpaceBlock]}>
        <Text style={[styles.letsPlay, styles.genre1Typo]}>Let’s Play!</Text>
      </View>
      <Image
        style={[styles.thinLine1, styles.thinPosition]}
        contentFit="cover"
        source={require("../assets/thin-line-1.png")}
      />
      <Image
        style={[styles.thinLine3, styles.thinPosition]}
        contentFit="cover"
        source={require("../assets/thin-line-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  materialSymbolsarrowBackIoIconBtn: {
    left: 14,
    top: 60,
    position: "absolute",
  },
  materialSymbolsarrowBackIoIconBtn1: {
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  stChildLayout: {
    overflow: "hidden",
    width: "100%",
  },
  gamePosition: {
    width: 400,
    left: 0,
    position: "absolute",
  },
  stPosition: {
    top: "0%",
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
  wrapperSpaceBlock: {
    padding: Padding.p_3xs,
    position: "absolute",
  },
  informationTypo: {
    textAlign: "left",
    color: Color.colorDarkslateblue_100,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_13xl,
    width: "73.54%",
    position: "absolute",
  },
  genrePosition: {
    right: "-7.38%",
    height: "3.87%",
    position: "absolute",
  },
  genre1Typo: {
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
  },
  oct2023Typo: {
    top: "9.09%",
    fontFamily: FontFamily.nunitoExtraLight,
    fontWeight: "200",
    fontSize: FontSize.primaryText_size,
    textAlign: "left",
    color: Color.colorDarkslateblue_100,
    position: "absolute",
  },
  thinPosition: {
    height: 528,
    left: 0,
    position: "absolute",
  },
  gameSelectedScreenChild: {
    top: 0,
    height: 455,
  },
  gameSelectedScreenItem: {
    top: 422,
    height: 430,
  },
  stChild: {
    height: "100%",
    right: "-10.11%",
    bottom: "0%",
    left: "10.11%",
    borderRadius: Border.br_31xl,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: "100%",
  },
  st: {
    height: "34.62%",
    width: "125.9%",
    right: "-13.18%",
    bottom: "65.38%",
    left: "-12.72%",
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
    alignItems: "flex-end",
    flexDirection: "row",
    position: "absolute",
  },
  iconCalculator: {
    width: 41,
    height: 45,
  },
  iconCalculatorWrapper: {
    top: 745,
    left: 165,
  },
  vectorIcon: {
    top: 587,
    left: -240,
    width: 12,
    height: 10,
    position: "absolute",
  },
  monumentValley2: {
    top: "37.09%",
    left: "12.72%",
  },
  information: {
    top: "46.13%",
    left: "3.56%",
  },
  genre1: {
    width: "70.83%",
    fontSize: FontSize.size_5xl,
    left: "0%",
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorDarkslateblue_100,
    top: "0%",
    position: "absolute",
  },
  adventure: {
    width: "37.99%",
    top: "12.12%",
    left: "62.01%",
    fontFamily: FontFamily.nunitoExtraLight,
    fontWeight: "200",
    fontSize: FontSize.primaryText_size,
    textAlign: "left",
    color: Color.colorDarkslateblue_100,
    position: "absolute",
  },
  genre: {
    width: "103.82%",
    top: "53.05%",
    bottom: "43.08%",
    left: "3.56%",
  },
  sept2023: {
    width: "37.71%",
    left: "62.29%",
  },
  created1: {
    width: "70.32%",
    fontSize: FontSize.size_5xl,
    left: "0%",
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorDarkslateblue_100,
    top: "0%",
    position: "absolute",
  },
  created: {
    width: "104.58%",
    top: "59.86%",
    bottom: "36.27%",
    left: "2.8%",
  },
  oct2023: {
    width: "37.8%",
    left: "62.2%",
  },
  updated1: {
    width: "70.49%",
    fontSize: FontSize.size_5xl,
    left: "0%",
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorDarkslateblue_100,
    top: "0%",
    position: "absolute",
  },
  updated: {
    width: "104.33%",
    top: "66.2%",
    right: "-7.89%",
    bottom: "29.93%",
    height: "3.87%",
    left: "3.56%",
    position: "absolute",
  },
  monumnetValley2Logo2: {
    top: 127,
    left: 100,
    width: 194,
    height: 62,
    position: "absolute",
  },
  letsPlay: {
    fontSize: FontSize.size_11xl,
    letterSpacing: 0,
    color: Color.labelDarkPrimary,
    textAlign: "center",
  },
  letsPlayWrapper: {
    top: 627,
    left: 70,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorDodgerblue_100,
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
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  thinLine1: {
    top: 212,
    width: 550,
  },
  thinLine3: {
    top: 269,
    width: 545,
  },
  gameSelectedScreen: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
  },
});

export default GameSelectedScreen;
