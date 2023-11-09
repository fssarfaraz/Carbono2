import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, StatusBar, Text } from "react-native";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import Property1HomeImage from "../components/Property1HomeImage";
import { useNavigation } from "@react-navigation/native";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import DateRangeContainer from "../components/DateRangeContainer";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const CalcTrack2 = () => {
  const [selectDatePicker, setSelectDatePicker] = useState(undefined);
  const navigation = useNavigation();

  return (
    <View style={[styles.calcTrack2, styles.iconLayout2]}>
      <Image
        style={[styles.calcTrack2Child, styles.calcLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.calcTrack2Item, styles.calcLayout]}
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
      <Text style={[styles.selectDateRange, styles.selectPosition]}>
        SELECT DATE RANGE
      </Text>
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
      <DateRangeContainer />
      <RNKDatepicker
        style={[styles.select, styles.selectPosition]}
        placeholder={() => (
          <Text style={styles.selectDatePickerPlaceHolder}>Date Range</Text>
        )}
        date={selectDatePicker}
        onSelect={setSelectDatePicker}
        controlStyle={styles.selectDatePickerValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  selectDatePickerPlaceHolder: {
    fontFamily: "FiraSans-Regular",
    color: "#131414",
    fontSize: 14,
  },
  selectDatePickerValue: {
    position: "absolute",
    left: 29,
    top: 173,
  },
  iconLayout2: {
    overflow: "hidden",
    width: "100%",
  },
  calcLayout: {
    height: 330,
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
  selectPosition: {
    left: 29,
    position: "absolute",
  },
  calcTrack2Child: {
    top: 0,
  },
  calcTrack2Item: {
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
  selectDateRange: {
    top: 131,
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
  },
  icon: {
    height: "100%",
  },
  materialSymbolsarrowBackIo: {
    left: 23,
    top: 50,
    position: "absolute",
  },
  select: {
    top: 173,
  },
  calcTrack2: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
  },
});

export default CalcTrack2;
