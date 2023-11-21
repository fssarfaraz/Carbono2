/* 
Date: 18/11/2023
Screen: Energy Source Location Input Screen
Purpose: This screen is designed for users to input the geographical location of their energy source, facilitating a more precise calculation of their electricity-related carbon footprint.
*/

// Importing React and essential UI components from React Native
import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

// Gradient styling for enhanced UI elements
import { LinearGradient } from "expo-linear-gradient";

// Navigation hook for screen transitions
import { useNavigation } from "@react-navigation/native";

// Icon set for UI elements
import { FontAwesome5 } from "@expo/vector-icons";

// Global styling constants
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const CalcElectricity2 = () => {
  // State for managing location input
  const [location, setLocation] = useState("");
  // Navigation hook for managing screen navigatio
  const navigation = useNavigation();

  // Function for navigating to different screens
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  // JSX for rendering the component UI
  return (
    <View style={styles.container}>
      {/* Background Image for the screen */}
      <Image
        style={[styles.calcElectricity2Child, styles.calcLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.calcElectricity2Item, styles.calcLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />

      {/* Content Container */}
      {/* Main content area */}
      <View style={styles.contentContainer}>
        {/* Header with a back button for navigation */}
        <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          // Handle back button press
          >
            <FontAwesome5 name="chevron-left" size={30} color="#01427A" />
            // Display back arrow icon
          </Pressable>
        </View>

        {/* Title of the screen */}
        <Text style={styles.headerTitle}>ENTRY THE COUNTRY OR CONTINENT PROVIDING THE ENERGY</Text>
        // Display instruction text

        {/* Saly6 Image */}
        <View style={styles.saly3Container}>
          {/* Decorative image to enhance user interface */}
          <Image
            style={styles.saly3Icon}
            source={require("../assets/saly44.png")}
          />
          // Display Saly6 image
        </View>

        {/* Vehicle Type Input */}
        <LinearGradient
          style={styles.inputContainer}
          locations={[0, 1]}
          colors={["rgba(225, 135, 245, 0.78)", "rgba(90, 9, 193, 0.89)"]}
        >
          <TextInput
            style={styles.textInput}
            value={location}
            // Display entered location
            onChangeText={setLocation}
            // Update location on text change
            placeholder="Location"
            // Display placeholder text
            placeholderTextColor="#fff"
             // Set placeholder text color
            fontWeight="700"
            // Set font weight
            textAlign="center"
            // Align text to center
            fontSize={FontSize.size_3xl}
            // Set font size
          />
        </LinearGradient>

        {/* Next Button */}
        {/* Button to proceed to the next screen after input */}
        <Pressable
          style={styles.nextButton}
          onPress={() => handleNavigation("EnergyTrackReport")}
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
  );
};

// StyleSheet for styling the UI components
const styles = StyleSheet.create({
    // Styling for container, background images, header, inputs, buttons, etc.
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  backgroundImage: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  calcLayout: {
    height: 330,
    width: 400,
    left: 0,
    position: "absolute",
  },
  calcElectricity2Child: {
    left: 100,
    top: 0,
  },
  calcElectricity2Item: {
    top: 545,
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
    marginBottom: 40,
  },
  backButton: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    padding: 10,
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
    paddingHorizontal: 16,
  },
  saly3Container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
  },
  saly3Icon: {
    // margin: 50,
    height: 280,
    width: 280,
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

export default CalcElectricity2;
