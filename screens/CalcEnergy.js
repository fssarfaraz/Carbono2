import React, { useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Pressable,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Property1HomeImage from "../components/Property1HomeImage";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, FontSize, Color, Border } from "../GlobalStyles";

const CalcEnergy = () => {
  const [frameTextInput, setFrameTextInput] = useState("Electricity");
  const navigation = useNavigation();

  return (
    <View style={styles.calcEnergy}>
      <Image
        style={[styles.calcEnergyChild, styles.calcLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.calcEnergyItem, styles.calcLayout]}
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
          source={require("../assets/-icon-calculator1.png")}
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
      <Text
        style={[styles.selectTypeOf, styles.textinputTypo]}
      >{`SELECT TYPE OF ENERGY
CONSUMPTION`}</Text>
      <Pressable
        style={[styles.materialSymbolsarrowBackIo, styles.selectTypeOfPosition]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.iconLayout}
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
          style={[styles.textinput, styles.textinputTypo]}
          value={frameTextInput}
          onChangeText={setFrameTextInput}
          placeholder="Electricity"
          secureTextEntry={true}
          placeholderTextColor="#fff"
        />
      </LinearGradient>
      <Image
        style={styles.lightningBolt1}
        contentFit="cover"
        source={require("../assets/lightning-bolt-11.png")}
      />
      <Pressable style={styles.saly25}>
        <Image
          style={[styles.saly25Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/saly25.png")}
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
  textinputTypo: {
    alignItems: "center",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  selectTypeOfPosition: {
    left: 23,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  calcEnergyChild: {
    top: 0,
  },
  calcEnergyItem: {
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
  selectTypeOf: {
    top: 124,
    fontSize: FontSize.size_3xl,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
    display: "flex",
    width: 302,
    left: 23,
    position: "absolute",
  },
  materialSymbolsarrowBackIo: {
    top: 50,
    height: 30,
    width: 30,
  },
  textinput: {
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    paddingHorizontal: 51,
    paddingVertical: Padding.p_8xs,
    fontSize: FontSize.size_5xl,
    backgroundColor: "transparent",
    flexDirection: "row",
    overflow: "hidden",
  },
  wrapper: {
    left: 99,
    top: 548,
    position: "absolute",
  },
  lightningBolt1: {
    top: 284,
    left: 109,
    width: 194,
    height: 194,
    display: "none",
    position: "absolute",
  },
  saly25Icon: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  saly25: {
    top: 271,
    left: 24,
    width: 343,
    height: 188,
    position: "absolute",
  },
  calcEnergy: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default CalcEnergy;
