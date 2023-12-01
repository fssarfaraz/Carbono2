/*
Date: 19/11/2023
Screen: Air Travel Carbon Footprint Calculation Screen 2
Purpose: This screen allows users to enter the number of passengers that went via Air Transport. It calls the API to perform the calculation 
        and then stores the result in the database.
*/

// React and React Native basics for UI and state management
import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View, ScrollView } from "react-native";

// LinearGradient for gradient style in UI components
import { LinearGradient } from "expo-linear-gradient";

// Navigation hooks from React Navigation for screen transitions
import { useNavigation } from "@react-navigation/native";

// FontAwesome icons for enhanced UI elements
import { FontAwesome5 } from "@expo/vector-icons";

// Global styles for consistent theming
import { Color, FontSize, FontFamily } from "../GlobalStyles";

// Custom API function for air travel calculation
import { calcAirTravel } from "../components/API";

import { useRoute } from '@react-navigation/native';

// Firebase database and authentication services
import {getDatabase, ref, set} from "firebase/database";
import { getAuth} from 'firebase/auth';

// Firebase app configuration
import { app } from "../App";

const CalcAir2 = () => {
    // State for storing the number of passengers
  const [passengerNumber, setPassengerNumber] = useState("");
  // Navigation hook for screen transitions
  const navigation = useNavigation();

  // Function to handle screen navigation
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  // Route hook to access parameters from the previous screen
  const route = useRoute();

  const {departure, arrival} = route.params;
  console.log("Departure, Arrival: ", departure, arrival);
  // Destructuring departure and arrival data

  // Create a reference to the database
  // Firebase database and authentication setup
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
  // Extracting username from email
  console.log(emailName);

  // Function to add calculation results to Firebase
  const addToDatabase = async (result) => 
  {
    // Formatting date for database entry
    // Get the current date
    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0];
    console.log(formattedDate);
    const type = 'air';
        // define the key and entry to add to database
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
    // Set the data in the database
    set(ref(database, 'footprint-travel/' + key), entry).then(() => 
    {
    }).catch((error) => 
    {
      // An error occurred
      alert("Error adding to database: " + error.message);
    });
  }

  // Function to handle form submission and calculation
  const handleSubmit = async () => 
  {
    if(!passengerNumber) 
    {
      alert('Please enter the number of flights taken');
      return;
    }

    // Check if distance is a valid number
    if (isNaN(passengerNumber)) 
    {
      alert('Please enter a valid number');
      return;
    }

    // convert to number
    const numberP = parseInt(passengerNumber);
    try 
    {
      console.log('Calling calcAirTravel with:', departure, arrival, numberP);
      console.log(typeof departure, typeof arrival, typeof numberP);
      console.log('calcAirTravel called');
        //call the API to perform the calculation
      const result = await calcAirTravel(departure, arrival, numberP);
      try
      {
        console.log('calling database');
        //add result to database
        await addToDatabase(result);
        console.log('Added to database');
      }
      catch (error)
      {
        console.error(error);
        alert('Error adding to the database');
      }
        //move to next page to display the result
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
    <ScrollView>
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        style={[styles.ellipse1]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.ellipse2]}
        contentFit="cover"
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

        <Text style={styles.headerTitle}>ENTER THE NUMBER OF FLIGHTS TAKEN</Text>

        {/* Saly6 Image */}
        <View style={styles.saly3Container}>
          <Image
            style={styles.saly3Icon}
            resizeMode="contain"
            source={require("../assets/saly15.png")}
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
            value={passengerNumber}
            onChangeText={setPassengerNumber}
            placeholder="Number of Flights"
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
    </ScrollView>
  );
};

// StyleSheet to define the appearance of UI components
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
  ellipse1: {
    top: -115,
    height: 400,
    width: 550,
    left: -210,
    position: "absolute",
  },
  ellipse2: {
    top: 545,
    height: 400,
    width: 550,
    left: 20,
    position: "absolute",
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
    top: 40,
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
    top: 110,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
  },
  saly3Container: {
    justifyContent: "center",
    alignItems: "center",
    top: 60,
    // margin: 20,
  },
  saly3Icon: {
    height: 446,
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

export default CalcAir2;

