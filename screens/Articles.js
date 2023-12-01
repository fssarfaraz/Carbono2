/*
Date: 19/11/2023
Screen: Edit Profile
Purpose: The Edit Profile screen allows users to modify their profile information, including their name, email, address, and gender. 
Users can update their details, and the changes will be saved to their profile in the app. 
This screen provides a user-friendly interface for editing and managing personal information within the application.
*/

// Import necessary dependencies for the Articles screen
import React, { useState, useEffect } from "react";
// Import React and useState, useEffect from React library for functional components
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
// Import various components and styles from React Native for UI
import { LinearGradient } from "expo-linear-gradient";
// Import the LinearGradient component from Expo for gradient backgrounds
import { useNavigation } from "@react-navigation/native";
// Import the useNavigation hook for navigating between screens
import { FontAwesome5 } from "@expo/vector-icons";
// Import icons from FontAwesome5
import { Color, FontSize, FontFamily } from "../GlobalStyles";
// Import global styles for color, font size, and font family
import { calcCar } from "../components/API";
// Import a custom API function for calculating car emissions
import { useRoute } from '@react-navigation/native';
// Import the useRoute hook for accessing route parameters
import {getDatabase, ref, set} from "firebase/database";
// Import Firebase Realtime Database functions
import { getAuth} from 'firebase/auth';
// Import Firebase Authentication functions
import { app } from "../App";
// Import the Firebase app configuration



const Articles = () => {
  const [distance, setDistanceKM] = useState("");
  // State variable for storing the distance in kilometers
  const navigation = useNavigation();
  // Initialize the navigation object

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
    // Function to navigate to a different screen
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
       <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <FontAwesome5 name="chevron-left" size={30} color="#01427A" />
          </Pressable>
      </View>

        <View style={styles.saly3Container}>
          <Image
            style={styles.saly3Icon}
            resizeMode="contain"
            source={require("../assets/header.png")}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={[styles.title]}>The Global Effect Of Car Emissions</Text>
          <Text style={[styles.text]}>
          Our personal vehicles are a major cause of global warming. Collectively, cars and trucks account for nearly one-fifth of all US emissions, emitting around 24 pounds of carbon dioxide and other global-warming gases for every gallon of gas. About five pounds comes from the extraction, production, and delivery of the fuel, while the great bulk of heat-trapping emissions—more than 19 pounds per gallon—comes right out of a car’s tailpipe.
            
          </Text>
        </View>
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

// Styles for the Articles screen
const styles = StyleSheet.create({
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
    // padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 3,
    position: "absolute",
    top: 38,
  },
  backButton: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    padding: 25,
  },
  saly3Container: {
    flex: 1,
    bottom: 45,
    width: "100%",
    height: "100%",
   },
  saly3Icon: {
    position: "absolute",
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
  textContainer: {
    top: 80,
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 150,
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },
  title: {
    justifyContent: "flex-end",
    marginBottom: 20,
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
    color: "#000",
    textAlign: "left",
  },
  text: {
    justifyContent: "flex-end",
    fontSize: 17,
    lineHeight: 22,
    fontFamily: "Inter-Regular",
    color: "#000",
    textAlign: "left",
    // width: 342
  },
  
});

export default Articles;
// Export the Educational component

