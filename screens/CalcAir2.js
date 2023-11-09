import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, StatusBar, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Property1HomeImage from "../components/Property1HomeImage";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const CalcAir2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.calcAir2}>
      <Image
        style={[styles.calcAir2Child, styles.calcLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.calcAir2Item, styles.calcLayout]}
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
      <View style={styles.iconCalculatorWrapper}>
        <Image
          style={styles.iconCalculator}
          contentFit="cover"
          source={require("../assets/-icon-calculator5.png")}
        />
      </View>
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
      <Text style={styles.enterNumberOf}>ENTER NUMBER OF PASSENGERS</Text>
      <Pressable
        style={[styles.materialSymbolsarrowBackIo, styles.iconLayout3]}
        onPress={() => navigation.navigate("Calculator")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/materialsymbolsarrowbackios.png")}
        />
      </Pressable>
      <LinearGradient
        style={[styles.calcAir2Inner, styles.calcAir2InnerLayout]}
        locations={[0, 1]}
        colors={["rgba(225, 135, 245, 0.78)", "rgba(90, 9, 193, 0.89)"]}
      />
      <Text style={[styles.number, styles.next1Typo]}>Number</Text>
      <Image
        style={[styles.rectangleIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Pressable
        style={styles.next}
        onPress={() => navigation.navigate("CalcCar3")}
      >
        <Text style={[styles.next1, styles.next1Typo]}>Next</Text>
      </Pressable>
      <View style={styles.saly15}>
        <Image
          style={[styles.saly15Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/saly15.png")}
        />
      </View>
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
  iconLayout2: {
    width: 33,
    marginLeft: 72,
  },
  iconLayout3: {
    height: 30,
    width: 30,
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  calcAir2InnerLayout: {
    borderRadius: Border.br_31xl,
    height: "5.99%",
  },
  next1Typo: {
    height: 41,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.labelDarkPrimary,
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  calcAir2Child: {
    top: 0,
  },
  calcAir2Item: {
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
  enterNumberOf: {
    top: 120,
    left: 30,
    fontSize: FontSize.size_3xl,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
  },
  materialSymbolsarrowBackIo: {
    left: 23,
    top: 50,
    position: "absolute",
  },
  calcAir2Inner: {
    width: "73.54%",
    top: "70.89%",
    right: "15.27%",
    bottom: "23.12%",
    left: "11.2%",
    backgroundColor: "transparent",
    position: "absolute",
  },
  number: {
    top: 610,
    left: 61,
    width: 271,
    position: "absolute",
  },
  rectangleIcon: {
    width: "40.97%",
    top: "79.23%",
    right: "31.55%",
    bottom: "14.79%",
    left: "27.48%",
    borderRadius: Border.br_31xl,
    height: "5.99%",
  },
  next1: {
    width: 215,
  },
  next: {
    left: 86,
    top: 680,
    position: "absolute",
  },
  saly15Icon: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    height: "100%",
    width: "100%",
  },
  saly15: {
    top: 105,
    left: 49,
    width: 309,
    height: 570,
    position: "absolute",
  },
  calcAir2: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default CalcAir2;
