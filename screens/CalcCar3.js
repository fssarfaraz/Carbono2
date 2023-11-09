import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Pressable,
  TouchableHighlight,
  StatusBar,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Property1HomeImage from "../components/Property1HomeImage";
import { useNavigation } from "@react-navigation/native";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { FontFamily, Padding, FontSize, Color, Border } from "../GlobalStyles";

const CalcCar3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.calcCar3}>
      <Image
        style={[styles.calcCar3Child, styles.calcLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.calcCar3Item, styles.calcLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Property1HomeImage
        imageDimensions={require("../assets/navigation-barr2.png")}
        property1HomeIconPosition="absolute"
        property1HomeIconWidth={394}
        property1HomeIconHeight={106}
        property1HomeIconTop={746}
        property1HomeIconLeft={0}
      />
      <TouchableHighlight
        style={styles.iconCalculatorWrapper}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Calculator")}
      >
        <Image
          style={styles.iconCalculator}
          contentFit="cover"
          source={require("../assets/-icon-calculator1.png")}
        />
      </TouchableHighlight>
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
      <Text style={[styles.yourCarbonFootprint, styles.footprintTypo]}>
        YOUR CARBON FOOTPRINT
      </Text>
      <Pressable
        style={[styles.materialSymbolsarrowBackIo, styles.iconLayout2]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/materialsymbolsarrowbackios.png")}
        />
      </Pressable>
      <LinearGradient
        style={styles.wrapper}
        locations={[0, 1]}
        colors={["rgba(66, 141, 248, 0.73)", "#01427a"]}
      >
        <TouchableHighlight
          style={[styles.touchablehighlight, styles.iconLayout]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("TravelTrackReport")}
        >
          <View />
        </TouchableHighlight>
      </LinearGradient>
      <Text style={[styles.footprint, styles.footprintTypo]}>Footprint</Text>
      <Pressable style={styles.saly26}>
        <Image
          style={[styles.saly26Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/saly26.png")}
        />
      </Pressable>
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
  iconLayout1: {
    width: 33,
    marginLeft: 72,
  },
  iconLayout2: {
    height: 30,
    width: 30,
  },
  footprintTypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  calcCar3Child: {
    top: 0,
  },
  calcCar3Item: {
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
  yourCarbonFootprint: {
    top: 131,
    left: 29,
    fontSize: FontSize.size_3xl,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
  },
  icon: {
    overflow: "hidden",
  },
  materialSymbolsarrowBackIo: {
    left: 23,
    top: 50,
    position: "absolute",
  },
  touchablehighlight: {
    borderRadius: Border.br_31xl,
    backgroundColor: "transparent",
  },
  wrapper: {
    left: "12.98%",
    top: "76.64%",
    right: "13.49%",
    bottom: "17.37%",
    width: "73.54%",
    height: "5.99%",
    position: "absolute",
  },
  footprint: {
    top: 658,
    left: 104,
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    color: "rgba(255, 255, 255, 0.57)",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 187,
    height: 41,
  },
  saly26Icon: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  saly26: {
    top: 193,
    left: 25,
    width: 342,
    height: 425,
    position: "absolute",
  },
  calcCar3: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default CalcCar3;
