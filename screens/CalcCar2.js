/*
Date: 19/11/2023
Screen: Vehicle Distance Input Screen for Carbon Footprint Calculation
Purpose: This screen enables users to input the distance traveled by their vehicle to calculate its carbon footprint.
*/


// React basics and hooks for building the UI and handling state
import React, { useState, useEffect } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

// LinearGradient for visually appealing gradients in UI components
import { LinearGradient } from "expo-linear-gradient";

// Navigation hook for screen transitions
import { useNavigation } from "@react-navigation/native";

// FontAwesome icons for enhanced UI elements
import { FontAwesome5 } from "@expo/vector-icons";

// Global styles for consistent theming across the app
import { Color, FontSize, FontFamily } from "../GlobalStyles";

// API function for calculating car carbon footprint
import { calcCar } from "../components/API";

import { useRoute } from '@react-navigation/native';

// Firebase database and authentication services
import {getDatabase, ref, set} from "firebase/database";
import { getAuth} from 'firebase/auth';

// Firebase app configuratio
import { app } from "../App";


const CalcCar2 = () => {
  // State for storing distance input
  const [distance, setDistanceKM] = useState("");
  // Navigation hooks for handling screen transitions and accessing route parameters
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  const route = useRoute();

  // Extracting vehicle details from the previous screen's parameters
  const { vehicleMake, vehicleModel } = route.params;

  // Create a reference to the database
  const database = getDatabase();
  console.log('connected to database');
  const auth = getAuth(app);
  console.log('got auth');
  const user = auth.currentUser; 
  console.log('got current user');
  const email = user.email; 
  console.log('User email: ', email);
  // Split email on "@" 
  const emailParts = email.split('@');
  // Get first part (before "@")
  const emailName = emailParts[0];
  console.log(emailName);

  // Function to add calculation results to Firebase
  const addToDatabase = async (result) => {
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
      console.log('Defined entry')
      // Set the user data in the database
      set(ref(database, 'footprint-travel/' + key), entry).then(() => 
      {
      }).catch((error) => 
      {
        // An error occurred
        alert("Error adding to database: " + error.message);
      });
  }

  // Form submission and calculation handling
  const handleSubmit = async () => {
    // Prevent submission if distance is empty
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

    // convert to number
    const distanceNum = parseInt(distance);
    try 
    {
      // Calling calcCar function
      console.log('Calling calcCar with:', vehicleMake, vehicleModel, distanceNum);
      console.log(typeof vehicleMake, typeof vehicleModel, typeof distanceNum);
      console.log('CalcCar called');
      // Calculate carbon footprint using calcCar
      const result = await calcCar(vehicleMake, vehicleModel, distanceNum);
      try
      {
        console.log('calling database');
        // Add calculated CO2 to Firebase database
        await addToDatabase(result);
        console.log('Added to database');
      }
      catch (error)
      {
        console.error(error);
        alert('Error adding to the database');
      }
      // Navigate to the next screen with the result
      navigation.navigate('CalcCar3', {result});
    } 
    catch (error) 
    {
      console.error(error);
      alert('Error calculating');
      return;
    }
  }

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

        {/* Title instructing user on input format */}
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
          {/* Input fields for distance */}
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

// StyleSheet for styling the UI components
const styles = StyleSheet.create({
  // Style rules for container, background, input fields, buttons, etc.
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
