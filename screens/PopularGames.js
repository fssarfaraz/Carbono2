import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "@rneui/themed";
import Property1HomeImage from "../components/Property1HomeImage";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const PopularGames = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.popularGames}>
      <Image
        style={[styles.popularGamesChild, styles.popularPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.popularGamesItem, styles.popularPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <View style={[styles.rd, styles.rdPosition]}>
        <LinearGradient
          style={[styles.rdChild, styles.childPosition]}
          locations={[0, 1]}
          colors={["#646464", "#094ed3"]}
        />
        <Image
          style={[styles.shadowIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/shadow.png")}
        />
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
        <Image
          style={[styles.imageRemovebgPreview2Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/imageremovebgpreview-2.png")}
        />
        <Text style={[styles.hoursPlayed, styles.hoursPosition]}>
          <Text style={[styles.text, styles.textTypo]}>{`1442
`}</Text>
          <Text style={styles.hoursPlayed1}>Hours played</Text>
        </Text>
        <Image
          style={styles.ml1Icon}
          contentFit="cover"
          source={require("../assets/ml-1.png")}
        />
      </View>
      <LinearGradient
        style={styles.gradientLayer}
        locations={[0, 1]}
        colors={["#01427a", "rgba(44, 44, 46, 0)"]}
      >
        <Pressable style={styles.pressable} />
      </LinearGradient>
      <Property1HomeImage
        imageDimensions={require("../assets/navigation-barr11.png")}
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
          source={require("../assets/-icon-game-controller-outline11.png")}
        />
      </View>
      <View style={styles.iconCalculatorWrapper}>
        <Image
          style={styles.iconCalculator}
          contentFit="cover"
          source={require("../assets/-icon-calculator4.png")}
        />
      </View>
      <Pressable style={[styles.nd, styles.rdPosition]}>
        <LinearGradient
          style={[styles.ndChild, styles.childPosition]}
          locations={[0, 1]}
          colors={["#3e3d3d", "#d07d00"]}
        />
        <Text style={[styles.hoursPlayed2, styles.hoursPosition]}>
          <Text style={[styles.text, styles.textTypo]}>{`1769
`}</Text>
          <Text style={styles.hoursPlayed1}>Hours played</Text>
        </Text>
        <Image
          style={styles.jetpackJoyrideLogo1}
          contentFit="cover"
          source={require("../assets/jetpack-joyride-logo-1.png")}
        />
        <Image
          style={[styles.jetpack1Icon, styles.callOfDuty1Position]}
          contentFit="cover"
          source={require("../assets/jetpack-1.png")}
        />
      </Pressable>
      <Pressable style={[styles.st, styles.stPosition]}>
        <LinearGradient
          style={[styles.stChild, styles.childPosition]}
          locations={[0, 1]}
          colors={["#fdd818", "#0a0416"]}
        />
        <Text style={[styles.hoursPlayed2, styles.hoursPosition]}>
          <Text style={[styles.text, styles.textTypo]}>{`1891
`}</Text>
          <Text style={styles.hoursPlayed1}>Hours played</Text>
        </Text>
        <Image
          style={styles.codMobileLogo1}
          contentFit="cover"
          source={require("../assets/cod-mobile-logo-1.png")}
        />
        <Image
          style={[styles.callOfDuty1, styles.callOfDuty1Position]}
          contentFit="cover"
          source={require("../assets/call-of-duty-1.png")}
        />
      </Pressable>
      <Text style={[styles.popularGames1, styles.stPosition]}>
        Popular Games
      </Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  materialSymbolsarrowBackIoIconBtn: {
    left: 9,
    top: 59,
    position: "absolute",
  },
  materialSymbolsarrowBackIoIconBtn1: {
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  popularPosition: {
    width: 400,
    left: 0,
    position: "absolute",
  },
  rdPosition: {
    left: "3.56%",
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_31xl,
    backgroundColor: "transparent",
    left: "0%",
    position: "absolute",
  },
  iconPosition: {
    height: 245,
    top: 0,
    position: "absolute",
  },
  hoursPosition: {
    color: Color.labelDarkPrimary,
    textAlign: "left",
    left: 30,
    position: "absolute",
  },
  textTypo: {
    fontWeight: "700",
    fontSize: FontSize.size_31xl,
  },
  iconLayout: {
    width: 33,
    marginLeft: 72,
  },
  iconLayout1: {
    height: 30,
    width: 30,
  },
  callOfDuty1Position: {
    top: -7,
    position: "absolute",
  },
  stPosition: {
    left: "2.29%",
    position: "absolute",
  },
  popularGamesChild: {
    height: 455,
    top: 0,
    left: 0,
  },
  popularGamesItem: {
    top: 422,
    height: 430,
  },
  rdChild: {
    backgroundColor: "transparent",
    bottom: "0%",
    borderRadius: Border.br_31xl,
    right: "0%",
    top: "10.2%",
    height: "89.8%",
    width: "100%",
  },
  shadowIcon: {
    left: 135,
    width: 196,
    opacity: 0.1,
  },
  maskGroupIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "10.2%",
    height: "89.8%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  imageRemovebgPreview2Icon: {
    left: 150,
    width: 182,
  },
  text: {
    fontFamily: FontFamily.robotoBold,
  },
  hoursPlayed1: {
    fontSize: FontSize.primaryText_size,
    lineHeight: 30,
    fontWeight: "500",
    fontFamily: FontFamily.nunitoMedium,
  },
  hoursPlayed: {
    top: 130,
    textAlign: "left",
  },
  ml1Icon: {
    top: 55,
    width: 100,
    height: 32,
    left: 30,
    position: "absolute",
  },
  rd: {
    height: "28.76%",
    top: "82.28%",
    right: "2.54%",
    bottom: "-11.03%",
    width: "93.89%",
  },
  pressable: {
    height: "100%",
    backgroundColor: "transparent",
    width: "100%",
  },
  gradientLayer: {
    left: -7,
    top: 726,
    width: 411,
    height: 84,
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
  ndChild: {
    height: "82.09%",
    width: "94.13%",
    top: "13.06%",
    right: "5.87%",
    bottom: "4.85%",
    backgroundColor: "transparent",
  },
  hoursPlayed2: {
    top: 140,
    textAlign: "left",
  },
  jetpackJoyrideLogo1: {
    top: 59,
    left: 25,
    width: 132,
    height: 60,
    position: "absolute",
  },
  jetpack1Icon: {
    left: 164,
    width: 215,
    height: 284,
  },
  nd: {
    height: "31.46%",
    width: "99.75%",
    top: "50.82%",
    right: "-3.31%",
    bottom: "17.72%",
  },
  stChild: {
    height: "86.27%",
    width: "91.56%",
    top: "13.73%",
    right: "8.44%",
    backgroundColor: "transparent",
    bottom: "0%",
    borderRadius: Border.br_31xl,
  },
  codMobileLogo1: {
    top: 75,
    left: 35,
    width: 105,
    height: 35,
    position: "absolute",
  },
  callOfDuty1: {
    left: 59,
    width: 328,
    height: 271,
  },
  st: {
    height: "29.93%",
    width: "102.54%",
    top: "21.13%",
    right: "-4.83%",
    bottom: "48.94%",
  },
  popularGames1: {
    top: "11.03%",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorDarkslateblue_100,
    fontWeight: "700",
    fontSize: FontSize.size_31xl,
    textAlign: "left",
    width: "93.89%",
  },
  popularGames: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default PopularGames;
