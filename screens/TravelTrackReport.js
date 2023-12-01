/*
Date: 19/11/2023
Screen: Travel Track Report
Purpose: This  screen is designed to display travel-related information and reports to the user. 
It provides insights into their travel history, including monthly and weekly summaries of their carbon footprint and consumption. 
The screen also offers navigation options to other sections of the mobile application.
*/

// Import necessary modules and components

import React, { useState, useEffect } from "react";
// Import React and its hooks
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
// Import various components from React Native
import { LinearGradient } from "expo-linear-gradient";
// Import LinearGradient component
import { useNavigation } from "@react-navigation/native";
// Import useNavigation hook for navigation
import { FontAwesome5 } from "@expo/vector-icons";
// Import FontAwesome5 icons
import { Color, FontSize, FontFamily } from "../GlobalStyles";
// Import custom global styles
import { useRoute } from '@react-navigation/native';
// Import useRoute hook for route parameters
import { getAuth } from "firebase/auth";
// Import getAuth function from Firebase auth
import { onAuthStateChanged } from "firebase/auth";
// Import onAuthStateChanged function from Firebase auth
import {getDatabase, ref, onValue} from 'firebase/database';
// Import Firebase Realtime Database functions
import { app } from "../App";
// Import the Firebase app configuration

// Define the TravelTrackReport functional component
const TravelTrackReport = () => {
  const navigation = useNavigation();
  // Get the navigation object

  // Function to handle navigation to other screens
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  const route = useRoute();
  // Get the current route

  const {travelData} = route.params;
  // Extract travelData parameter from route
  console.log("Travel: ", travelData);

  // State for current user, username, travel, monthly report, weekly report
  const [currentUser, setCurrentUser] = useState(null);
  const [name, setName] = useState('');
  const [sum, setSum] = useState('');
  const [showMonthlyReport, setShowMonthlyReport] = useState(false);
  const [monthlyLabels, setMonthlyLabels] = useState([]);
  const [monthlyValues, setMonthlyValues] = useState([]);
  const [weeklyLabels, setWeeklyLabels] = useState([]);
  const [weeklyValues, setWeeklyValues] = useState([]);
  const [showWeeklyReport, setShowWeeklyReport] = useState(false);

  const auth = getAuth(app);
  // Get the Firebase authentication instance
  const database = getDatabase();
  // Get the Firebase Realtime Database instance

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if(user) 
      {
        setCurrentUser(user); 
        // Set the current user in state
      }
    });
    return () => unsubscribe();
  }, [auth])

  useEffect(() => {
    if(currentUser) 
    {
      const user = auth.currentUser; 
      console.log('Current user:', user);

      // Get email from current user
      const email = user.email; 
      console.log('Current user email:', email);

      const userRef = ref(database, 'users/');
      console.log('User reference:', userRef);
      console.log('User UID:', user.uid); 

      onValue(userRef, (snapshot) => {
        // Find matching user  
        const users = snapshot.val();
        const matchingUser = Object.values(users).find((u) => u.email.toLowerCase() === email);

        if (matchingUser) 
        {
          setName(matchingUser.name);
          // Set the user's name in state
        } 
        else 
        {
          console.log('User not found in the database');
        }
      })
    }
  }, [currentUser, database]);

  useEffect(() => {
    monthlySum();
    // Calculate monthly sum when component mounts
  }, []);

  function monthlySum()
  {
    if(travelData.length > 0)
    {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth();

      const selectedTravelData = Object.entries(travelData)
        .filter(([key, value]) => {
          const entryDate = new Date(value.x);
          return (
            entryDate.getFullYear() === year &&
            entryDate.getMonth() === month
          );
        })
        .map(([id, entry]) => ({
          id,
          x: entry.x,
          y: entry.y  
        }));
      
      if(selectedTravelData.length > 0)
      {
        setShowMonthlyReport(true);
        // Set monthly report visibility to true
        let mappedTravelData;
        mappedTravelData = selectedTravelData.map(data => data.y);
        console.log(mappedTravelData);

        let sumT = 0;
        for(let i = 0; i < mappedTravelData.length; i++) 
        {
          sumT += mappedTravelData[i];
        }
        console.log('Sum of T', sumT);
        const clippedSumT = sumT.toFixed(2);
        setSum(clippedSumT);
        // Set the sum in state
      }
      else
      {
        setSum(0);
        // Set the sum to 0 if no data
      }
    }
    else
    {
      setSum(0);
      //  Set the sum to 0 if no data
    }
  }

  useEffect(() => {
    monthlyReport();
    // Generate monthly report when component mounts
  }, []); 

  function monthlyReport()
  {
    if(travelData.length > 0)
    {
      // Extracting and plotting the result per month
      const monthlyFootprintData = travelData.reduce((acc, entry) => {
        const [year, month] = entry.x.split('-');
        const key = `${year}-${month}`;

        if (!acc[key]) 
        {
          acc[key] = { month: `${year}-${month}`, total: 0 };
        }

        acc[key].total += entry.y;
        return acc;
      }, {});

      // Mapping the data into labels and values
      const labels = Object.values(monthlyFootprintData).map(({ month }) => month);
      const values = Object.values(monthlyFootprintData).map(({ total }) => total);
      console.log(labels);
      console.log(values);

      /// Rounding the values to 2 decimal places
      const roundedValues = values.map(value => parseFloat(value.toFixed(2)));
      console.log("Rounded: ", roundedValues);

      setMonthlyLabels(labels);
      setMonthlyValues(roundedValues);
    }
  }

  //used to test correct array population. Can be removed
  useEffect(() => {
    console.log("monthly labels: ", monthlyLabels);
    console.log("monthly values: ", monthlyValues);
  }, [monthlyLabels, monthlyValues]);

  useEffect(() => {
    weeklyReport();
    // Generate weekly report when component mounts
  }, []); 

  function weeklyReport()
  {
    if(travelData.length > 0)
    {
      // Get the current month
      const now = new Date();
      const month = now.getMonth();
      const year = now.getFullYear();

      console.log('Getting this months data');
      const selectedTravelData = Object.entries(travelData)
        .filter(([key, value]) => {
          const entryDate = new Date(value.x);
          return (
            entryDate.getFullYear() === year &&
            entryDate.getMonth() === month
          );
        })
        .map(([id, entry]) => ({
          id,
          x: entry.x,
          y: entry.y  
        }));

        console.log('selectedTravelData: ', selectedTravelData);
      
      if(selectedTravelData.length > 0)
      {
        setShowWeeklyReport(true);

        const weeklyData = [];
        let weekStart = 0;

        // Parse dates from strings 
        const parsedData = selectedTravelData.map(item => ({
          ...item,
          x: new Date(item.x)  
        }));

        while(weekStart < parsedData.length) 
        {
          let weekEnd = weekStart + 7;
          if(weekEnd > parsedData.length) weekEnd = parsedData.length;
          weeklyData.push(parsedData.slice(weekStart, weekEnd));
          weekStart = weekEnd;
        }
 
        // Sum and labels
        const values = weeklyData.map(week => {
          return week.reduce((sum, item) => {
            return sum + item.y;
          }, 0);
        });

        // Create labels for each week
        const labels = weeklyData.map((week, i) => {
          const firstDate = week[0].x;
          const lastDate = week[week.length-1].x;
          // Format dates as strings
          
          startDate = firstDate.toISOString().slice(0,10);  
          endDate = lastDate.toISOString().slice(0,10);
          
          const start = startDate.substring(5);
          const end = endDate.substring(5);
          return `${start} to ${end}`;
        });

        // Round the weekly values to 2 decimal places
        const roundedWeeklyValues = values.map((value) =>parseFloat(value.toFixed(2)));

        // Set the weekly labels and values
        setWeeklyLabels(labels);
        // Set weekly report labels in state
        setWeeklyValues(roundedWeeklyValues);
        // Set weekly report values in state
      }
    }
  }

  //used to test correct array population. Can be removed
  useEffect(() => {
    console.log("Weekly labels: ", weeklyLabels);
    console.log("Weekly values: ", weeklyValues);
  }, [weeklyLabels, weeklyValues]);

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
          {/* Hello John */}          
          <View style={styles.headerContainer}>
            <Text style={styles.helloJohn1} numberOfLines={1}>
              Hello, {name}
            </Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.checkYourTravel1} numberOfLines={1}>
              Check your travel report
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
            source={require("../assets/ellipse-2323.png")} />
      		<Image style={styles.groupInner} 
            resizeMode="cover" 
            source={require("../assets/ellipse-2324.png")} />
      		<Text style={styles.co}>CO₂</Text>

          <Image style={styles.carIcon11} 
            resizeMode="cover" 
            source={require("../assets/car-icon-1.png")} />


          <Text style={styles.kg}>{sum} kg CO2</Text>

          <Text style={styles.consumption1}>Consumption</Text>
    		</View>

        {/* Report Button */}
        <Pressable
          style={styles.ReportButton}
          onPress={() => {
            if (showWeeklyReport)
            {
              navigation.navigate("WeeklyReport", {weeklyLabels, weeklyValues})
            }
            else
            {
              alert("No data to generate report for");
            }
        }}
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
          onPress={() => {
            if (travelData.length > 0)
            {
              navigation.navigate("MonthlyReport", {monthlyLabels, monthlyValues})
            }
            else
            {
              alert("No data to generate report for");
            }
        }}
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

// Stylesheet for defining the appearance of UI components
const styles = StyleSheet.create({
    // Styles for various components and elements go here
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  backgroundImage: {
    // position: "absolute",
    // height: "100%",
    // width: "100%",
    top: -270,
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
    top: -20,
    left: 80,
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
    left: 55,
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
		top: 35,
		width: 245,
		height: 141
  },
  groupInner: {
		top: 56,
		left: 249,
		width: 51,
		height: 50,
		position: "absolute"
  },
  co: {
		top: 65,
		left: 257,
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
  carIcon11: {
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
    top: 190,
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
  upArrowIcon1: {
    top: 3,
    left: 32,
    width: 32,
    height: 23,
    position: "absolute",
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
    top: 230,
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

export default TravelTrackReport;

