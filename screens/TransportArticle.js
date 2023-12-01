/*
Date: 19/11/2023
Screen: TransportArticle
Purpose: Contains the display of articles for category Transport
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



const Articles = () => {
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
          <Text style={[styles.title]}>Towards a safe journey, every time: improving passenger ship safety in the Philippines</Text>
          <ScrollView><Text style={[styles.text]}>In the vast archipelago of the Philippines, where water is an integral part of daily life, the safety of domestic passenger ships is a pressing concern. Risks to passengers and crew – including drowning – must be addressed.{'\n'}{'\n'}

In 2021, the International Maritime Organization (IMO), in partnership with the World Bank Group (WBG), including the International Finance Cooperation (IFC), started working on a project to enhance the safety of domestic passenger ships and reduce carbon emission from them.{'\n'}{'\n'}

This project was designed to identify critical needs and implement comprehensive measures to address identified safety issues. The project team was comprised of the World Maritime University (WMU), the University of Strathclyde in the United Kingdom, and various stakeholders in the Philippines such as the Department of Transportation, Maritime Industry Authority (MARINA), and the Coast Guard (PCG), the Philippines Port Authority (PPA), and the representatives from the industry. The experts set out to enhance safety regulations and practices for domestic passenger ships across the country, among other measures.{'\n'}{'\n'}

“The project, while contributing to enhanced safety of domestic passenger vessels in the Philippines, will also contribute to the United Nations Sustainable Development Goals (SDGs) 8, 9, 14, and 17 by reducing risk to the safety of life onboard passenger ships including drowning and, reducing the potential of marine environment pollution resulting from marine accidents." said Dr. Heike Deggim, Director of the Maritime Safety Division of IMO.”{'\n'}{'\n'}

Through the project, IMO has provided comprehensive recommendations which cover essential aspects of domestic ferry safety, including vessel classification, training facilities, safety management, embarkation controls, and occupational health and safety matters. These recommendations are poised to transform the safety landscape of domestic passenger ships, promoting clarity in the responsibilities of authorities, while ensuring the welfare of passengers and crew.{'\n'}{'\n'}

This is only the beginning. As a next step, experts will test the efficacy of the implemented measures. By continuously evaluating and improving safety inspection and monitoring procedures, it is expected that this type of holistic approach will contribute to the overall safety system, including regulatory, technical and operational, relating to domestic ferries in the Philippines in a sustainable manner.{'\n'}{'\n'}

Through this work, the IMO has played a pivotal role in providing specific recommendations to the Philippine authorities to bolster the safety standards of domestic passenger ships. These recommendations encompass short, medium, and long-term strategies aimed at ensuring the well-being of passengers and crew members alike. There is strong potential to roll-out this work to other countries requiring similar assistance.{'\n'}{'\n'}

“Ensuring that people remain safe while travelling over water for daily purposes, such as to access employment or education, is a necessary component of drowning prevention which is tied closely to equity.” said Dr David Meddings, Technical Lead for Drowning Prevention at WHO. "Through the newly established WHO global alliance on drowning prevention, we will collaborate closely with IMO and other organizations to address risk factors for drowning during routine commutes, ensuring that all people have access to safe and reliable transport over water, no matter where they live.”{'\n'}{'\n'}
https://www.imo.org/en/MediaCentre/Pages/WhatsNew-1792.aspx</Text></ScrollView>
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

export default Articles;
