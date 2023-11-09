import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "@rneui/themed";
import Property1HomeImage from "../components/Property1HomeImage";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { useNavigation } from "@react-navigation/native";
import { Border, Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const RecommendedGames = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.recommendedGames, styles.stChildLayout]}>
      <Image
        style={[styles.recommendedGamesChild, styles.recommendedPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.recommendedGamesItem, styles.recommendedPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Pressable style={[styles.st, styles.stPosition]}>
        <Image
          style={[styles.stChild, styles.stChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-42.png")}
        />
        <Image
          style={styles.monumnetValley2Logo2}
          contentFit="cover"
          source={require("../assets/monumnet-valley-2-logo-1.png")}
        />
      </Pressable>
      <LinearGradient
        style={styles.gradientLayer}
        locations={[0, 1]}
        colors={["#01427a", "rgba(44, 44, 46, 0)"]}
      />
      <Property1HomeImage
        imageDimensions={require("../assets/navigation-barr13.png")}
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
      <Pressable style={styles.iconCalculatorWrapper}>
        <Image
          style={styles.iconCalculator}
          contentFit="cover"
          source={require("../assets/-icon-calculator1.png")}
        />
      </Pressable>
      <Pressable style={[styles.nd, styles.stPosition]}>
        <Image
          style={[styles.stChild, styles.stChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-43.png")}
        />
      </Pressable>
      <Pressable style={[styles.st1, styles.stPosition]}>
        <Image
          style={[styles.stChild, styles.stChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-44.png")}
        />
      </Pressable>
      <Image
        style={[styles.subwaySurfersLogo1, styles.subwaySurfersLogo1Layout]}
        contentFit="cover"
        source={require("../assets/subway-surfers-logo-1.png")}
      />
      <Text style={styles.recommendedGames1}>Recommended Games</Text>
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
      <Image
        style={[styles.clashRoyaleLogo1Icon, styles.subwaySurfersLogo1Layout]}
        contentFit="cover"
        source={require("../assets/clashroyalelogo-1.png")}
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
  recommendedPosition: {
    width: 400,
    left: 0,
    position: "absolute",
  },
  stPosition: {
    left: "3.56%",
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
  subwaySurfersLogo1Layout: {
    width: 205,
    position: "absolute",
  },
  recommendedGamesChild: {
    top: 0,
    height: 455,
  },
  recommendedGamesItem: {
    top: 422,
    height: 430,
  },
  stChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_31xl,
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  monumnetValley2Logo2: {
    top: 79,
    left: 91,
    width: 194,
    height: 62,
    position: "absolute",
  },
  st: {
    top: "82.63%",
    bottom: "-8.45%",
    right: "2.54%",
    height: "25.82%",
    left: "3.56%",
    width: "93.89%",
  },
  gradientLayer: {
    top: 726,
    width: 411,
    height: 84,
    backgroundColor: "transparent",
    left: 0,
    position: "absolute",
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
  iconCalculator: {
    width: 41,
    height: 45,
  },
  iconCalculatorWrapper: {
    top: 745,
    left: 165,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  nd: {
    top: "54.93%",
    bottom: "19.25%",
    right: "2.54%",
    height: "25.82%",
    left: "3.56%",
    width: "93.89%",
  },
  st1: {
    height: "26.98%",
    width: "92.88%",
    top: "25%",
    right: "3.56%",
    bottom: "48.02%",
  },
  subwaySurfersLogo1: {
    top: 274,
    left: 92,
    height: 108,
  },
  recommendedGames1: {
    top: "12.44%",
    left: "2.54%",
    fontSize: FontSize.size_31xl,
    lineHeight: 47,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
    width: "93.89%",
    position: "absolute",
  },
  vectorIcon: {
    top: 587,
    left: -240,
    width: 12,
    height: 10,
    position: "absolute",
  },
  clashRoyaleLogo1Icon: {
    top: 519,
    left: 93,
    height: 136,
  },
  recommendedGames: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
  },
});

export default RecommendedGames;
