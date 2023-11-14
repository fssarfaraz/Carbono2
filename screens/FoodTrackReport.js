import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const FoodTrackReport = () => {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        style={styles.backgroundImage}
        source={require("../assets/ellipse-3.png")}
      />

      {/* Content Container */}
      <View style={styles.contentContainer}>
        {/* Header */}
        <View style={styles.backButtonContainer}>
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <FontAwesome5 name="chevron-left" size={30} color="#01427A" />
          </Pressable>
        </View>

        <View style={styles.profileContainer}>
          {/* Ellipse Icon */}
          <View style={styles.ellipseIconContainer}>
            <Image
              style={styles.ellipseIcon} 
              resizeMode="cover" 
              source={require("../assets/ellipse-5.png")} />
          </View>

          {/* Hello John */}          
          <View style={styles.headerContainer}>
            <Text style={styles.helloJohn1} numberOfLines={1}>
              {"Hello, John"}
            </Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.checkYourTravel1} numberOfLines={1}>
              Check your food report
            </Text>
          </View>
        </View>

        <View style={styles.description2Container}>
          <Text style={styles.soFarThis1} numberOfLines={1}>
            So far this month
          </Text>
        </View>

        <View style={styles.ellipseParent}>
      	  <Image style={[styles.groupChild, styles.groupPosition]} 
            resizeMode="cover" 
            source={require("../assets/ellipse-2322.png")} />
      		<Image style={[styles.groupItem, styles.groupPosition]} 
            resizeMode="cover" 
            source={require("../assets/ellipse-2325.png")} />
      		<Image style={styles.groupInner} 
            resizeMode="cover" 
            source={require("../assets/ellipse-2324.png")} />
      		<Text style={styles.co}>CO₂</Text>

          <Image style={styles.foodIcon11} 
            resizeMode="cover" 
            source={require("../assets/food-icon-1.png")} />


          <Text style={styles.kg}>67 kg</Text>

          <View style={styles.downFromLastMonth1}>
      			<Text style={[styles.text1, styles.text1Typo]}>{"17% "}</Text>
      			<Text style={[styles.fromLastMonth1, styles.text1Typo]}>{"  from last month"}</Text>
      			
            <Image style={styles.downArrowIcon1} 
              resizeMode="cover" 
              source={require("../assets/up-arrow.png")} />
    		  </View>

          <Text style={styles.consumption1}>Consumption</Text>
    		</View>



        {/* Report Button */}
        <Pressable
          style={styles.ReportButton}
          onPress={() => handleNavigation("WeeklyReport")}
        >
          <LinearGradient
            style={styles.gradientButton}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#E187F5C7", "#5A09C1E3"]}
          >
            <Text style={styles.ReportButtonText}>Weekly Report</Text>
          </LinearGradient>
        </Pressable>

        <Pressable
          style={styles.ReportButton}
          onPress={() => handleNavigation("MonthlyReport")}
        >
          <LinearGradient
            style={styles.gradientButton}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["#E187F5C7", "#5A09C1E3"]}
          >
            <Text style={styles.ReportButtonText}>Monthly Report</Text>
          </LinearGradient>
        </Pressable>
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavBar}>
        <Pressable onPress={() => handleNavigation("UserProfile")}>
          <Image
            style={styles.bottomNavIcon}
            source={require("../assets/-icon-person-outline.png")}
          />
        </Pressable>
        <Pressable onPress={() => handleNavigation("Educational")}>
          <Image
            style={styles.bottomNavIcon}
            source={require("../assets/-icon-book-saved3.png")}
          />
        </Pressable>
        <Pressable onPress={() => handleNavigation("Forum")}>
          <Image
            style={styles.bottomNavIcon}
            source={require("../assets/-icon-discussion.png")}
          />
        </Pressable>
        <Pressable onPress={() => handleNavigation("Games")}>
          <Image
            style={styles.bottomNavIcon}
            source={require("../assets/-icon-game-controller-outline6.png")}
          />
        </Pressable>
      </View>

      {/* Surface Icon */}
      <Image
        style={styles.surfaceIcon}
        resizeMode="cover"
        source={require("../assets/navigation-barr2.png")}
      />

      {/* Calculator Icon */}
      <Pressable
        onPress={() => handleNavigation("Calculator")}
        style={styles.iconCalculatorParent}
      >
        <Image
          style={styles.iconCalculator}
          resizeMode="cover"
          source={require("../assets/-icon-calculator.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  backgroundImage: {
    // position: "absolute",
    // height: "100%",
    // width: "100%",
    top: -130,
    position: "absolute",
    flex: 1,
    width: "100%",
    height: 650
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 16,
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
    // paddingBottom: 18,
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 120,
    left: 35,
  },
  ellipseIconContainer: {
    position: "absolute",
    top:1
  },
  ellipseIcon: {
    width: 100,
    height: 100,
  },
  headerContainer: {
    position: "absolute",
    top: 5,
    left: 110,
  },
  helloJohn1: {
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
    color: "#01427a",
    textAlign: "left",
    width: 209,
  },
  descriptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 60,
    left: 110,
    // marginBottom: 80,
  },
  checkYourTravel1: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Nunito-SemiBold",
    color: "#1e1f1f",
    textAlign: "left",
    width: 286,
    height: 32,
  },
  description2Container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 250,
    alignSelf: "center",
    // marginBottom: 80,
  },
  soFarThis1: {
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "Nunito-SemiBold",
    color: "#01427a",
    textAlign: "left",
  },
  groupPosition: {
		left: 34,
		position: "absolute"
  },
  groupChild: {
		top: 42,
  },
  groupItem: {
		top: 65,
  },
  groupInner: {
		top: 40,
		left: 90,
		width: 51,
		height: 50,
		position: "absolute"
  },
  co: {
		top: 50,
		left: 100,
		fontSize: 20,
		fontWeight: "800",
		fontFamily: "Roboto-Black",
		color: "#eee",
		textAlign: "left",
		display: "flex",
		alignItems: "center",
		width: 35,
		height: 31,
		position: "absolute"
  },
  ellipseParent: {
		flex: 1,
		width: "100%",
		height: 350,
    top: 250,
  },
  foodIcon11: {
    flex: 1,
    position: "absolute",
    top: 85,
    alignSelf: "center",
    width: 100,
    height: 100,
  },
  kg: {
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "Nunito-SemiBold",
    color: "#060c12",
    textAlign: "center",
    top: 180,
  },
  text1Typo: {
    textAlign: "left",
    color: "#8b2cf5",
    fontFamily: "Nunito-SemiBold",
    fontWeight: "600",
    fontSize: 24,
    top: 0,
    position: "absolute"
  },
  text1: {
    left: 0
  },
  fromLastMonth1: {
    left: 61
  },
  downArrowIcon1: {
    top: 3,
    left: 45,
    width: 32,
    height: 23,
    position: "absolute",
    transform: [{ rotate: "180deg" }],
  },
  downFromLastMonth1: {
    flex: 1,
    width: "100%",
    height: 33,
    top: 180,
    // margin horizontal: to keep it in the middle of the screen
    marginHorizontal: 70,
  },
  consumption1: {
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
    color: "#01427a",
    width: 209,
    position: "absolute",
    top: 260,
    textAlign: "center",
    alignSelf: "center",
  },
  ReportButton: {
    marginTop: 10,
    position: "relative",
    width: "70%",
    justifyContent: "center",
    alignSelf: "center",
    overflow: "hidden",
    borderRadius: 50,
    bottom: 70,
  },
  ReportButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "700",
  },
  gradientButton: {
    padding: 16,
    alignItems: "center",
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
  surfaceIcon: {
    flex: 1,
    width: "100%",
    height: 135,
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
  bottomNavIcon: {
    width: 30,
    height: 30,
    marginBottom: 50,
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

export default FoodTrackReport;
