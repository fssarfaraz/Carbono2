/*
Date: 19/11/2023
Screen: EnergyArticle
Purpose: Contains the display of articles for category Energy
*/

import React, { useState, useEffect } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import { calcCar } from "../components/API";
import { useRoute } from '@react-navigation/native';
import {getDatabase, ref, set} from "firebase/database";
import { getAuth} from 'firebase/auth';
import { app } from "../App";



const EnergyArticle = () => {
  const [distance, setDistanceKM] = useState("");
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

      {/* Content Container */}
      <View style={styles.contentContainer}>
       {/* Header and back button */}
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

        {/*Article text*/}
        <View style={styles.textContainer}>
          <Text style={[styles.title]}>Building climate resilient health services with sustainable energy</Text>
          <ScrollView><Text style={[styles.text]}>Today, the World Health Organization (WHO) and over 20 leaders from governments and international organizations agreed and called for action to increase climate resilience of health-care facilities and increase indoor air quality through sustainable energy.{'\n'}{'\n'} 

The Call to Action, focuses on 6 areas based on a Strategic Roadmap to promote healthier populations through clean and sustainable energy to address inequalities and health concerns caused by lack of access for clean cooking and electricity in health care facilities. Actions include: considering clean cooking and access to electricity in health-care facilities development priorities essential to protect public health; dramatically increasing public and private investments in electrifying health-care facilities and in clean cooking; and developing tailored policy and financing schemes to unlock the potential of clean and sustainable energy solutions.{'\n'}{'\n'}

An estimated hundreds of millions of people are served by health facilities lacking electricity. This limits access to essential, lifesaving medical devices and dramatically hampers the quality, accessibility and reliability of health services delivered.{'\n'}{'\n'}

“It is unacceptable that such a large portion of the population is unable to access adequate health services due to lack of electricity,” said Dr Maria Neira, WHO Director, Department of Environment, Climate Change and Health. “A person’s right to health should not be determined by where they were born, the right to universal health care is our global responsibility.”{'\n'}{'\n'}

Around one third of the global population still relies on polluting fuels to meet their basic daily energy needs for cooking. The resulting household air pollution leads to 3.2 million premature deaths each year from noncommunicable disease and pneumonia. Households that rely on polluting fuels for cooking risk creating an environment that puts often the most vulnerable communities at great risks. Cooking with polluting fuels is also the largest source of black carbon, making it responsible for around half of black carbon emissions globally.{'\n'}{'\n'} 

Unfortunately, lack of access to clean fuels and technologies starts at home. Women and children are exposed to polluted air when dirty fuels are used for cooking, as they spend the most time at home, and suffer additional risk when they have to travel far from home to gather the wood needed to cook.  Accelerating access to clean cooking will not only save millions of lives, it will also reduce greenhouse gas emissions and therefore protect our planet.{'\n'}{'\n'}

When accelerating access to clean cooking and electrifying health-care facilities, COP27 offers a great opportunity to move forward in mitigating climate change and building the resilience of health systems, protecting public health now and in the future, while saving millions of lives.  The High-Level Coalition stands ready to work with all partners at COP27 and beyond to accelerate action to ensure a healthy, clean and safe future for all.{'\n'}{'\n'} </Text></ScrollView>
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
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 90,
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },
  title: {
    justifyContent: "flex-end",
    marginTop:45,
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
    marginBottom: 25,
    fontSize: 17,
    lineHeight: 22,
    fontFamily: "Inter-Regular",
    color: "#000",
    textAlign: "left",
    // width: 342
  },
  ScrollView: {
    height: 500,
  },
  
});

export default EnergyArticle;
