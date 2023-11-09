import React, { useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Pressable,
  TouchableHighlight,
  StatusBar,
  Text,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Property1HomeImage from "../components/Property1HomeImage";
import { useNavigation } from "@react-navigation/native";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const CalcCar2 = () => {
  const [rectangleTextInput, setRectangleTextInput] =
    useState("Distance in KM");
  const navigation = useNavigation();

  return (
    <View style={styles.calcCar2}>
      <Image
        style={[styles.calcCar2Child, styles.calcLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.calcCar2Item, styles.calcLayout]}
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
          source={require("../assets/-icon-calculator6.png")}
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
      <Text style={styles.enterTravelDistance}>ENTER TRAVEL DISTANCE</Text>
      <Pressable
        style={[styles.materialSymbolsarrowBackIo, styles.iconLayout3]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/materialsymbolsarrowbackios.png")}
        />
      </Pressable>
      <LinearGradient
        style={[styles.wrapper, styles.wrapperLayout]}
        locations={[0, 1]}
        colors={["rgba(225, 135, 245, 0.78)", "rgba(90, 9, 193, 0.89)"]}
      >
        <TextInput
          style={[styles.textinput, styles.iconLayout1]}
          value={rectangleTextInput}
          onChangeText={setRectangleTextInput}
          placeholder="Distance in KM"
          secureTextEntry={true}
        />
      </LinearGradient>
      <Text style={[styles.distanceInKm, styles.next1Typo]}>
        Distance in km
      </Text>
      <Pressable style={styles.saly3}>
        <Image
          style={[styles.saly3Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/saly3.png")}
        />
      </Pressable>
      <TouchableHighlight
        style={[styles.container, styles.wrapperLayout]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("CalcCar3")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-7.png")}
        />
      </TouchableHighlight>
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
  wrapperLayout: {
    height: "5.99%",
    position: "absolute",
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
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  calcCar2Child: {
    top: 0,
  },
  calcCar2Item: {
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
  enterTravelDistance: {
    top: 131,
    left: 29,
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
  textinput: {
    backgroundColor: "transparent",
    borderRadius: Border.br_31xl,
  },
  wrapper: {
    left: "11.2%",
    top: "70.89%",
    right: "15.27%",
    bottom: "23.12%",
    width: "73.54%",
  },
  distanceInKm: {
    top: 604,
    left: 97,
    width: 187,
    position: "absolute",
  },
  saly3Icon: {
    top: "-5.36%",
    right: "-0.94%",
    bottom: "5.36%",
    left: "0.94%",
    position: "absolute",
  },
  saly3: {
    top: 153,
    left: -4,
    width: 426,
    height: 429,
    position: "absolute",
  },
  icon1: {
    borderRadius: Border.br_31xl,
  },
  container: {
    left: "27.48%",
    top: "79.23%",
    right: "31.55%",
    bottom: "14.79%",
    width: "40.97%",
  },
  next1: {
    width: 215,
  },
  next: {
    left: 86,
    top: 680,
    position: "absolute",
  },
  calcCar2: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default CalcCar2;
