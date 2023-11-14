import * as React from "react";
import { Image, View, Pressable, Text, TouchableHighlight, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import TravelCard from "../components/TravelCard";
import FormContainer from "../components/FormContainer";
import { Color, FontSize, Padding, Border, FontFamily } from "../GlobalStyles";

const CalcTrack = () => {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.calcTrack}>
      {/* Background Images */}
      <Image style={[styles.calcTrackChild, styles.calcLayout]} contentFit="cover" source={require("../assets/ellipse-3.png")} />
      <Image style={[styles.calcTrackItem, styles.calcLayout]} contentFit="contain" source={require("../assets/ellipse-3.png")} />

      {/* Back Button */}
      <View style={styles.backButtonContainer}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <FontAwesome5 name="chevron-left" size={30} color="#01427A" />
        </Pressable>
      </View>

      {/* Header Buttons */}
      <View style={styles.headerButton}>
        <TouchableHighlight
          style={[styles.trackingSwitch, styles.trackingLayout]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Calculator")}
        >
          <>
            <LinearGradient
              style={[styles.trackingSwitchChild, styles.trackingLayout]}
              locations={[0, 1]}
              colors={["#fff", "rgba(255, 255, 255, 0.46)"]}
            />
            <Text style={styles.calculate}>Calculate</Text>
          </>
        </TouchableHighlight>

        <Pressable style={[styles.alternativesSwitch, styles.trackingLayout]}>
          <LinearGradient
            style={[styles.trackingSwitchChild, styles.trackingLayout]}
            locations={[0, 1]}
            colors={["#428df8", "rgba(66, 141, 248, 0.42)"]}
          />
          <Text style={[styles.track, styles.trackTypo]}>Track</Text>
        </Pressable>
      </View>

      {/* Travel Card */}
      <View style={styles.graphContainer}>
        <Image style={[styles.graphImage]} contentFit="contain" source={require("../assets/simple-line.png")} />
      </View>

      {/* View Reports Button */}
      <LinearGradient style={styles.button} locations={[0, 1]} colors={["#428df8", "#5a09c1"]}>
        <Pressable style={styles.pressable} onPress={() => navigation.navigate("CalcTrack2")}>
          <Text style={[styles.viewReports, styles.trackTypo]}>View Reports</Text>
        </Pressable>
      </LinearGradient>

      {/* Select Category Text */}
      <Text style={styles.selectCategoryFor}>SELECT CATEGORY FOR HISTORY</Text>

      {/* Form Containers */}
      <FormContainer
        itemType="Food"
        itemImageCode={require("../assets/iconparksolidgreennewenergy.png")}
        onGreenMaintainancePress={() => navigation.navigate("FoodTrackReport")}
      />
      <FormContainer
        itemType="Energy"
        itemImageCode={require("../assets/mingcutepackage2fill.png")}
        propLeft={149}
        propBackgroundColor="#01427a"
        propLeft1={25}
        onGreenMaintainancePress={() => navigation.navigate("EnergyTrackReport")}
      />
      <FormContainer
        itemType="Travel"
        itemImageCode={require("../assets/mingcutewalkfill.png")}
        propLeft={272}
        propBackgroundColor="#5a09c1"
        propLeft1={27}
        onGreenMaintainancePress={() => navigation.navigate("TravelTrackReport")}
      />

      {/* Bottom Navigation Bar */}
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
  calcLayout: {
    width: 600,
  },
  iconLayout: {
    width: 33,
    marginLeft: 72,
  },
  iconLayout1: {
    height: 30,
    width: 30,
  },
  calcTrackChild: {
    height: 255,
    top: 0,
    right: 140,
  },
  calcTrackItem: {
    // top: 545,
    top: 400,
    height: 430
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
  headerButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 54,
    width: "100%",
    zIndex: 2,
  },
  trackingLayout: {
    height: 51,
    width: 165,
    position: "absolute",
  },
  trackingSwitch: {
    left: 20,
    top: 71,
    width: 165,
  },
  trackingSwitchChild: {
    borderRadius: Border.br_sm,
    backgroundColor: "transparent",
    width: 165,
    left: 0,
    top: 0,
  },
  graphContainer: {
    top: 120,
    width: "100%",
    height: 300,
    position: "absolute",
    zIndex: 1,
    paddingRight: 20,
    paddingLeft: 20,
    alignItems: "center",
  },
  graphImage: {
    width: "100%",
    height: "100%",
  },
  calculate: {
    left: 43,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorGray_400,
    textAlign: "center",
    fontSize: FontSize.bodyBody1_size,
    top: 13,
    position: "absolute",
  },
  track: {
    left: 60,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    top: 13,
    color: Color.labelDarkPrimary,
    position: "absolute",
  },
  alternativesSwitch: {
    left: 205,
    top: 71,
    width: 165,
  },
  button: {
    left: 39,
    top: 435,
    width: 315,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  pressable: {
    borderRadius: Border.br_11xl,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 14,
    backgroundColor: "transparent",
    flexDirection: "row",
    width: "100%",
  },
  trackTypo: {
    color: Color.labelDarkPrimary,
    textAlign: "center",
    // fontSize: FontSize.bodyBody1,
    fontSize: 18,
  },
  viewReports: {
    letterSpacing: 1,
    lineHeight: 24,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    flex: 1,
  },
  selectCategoryFor: {
    top: 515,
    left: 37,
    fontSize: FontSize.primaryText_size,
    fontFamily: FontFamily.robotoBold,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
    paddingRight: 10,
    paddingLeft: 10,
  },
  calcTrack: {
    backgroundColor: Color.labelDarkPrimary,
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
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
    top: 70,
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

export default CalcTrack;

