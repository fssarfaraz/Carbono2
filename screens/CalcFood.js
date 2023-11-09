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
import Property1HomeImage from "../components/Property1HomeImage";
import { useNavigation } from "@react-navigation/native";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import Saly38 from "../components/Saly38";
import { FontFamily, Padding, FontSize, Color, Border } from "../GlobalStyles";

const CalcFood = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.calcFood, styles.iconLayout2]}>
      <Image
        style={[styles.calcFoodChild, styles.calcLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.calcFoodItem, styles.calcLayout]}
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
      <Text style={[styles.typeTheFood, styles.next1Typo]}>
        TYPE THE FOOD NAME BELOW
      </Text>
      <Pressable
        style={[styles.materialSymbolsarrowBackIo, styles.iconLayout1]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/materialsymbolsarrowbackios.png")}
        />
      </Pressable>
      <Image
        style={styles.foodIcon1}
        contentFit="cover"
        source={require("../assets/food-icon-1.png")}
      />
      <Saly38 />
      <Image
        style={styles.calcFoodInner}
        contentFit="cover"
        source={require("../assets/rectangle-6.png")}
      />
      <Pressable
        style={styles.next}
        onPress={() => navigation.navigate("CalcCar3")}
      >
        <Text style={[styles.next1, styles.next1Typo]}>Next</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout2: {
    width: "100%",
    overflow: "hidden",
  },
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
  next1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  calcFoodChild: {
    top: 0,
  },
  calcFoodItem: {
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
  typeTheFood: {
    top: 129,
    left: 24,
    fontSize: FontSize.size_3xl,
    color: Color.colorDarkslateblue_100,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  materialSymbolsarrowBackIo: {
    left: 23,
    top: 50,
    position: "absolute",
  },
  foodIcon1: {
    top: 283,
    left: 105,
    width: 194,
    height: 194,
    display: "none",
    position: "absolute",
  },
  calcFoodInner: {
    height: "4.58%",
    width: "44.53%",
    top: "77.35%",
    right: "28.75%",
    bottom: "18.08%",
    left: "26.72%",
    borderRadius: Border.br_31xl,
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  next1: {
    height: "4.81%",
    width: "54.71%",
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    color: Color.labelDarkPrimary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  next: {
    left: "22.14%",
    top: "77.11%",
    position: "absolute",
  },
  calcFood: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
  },
});

export default CalcFood;
