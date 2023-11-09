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
import { Button } from "@rneui/themed";
import Property1HomeImage from "../components/Property1HomeImage";
import { useNavigation } from "@react-navigation/native";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const CalcCar = () => {
  const [rectangleTextInput, setRectangleTextInput] = useState("Vehicle Make");
  const [rectangleTextInput1, setRectangleTextInput1] =
    useState("Vehicle Type");
  const [vehicleModelTextInput, setVehicleModelTextInput] =
    useState("Vehicle Model");
  const navigation = useNavigation();

  return (
    <View style={styles.calcCar}>
      <Image
        style={[styles.calcCarChild, styles.calcLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.calcCarItem, styles.calcLayout]}
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
          source={require("../assets/-icon-calculator4.png")}
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
      <Text style={styles.enterVehicleDetails}>ENTER VEHICLE DETAILS</Text>
      <Pressable
        style={[styles.group, styles.iconLayout3]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.iconLayout1}
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
          placeholder="Vehicle Make"
          secureTextEntry={true}
        />
      </LinearGradient>
      <LinearGradient
        style={[styles.container, styles.wrapperLayout]}
        locations={[0, 1]}
        colors={["#0682ef", "#094ed3"]}
      >
        <TextInput
          style={[styles.textinput, styles.iconLayout1]}
          value={rectangleTextInput1}
          onChangeText={setRectangleTextInput1}
          placeholder="Vehicle Type"
          secureTextEntry={true}
        />
      </LinearGradient>
      <Image
        style={[styles.calcCarInner, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-46.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <TextInput
        style={styles.vehicleModel}
        value={vehicleModelTextInput}
        onChangeText={setVehicleModelTextInput}
        placeholder="Vehicle Model"
        secureTextEntry={true}
        placeholderTextColor="#fff"
      />
      <TouchableHighlight
        style={styles.next}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("CalcCar2")}
      >
        <Text style={[styles.next1, styles.next1Typo]}>Next</Text>
      </TouchableHighlight>
      <Text style={[styles.vehicleType, styles.next1Typo]}>Vehicle Type</Text>
      <Button
        title="Vehicle Make"
        radius={5}
        iconPosition="left"
        type="solid"
        color="#fff"
        titleStyle={styles.vehicleMakeBtn}
        containerStyle={styles.vehicleMakeBtn1}
        buttonStyle={styles.vehicleMakeBtn2}
      />
      <Pressable style={styles.saly6}>
        <Image
          style={[styles.saly6Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/saly6.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  vehicleMakeBtn: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
  },
  vehicleMakeBtn1: {
    left: 106,
    top: 505,
    position: "absolute",
  },
  vehicleMakeBtn2: {},
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
  wrapperLayout: {
    width: "73.54%",
    height: "5.99%",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  calcCarChild: {
    top: 0,
  },
  calcCarItem: {
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
  enterVehicleDetails: {
    top: 131,
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
    top: "58.45%",
    right: "13.74%",
    bottom: "35.56%",
    height: "5.99%",
    position: "absolute",
  },
  container: {
    left: "13.23%",
    top: "49.06%",
    right: "13.23%",
    bottom: "44.95%",
    height: "5.99%",
    position: "absolute",
  },
  calcCarInner: {
    top: "67.84%",
    right: "13.49%",
    bottom: "26.17%",
    left: "12.98%",
    borderRadius: Border.br_31xl,
    height: "5.99%",
    width: "73.54%",
  },
  rectangleIcon: {
    width: "40.97%",
    top: "77.7%",
    right: "30.28%",
    bottom: "16.31%",
    left: "28.75%",
    borderRadius: Border.br_31xl,
    height: "5.99%",
  },
  vehicleModel: {
    top: 583,
    left: 91,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  next1: {
    width: 215,
  },
  next: {
    left: 84,
    top: 668,
    position: "absolute",
  },
  vehicleType: {
    top: 422,
    left: 103,
    width: 187,
    position: "absolute",
  },
  saly6Icon: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    height: "100%",
    width: "100%",
  },
  saly6: {
    top: 109,
    left: 57,
    width: 307,
    height: 312,
    position: "absolute",
  },
  calcCar: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default CalcCar;
