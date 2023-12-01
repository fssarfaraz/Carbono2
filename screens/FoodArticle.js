/*
Date: 19/11/2023
Screen: FoodArticle
Purpose: Contains the display of articles for category Food
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



const FoodArticle = () => {
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
       {/* Header and back button*/}
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
          <Text style={[styles.title]}>Good nutrition is the bedrock of child survival and development.</Text>
          <ScrollView><Text style={[styles.text]}>
          Good nutrition is the bedrock of child survival, growth, and development. Well-nourished children are better able to learn, play and participate in their communities. They are also more resilient in the face of illness and crisis.

          {'\n'}{'\n'}Since 2000, the world has reduced the proportion of children under 5 suffering from stunting by one third and the number of children who are stunted by 55 million. This remarkable achievement proves that positive change for nutrition is possible and is happening at scale.

          {'\n'}{'\n'}But there is more work to be done. Today, many children are not getting the nutrition they need to survive and thrive. This is especially true for the most vulnerable children: the youngest, the poorest and those trapped by humanitarian crises.

          {'\n'}{'\n'}At least one in three children under 5 is affected by malnutrition in its most visible forms: undernutrition – both stunting and wasting – and overweight.

          {'\n'}{'\n'}Children affected by stunting – some 419 million under the age of 5 globally – are too short for their age, and their brains may never develop to their full cognitive potential, hindering their ability to learn as children, earn as adults, and contribute fully to their societies.

          {'\n'}{'\n'}Children affected by wasting – some 45 million under the age of 5 around the world – are dangerously thin for their height due to malnutrition, have weakened immune systems, and face an increased risk of disease and death. These children require urgent treatment and care to survive.

          {'\n'}{'\n'}Children affected by overweight – some 39 million under the age of 5 worldwide – are at increased risk of obesity and behavioural and emotional problems in childhood, including stigmatization, low self-esteem, and mental health problems, including depression. They also suffer an increased risk of obesity and diet-related diseases later in life.

          {'\n'}{'\n'}Less visible forms of malnutrition, such as hidden hunger, occur when children become deficient in vitamins and other essential micronutrients. These micronutrient deficiencies affect more than 340 million children under 5 globally, delaying their physical growth, weakening their immune systems, and impairing their brain development.

          {'\n'}{'\n'}Today, many countries are facing a triple burden of malnutrition – with concurrent problems of undernutrition – both stunting and wasting -- micronutrient deficiencies, and overweight and obesity.

          {'\n'}{'\n'}From early childhood, through middle childhood, and adolescence, new forces are shaping children’s diets and nutrition: globalization and urbanization, poverty and inequities, climate change and environmental crises, and epidemics and emergencies – which undermine children’s and families’ access to nutritious foods, essential nutrition services, and positive nutrition practices.  
          </Text></ScrollView>
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

export default FoodArticle;
