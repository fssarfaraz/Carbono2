/*
Date: 19/11/2023
Screen:  Public Transport Calculator Screen
Purpose: This screen allows the user to calculate the environmental impact of using public transport based on the distance traveled.
Users enter the travel distance in kilometers, and the app calculates the impact and stores it in the Firebase Realtime Database.
The screen also provides navigation options and a user-friendly interface.
*/

// Import statements for necessary libraries and components

import React, { useState, useEffect } from "react";
 // React and related hooks
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
// React Native components
import { LinearGradient } from "expo-linear-gradient";
// Linear gradient for styling
import { useNavigation } from "@react-navigation/native";
// Navigation hook
import { FontAwesome5 } from "@expo/vector-icons";
// FontAwesome icons
import { Color, FontSize, FontFamily } from "../GlobalStyles";
// Global styles
import { calcPublicTransport } from "../components/API";
// Public transport calculation function
import { useRoute } from '@react-navigation/native';
// Route hook for navigation
import {getDatabase, ref, set} from "firebase/database";
// Firebase Realtime Database functions
import { getAuth} from 'firebase/auth';
// Firebase Authentication functions
import { app } from "../App";
// Firebase app configuration

// Define the CalcBus2 component

const CalcBus2 = () => {
  // Initialize state variables
  const [distance, setDistanceKM] = useState("");
  const navigation = useNavigation();

  // Function to handle navigation
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  // Access route parameters
  const route = useRoute();

  const {type} = route.params;
  console.log("Type: ", type);

  // Create a reference to the Firebase Realtime Database
  const database = getDatabase();
  const auth = getAuth(app);
  const user = auth.currentUser; 
  const email = user.email; 

  // Split email on "@" 
  const emailParts = email.split('@');
  // Get first part (before "@")
  const emailName = emailParts[0];

  // Function to add calculation result to the database
  const addToDatabase = async (result) => {
      // Get the current date
      const date = new Date();
      const formattedDate = date.toISOString().split('T')[0];
      const type = 'publicT';
      const key = `${formattedDate}-${emailName}-${type}`;
      const entry = 
      {
        email: email,
        type: type,
        date: formattedDate,
        result: result
      };
      // Set the user data in the database
      set(ref(database, 'footprint-travel/' + key), entry).then(() => 
      {
      }).catch((error) => 
      {
        // An error occurred
        alert("Error adding to database: " + error.message);
      });
  }

  // Function to handle form submission
  const handleSubmit = async () => {
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

    // convert distance to a number
    const distanceNum = parseInt(distance);
    try 
    {
      console.log('Calling calcPublicTransport with:', type, distanceNum);
      const result = await calcPublicTransport(type, distanceNum);
      try
      {
        await addToDatabase(result);
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

  // Render the component
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

        {/* Header Title */}
        <Text style={styles.headerTitle}>ENTER TRAVEL DISTANCE</Text>

        {/* Saly6 Image */}
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

// Styles for the component
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

export default CalcBus2;
