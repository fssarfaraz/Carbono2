/*
Date: 20/11/2023
Screen: Monthly Carbon Footprint Report
Purpose: This screen shows your monthly carbon footprint emissions and highlights changes compared to the previous month.
*/

// Import necessary modules and components

import * as React from "react";
// Import React and required hooks
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, StatusBar, Text, Dimensions } from "react-native";
// Import UI components from React Native
import { LinearGradient } from "expo-linear-gradient";
// Import LinearGradient for gradient background
import { useNavigation } from "@react-navigation/native";
 // Import useNavigation hook for navigation
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";
// Import global styles
import { useState } from "react";

import { FontAwesome5 } from "@expo/vector-icons";
// Import FontAwesome5 icons
import { useRoute } from '@react-navigation/native';
// Import useRoute hook for route parameters
import { BarChart } from "react-native-chart-kit";
// Import BarChart hook for route parameters
import { Svg, Rect, Line, Path } from "react-native-svg";
// Import components from react-native-svg

// Define a functional component named WeeklyReport
const WeeklyReport = () => {
  // Initialize navigation using the useNavigation hook
  const navigation = useNavigation();

  // Define a function to handle navigation to other screens
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  //routing variables from a previous screen
  const route = useRoute();
  const {weeklyLabels, weeklyValues} = route.params;
  console.log("Weekly Labels: ", weeklyLabels);
  console.log("Weekly Values: ", weeklyValues);

  // Configure chart settings
  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 1,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: true, // optional
    color: (opacity = 0.9) => `rgba(90, 9, 193, ${opacity})`,
    margin: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    },
  };

  // Get the screen width using Dimensions from React Native
  const screenWidth = Dimensions.get("window").width;

  // Bar chart component 
  const WeeklyBarChart = ({weeklyLabels, weeklyValues, chartConfig}) => {
    // Get color from chartConfig color function
    const barColor = chartConfig.color();
    // Use default bar width if not specified
    const barWidth = 45;
    // Calculate height scaling 
    const maxValue = Math.max(...weeklyValues);
    const scale = 220 / maxValue;

    return (
      <Svg height="220" width={screenWidth}>
        {/* Lines for the chart */}
        <Line 
          x1="35" 
          y1="220"
          x2={screenWidth}
          y2="220"
          stroke = "#000000" 
        />

        <Line
          x1="35"
          y1="0"
          x2="35" 
          y2="220"
          stroke="#000000" 
        />

        {/* Label for the Y-axis */}
        <View style={{transform: [{ rotate: '90deg' }], top: 240, left: -190}} >
          <Text 
            textAnchor="middle"
            style={{fontSize: 20, fontFamily: "Nunito-Bold",}}
          >
            Total Footprint  
          </Text>
        </View>

        {/* Labels for the X-axis (weeklyLabels) */}
        <View style={{top: 200, left: 50}}>
          {weeklyLabels.map((label, i) => (
            <Text  
              key={i}
              x={-10}
              y={220 - i*(maxValue/weeklyLabels.length)*scale}
              style={{fontFamily: "Nunito-Bold", fontSize: 9}}
            >
              {label}
          </Text>
        ))}
        </View>

        {/* Bars for the chart */}
        {weeklyValues.map((value, i) => (
          <React.Fragment key={i}>
            <Rect
              key={i}
              x={i * (barWidth + 5) + 60}
              y={220 - value * scale}
              height={value * scale}
              width={barWidth}
              fill={barColor}
            />
            <Text
              key={`value-${i}`}
              x={i * (barWidth + 5) + 60 + barWidth / 2}
              y={220 - value * scale - 10}
              textAnchor="middle"
              style={{fontFamily: "Nunito-Bold", fontSize: 10, top: 100, left: 65, color: "#ffffff"}}
            >
              {value}
            </Text>
          </React.Fragment>
        ))}
      </Svg>
    )
  }

  // Return JSX for the MonthlyReport screen
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        style={styles.backgroundImage}
        source={require("../assets/ellipse-3.png")}
      />
       <Image
        style={styles.backgroundImage1}
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

        <Text style={styles.hereIsA1} numberOfLines={2}>Here is a report of your weekly 
            carbon footprint emissions</Text>

        {/* Saly6 Image */}
        <View style={styles.frameIconContainer}>
            <WeeklyBarChart
              weeklyLabels={weeklyLabels}
              weeklyValues={weeklyValues} 
              chartConfig={chartConfig} 
            />
        </View>

        <Text style={styles.commiserationsThereWasContainer} numberOfLines={5}>
          <Text style={styles.commiserationsThereWasContainer1}>
          <Text style={styles.commiserations}>{"Commiserations!\n\n"}</Text>
          <Text style={styles.thereWasA}>There was a significant increase in your carbon emissions compared to last month.</Text>
          </Text>
        </Text>
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

// StyleSheet for defining the styles of UI components

const styles = StyleSheet.create({
    // Styling rules for different UI elements like background, buttons, images, etc
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  backgroundImage: {
    top: -300,
    position: "absolute",
    flex: 1,
    width: "100%",
    height: "100%"
  },
  backgroundImage1: {
    // position: "absolute",
    // height: "100%",
    // width: "100%",
    top: 500,
    position: "absolute",
    flex: 1,
    width: "100%",
    height: "100%"
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
    top: 38,
  },
  backButton: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    padding: 10,
    paddingBottom: 18,
  },
  hereIsA1: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
    color: "#01427a",
    textAlign: "center",
    top: 50,
    marginHorizontal: 18,
  },
  frameIconContainer: {
    flex: 1,
    width: "100%",
    height: 417,
    marginVertical: 16,
    alignSelf: "center",
    justifyContent: "center",
  },
  frameIcon: {
    flex: 1,
    alignSelf: "center",
    left: 15,
    width: "100%",
    height: 417
  },
  commiserations: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
    color: "#d21111",
  },
  thereWasA: {
    fontSize: 18,
    fontFamily: "Nunito-Regular",
    color: "#000"
  },
  commiserationsThereWasContainer1: {
    //lineBreak: "anywhere",
    width: "100%"
  },
  commiserationsThereWasContainer: {
    lineHeight: 24,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: 125,
    bottom: 30,
    marginHorizontal: 18,
    marginVertical: 24,
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

export default WeeklyReport;