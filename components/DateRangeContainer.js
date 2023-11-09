import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const DateRangeContainer = () => {
  return (
    <Pressable style={styles.donutChart}>
      <View style={styles.donutChartChild} />
      <Text style={styles.primaryText}>Your Footprint for *Date Range*</Text>
      <Text style={[styles.secondaryText, styles.foodTypo]}>
        Secondary text
      </Text>
      <Image
        style={styles.donutChartItem}
        contentFit="cover"
        source={require("../assets/group-2017.png")}
      />
      <View style={[styles.foodParent, styles.parentPosition]}>
        <Text style={[styles.food, styles.foodTypo]}>Food</Text>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/ellipse-21.png")}
        />
      </View>
      <View style={[styles.energyParent, styles.parentPosition]}>
        <Text style={[styles.energy, styles.energyTypo]}>Energy</Text>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-211.png")}
        />
        <Text style={[styles.travel, styles.energyTypo]}>Travel</Text>
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-22.png")}
        />
      </View>
      <Image
        style={[styles.donutChartInner, styles.donutPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-2319.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2321.png")}
      />
      <Image
        style={[styles.donutChartChild1, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2320.png")}
      />
      <Text style={styles.text}>50%</Text>
      <Text style={[styles.text1, styles.textTypo]}>25%</Text>
      <Text style={[styles.text2, styles.textTypo]}>25%</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  foodTypo: {
    fontFamily: FontFamily.body15Regular,
    fontSize: FontSize.secondaryText_size,
    textAlign: "left",
    position: "absolute",
  },
  parentPosition: {
    bottom: "7.8%",
    top: "88.3%",
    height: "3.9%",
    position: "absolute",
  },
  energyTypo: {
    width: "37.2%",
    fontFamily: FontFamily.body15Regular,
    fontSize: FontSize.secondaryText_size,
    textAlign: "left",
    color: Color.black,
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  groupLayout: {
    width: "5.49%",
    bottom: "23.53%",
    top: "23.53%",
    height: "52.94%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  donutPosition: {
    left: "17.75%",
    bottom: "17.2%",
    width: "64.23%",
  },
  ellipseIconLayout: {
    height: "26.15%",
    right: "18.03%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  textTypo: {
    top: "40.37%",
    color: Color.labelDarkPrimary,
    fontFamily: FontFamily.body15Regular,
    fontSize: FontSize.secondaryText_size,
    textAlign: "left",
    position: "absolute",
  },
  donutChartChild: {
    right: "0%",
    bottom: "0%",
    backgroundColor: Color.labelDarkPrimary,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    left: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  primaryText: {
    top: "6.42%",
    fontSize: FontSize.primaryText_size,
    fontWeight: "500",
    fontFamily: FontFamily.primaryText,
    textAlign: "left",
    color: Color.black,
    left: "8.73%",
    position: "absolute",
  },
  secondaryText: {
    top: "14.22%",
    color: Color.gray,
    display: "none",
    left: "8.73%",
  },
  donutChartItem: {
    height: "0.46%",
    top: "17.43%",
    right: "3.66%",
    bottom: "82.11%",
    left: "-3.66%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
    position: "absolute",
  },
  food: {
    width: "78.21%",
    left: "21.79%",
    color: Color.black,
    fontSize: FontSize.secondaryText_size,
    top: "0%",
    height: "100%",
  },
  groupChild: {
    width: "11.54%",
    right: "88.46%",
    bottom: "23.53%",
    top: "23.53%",
    height: "52.94%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
  },
  foodParent: {
    width: "21.97%",
    right: "69.3%",
    left: "8.73%",
  },
  energy: {
    left: "10.37%",
  },
  groupItem: {
    right: "94.51%",
    left: "0%",
  },
  travel: {
    left: "62.8%",
  },
  groupInner: {
    right: "42.07%",
    left: "52.44%",
  },
  energyParent: {
    width: "46.2%",
    right: "20.85%",
    left: "32.96%",
  },
  donutChartInner: {
    height: "52.29%",
    right: "18.03%",
    left: "17.75%",
    bottom: "17.2%",
    top: "30.5%",
    width: "64.23%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  ellipseIcon: {
    width: "32.11%",
    bottom: "43.35%",
    left: "49.86%",
    top: "30.5%",
    height: "26.15%",
  },
  donutChartChild1: {
    top: "56.65%",
    left: "17.75%",
    bottom: "17.2%",
    width: "64.23%",
    height: "26.15%",
  },
  text: {
    top: "75.46%",
    left: "46.48%",
    color: Color.labelDarkPrimary,
    fontFamily: FontFamily.body15Regular,
    fontSize: FontSize.secondaryText_size,
    textAlign: "left",
    position: "absolute",
  },
  text1: {
    left: "28.73%",
  },
  text2: {
    left: "64.79%",
  },
  donutChart: {
    top: 240,
    left: 19,
    width: 355,
    height: 436,
    position: "absolute",
  },
});

export default DateRangeContainer;
