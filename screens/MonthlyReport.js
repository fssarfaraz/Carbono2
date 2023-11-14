import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const MonthlyReport = () => {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

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

        <Text style={styles.hereIsA1} numberOfLines={2}>Here is a report of your monthly 
            carbon footprint emissions</Text>

        {/* Saly6 Image */}
        <View style={styles.frameIconContainer}>
          <Image style={styles.frameIcon} 
            resizeMode="cover" 
            source={require("../assets/frame82.png")} />
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

const styles = StyleSheet.create({
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
    lineBreak: "anywhere",
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

export default MonthlyReport;

