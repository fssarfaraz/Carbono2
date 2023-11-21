// Date:18/11/2023
// Title: Carbon Footprint Result Display Screen
// Purpose: This screen displays the calculated carbon footprint result of the user's car travel and provides navigation options for further interaction.

// React and React Native basic imports for state management and UI components
import React, { useState, useEffect } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

// LinearGradient for advanced gradient design in UI components
import { LinearGradient } from "expo-linear-gradient";

// Navigation hook for navigating between screens
import { useNavigation } from "@react-navigation/native";

// Icon library for enhanced UI design
import { FontAwesome5 } from "@expo/vector-icons";

// Global style constants for consistent theming and design
import { Color, FontSize, FontFamily } from "../GlobalStyles";

// Hook to access route parameters from the previous screen
import { useRoute } from '@react-navigation/native';

const CalcCar3 = () => {
  // State hook not used in this component
  // Hook for handling navigation
  const navigation = useNavigation();

  // Function to navigate to specified screens
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  // Accessing result from route parameters
  const route = useRoute();
  const { result } = route.params;

  // JSX for rendering the UI elements
  return (
    <View style={styles.container}>
      {/* Static Background Image */}
      <Image
        style={styles.backgroundImage}
        source={require("../assets/ellipse-3.png")}
      />

      {/* Main content area of the screen */}
      {/* Content Container */}
      <View style={styles.contentContainer}>
        {/* Container for all content elements */}
        {/* Header with back navigation*/}
        <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <FontAwesome5 name="chevron-left" size={30} color="#01427A" />
          </Pressable>
        </View>

        {/* Displaying the title of the screen */}
        <Text style={styles.headerTitle}>YOUR CARBON FOOTPRINT</Text>

        {/* Decorative image */}
        {/* Saly6 Image */}
        <View style={styles.saly26Container}>
          <Image
            style={styles.saly26Icon}
            resizeMode="contain"
            source={require("../assets/saly26.png")}
          />
        </View>

        {/* Footprint Result */}
        <Pressable
          style={styles.nextButton}
          onPress={() => handleNavigation("TravelTrackReport")}
          {/* Button to display the calculated carbon footprint result */}
        >
          <LinearGradient
            style={styles.gradientButton}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#428DF8", "#5A09C1"]}
          >
            <Text style={styles.nextButtonText}>{result} kg of CO2e</Text>
          </LinearGradient>
        </Pressable>
      </View>

      {/* Bottom Navigation Bar */}
      {/* Bottom navigation bar for quick access to different screens */}
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
      {/* Button for navigating to the calculator screen */}
      <Pressable onPress={() => handleNavigation("Calculator")} style={styles.iconCalculatorParent}>
        <Image
          style={styles.iconCalculator}
          resizeMode="cover"
          source={require("../assets/-icon-calculator.png")}
        />
      </Pressable>
    </View>
  );
};

// Stylesheet for styling UI elements
const styles = StyleSheet.create({
  // Style rules for container, background, header, buttons, and other elements.
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
    marginBottom: 80,
  },
  backButton: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    padding: 10,
    paddingBottom: 18,
  },
  headerTitle: {
    fontSize: FontSize.size_3xl,
    color: Color.colorDarkslateblue_100,
    textAlign: "center",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
    top: 120,
    left: 0,
    right: 0,
  },
  saly26Container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
  },
  saly26Icon: {
    height: 280,
    width: 280,
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
    marginBottom: 120,
  },
  nextButtonText: {
    fontSize: FontSize.size_3xl,
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

export default CalcCar3;
