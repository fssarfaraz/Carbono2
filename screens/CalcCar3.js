/*
Date: 19/11/2023
Screen: Calculate Car Carbon Footprint
Purpose: Display the calculated carbon footprint of the user's car.
*/

import React, { useState, useEffect } from "react";
// Importing React and useState from React library

import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
// Importing various components and modules from React Native library

import { LinearGradient } from "expo-linear-gradient";
// Importing LinearGradient for gradient styles

import { useNavigation } from "@react-navigation/native";
// To navigate between screens

import { FontAwesome5 } from "@expo/vector-icons";
// Importing FontAwesome icons

import { Color, FontSize, FontFamily } from "../GlobalStyles";
// Importing global style constants

import { useRoute } from '@react-navigation/native';
// To access route parameters


const CalcCar3 = () => {
  const navigation = useNavigation();
  // Navigation hook

  // Function to handle navigation to different screens
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  const route = useRoute();
  const { result } = route.params;

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

        {/* Title */}
        <Text style={styles.headerTitle}>YOUR CARBON FOOTPRINT</Text>

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
          // onPress={() => handleNavigation("TravelTrackReport")}
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
      <View style={styles.bottomNavBar}>
        {/* Pressable icons for navigating to UserProfile, Educational, Forum, and Games */}
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

// StyleSheet to style the component
const styles = StyleSheet.create({
    // Styling definitions for container, backgroundImage, content area, etc.
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
