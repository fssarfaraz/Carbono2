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

const CalcAir = () => {
  const [rectangleTextInput, setRectangleTextInput] = useState("Arrival");
  const [rectangleTextInput1, setRectangleTextInput1] = useState("Departure");
  const navigation = useNavigation();

  return (
    <View style={styles.calcAir}>
      <Image
        style={[styles.calcAirChild, styles.calcLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.calcAirItem, styles.calcLayout]}
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
      <Text style={styles.enterTravelRoute}>{`ENTER TRAVEL ROUTE AS THREE 
DIGIT AIRPORT CODES`}</Text>
      <Pressable
        style={[styles.group, styles.iconLayout2]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.iconLayout}
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
          style={[styles.textinput, styles.iconLayout]}
          value={rectangleTextInput}
          onChangeText={setRectangleTextInput}
          placeholder="Arrival"
          secureTextEntry={true}
        />
      </LinearGradient>
      <LinearGradient
        style={[styles.container, styles.wrapperLayout]}
        locations={[0, 1]}
        colors={["#0682ef", "#094ed3"]}
      >
        <TextInput
          style={[styles.textinput, styles.iconLayout]}
          value={rectangleTextInput1}
          onChangeText={setRectangleTextInput1}
          placeholder="Departure"
          secureTextEntry={true}
        />
      </LinearGradient>
      <Image
        style={[styles.calcAirInner, styles.saly1IconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Text style={styles.next}>Next</Text>
      <Text style={[styles.departure, styles.arrivalTypo]}>Departure</Text>
      <Text style={[styles.arrival, styles.arrivalTypo]}>Arrival</Text>
      <Pressable style={styles.saly1}>
        <Image
          style={[styles.saly1Icon, styles.saly1IconLayout]}
          contentFit="cover"
          source={require("../assets/saly1.png")}
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
  wrapperLayout: {
    width: "73.54%",
    height: "5.99%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  saly1IconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  arrivalTypo: {
    width: 187,
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
    position: "absolute",
  },
  calcAirChild: {
    top: 0,
  },
  calcAirItem: {
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
  enterTravelRoute: {
    top: 116,
    left: 29,
    fontSize: FontSize.size_3xl,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  group: {
    left: 23,
    top: 50,
    position: "absolute",
  },
  textinput: {
    backgroundColor: "transparent",
    borderRadius: Border.br_31xl,
  },
  wrapper: {
    left: "12.72%",
    top: "67.49%",
    right: "13.74%",
    bottom: "26.53%",
    height: "5.99%",
  },
  container: {
    left: "12.47%",
    top: "57.51%",
    right: "13.99%",
    bottom: "36.5%",
    height: "5.99%",
  },
  calcAirInner: {
    width: "40.97%",
    top: "77.7%",
    right: "30.28%",
    bottom: "16.31%",
    left: "28.75%",
    borderRadius: Border.br_31xl,
    height: "5.99%",
  },
  next: {
    top: 668,
    left: 84,
    width: 215,
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
    position: "absolute",
  },
  departure: {
    top: 494,
    left: 100,
  },
  arrival: {
    top: 582,
    left: 106,
  },
  saly1Icon: {
    top: "0%",
    right: "-4.66%",
    bottom: "0%",
    left: "4.66%",
    height: "100%",
    width: "100%",
  },
  saly1: {
    top: 93,
    left: -19,
    width: 408,
    height: 423,
    position: "absolute",
  },
  calcAir: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default CalcAir;
