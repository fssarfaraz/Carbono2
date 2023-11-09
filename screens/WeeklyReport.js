import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, StatusBar, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Property1HomeImage from "../components/Property1HomeImage";
import { useNavigation } from "@react-navigation/native";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";

const WeeklyReport = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.weeklyReport, styles.iconLayout2]}>
      <Image
        style={[styles.weeklyReportChild, styles.weeklyPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.weeklyReportItem, styles.weeklyPosition]}
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
          source={require("../assets/-icon-calculator6.png")}
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
      <Text
        style={[styles.hereIsA, styles.hereIsATypo]}
      >{`Here is a report of your weekly carbon
footprint emissions`}</Text>
      <Pressable style={styles.groupParent}>
        <View style={styles.lineParent}>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/line-29.png")}
          />
          <View style={styles.rectangleParent}>
            <LinearGradient
              style={[styles.groupItem, styles.groupPosition]}
              locations={[0, 0.23, 0.45, 1]}
              colors={["#7113ea", "#905fcf", "#894bd7", "#5a09c1"]}
            />
            <LinearGradient
              style={[styles.groupInner, styles.groupPosition]}
              locations={[0, 0.23, 0.45, 1]}
              colors={["#7113ea", "#905fcf", "#894bd7", "#5a09c1"]}
            />
            <LinearGradient
              style={[styles.rectangleLineargradient, styles.groupPosition]}
              locations={[0, 0.23, 0.45, 1]}
              colors={["#7113ea", "#905fcf", "#894bd7", "#5a09c1"]}
            />
          </View>
          <View style={[styles.nos, styles.nosPosition]}>
            <Text style={styles.textTypo}>1500</Text>
            <Text style={[styles.text1, styles.textTypo]}>1200</Text>
            <Text style={[styles.text1, styles.textTypo]}>900</Text>
            <Text style={[styles.text1, styles.textTypo]}>600</Text>
            <Text style={[styles.text1, styles.textTypo]}>300</Text>
          </View>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector-11.png")}
          />
        </View>
        <Text style={[styles.week1, styles.weekTypo]}>Week 1</Text>
        <Text style={[styles.week4, styles.weekTypo]}>Week 4</Text>
        <View style={[styles.rectangleWrapper, styles.groupChild1Layout]}>
          <LinearGradient
            style={[styles.groupChild1, styles.groupChild1Layout]}
            locations={[0, 0.33, 0.67, 1]}
            colors={["#5a09c1", "#8643dc", "#aa71f2", "#bca3dc"]}
          />
        </View>
        <Text style={[styles.week2, styles.weekTypo]}>Week 2</Text>
        <Text style={[styles.week3, styles.weekTypo]}>Week 3</Text>
      </Pressable>
      <Text style={styles.congratulationsThereWasContainer}>
        <Text style={styles.congratulationsThereWasContainer1}>
          <Text
            style={[styles.congratulations, styles.hereIsATypo]}
          >{`Congratulations! 

`}</Text>
          <Text style={styles.thereWasA}>
            There was a significant decline in your carbon emissions compared to
            last month.
          </Text>
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout2: {
    overflow: "hidden",
    width: "100%",
  },
  weeklyPosition: {
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
  hereIsATypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  groupPosition: {
    backgroundColor: "transparent",
    opacity: 0.7,
    borderTopRightRadius: Border.br_18xl,
    borderTopLeftRadius: Border.br_18xl,
  },
  nosPosition: {
    left: 0,
    top: 0,
  },
  textTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.paragraphH1Reg,
    lineHeight: 27,
    fontSize: FontSize.paragraphH1Reg_size,
  },
  weekTypo: {
    transform: [
      {
        rotate: "-91.02deg",
      },
    ],
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 24,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  groupChild1Layout: {
    height: 251,
    width: 29,
    position: "absolute",
  },
  weeklyReportChild: {
    height: 330,
    top: 0,
    width: 400,
  },
  weeklyReportItem: {
    top: 487,
    height: 365,
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
  icon: {
    height: "100%",
  },
  materialSymbolsarrowBackIo: {
    left: 18,
    top: 75,
    position: "absolute",
  },
  hereIsA: {
    top: 143,
    left: 39,
    color: Color.colorDarkslateblue_100,
    textAlign: "center",
    fontSize: FontSize.paragraphH1Reg_size,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupChild: {
    top: 292,
    left: 20,
    width: 302,
    height: 4,
    position: "absolute",
  },
  groupItem: {
    width: 26,
    opacity: 0.7,
    borderTopRightRadius: Border.br_18xl,
    borderTopLeftRadius: Border.br_18xl,
    position: "absolute",
    height: 274,
    left: 0,
    top: 0,
  },
  groupInner: {
    top: 74,
    left: 120,
    height: 199,
    width: 26,
    opacity: 0.7,
    borderTopRightRadius: Border.br_18xl,
    borderTopLeftRadius: Border.br_18xl,
    position: "absolute",
  },
  rectangleLineargradient: {
    top: 96,
    left: 200,
    height: 176,
    width: 26,
    opacity: 0.7,
    borderTopRightRadius: Border.br_18xl,
    borderTopLeftRadius: Border.br_18xl,
    position: "absolute",
  },
  rectangleParent: {
    top: 20,
    left: 51,
    width: 226,
    height: 274,
    position: "absolute",
  },
  text1: {
    marginTop: 40,
  },
  nos: {
    width: 20,
    height: 276,
    position: "absolute",
  },
  vectorIcon: {
    top: 19,
    left: 64,
    borderRadius: Border.br_8xs,
    width: 224,
    height: 116,
    position: "absolute",
  },
  lineParent: {
    top: 71,
    left: 4,
    width: 322,
    height: 296,
    position: "absolute",
  },
  week1: {
    marginLeft: -151.1,
    top: 263,
    fontSize: FontSize.size_sm,
    transform: [
      {
        rotate: "-91.02deg",
      },
    ],
    left: "50%",
  },
  week4: {
    top: 312,
    left: 257,
    fontSize: FontSize.size_sm,
    transform: [
      {
        rotate: "-91.02deg",
      },
    ],
  },
  groupChild1: {
    backgroundColor: "transparent",
    opacity: 0.7,
    borderTopRightRadius: Border.br_18xl,
    borderTopLeftRadius: Border.br_18xl,
    width: 29,
    left: 0,
    top: 0,
  },
  rectangleWrapper: {
    top: 116,
    left: 105,
  },
  week2: {
    marginLeft: -100,
    top: 283,
    fontSize: FontSize.size_sm,
    transform: [
      {
        rotate: "-91.02deg",
      },
    ],
    left: "50%",
  },
  week3: {
    top: 301,
    left: 177,
    fontSize: FontSize.size_smi,
    width: 67,
  },
  groupParent: {
    top: 181,
    left: 37,
    width: 418,
    height: 417,
    position: "absolute",
  },
  congratulations: {
    fontSize: FontSize.size_5xl,
    color: "#21d211",
  },
  thereWasA: {
    fontFamily: FontFamily.nunitoRegular,
    color: Color.black,
    fontSize: FontSize.paragraphH1Reg_size,
  },
  congratulationsThereWasContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  congratulationsThereWasContainer: {
    top: 598,
    left: 41,
    display: "flex",
    alignItems: "center",
    width: 310,
    lineHeight: 24,
    textAlign: "left",
    position: "absolute",
  },
  weeklyReport: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
  },
});

export default WeeklyReport;
