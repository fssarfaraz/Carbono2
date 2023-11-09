import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, StatusBar, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Property1HomeImage from "../components/Property1HomeImage";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import EnergyCard from "../components/EnergyCard";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const Calculator = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.calculator}>
      <Image
        style={[styles.calculatorChild, styles.calculatorLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.calculatorItem, styles.calculatorLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Property1HomeImage
        imageDimensions={require("../assets/navigation-barr8.png")}
        property1HomeIconPosition="absolute"
        property1HomeIconWidth={394}
        property1HomeIconHeight={106}
        property1HomeIconTop={746}
        property1HomeIconLeft={0}
      />
      <View
        style={[styles.iconPersonOutlineParent, styles.travelWrapperFlexBox]}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/-icon-person-outline.png")}
        />
        <Image
          style={[styles.iconBookSaved, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-book-saved2.png")}
        />
        <Image
          style={[styles.iconDiscussion, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/-icon-discussion.png")}
        />
        <Image
          style={[styles.iconGameControllerOutline, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-game-controller-outline7.png")}
        />
      </View>
      <Pressable style={styles.iconCalculatorWrapper}>
        <Image
          style={styles.iconCalculator}
          contentFit="cover"
          source={require("../assets/-icon-calculator2.png")}
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
      <Text
        style={[styles.carbonFootprintCalculator, styles.selectCategoryTypo]}
      >{`Carbon Footprint 
Calculator`}</Text>
      <EnergyCard
        imageDescription={require("../assets/rectangle-56.png")}
        itemDimensions="Energy"
        onCommunityCard4Press={() => navigation.navigate("CalcEnergy")}
      />
      <Pressable
        style={[styles.communityCard3, styles.communityLayout]}
        onPress={() => navigation.navigate("CalcTravel")}
      >
        <View style={[styles.communityCard3Child, styles.communityLayout]} />
        <Image
          style={styles.communityCard3Item}
          contentFit="cover"
          source={require("../assets/rectangle-561.png")}
        />
        <Text style={[styles.select, styles.selectTypo]}>Select</Text>
        <View style={[styles.travelWrapper, styles.travelWrapperFlexBox]}>
          <Text style={[styles.travel, styles.selectTypo]}>Travel</Text>
        </View>
      </Pressable>
      <EnergyCard
        imageDescription={require("../assets/rectangle-562.png")}
        itemDimensions="Food"
        propTop={287}
        propLeft={17}
        onCommunityCard4Press={() => navigation.navigate("CalcFood")}
      />
      <Text style={[styles.selectCategory, styles.selectCategoryTypo]}>
        SELECT CATEGORY
      </Text>
      <Pressable style={[styles.trackingSwitch, styles.trackingLayout]}>
        <LinearGradient
          style={[styles.trackingSwitchChild, styles.trackingLayout]}
          locations={[0, 1]}
          colors={["#428df8", "rgba(66, 141, 248, 0.42)"]}
        />
        <Text style={[styles.calculate, styles.trackTypo]}>Calculate</Text>
      </Pressable>
      <Pressable
        style={[styles.alternativesSwitch, styles.trackingLayout]}
        onPress={() => navigation.navigate("CalcTrack")}
      >
        <LinearGradient
          style={[styles.trackingSwitchChild, styles.trackingLayout]}
          locations={[0, 1]}
          colors={["#fff", "#fff9f9"]}
        />
        <Text style={[styles.track, styles.trackTypo]}>Track</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  calculatorLayout: {
    height: 330,
    width: 400,
    left: 0,
    position: "absolute",
  },
  travelWrapperFlexBox: {
    flexDirection: "row",
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
  selectCategoryTypo: {
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  communityLayout: {
    height: 185,
    width: 164,
    position: "absolute",
  },
  selectTypo: {
    textAlign: "center",
    fontFamily: FontFamily.nunitoMedium,
    color: Color.labelDarkPrimary,
    fontWeight: "500",
  },
  trackingLayout: {
    height: 51,
    width: 165,
    position: "absolute",
  },
  trackTypo: {
    fontSize: FontSize.bodyBody1_size,
    top: 13,
    textAlign: "center",
    position: "absolute",
  },
  calculatorChild: {
    top: 0,
    width: 400,
  },
  calculatorItem: {
    top: 545,
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
    width: 385,
    alignItems: "flex-end",
    left: 24,
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
  carbonFootprintCalculator: {
    top: 139,
    left: 25,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.nunitoBold,
  },
  communityCard3Child: {
    borderRadius: Border.br_base,
    backgroundColor: Color.colorWhitesmoke_100,
    left: 0,
    top: 0,
  },
  communityCard3Item: {
    top: 15,
    left: 15,
    borderRadius: Border.br_xs,
    width: 134,
    height: 100,
    position: "absolute",
  },
  select: {
    top: 152,
    left: 62,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  travel: {
    fontSize: FontSize.primaryText_size,
  },
  travelWrapper: {
    top: 137,
    left: 39,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorDodgerblue_100,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: 0,
    overflow: "hidden",
  },
  communityCard3: {
    top: 379,
    left: 211,
  },
  selectCategory: {
    top: 235,
    fontFamily: FontFamily.robotoBold,
    color: Color.colorDarkslateblue_100,
    fontSize: FontSize.primaryText_size,
    left: 24,
  },
  trackingSwitchChild: {
    borderRadius: Border.br_sm,
    backgroundColor: "transparent",
    left: 0,
    top: 0,
  },
  calculate: {
    left: 43,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.labelDarkPrimary,
    top: 13,
  },
  trackingSwitch: {
    left: 20,
    top: 71,
    width: 165,
  },
  track: {
    left: 60,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.black,
    top: 13,
    fontWeight: "500",
  },
  alternativesSwitch: {
    left: 205,
    top: 71,
    width: 165,
  },
  calculator: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Calculator;
