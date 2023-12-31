/*
Date: 19/11/2023
Screen: Air Travel Carbon Footprint Calculation Screen
Purpose: This screen allows users to input departure and arrival airport codes to calculate the carbon footprint of their air travel.
*/

// React state hook and basic components from React Native for building the UI
import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View, ScrollView } from "react-native";

// LinearGradient for visually appealing gradient designs in UI elements
import { LinearGradient } from "expo-linear-gradient";

// Navigation hook from React Navigation for handling screen transitions
import { useNavigation } from "@react-navigation/native";

// FontAwesome icons for enhancing UI elements
import { FontAwesome5 } from "@expo/vector-icons";

// Color, FontSize, and FontFamily for consistent styling across the app
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const CalcAir = () => {
    // State for storing departure and arrival airport codes
  const [departure, SetDepature] = useState("");
  const [arrival, setArrival] = useState("");
  // Navigation hook for screen transition functionality
  const navigation = useNavigation();

  // Function for navigating to different screens
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      {/* Background Image for visual appeal */}
      <Image
        style={styles.backgroundImage}
        source={require("../assets/ellipse-3.png")}
      />

      {/* Main Content Container */}
      <View style={styles.contentContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <FontAwesome5 name="chevron-left" size={30} color="#01427A" />
          </Pressable>
        </View>

        {/* Title instructing user on input format */}
        <Text style={styles.headerTitle}>ENTER TRAVEL ROUTE AS THREE LETTER AIRPORT CODES</Text>

        {/* Saly6 Image */}
        <View style={styles.saly6Container}>
          <Image
            style={styles.saly6Icon}
            resizeMode="contain"
            source={require("../assets/saly1.png")}
          />
        </View>

        {/* Input fields for departure and arrival airport codes */}
        {/* Vehicle Type Input */}
        <LinearGradient
          style={styles.inputContainer}
          locations={[0, 1]}
          colors={["rgba(225, 135, 245, 0.78)", "rgba(90, 9, 193, 0.89)"]}
        >
          <TextInput
            style={styles.textInput}
            value={departure}
            onChangeText={SetDepature}
            placeholder="Departure"
            placeholderTextColor="#fff"
            fontWeight="700"
            textAlign="center"
            fontSize={FontSize.size_3xl}
          />
        </LinearGradient>

        {/* Vehicle Make Input */}
        <LinearGradient
          style={styles.inputContainer}
          locations={[0, 1]}
          colors={["#0682ef", "#094ed3"]}
        >
          <TextInput
            style={styles.textInput}
            value={arrival}
            onChangeText={setArrival}
            placeholder="Arrival"
            placeholderTextColor="#fff"
            fontWeight="700"
            textAlign="center"
            fontSize={FontSize.size_3xl}
          />
        </LinearGradient>

        {/* Button to proceed to the next screen with the entered data */}
        {/* Next Button */}
        <Pressable
          style={styles.nextButton}
          onPress={() => {navigation.navigate('CalcAir2', {departure, arrival});}}
        >
          <LinearGradient
            style={styles.gradientButton}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#428DF8", "#5A09C1"]}
          >
            <Text style={styles.nextButtonText}>Next</Text>
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
      <Pressable onPress={() => handleNavigation("Calculator")} style={styles.iconCalculatorParent}>
        <Image
          style={styles.iconCalculator}
          resizeMode="cover"
          source={require("../assets/-icon-calculator.png")}
        />
      </Pressable>
    </View>
    </ScrollView>
  );
};

// StyleSheet for defining the component's appearance
const styles = StyleSheet.create({
  // Styling rules for container, background, input fields, buttons, etc.
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  backgroundImage: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backButton: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    padding: 10,
    top: 30,
  },
  headerTitle: {
    fontSize: FontSize.size_3xl,
    color: Color.colorDarkslateblue_100,
    textAlign: "center",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
    top: 80,
    left: 0,
    right: 0,
    paddingHorizontal: 30,
  },
  saly6Container: {
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 20,
  },
  saly6Icon: {
    height: 340,
    width: "100%",
  },
  inputContainer: {
    borderRadius: 10,
    marginBottom: 16,
    width: "94%",
    alignSelf: "center",
  },
  textInput: {
    backgroundColor: "transparent",
    color: "#fff",
    padding: 16,
    borderRadius: 10,
  },
  nextButton: {
    borderRadius: 10,
    marginTop: 16,
    marginBottom: 100,
    position: "relative",
    width: "70%",
    justifyContent: "center",
    alignSelf: "center",
    overflow: "hidden",
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
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

export default CalcAir;
