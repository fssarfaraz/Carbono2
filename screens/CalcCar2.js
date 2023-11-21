/*
Date: 18/11/2023
Screen: Travel Distance Entry and Calculation Screen in a React Native Application
Pupose: This code forms a React Native component for a screen where users can enter the distance of their travel. It calculates the environmental impact of their vehicle travel, stores the data in a Firebase database, and navigates to a results screen.
*/

import React, { useState, useEffect } from "react";
// Importing React, useState and useEffect hooks from the React library

import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
// Importing various components from react-native for UI design

import { LinearGradient } from "expo-linear-gradient";
// Importing LinearGradient from expo-linear-gradient for gradient styling

import { useNavigation } from "@react-navigation/native";
// Importing useNavigation hook from @react-navigation/native for navigation between screens

import { FontAwesome5 } from "@expo/vector-icons";
// Importing FontAwesome5 icons from @expo/vector-icons for iconography

import { Color, FontSize, FontFamily } from "../GlobalStyles";
// Importing Color, FontSize, and FontFamily from a local file for consistent styling across the app

import { calcCar } from "../components/API";
// Importing a custom function calcCar from a local API file for specific calculations

import { useRoute } from '@react-navigation/native';
// Importing useRoute from @react-navigation/native to access route parameters from previous screens

import {getDatabase, ref, set} from "firebase/database";
// Importing functions from firebase/database for interacting with Firebase Realtime Database

import { getAuth} from 'firebase/auth';
// Importing getAuth from firebase/auth for authentication purposes

import { app } from "../App";
// Importing the main Firebase app instance from the local App.js file for Firebase setup


const CalcCar2 = () => {
  
  // State for storing distance input
  const [distance, setDistanceKM] = useState("");
  const navigation = useNavigation();
  // Hook for navigation

  // Function to handle screen navigation
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  // Using the route to access parameters passed from the previous screen
  const route = useRoute();

  const { vehicleMake, vehicleModel } = route.params;

  // Firebase database and authentication setup
  // Create a reference to the database
  const database = getDatabase();
  console.log('connected to database');
  const auth = getAuth(app);
  console.log('got auth');
  const user = auth.currentUser; 
  console.log('got current user');
  const email = user.email; 
  console.log('User email: ', email);
  // Processing the user's email for database entry
  // Split email on "@" 
  const emailParts = email.split('@');
  // Get first part (before "@")
  const emailName = emailParts[0];
  console.log(emailName);

  // Function to add calculation results to the Firebase database
  const addToDatabase = async (result) => {
    // Formatting the current date for the database entry
      // Get the current date
      const date = new Date();
      const formattedDate = date.toISOString().split('T')[0];
      console.log(formattedDate);
      const type = 'car';
      const key = `${formattedDate}-${emailName}-${type}`;
      console.log('Defined key', key);
      const entry = 
      {
        email: email,
        type: type,
        date: formattedDate,
        result: result
      };
       // Adding the entry to the database
      console.log('Defined entry')
      // Set the user data in the database
      set(ref(database, 'footprint-travel/' + key), entry).then(() => 
      {
      }).catch((error) => 
      {
        // An error occurred
        // Handling database errors
        alert("Error adding to database: " + error.message);
      });
  }

  // Function to handle the submission and calculation process
  const handleSubmit = async () => {
    // Validating the distance input
    if(!distance) 
    {
      alert('Please enter distance');
      return;
    }

    // Check if distance is a valid number
    if (isNaN(distance)) 
    {
      alert('Please enter a valid number for distance');
      return;
    }

    // Converting the distance to a number and performing the calculation
    // convert to number
    const distanceNum = parseInt(distance);
    try 
    {
      console.log('Calling calcCar with:', vehicleMake, vehicleModel, distanceNum);
      console.log(typeof vehicleMake, typeof vehicleModel, typeof distanceNum);
      console.log('CalcCar called');
      const result = await calcCar(vehicleMake, vehicleModel, distanceNum);
      try
      {
        console.log('calling database');
        // Adding the result to the database and navigating to the results screen
        await addToDatabase(result);
        console.log('Added to database');
      }
      catch (error)
      {
        console.error(error);
        alert('Error adding to the database');
      }
      navigation.navigate('CalcCar3', {result});
    } 
    catch (error) 
    {
      console.error(error);
      alert('Error calculating');
      return;
    }
  }

  // JSX for rendering the UI
  return (
    <View style={styles.container}>
      {/* Setting the background image */}
      {/* Background Image */}
      <Image
        style={styles.backgroundImage}
        source={require("../assets/ellipse-3.png")}
      />

      {/* Main content area */}
      {/* Content Container */}
      <View style={styles.contentContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            {/* Back navigation icon */}
            <FontAwesome5 name="chevron-left" size={30} color="#01427A" />
          </Pressable>
        </View>

        {/* Screen title */}
        <Text style={styles.headerTitle}>ENTER TRAVEL DISTANCE</Text>

        {/* Saly6 Image */}
        {/* Decorative image */}
        <View style={styles.saly3Container}>
          <Image
            style={styles.saly3Icon}
            source={require("../assets/saly3.png")}
          />
        </View>

        {/* Vehicle Type Input */}
        <LinearGradient
          style={styles.inputContainer}
          locations={[0, 1]}
          colors={["rgba(225, 135, 245, 0.78)", "rgba(90, 9, 193, 0.89)"]}
        >
          <TextInput
            style={styles.textInput}
            value={distance}
            onChangeText={setDistanceKM}
            placeholder="Distance in KM"
            placeholderTextColor="#fff"
            fontWeight="700"
            textAlign="center"
            fontSize={FontSize.size_3xl}
          />
        </LinearGradient>

        {/* Next Button */}
        <Pressable
          style={styles.nextButton}
          onPress={handleSubmit}
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

// StyleSheet object for styling UI components
const styles = StyleSheet.create({
    // Styles for container, background image, content area, and other UI elements.
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

export default CalcCar2;
