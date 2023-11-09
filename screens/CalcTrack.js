import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Pressable,
  StatusBar,
  Text,
  TouchableHighlight,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Property1HomeImage from "../components/Property1HomeImage";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import TravelCard from "../components/TravelCard";
import FormContainer from "../components/FormContainer";
import { Color, FontSize, Padding, Border, FontFamily } from "../GlobalStyles";

const CalcTrack = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.calcTrack}>
      <Image
        style={[styles.calcTrackChild, styles.calcLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.calcTrackItem, styles.calcLayout]}
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
      <Pressable
        style={styles.iconCalculatorWrapper}
        onPress={() => navigation.navigate("Calculator")}
      >
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
      <TouchableHighlight
        style={[styles.trackingSwitch, styles.trackingLayout]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Calculator")}
      >
        <>
          <LinearGradient
            style={[styles.trackingSwitchChild, styles.trackingLayout]}
            locations={[0, 1]}
            colors={["#fff", "rgba(255, 255, 255, 0.46)"]}
          />
          <Text style={styles.calculate}>Calculate</Text>
        </>
      </TouchableHighlight>
      <Pressable style={[styles.alternativesSwitch, styles.trackingLayout]}>
        <LinearGradient
          style={[styles.trackingSwitchChild, styles.trackingLayout]}
          locations={[0, 1]}
          colors={["#428df8", "rgba(66, 141, 248, 0.42)"]}
        />
        <Text style={[styles.track, styles.trackTypo]}>Track</Text>
      </Pressable>
      <TravelCard />
      <LinearGradient
        style={styles.button}
        locations={[0, 1]}
        colors={["#428df8", "#5a09c1"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("CalcTrack2")}
        >
          <Text style={[styles.viewReports, styles.trackTypo]}>
            View Reports
          </Text>
        </Pressable>
      </LinearGradient>
      <FormContainer
        itemType="Food"
        itemImageCode={require("../assets/iconparksolidgreennewenergy.png")}
        onGreenMaintainancePress={() => navigation.navigate("FoodTrackReport")}
      />
      <Text style={styles.selectCategoryFor}>SELECT CATEGORY FOR HISTORY</Text>
      <FormContainer
        itemType="Energy"
        itemImageCode={require("../assets/mingcutepackage2fill.png")}
        propLeft={149}
        propBackgroundColor="#01427a"
        propLeft1={25}
        onGreenMaintainancePress={() =>
          navigation.navigate("EnergyTrackReport")
        }
      />
      <FormContainer
        itemType="Travel"
        itemImageCode={require("../assets/mingcutewalkfill.png")}
        propLeft={272}
        propBackgroundColor="#5a09c1"
        propLeft1={27}
        onGreenMaintainancePress={() =>
          navigation.navigate("TravelTrackReport")
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  calcLayout: {
    height: 330,
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
  trackingLayout: {
    height: 51,
    width: 165,
    position: "absolute",
  },
  trackTypo: {
    color: Color.labelDarkPrimary,
    textAlign: "center",
    fontSize: FontSize.bodyBody1_size,
  },
  calcTrackChild: {
    top: 0,
    width: 400,
  },
  calcTrackItem: {
    top: 545,
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
  trackingSwitchChild: {
    borderRadius: Border.br_sm,
    backgroundColor: "transparent",
    width: 165,
    left: 0,
    top: 0,
  },
  calculate: {
    left: 43,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorGray_400,
    textAlign: "center",
    fontSize: FontSize.bodyBody1_size,
    top: 13,
    position: "absolute",
  },
  trackingSwitch: {
    left: 20,
    top: 71,
    width: 165,
  },
  track: {
    left: 60,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    top: 13,
    color: Color.labelDarkPrimary,
    position: "absolute",
  },
  alternativesSwitch: {
    left: 205,
    top: 71,
    width: 165,
  },
  viewReports: {
    letterSpacing: 1,
    lineHeight: 24,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    flex: 1,
  },
  pressable: {
    borderRadius: Border.br_11xl,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 14,
    backgroundColor: "transparent",
    flexDirection: "row",
    width: "100%",
  },
  button: {
    left: 39,
    top: 426,
    width: 315,
    position: "absolute",
  },
  selectCategoryFor: {
    top: 515,
    left: 37,
    fontSize: FontSize.primaryText_size,
    fontFamily: FontFamily.robotoBold,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  calcTrack: {
    backgroundColor: Color.labelDarkPrimary,
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default CalcTrack;
