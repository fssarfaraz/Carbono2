import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, StatusBar, Text } from "react-native";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import Property1HomeImage from "../components/Property1HomeImage";
import { useNavigation } from "@react-navigation/native";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import DateRangeContainer from "../components/DateRangeContainer";
import { FontAwesome5 } from "@expo/vector-icons";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const CalcTrack2 = () => {
  const [selectDatePicker, setSelectDatePicker] = useState(undefined);
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

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
      
      {/* Back Button */}
      <View style={styles.backButtonContainer}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <FontAwesome5 name="chevron-left" size={30} color="#01427A" />
        </Pressable>
      </View>
      
      <Text style={[styles.selectDateRange, styles.selectPosition]}>
        SELECT DATE RANGE
      </Text>
      
      <View style={styles.rectangleView}>
        <Text style={styles.primaryText1}>Your Footprint for *Date Range*</Text>
        <Image style={styles.vectorIcon} resizeMode="cover" source={require("../assets/vector16.png")} />
        <Image style={styles.donutIcon} resizeMode="cover" source={require("../assets/group-2118.png")} />

        <View style={styles.foodParent}>
          <View style={styles.groupContainer}>
            <Image style={[styles.groupChild, styles.groupLayout]} resizeMode="cover" source={require("../assets/ellipse-21.png")} />
            <Text style={[styles.food, styles.foodTypo]}>Food</Text>
          </View>
          
          <View style={styles.groupContainer}>
            <Image style={[styles.groupItem, styles.groupLayout]} resizeMode="cover" source={require("../assets/ellipse-21.png")} />
            <Text style={[styles.energy, styles.foodTypo]}>Energy</Text>
          </View>

          <View style={styles.groupContainer}>
            <Image style={[styles.groupInner, styles.groupLayout]} resizeMode="cover" source={require("../assets/ellipse-22.png")} />
            <Text style={[styles.travel, styles.foodTypo]}>Travel</Text>
          </View>
        </View>

      </View>

      {/* <DateRangeContainer /> */}
      <RNKDatepicker
        style={[styles.select, styles.selectPosition]}
        placeholder={() => (
          <View style={[styles.stateactive, styles.line1Border]}>
            <Text style={styles.option}>Date Range</Text>
            <View style={[styles.line1, styles.line1Border]} />
            <Image style={styles.iconChevrondown} resizeMode="cover" source={require("../assets/icon--chevron-down.png")} />
          </View>
        )}
        date={selectDatePicker}
        onSelect={setSelectDatePicker}
        controlStyle={styles.selectDatePickerValue}
      />

      <View style={styles.bottomNavBar}>
        <Pressable onPress={() => handleNavigation("UserProfile")}>
          <Image style={styles.bottomNavIcon} source={require("../assets/-icon-person-outline.png")} />
        </Pressable>
        <Pressable onPress={() => handleNavigation("Educational")}>
          <Image style={styles.bottomNavIcon} source={require("../assets/-icon-book-saved3.png")} />
        </Pressable>
        <Pressable onPress={() => handleNavigation("Forum")}>
          <Image style={styles.bottomNavIcon} source={require("../assets/-icon-discussion.png")} />
        </Pressable>
        <Pressable onPress={() => handleNavigation("Games")}>
          <Image style={styles.bottomNavIcon} source={require("../assets/-icon-game-controller-outline6.png")} />
        </Pressable>
      </View>

      {/* Surface Icon */}
      <Image style={styles.surfaceIcon} resizeMode="cover" source={require("../assets/navigation-barr2.png")} />

      {/* Calculator Icon */}
      <Pressable onPress={() => handleNavigation("Calculator")} style={styles.iconCalculatorParent}>
        <Image style={styles.iconCalculator} resizeMode="cover" source={require("../assets/-icon-calculator.png")} />
      </Pressable>
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
  selectDateRange: {
    top: 131,
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorDarkslateblue_100,
    textAlign: "center",
    alignSelf: "center",
  },
  selectPosition: {
    position: "absolute",
  },
  line1Border: {
    // borderColor: "#131414",
    borderStyle: "solid"
  },
  option: {
    fontSize: 14,
    letterSpacing: -0.2,
    lineHeight: 18,
    fontFamily: "FiraSans-Regular",
    // color: "#131414",
    textAlign: "left"
  },
  line1: {
    borderRightWidth: 1,
    width: 1,
    height: 13,
    marginLeft: 8
  },
  iconChevrondown: {
    width: 16,
    height: 16,
    overflow: "hidden",
    marginLeft: 8
  },
  stateactive: {
    borderRadius: 5,
    borderWidth: 1,
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 12,
    paddingTop: 6,
    paddingRight: 8,
    paddingBottom: 6
  },
  backButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 54,
    left: 16,
  },
  backButton: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    padding: 10,
  },
  rectangleView: {
    alignSelf: "center",
    left: 5,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    flex: 1,
    width: "90%",
    height: 436,
    top: 260,
  },
  primaryText1: {
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Inter-Medium",
    color: "#000",
    textAlign: "center",
    marginTop: 30,
    paddingLeft: 16,
    paddingRight: 16,
  },
  vectorIcon: {
    height: 2,
    top: 30,
  },
  donutIcon: {
    width: 250,
    height: 250,
    top: 50,
    alignSelf: "center",
  },
  foodParent: {
    top: 60,
    flexDirection: 'row',
    justifyContent: 'space-around', // or 'space-between' for equal space
    alignItems: 'center',
  },
  groupContainer: {
    alignItems: 'center',
    marginHorizontal: 10, // Adjust the spacing between elements
  },
  groupLayout: {
    width: 13, // Adjust the width as needed
    height: 13, // Adjust the height as needed
  },
  food: {
    // Your food text styles
  },
  energy: {
    // Your energy text styles
  },
  travel: {
    // Your travel text styles
  },
  foodTypo: {
    fontSize: 15,
    fontFamily: "Inter-Regular",
    color: "#000",
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
  select: {
    top: 15,
  },
  calcTrack2: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
  },
  surfaceIcon: {
    flex: 1,
    width: "100%",
    height: 135,
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
  bottomNavBar: {
    flex: 1,
    flexDirection: "row",
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 10,
    position: "relative",
    zIndex: 2,
  },
  bottomNavIcon: {
    width: 30,
    height: 30,
    top: 155,
  },
  iconCalculator: {
    top: 728,
    width: 40,
    height: 45,
    alignSelf: "center",
    position: "absolute",
    zIndex: 2,
  },
  iconCalculatorParent: {
    flex: 1,
    position: "absolute",
    width: "100%",
    padding: 10,
    zIndex: 2,
  },
});

export default CalcTrack2;
