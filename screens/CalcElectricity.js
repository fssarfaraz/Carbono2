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
import { FontSize, FontFamily, Padding, Color, Border } from "../GlobalStyles";

const CalcElectricity = () => {
  const [frameTextInput, setFrameTextInput] = useState("Consumption in kWh");
  const navigation = useNavigation();

  return (
    <View style={styles.calcElectricity}>
      <Image
        style={[styles.calcElectricityChild, styles.calcLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.calcElectricityItem, styles.calcLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Property1HomeImage
        imageDimensions={require("../assets/navigation-barr22.png")}
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
      <Text style={styles.enterYourElectricity}>{`ENTER YOUR ELECTRICITY USAGE
BELOW`}</Text>
      <Pressable
        style={[styles.materialSymbolsarrowBackIo, styles.iconLayout2]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
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
          style={[styles.textinput, styles.next1Typo]}
          value={frameTextInput}
          onChangeText={setFrameTextInput}
          placeholder="Consumption in kWh"
          placeholderTextColor="#fff"
        />
      </LinearGradient>
      <Image
        style={styles.bulb1Icon}
        contentFit="cover"
        source={require("../assets/bulb-1.png")}
      />
      <Pressable style={styles.saly19}>
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/1-1.png")}
        />
      </Pressable>
      <TouchableHighlight
        style={styles.container}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("CalcElectricity2")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-7.png")}
        />
      </TouchableHighlight>
      <Pressable
        style={styles.next}
        onPress={() => navigation.navigate("CalcElectricity2")}
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
  iconLayout1: {
    width: 33,
    marginLeft: 72,
  },
  iconLayout2: {
    height: 30,
    width: 30,
  },
  next1Typo: {
    fontSize: FontSize.size_5xl,
    justifyContent: "center",
    alignItems: "center",
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
  calcElectricityChild: {
    top: 0,
  },
  calcElectricityItem: {
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
  enterYourElectricity: {
    top: 124,
    left: 28,
    fontSize: FontSize.size_3xl,
    color: Color.colorDarkslateblue_100,
    textAlign: "center",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  materialSymbolsarrowBackIo: {
    left: 23,
    top: 50,
    position: "absolute",
  },
  textinput: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_8xs,
    backgroundColor: "transparent",
    borderRadius: Border.br_31xl,
    flexDirection: "row",
    overflow: "hidden",
  },
  wrapper: {
    left: 70,
    top: 587,
    position: "absolute",
  },
  bulb1Icon: {
    top: 278,
    left: 108,
    width: 194,
    height: 214,
    display: "none",
    position: "absolute",
  },
  icon1: {
    top: "0%",
    right: "-0.66%",
    bottom: "0%",
    left: "0.66%",
    position: "absolute",
  },
  saly19: {
    top: 158,
    left: -3,
    width: 453,
    height: 392,
    position: "absolute",
  },
  icon2: {
    borderRadius: Border.br_31xl,
  },
  container: {
    left: "30.28%",
    top: "76.64%",
    right: "28.75%",
    bottom: "17.37%",
    width: "40.97%",
    height: "5.99%",
    position: "absolute",
  },
  next1: {
    lineHeight: 36,
    color: Color.labelDarkPrimary,
    display: "flex",
    width: 215,
    height: 41,
    textAlign: "center",
  },
  next: {
    left: 90,
    top: 659,
    position: "absolute",
  },
  calcElectricity: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default CalcElectricity;
