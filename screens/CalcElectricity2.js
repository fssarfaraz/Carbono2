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

const CalcElectricity2 = () => {
  const [frameTextInput, setFrameTextInput] = useState("Location");
  const navigation = useNavigation();

  return (
    <View style={styles.calcElectricity2}>
      <Image
        style={[styles.calcElectricity2Child, styles.calcLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.calcElectricity2Item, styles.calcLayout]}
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
      <Text style={styles.entryTheCountry}>{`ENTRY THE COUNTRY OR 
CONTINENT PROVIDING THE
ENERGY`}</Text>
      <Pressable
        style={styles.materialSymbolsarrowBackIo}
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
          style={[styles.textinput, styles.next1Typo]}
          value={frameTextInput}
          onChangeText={setFrameTextInput}
          placeholder="Location"
          secureTextEntry={true}
          placeholderTextColor="#fff"
        />
      </LinearGradient>
      <Image
        style={styles.location1Icon}
        contentFit="cover"
        source={require("../assets/location-1.png")}
      />
      <Pressable style={styles.saly44}>
        <Image
          style={[styles.saly44Icon, styles.saly44IconLayout]}
          contentFit="cover"
          source={require("../assets/saly44.png")}
        />
      </Pressable>
      <Image
        style={[styles.calcElectricity2Inner, styles.saly44IconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
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
    fontSize: FontSize.size_5xl,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  saly44IconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  calcElectricity2Child: {
    top: 0,
  },
  calcElectricity2Item: {
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
  entryTheCountry: {
    top: 109,
    fontSize: FontSize.size_3xl,
    color: Color.colorDarkslateblue_100,
    width: 340,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    display: "flex",
    textAlign: "center",
    left: 23,
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
  },
  materialSymbolsarrowBackIo: {
    top: 50,
    left: 23,
    height: 30,
    width: 30,
    position: "absolute",
  },
  textinput: {
    paddingHorizontal: 27,
    paddingVertical: Padding.p_8xs,
    backgroundColor: "transparent",
    borderRadius: Border.br_31xl,
    flexDirection: "row",
    overflow: "hidden",
  },
  wrapper: {
    left: 126,
    top: 587,
    position: "absolute",
  },
  location1Icon: {
    top: 286,
    left: 108,
    width: 194,
    height: 214,
    display: "none",
    position: "absolute",
  },
  saly44Icon: {
    top: "0%",
    right: "-2.68%",
    bottom: "0%",
    left: "2.68%",
    height: "100%",
    width: "100%",
  },
  saly44: {
    top: 161,
    left: -11,
    width: 410,
    height: 426,
    position: "absolute",
  },
  calcElectricity2Inner: {
    height: "5.99%",
    width: "40.97%",
    top: "77.82%",
    right: "27.74%",
    bottom: "16.2%",
    left: "31.3%",
    borderRadius: Border.br_31xl,
  },
  next1: {
    lineHeight: 36,
    color: Color.labelDarkPrimary,
    width: 215,
    height: 41,
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_5xl,
  },
  next: {
    left: 94,
    top: 669,
    position: "absolute",
  },
  calcElectricity2: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default CalcElectricity2;
