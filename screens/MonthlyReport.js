import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, StatusBar, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Property1HomeImage from "../components/Property1HomeImage";
import { useNavigation } from "@react-navigation/native";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";

const MonthlyReport = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.monthlyReport, styles.iconLayout2]}>
      <Image
        style={[styles.monthlyReportChild, styles.monthlyPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.monthlyReportItem, styles.monthlyPosition]}
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
      >{`Here is a report of your monthly carbon
footprint emissions`}</Text>
      <Pressable style={styles.groupParent}>
        <View style={styles.lineParent}>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/line-29.png")}
          />
          <View style={[styles.rectangleParent, styles.vectorIconPosition]}>
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
          <View style={styles.nos}>
            <Text style={styles.textTypo}>1500</Text>
            <Text style={[styles.text1, styles.textTypo]}>1200</Text>
            <Text style={[styles.text1, styles.textTypo]}>900</Text>
            <Text style={[styles.text1, styles.textTypo]}>600</Text>
            <Text style={[styles.text1, styles.textTypo]}>300</Text>
          </View>
          <Image
            style={[styles.vectorIcon, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector-1.png")}
          />
        </View>
        <Text style={[styles.janMar, styles.janMarTypo]}>Jan-Mar</Text>
        <Text style={[styles.octDec, styles.janMarTypo]}>Oct-Dec</Text>
        <View style={[styles.rectangleWrapper, styles.groupChild1Layout]}>
          <LinearGradient
            style={[styles.groupChild1, styles.groupChild1Layout]}
            locations={[0, 0.33, 0.67, 1]}
            colors={["#5a09c1", "#8643dc", "#aa71f2", "#bca3dc"]}
          />
        </View>
        <Text style={[styles.aprJun, styles.janMarTypo]}>Apr-Jun</Text>
        <Text style={[styles.julSept, styles.janMarTypo]}>Jul-Sept</Text>
      </Pressable>
      <Text style={styles.commiserationsThereWasContainer}>
        <Text style={styles.commiserationsThereWasContainer1}>
          <Text
            style={[styles.commiserations, styles.hereIsATypo]}
          >{`Commiserations! 

`}</Text>
          <Text style={styles.thereWasA}>
            There was a significant increase in your carbon emissions compared
            to last month.
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
  monthlyPosition: {
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
  vectorIconPosition: {
    left: 51,
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: "transparent",
    opacity: 0.7,
    borderTopRightRadius: Border.br_18xl,
    borderTopLeftRadius: Border.br_18xl,
  },
  textTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.paragraphH1Reg,
    lineHeight: 27,
    fontSize: FontSize.paragraphH1Reg_size,
  },
  janMarTypo: {
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
    height: 180,
    width: 29,
    position: "absolute",
  },
  monthlyReportChild: {
    height: 330,
    top: 0,
  },
  monthlyReportItem: {
    top: 496,
    height: 356,
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
    left: 34,
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
    top: 17,
    height: 231,
    width: 26,
    opacity: 0.7,
    borderTopRightRadius: Border.br_18xl,
    borderTopLeftRadius: Border.br_18xl,
    position: "absolute",
    left: 0,
  },
  groupInner: {
    top: 176,
    left: 120,
    height: 72,
    width: 26,
    opacity: 0.7,
    borderTopRightRadius: Border.br_18xl,
    borderTopLeftRadius: Border.br_18xl,
    position: "absolute",
  },
  rectangleLineargradient: {
    left: 200,
    height: 247,
    width: 26,
    opacity: 0.7,
    borderTopRightRadius: Border.br_18xl,
    borderTopLeftRadius: Border.br_18xl,
    position: "absolute",
    top: 0,
  },
  rectangleParent: {
    top: 45,
    width: 226,
    height: 249,
  },
  text1: {
    marginTop: 40,
  },
  nos: {
    width: 20,
    height: 276,
    left: 0,
    top: 0,
    position: "absolute",
  },
  vectorIcon: {
    top: 48,
    borderRadius: Border.br_8xs,
    width: 255,
    height: 175,
  },
  lineParent: {
    top: 71,
    left: 4,
    width: 322,
    height: 296,
    position: "absolute",
  },
  janMar: {
    top: 332,
    left: 56,
    fontSize: FontSize.size_sm,
    transform: [
      {
        rotate: "-91.02deg",
      },
    ],
  },
  octDec: {
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
    top: 187,
    left: 105,
  },
  aprJun: {
    top: 316,
    left: 104,
    fontSize: FontSize.size_sm,
    transform: [
      {
        rotate: "-91.02deg",
      },
    ],
  },
  julSept: {
    top: 359,
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
  commiserations: {
    fontSize: FontSize.size_5xl,
    color: "#d21111",
  },
  thereWasA: {
    fontFamily: FontFamily.nunitoRegular,
    color: Color.black,
    fontSize: FontSize.paragraphH1Reg_size,
  },
  commiserationsThereWasContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  commiserationsThereWasContainer: {
    top: 598,
    left: 48,
    display: "flex",
    alignItems: "center",
    width: 310,
    height: 125,
    lineHeight: 24,
    textAlign: "left",
    position: "absolute",
  },
  monthlyReport: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
  },
});

export default MonthlyReport;
