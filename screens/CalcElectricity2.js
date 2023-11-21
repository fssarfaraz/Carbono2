import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import { useRoute } from '@react-navigation/native';
import {getDatabase, ref, set} from "firebase/database";
import { getAuth} from 'firebase/auth';
import { app } from "../App";
import { CalcElec } from "../components/API";
import { SelectList } from 'react-native-dropdown-select-list'
 
const CalcElectricity2 = () => {
  const [location, setLocation] = useState("");
  const navigation = useNavigation();
 
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };
 
  const data = [
    {key:'1', value: "USA", label: "USA"},
    {key:'2', value: "Canada", label: "Canada" },
    {key:'3', value: "UK", label: "UK"},
    {key:'4', value: "Europe", label: "Europe"},
    {key:'5', value: "Africa", label: "Africa"},
    {key:'6', value: "LatinAmerica", label: "Latin America"},
    {key:'7', value: "MiddleEast", label: "Middle East"},
    {key:'8', value: "OtherCountry", label: "Other"},
  ]
 
  const route = useRoute();
 
  const {ConsumptionKwh} = route.params;
  console.log("Consumption: ", ConsumptionKwh);
 
  // Create a reference to the database
  const database = getDatabase();
  const auth = getAuth(app);
  const user = auth.currentUser;
  const email = user.email;
 
  // Split email on "@"
  const emailParts = email.split('@');
  // Get first part (before "@")
  const emailName = emailParts[0];
 
  const addToDatabase = async (result) => {
    // Get the current date
    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0];
    const type = 'electricity';
    const key = `${formattedDate}-${emailName}-${type}`;
    const entry =
    {
      email: email,
      type: type,
      date: formattedDate,
      result: result
    };
    // Set the user data in the database
    set(ref(database, 'footprint-energy/' + key), entry).then(() =>
    {
    }).catch((error) =>
    {
      // An error occurred
      alert("Error adding to database: " + error.message);
    });
  }
 
  const handleSubmit = async () => {
    if(!location)
    {
      alert('Please enter distance');
      return;
    }
 
    try
    {
      console.log('Calling calcElec with:', ConsumptionKwh, location);
      const result = await CalcElec(ConsumptionKwh, location);
      try
      {
        await addToDatabase(result);
        console.log('Added to database');
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
 

  return (
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
 
        <Text style={styles.headerTitle}>ENTER THE COUNTRY OR CONTINENT PROVIDING THE ENERGY</Text>
 
        {/* Saly6 Image */}
        <View style={styles.saly3Container}>
          <Image
            style={styles.saly3Icon}
            source={require("../assets/saly44.png")}
          />
        </View>
 
        {/* Vehicle Type Input */}
        <View style={styles.selectListContainer}>
            <SelectList
              setSelected={(val) => setLocation(val)}
              data={data}
              save="value"
              placeholder={"Select Location"}
            />
        </View>
 
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
  ellipse1: {
    top: -115,
    height: 400,
    width: 530,
    left: -210,
    position: "absolute",
  },
  ellipse2: {
    top: 545,
    height: 400,
    width: 550,
    left: 10,
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
    top: 20,
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
    top: 105,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
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
 
export default CalcElectricity2;
 
 