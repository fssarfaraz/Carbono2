import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const TravelCard = () => {
  return (
    <Pressable style={styles.simpleLine}>
      <View style={styles.simpleLineChild} />
      <Image
        style={[styles.simpleLineItem, styles.simpleLayout]}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
      <Text style={[styles.monday, styles.mondayTypo]}>Monday</Text>
      <Text style={[styles.text, styles.textTypo1]}>0</Text>
      <Text style={[styles.text1, styles.textTypo1]}>2.5</Text>
      <Text style={[styles.text2, styles.textTypo1]}>7.5</Text>
      <Text style={[styles.text3, styles.textTypo]}>10</Text>
      <Text style={[styles.text4, styles.textTypo]}>12.5</Text>
      <Text style={[styles.text5, styles.textTypo1]}>5</Text>
      <Text style={[styles.tuesday, styles.mondayTypo]}>Tuesday</Text>
      <Text style={[styles.wednesday, styles.mondayTypo]}>Wednesday</Text>
      <Text style={[styles.thursday, styles.fridayTypo]}>Thursday</Text>
      <Text style={[styles.friday, styles.fridayTypo]}>Friday</Text>
      <Image
        style={[styles.simpleLineInner, styles.simpleLayout]}
        contentFit="cover"
        source={require("../assets/vector-8.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.simpleChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={[styles.simpleLineChild1, styles.simpleChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.simpleLineChild2, styles.simpleChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-31.png")}
      />
      <Image
        style={[styles.simpleLineChild3, styles.simpleChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.simpleLineChild4, styles.simpleChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-52.png")}
      />
      <View style={styles.groupParent}>
        <View style={[styles.foodParent, styles.parentPosition]}>
          <Text style={styles.food}>Food</Text>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/ellipse-212.png")}
          />
        </View>
        <View style={[styles.energyParent, styles.parentPosition]}>
          <Text style={[styles.energy, styles.energyTypo]}>Energy</Text>
          <Image
            style={[styles.groupItem, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-213.png")}
          />
          <Text style={[styles.travel, styles.energyTypo]}>Travel</Text>
          <Image
            style={[styles.groupInner, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-221.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.groupIcon, styles.simpleLayout]}
        contentFit="cover"
        source={require("../assets/group-1602.png")}
      />
      <Image
        style={styles.simpleLineChild5}
        contentFit="cover"
        source={require("../assets/group-1604.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  simpleLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  mondayTypo: {
    textAlign: "left",
    color: Color.gray,
    fontFamily: FontFamily.body15Regular,
    fontSize: FontSize.size_4xs,
    top: "78.73%",
    height: "2.57%",
    position: "absolute",
  },
  textTypo1: {
    textAlign: "right",
    color: Color.gray,
    fontFamily: FontFamily.body15Regular,
    fontSize: FontSize.size_4xs,
    position: "absolute",
  },
  textTypo: {
    left: "7.04%",
    textAlign: "right",
    color: Color.gray,
    fontFamily: FontFamily.body15Regular,
    fontSize: FontSize.size_4xs,
    height: "2.57%",
    position: "absolute",
  },
  fridayTypo: {
    height: "2.07%",
    textAlign: "left",
    color: Color.gray,
    fontFamily: FontFamily.body15Regular,
    fontSize: FontSize.size_4xs,
    top: "78.73%",
    position: "absolute",
  },
  simpleChildLayout: {
    width: "1.97%",
    height: "1.81%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  parentPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  energyTypo: {
    width: "37.2%",
    color: Color.black,
    fontSize: FontSize.secondaryText_size,
    top: "0%",
    height: "100%",
    textAlign: "left",
    fontFamily: FontFamily.body15Regular,
    position: "absolute",
  },
  groupLayout: {
    width: "5.49%",
    bottom: "23.97%",
    top: "23.14%",
    height: "52.89%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  simpleLineChild: {
    height: "67.93%",
    width: "100%",
    top: "25.91%",
    bottom: "6.16%",
    borderRadius: Border.br_3xs,
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
    right: "0%",
    position: "absolute",
  },
  simpleLineItem: {
    height: "41.88%",
    width: "72.7%",
    top: "36.2%",
    right: "13.41%",
    bottom: "21.92%",
    left: "13.89%",
  },
  monday: {
    left: "14.08%",
    width: "12.11%",
    textAlign: "left",
    color: Color.gray,
    fontFamily: FontFamily.body15Regular,
    fontSize: FontSize.size_4xs,
    top: "78.73%",
  },
  text: {
    height: "2.5%",
    width: "1.49%",
    top: "76.01%",
    left: "10.48%",
  },
  text1: {
    width: "6.76%",
    top: "67.43%",
    left: "5.35%",
    height: "2.57%",
    textAlign: "right",
  },
  text2: {
    height: "2.32%",
    width: "5.63%",
    top: "50.76%",
    left: "6.2%",
  },
  text3: {
    width: "4.79%",
    top: "42.32%",
  },
  text4: {
    width: "5.07%",
    top: "33.84%",
  },
  text5: {
    width: "3.38%",
    top: "58.99%",
    left: "8.45%",
    height: "2.57%",
    textAlign: "right",
  },
  tuesday: {
    left: "32.39%",
    width: "12.11%",
    textAlign: "left",
    color: Color.gray,
    fontFamily: FontFamily.body15Regular,
    fontSize: FontSize.size_4xs,
    top: "78.73%",
  },
  wednesday: {
    width: "15.49%",
    left: "50.14%",
  },
  thursday: {
    width: "14.65%",
    left: "68.17%",
  },
  friday: {
    width: "10.14%",
    left: "86.48%",
  },
  simpleLineInner: {
    height: "24.64%",
    width: "72.85%",
    top: "37.39%",
    right: "13.32%",
    bottom: "37.97%",
    left: "13.83%",
  },
  ellipseIcon: {
    top: "37.1%",
    right: "84.87%",
    bottom: "61.09%",
    left: "13.15%",
  },
  simpleLineChild1: {
    top: "47.28%",
    right: "66.76%",
    bottom: "50.91%",
    left: "31.27%",
  },
  simpleLineChild2: {
    top: "53.84%",
    right: "48.65%",
    bottom: "44.35%",
    left: "49.38%",
  },
  simpleLineChild3: {
    top: "50.69%",
    right: "30.54%",
    bottom: "47.5%",
    left: "67.49%",
  },
  simpleLineChild4: {
    top: "60.65%",
    right: "12.42%",
    bottom: "37.54%",
    left: "85.61%",
  },
  food: {
    width: "78.21%",
    left: "21.79%",
    color: Color.black,
    fontSize: FontSize.secondaryText_size,
    top: "0%",
    height: "100%",
    textAlign: "left",
    fontFamily: FontFamily.body15Regular,
    position: "absolute",
  },
  groupChild: {
    width: "11.54%",
    right: "88.46%",
    bottom: "23.97%",
    top: "23.14%",
    height: "52.89%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
  },
  foodParent: {
    width: "31.2%",
    right: "68.8%",
    left: "0%",
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
    width: "65.6%",
    left: "34.4%",
    right: "0%",
  },
  groupParent: {
    height: "4.38%",
    width: "70.42%",
    top: "87.43%",
    right: "20.85%",
    bottom: "8.19%",
    left: "8.73%",
    position: "absolute",
  },
  groupIcon: {
    height: "21.96%",
    width: "74.2%",
    top: "54.86%",
    right: "12.56%",
    bottom: "23.19%",
    left: "13.24%",
  },
  simpleLineChild5: {
    top: 207,
    left: 47,
    width: 263,
    height: 73,
    position: "absolute",
  },
  simpleLine: {
    top: 130,
    left: 20,
    width: 355,
    height: 276,
    position: "absolute",
  },
});

export default TravelCard;
