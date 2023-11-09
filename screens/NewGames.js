import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "@rneui/themed";
import Property1HomeImage from "../components/Property1HomeImage";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const NewGames = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.newGames}>
      <Image
        style={[styles.newGamesChild, styles.newPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.newGamesItem, styles.newPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Pressable style={styles.rd}>
        <Image
          style={[styles.rdChild, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-4.png")}
        />
        <Image
          style={styles.wordleLogo1}
          contentFit="cover"
          source={require("../assets/wordle-logo-1.png")}
        />
        <LinearGradient
          style={[styles.gradientLayer, styles.gradientBg]}
          locations={[0, 1]}
          colors={["#01427a", "rgba(44, 44, 46, 0)"]}
        />
      </Pressable>
      <LinearGradient
        style={[styles.gradientLayer1, styles.gradientBg]}
        locations={[0, 1]}
        colors={["#01427a", "rgba(44, 44, 46, 0)"]}
      />
      <Property1HomeImage
        imageDimensions={require("../assets/navigation-barr12.png")}
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
          source={require("../assets/-icon-game-controller-outline12.png")}
        />
      </View>
      <Pressable style={styles.iconCalculatorWrapper}>
        <Image
          style={styles.iconCalculator}
          contentFit="cover"
          source={require("../assets/-icon-calculator6.png")}
        />
      </Pressable>
      <Pressable style={styles.nd}>
        <Image
          style={[styles.ndChild, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-41.png")}
        />
      </Pressable>
      <Image
        style={styles.drawSomethingLogo1}
        contentFit="cover"
        source={require("../assets/draw-something-logo-1.png")}
      />
      <Pressable style={[styles.st, styles.stPosition]}>
        <Image
          style={[styles.ndChild, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-42.png")}
        />
      </Pressable>
      <Image
        style={styles.monumnetValley2Logo1}
        contentFit="cover"
        source={require("../assets/monumnet-valley-2-logo-1.png")}
      />
      <Text style={[styles.newGames1, styles.newGames1FlexBox]}>New Games</Text>
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
      <Text style={[styles.tryThemOut, styles.newGames1FlexBox]}>
        TRY THEM OUT!
      </Text>
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
  newPosition: {
    width: 400,
    left: 0,
    position: "absolute",
  },
  childLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_31xl,
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  gradientBg: {
    backgroundColor: "transparent",
    width: 411,
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
  stPosition: {
    left: "2.29%",
    width: "93.89%",
  },
  newGames1FlexBox: {
    textAlign: "left",
    color: Color.colorDarkslateblue_100,
    position: "absolute",
  },
  newGamesChild: {
    top: 0,
    height: 455,
  },
  newGamesItem: {
    top: 422,
    height: 430,
  },
  rdChild: {
    width: "91.24%",
    top: "-1.27%",
    right: "3.89%",
    bottom: "1.27%",
    left: "4.87%",
  },
  wordleLogo1: {
    top: 31,
    left: 109,
    width: 198,
    height: 111,
    position: "absolute",
  },
  gradientLayer: {
    top: 11,
    height: 88,
    left: 0,
    backgroundColor: "transparent",
    width: 411,
  },
  rd: {
    height: "27.78%",
    width: "104.58%",
    top: "83.33%",
    right: "-2.29%",
    bottom: "-11.12%",
    left: "-2.29%",
    position: "absolute",
  },
  gradientLayer1: {
    top: 725,
    left: -9,
    height: 84,
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
  ndChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_31xl,
    height: "100%",
  },
  nd: {
    top: "54.93%",
    right: "2.54%",
    bottom: "19.25%",
    left: "3.56%",
    width: "93.89%",
    height: "25.82%",
    position: "absolute",
  },
  drawSomethingLogo1: {
    top: 455,
    left: 78,
    width: 239,
    height: 245,
    position: "absolute",
  },
  st: {
    top: "25.23%",
    right: "3.82%",
    bottom: "48.94%",
    height: "25.82%",
    left: "2.29%",
    position: "absolute",
  },
  monumnetValley2Logo1: {
    top: 294,
    left: 100,
    width: 194,
    height: 62,
    position: "absolute",
  },
  newGames1: {
    top: "11.15%",
    fontSize: FontSize.size_31xl,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    left: "2.29%",
    width: "93.89%",
  },
  vectorIcon: {
    top: 587,
    left: -240,
    width: 12,
    height: 10,
    position: "absolute",
  },
  tryThemOut: {
    top: 163,
    left: 9,
    fontSize: FontSize.body15Regular_size,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
  },
  newGames: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default NewGames;
