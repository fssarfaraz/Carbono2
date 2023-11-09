import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, StatusBar, Text } from "react-native";
import { Button } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import Property1HomeImage from "../components/Property1HomeImage";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const CalcTravel = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.calcTravel}>
      <Image
        style={[styles.calcTravelChild, styles.calcLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.calcTravelItem, styles.calcLayout]}
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
      <View style={styles.iconPersonOutlineParent}>
        <Image
          style={styles.iconLayout3}
          contentFit="cover"
          source={require("../assets/-icon-person-outline.png")}
        />
        <Image
          style={[styles.iconBookSaved, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/-icon-book-saved3.png")}
        />
        <Image
          style={[styles.iconDiscussion, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/-icon-discussion.png")}
        />
        <Image
          style={[styles.iconGameControllerOutline, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/-icon-game-controller-outline6.png")}
        />
      </View>
      <Pressable style={styles.iconCalculatorWrapper}>
        <Image
          style={styles.iconCalculator}
          contentFit="cover"
          source={require("../assets/-icon-calculator4.png")}
        />
      </Pressable>
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
      <Text style={styles.selectTypeOf}>SELECT TYPE OF TRANSPORT</Text>
      <Button
        radius={5}
        iconPosition="left"
        type="solid"
        color="#fff"
        icon={{ name: "chevron-left", type: "material-community" }}
        onPress={() => navigation.navigate("Calculator")}
        containerStyle={styles.materialSymbolsarrowBackIoIconBtn}
        buttonStyle={styles.materialSymbolsarrowBackIoIconBtn1}
      />
      <LinearGradient
        style={[styles.wrapper, styles.frameLayout]}
        locations={[0, 1]}
        colors={["rgba(225, 135, 245, 0.78)", "rgba(90, 9, 193, 0.89)"]}
      >
        <Pressable
          style={[styles.pressable, styles.iconLayout1]}
          onPress={() => navigation.navigate("CalcAir")}
        />
      </LinearGradient>
      <LinearGradient
        style={[styles.container, styles.frameLayout]}
        locations={[0, 1]}
        colors={["#0682ef", "#094ed3"]}
      >
        <Pressable
          style={[styles.pressable, styles.iconLayout1]}
          onPress={() => navigation.navigate("CalcBus")}
        />
      </LinearGradient>
      <Pressable
        style={[styles.frame, styles.frameLayout]}
        onPress={() => navigation.navigate("CalcCar")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-46.png")}
        />
      </Pressable>
      <Image
        style={[styles.emojiNorthEastFacingAirpl, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-emoji-northeast-facing-airplane.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/group5.png")}
      />
      <Image
        style={[styles.iconBus, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/-icon-bus.png")}
      />
      <Text style={[styles.airTravel, styles.airTravelTypo]}>Air Travel</Text>
      <Pressable
        style={styles.carmotorVehicles}
        onPress={() => navigation.navigate("CalcCar")}
      >
        <Text style={[styles.carmotorVehicles1, styles.airTravelTypo]}>
          Car/Motor Vehicles
        </Text>
      </Pressable>
      <Text style={[styles.publicTransport, styles.airTravelTypo]}>
        Public Transport
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  materialSymbolsarrowBackIoIconBtn: {
    left: 23,
    top: 50,
    position: "absolute",
  },
  materialSymbolsarrowBackIoIconBtn1: {
    width: 30,
    height: 30,
    overflow: "hidden",
  },
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
  frameLayout: {
    height: "5.99%",
    width: "73.54%",
    position: "absolute",
  },
  iconLayout1: {
    borderRadius: Border.br_31xl,
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconPosition: {
    left: "36.39%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  airTravelTypo: {
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
  calcTravelChild: {
    top: 0,
  },
  calcTravelItem: {
    top: 545,
  },
  iconBookSaved: {
    height: 31,
    marginLeft: 72,
  },
  iconDiscussion: {
    marginLeft: 72,
  },
  iconGameControllerOutline: {
    height: 24,
    marginLeft: 72,
  },
  iconPersonOutlineParent: {
    top: 807,
    left: 24,
    width: 385,
    flexDirection: "row",
    alignItems: "flex-end",
    position: "absolute",
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
    top: 131,
    left: 29,
    fontSize: FontSize.size_3xl,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  pressable: {
    backgroundColor: "transparent",
  },
  wrapper: {
    top: "35.8%",
    bottom: "58.22%",
    right: "12.72%",
    left: "13.74%",
    width: "73.54%",
  },
  container: {
    left: "12.98%",
    top: "58.69%",
    right: "13.49%",
    bottom: "35.33%",
  },
  icon: {
    borderRadius: Border.br_31xl,
    height: "100%",
    width: "100%",
  },
  frame: {
    top: "79.58%",
    bottom: "14.44%",
    right: "12.72%",
    left: "13.74%",
    width: "73.54%",
  },
  emojiNorthEastFacingAirpl: {
    height: "10.56%",
    width: "22.9%",
    top: "25.23%",
    right: "39.95%",
    bottom: "64.2%",
    left: "37.15%",
    position: "absolute",
  },
  groupIcon: {
    height: "8.7%",
    width: "27.99%",
    top: "70.88%",
    right: "35.62%",
    bottom: "20.42%",
  },
  iconBus: {
    height: "11.33%",
    width: "25.78%",
    top: "47.54%",
    right: "37.84%",
    bottom: "41.14%",
  },
  airTravel: {
    top: 310,
    left: 105,
    width: 187,
    height: 41,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.labelDarkPrimary,
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  carmotorVehicles1: {
    width: 215,
    height: 41,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.labelDarkPrimary,
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
  },
  carmotorVehicles: {
    left: 91,
    top: 683,
    position: "absolute",
  },
  publicTransport: {
    top: 505,
    left: 104,
    width: 187,
    height: 41,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.labelDarkPrimary,
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  calcTravel: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default CalcTravel;
