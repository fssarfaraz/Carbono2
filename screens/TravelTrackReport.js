import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, StatusBar, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Property1HomeImage from "../components/Property1HomeImage";
import { useNavigation } from "@react-navigation/native";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const TravelTrackReport = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.travelTrackReport}>
      <Image
        style={styles.travelTrackReportChild}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={styles.travelTrackReportItem}
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
      <Pressable
        style={styles.iconCalculatorWrapper}
        onPress={() => navigation.navigate("Calculator")}
      >
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
      <Image
        style={styles.travelTrackReportInner}
        contentFit="cover"
        source={require("../assets/ellipse-53.png")}
      />
      <Text
        style={[styles.helloJohn, styles.helloJohnTypo]}
      >{`Hello, John `}</Text>
      <Text style={[styles.consumption, styles.helloJohnTypo]}>
        Consumption
      </Text>
      <Text style={styles.checkYourTravel}>Check your travel report</Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-2322.png")}
      />
      <Image
        style={[styles.travelTrackReportChild1, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-2323.png")}
      />
      <Image
        style={styles.travelTrackReportChild2}
        contentFit="cover"
        source={require("../assets/ellipse-2324.png")}
      />
      <Text style={[styles.kg, styles.kgTypo]}>120 kg</Text>
      <Text style={[styles.soFarThis, styles.kgTypo]}>So far this month</Text>
      <Text style={styles.co}>CO₂</Text>
      <View style={styles.downFromLastMonth}>
        <Text style={[styles.text, styles.textTypo]}>{`5% `}</Text>
        <Text style={[styles.fromLastMonth, styles.textTypo]}>
          from last month
        </Text>
        <Image
          style={styles.upArrowIcon}
          contentFit="cover"
          source={require("../assets/up-arrow.png")}
        />
      </View>
      <LinearGradient
        style={[styles.wrapper, styles.wrapperLayout]}
        locations={[0, 1]}
        colors={["rgba(225, 135, 245, 0.78)", "rgba(90, 9, 193, 0.89)"]}
      >
        <Pressable
          style={[styles.pressable, styles.iconLayout]}
          onPress={() => navigation.navigate("WeeklyReport")}
        />
      </LinearGradient>
      <LinearGradient
        style={[styles.container, styles.wrapperLayout]}
        locations={[0, 1]}
        colors={["rgba(225, 135, 245, 0.78)", "rgba(90, 9, 193, 0.89)"]}
      >
        <Pressable
          style={[styles.pressable, styles.iconLayout]}
          onPress={() => navigation.navigate("MonthlyReport")}
        />
      </LinearGradient>
      <Text style={[styles.weekly, styles.weeklyTypo]}>Weekly</Text>
      <Text style={[styles.monthly, styles.weeklyTypo]}>Monthly</Text>
      <Pressable
        style={[styles.materialSymbolsarrowBackIo, styles.iconLayout1]}
        onPress={() => navigation.navigate("CalcTrack")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/materialsymbolsarrowbackios.png")}
        />
      </Pressable>
      <Image
        style={styles.carIcon1}
        contentFit="cover"
        source={require("../assets/car-icon-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: 30,
    width: 30,
  },
  helloJohnTypo: {
    width: 209,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.size_13xl,
    color: Color.colorDarkslateblue_100,
    position: "absolute",
  },
  ellipseIconPosition: {
    left: 53,
    position: "absolute",
  },
  kgTypo: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    color: Color.colorBlueviolet_100,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  wrapperLayout: {
    height: "5.99%",
    width: "73.54%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  weeklyTypo: {
    height: 41,
    width: 187,
    justifyContent: "center",
    textAlign: "center",
    color: Color.labelDarkPrimary,
    lineHeight: 36,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  travelTrackReportChild: {
    top: 506,
    height: 346,
    width: 400,
    left: 0,
    position: "absolute",
  },
  travelTrackReportItem: {
    height: 330,
    top: 0,
    width: 400,
    left: 0,
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
  travelTrackReportInner: {
    left: 27,
    width: 68,
    height: 80,
    top: 111,
    position: "absolute",
  },
  helloJohn: {
    left: 109,
    width: 209,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.size_13xl,
    top: 111,
  },
  consumption: {
    top: 519,
    left: 100,
  },
  checkYourTravel: {
    top: 159,
    color: Color.colorGray_100,
    width: 286,
    height: 32,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    fontSize: FontSize.primaryText_size,
    left: 106,
    textAlign: "left",
    position: "absolute",
  },
  ellipseIcon: {
    top: 276,
    width: 296,
    height: 265,
  },
  travelTrackReportChild1: {
    top: 269,
    width: 245,
    height: 141,
  },
  travelTrackReportChild2: {
    top: 290,
    left: 268,
    width: 51,
    height: 50,
    position: "absolute",
  },
  kg: {
    top: 395,
    left: 164,
    color: Color.colorGray_300,
  },
  soFarThis: {
    top: 217,
    color: Color.colorDarkslateblue_100,
    fontSize: FontSize.size_5xl,
    left: 109,
  },
  co: {
    top: 299,
    left: 276,
    fontWeight: "800",
    fontFamily: FontFamily.robotoBlack,
    color: Color.colorWhitesmoke_200,
    width: 35,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.primaryText_size,
    textAlign: "left",
    height: 31,
    position: "absolute",
  },
  text: {
    left: 0,
    color: Color.colorBlueviolet_100,
  },
  fromLastMonth: {
    left: 61,
  },
  upArrowIcon: {
    top: 3,
    left: 32,
    width: 32,
    height: 23,
    position: "absolute",
  },
  downFromLastMonth: {
    top: 448,
    left: 79,
    width: 237,
    height: 33,
    position: "absolute",
  },
  pressable: {
    borderRadius: Border.br_31xl,
    backgroundColor: "transparent",
  },
  wrapper: {
    left: "13.23%",
    top: "68.31%",
    right: "13.23%",
    bottom: "25.7%",
  },
  container: {
    left: "12.98%",
    top: "76.64%",
    right: "13.49%",
    bottom: "17.37%",
  },
  weekly: {
    top: 587,
    left: 100,
  },
  monthly: {
    top: 660,
    left: 106,
    height: 41,
    width: 187,
    justifyContent: "center",
    textAlign: "center",
    color: Color.labelDarkPrimary,
    lineHeight: 36,
  },
  icon: {
    overflow: "hidden",
  },
  materialSymbolsarrowBackIo: {
    left: 14,
    top: 73,
    position: "absolute",
  },
  carIcon1: {
    top: 315,
    left: 163,
    width: 78,
    height: 78,
    position: "absolute",
  },
  travelTrackReport: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default TravelTrackReport;
