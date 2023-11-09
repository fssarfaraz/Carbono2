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

const CalcBus = () => {
  const [rectangleTextInput, setRectangleTextInput] =
    useState("Type of Transport");
  const navigation = useNavigation();

  return (
    <View style={styles.calcBus}>
      <Image
        style={[styles.calcBusChild, styles.calcLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.calcBusItem, styles.calcLayout]}
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
          source={require("../assets/-icon-calculator8.png")}
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
      <Text style={styles.enterTypeOf}>{`ENTER TYPE OF PUBLIC 
TRANSPORT`}</Text>
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
        colors={["rgba(225, 135, 245, 0.78)", "rgba(90, 9, 193, 0.89)"]}
      >
        <TextInput
          style={[styles.textinput, styles.iconLayout]}
          value={rectangleTextInput}
          onChangeText={setRectangleTextInput}
          placeholder="Type of Transport"
          secureTextEntry={true}
        />
      </LinearGradient>
      <Text style={[styles.typeOfTransport, styles.next1Typo]}>
        Type of Transport
      </Text>
      <Image
        style={[styles.calcBusInner, styles.saly5IconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Pressable
        style={styles.next}
        onPress={() => navigation.navigate("CalcCar2")}
      >
        <Text style={[styles.next1, styles.next1Typo]}>Next</Text>
      </Pressable>
      <Pressable style={styles.saly5}>
        <Image
          style={[styles.saly5Icon, styles.saly5IconLayout]}
          contentFit="cover"
          source={require("../assets/saly5.png")}
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
  iconLayout: {
    height: "100%",
    width: "100%",
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
  saly5IconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  calcBusChild: {
    top: 0,
  },
  calcBusItem: {
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
  enterTypeOf: {
    top: 116,
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
    height: "5.99%",
    position: "absolute",
  },
  typeOfTransport: {
    top: 610,
    left: 61,
    width: 271,
    position: "absolute",
  },
  calcBusInner: {
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
  saly5Icon: {
    top: "0%",
    right: "-2.7%",
    bottom: "0%",
    left: "2.7%",
    height: "100%",
    width: "100%",
  },
  saly5: {
    top: 96,
    left: 9,
    width: 382,
    height: 482,
    position: "absolute",
  },
  calcBus: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default CalcBus;
