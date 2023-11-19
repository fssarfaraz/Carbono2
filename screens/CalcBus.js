import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View, Picker } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import { SelectList } from 'react-native-dropdown-select-list'

const CalcBus = () => {
  const [transportType, setTransportType] = useState("");
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  const [selected, setSelected] = React.useState("");
  
  const data = [
      {key:'1', value:'Taxi', lable: 'Taxi'},
      {key:'2', value: "Classic Bus", label: "Classic Bus" },
      {key:'3', value: "Eco Bus", label: "Eco Bus"},
      {key:'4', value: "Coach", label: "Coach"},
      {key:'5', value: "National Train", label: "National Train"},
      {key:'6', value: "Light Rail", label: "Light Rail"},
      {key:'7', value: "Subway", label: "Subway"},
      {key:'8', value: "Ferry On Foot", label: "Ferry On Foot"},
      {key:'9', value: "Ferry In Car", label: "Ferry In Car"}
    ]
    
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        style={[styles.calcElectricity2Child, styles.calcLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.calcElectricity2Item, styles.calcLayout]}
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

        <Text style={styles.headerTitle}>ENTER THE TYPE OF PUBLIC TRANSPORT YOU TAKE</Text>

        {/* Saly6 Image */}
        <View style={styles.saly3Container}>
          <Image
            style={styles.saly3Icon}
            resizeMode="contain"
            source={require("../assets/saly5.png")}
          />
        </View>

        <View style={styles.selectListContainer}>
          {/* <LinearGradient
            style={styles.inputContainer}
            locations={[0, 1]}
            colors={["#0682ef", "#094ed3"]}
          > */}
            <SelectList 
              setSelected={(val) => setSelected(val)} 
              data={data} 
              save="value"
              placeholder={"Select Type of Transport"}
            />
          {/* </LinearGradient> */}
        </View>

        {/* Next Button */}
        <Pressable
          style={styles.nextButton}
          onPress={() => handleNavigation("CalcCar2")}
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
  calcLayout: {
    height: 330,
    width: 400,
    left: 0,
    position: "absolute",
  },
  calcElectricity2Child: {
    left: 100,
    top: 0,
  },
  calcElectricity2Item: {
    top: 545,
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
    top: 125
  },
  backButton: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    padding: 14,
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
    paddingHorizontal: 16,
  },
  saly3Container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  saly3Icon: {
    height: 482,
    width: "100%",
  },
  inputContainer: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
    color: "#fff",
    textAlign: "center",
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
  selectListContainer: {
    width: "80%",
    alignSelf: "center"
  },
  gradientButton: {
    padding: 16,
    alignItems: "center",
  },
  inputContainer: {
    borderRadius: 10,
    marginBottom: 16,
    width: "94%",
    alignSelf: "center",
  },
  selectListText: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
    color: "#fff",
    textAlign: "center"
  },
  
});

export default CalcBus;