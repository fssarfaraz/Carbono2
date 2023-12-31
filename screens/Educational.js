/*
Date: 19/11/2023
Screen: Environmental Education Hub
Purpose: Provide a user-friendly interface for accessing environmental resources, quizzes, and educational content, 
while promoting sustainability and awareness.
*/

// Import necessary dependencies for Educational screen

import React, { useState } from "react";
// Import React and useState from React library for functional components
import { Image } from "expo-image";
// Import the Image component from Expo for displaying images
import { StyleSheet, View, Pressable, StatusBar, Text, TextInput, ScrollView, Button } from "react-native";
// Import various components and styles from React Native for UI
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
// Import the Datepicker component from UI Kitten library
import Property1HomeImage from "../components/Property1HomeImage";
// Import a custom component for a home image
import { useNavigation } from "@react-navigation/native";
// Import the useNavigation hook for navigating between screens
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
// Import a custom component for setting dark mode styles
import DateRangeContainer from "../components/DateRangeContainer";
// Import a custom component for date range selection
import { FontAwesome5 } from "@expo/vector-icons";
// Import icons from FontAwesome5
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";
// Import global styles for padding, font size, font family, and colors
import { LinearGradient } from 'expo-linear-gradient';
// Import the LinearGradient component from Expo for gradient backgrounds

// Define the functional component 'Educational'
const Educational = () => {
  // Initialize state variables
  const [selectDatePicker, setSelectDatePicker] = useState(undefined);
  const navigation = useNavigation();
  const [search, setSearch] = useState("");

  // Define a function for navigating to other screens
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    // Main container view
    <View style={[styles.calcTrack2, styles.iconLayout2]}>
      {/* Background images */}
      <Image
        style={[styles.calcTrack2Child, styles.calcLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.calcTrack2Item, styles.calcLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      
      {/* Back Button */}
      <View style={styles.backButtonContainer}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <FontAwesome5 name="chevron-left" size={30} color="#01427A" />
        </Pressable>
      </View>
      
      {/* Title */}
      <Text style={[styles.selectDateRange]}>
      REDUCING YOUR FOOTPRINT
      </Text>

      {/* Search Bar */}
      <Pressable 
          onPress={() => handleNavigation("SearchQuery")}
          // style={styles.searchIcon1}
          >
      <View style={styles.searchContainer}>
          <Text style={styles.search}>Search</Text>
          <Image style={styles.searchIcon1} 
            resizeMode="cover" 
            source={require("../assets/search.png")} />
      </View>
      </Pressable>

      
      {/* Horizontal Scroll View for Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={[styles.scrollContainer, { zIndex: 3 }]}
      >
        {/* Category Cards */}
        <Pressable style={styles.communityCard1} onPress={() => navigation.navigate("LibraryofResourcesTranspor")}>
          <LinearGradient
            colors={['#01427A', '#01427A00']} // Adjust gradient colors as needed
            style={styles.communityCard1}
          >
          {/* Replace this with your TransportCard component */}
          <View style={styles.communityCard1Child} />
          <Image
            style={styles.communityCard1Item}
            resizeMode="cover"
            source={require("../assets/blob1.png")}
          />
          <View style={styles.foodWrapper}>
            <Text style={styles.food}>Transport</Text>
          </View>
          </LinearGradient>
        </Pressable>

        <Pressable style={styles.communityCard1} onPress={() => navigation.navigate("LibraryofResourcesEnergy")}>
          {/* Replace this with your EnergyCard component */}
          <LinearGradient
            colors={['#01427A', '#01427A00']} // Adjust gradient colors as needed
            style={styles.communityCard1}
          >
          <View style={styles.communityCard1Child} />
          <Image
            style={styles.communityCard1Item}
            resizeMode="cover"
            source={require("../assets/blob2.png")}
          />
          <View style={styles.foodWrapper}>
            <Text style={styles.food}>Energy</Text>
          </View>
          </LinearGradient>
        </Pressable>

        <Pressable style={styles.communityCard1} onPress={() => navigation.navigate("LibraryofResourcesFood")}>
          {/* Replace this with your FoodCard component */}
          <LinearGradient
            colors={['#01427A', '#01427A00']} // Adjust gradient colors as needed
            style={styles.communityCard1}
          >
          <View style={styles.communityCard1Child} />
          <Image
            style={styles.communityCard1Item}
            resizeMode="cover"
            source={require("../assets/blob3.png")}
          />
          <View style={styles.foodWrapper}>
            <Text style={styles.food}>Food</Text>
          </View>
          </LinearGradient>
        </Pressable>

        <Pressable style={styles.communityCard1} onPress={() => navigation.navigate("LibraryofResourcesSocial")}>
          {/* Replace this with your FoodCard component */}
          <LinearGradient
            colors={['#01427A', '#01427A00']} // Adjust gradient colors as needed
            style={styles.communityCard1}
          >
          <View style={styles.communityCard1Child} />
          <Image
            style={styles.communityCard1Item}
            resizeMode="cover"
            source={require("../assets/blob4.png")}
          />
          <View style={styles.foodWrapper}>
            <Text style={styles.food}>Social</Text>
          </View>
          </LinearGradient>
        </Pressable>
        {/* Repeat similar category cards for Energy, Food, and Social */}
      </ScrollView>

      {/* Subtitle */}
      <View style={styles.subTitleContainer}>
        <Text style={styles.subitle1}>Top picks</Text>
      </View>

      {/* Scroll View for Top Picks */}
      <ScrollView 
          style={styles.scrollView2} 
          contentContainerStyle={styles.scrollViewContent}
          >
        <View style={styles.card1Container}>
          {/* Cards for Articles and Quiz */}
          <Pressable style={styles.card} onPress={() => handleNavigation('Articles')}>
            <Image style={styles.cardImage} source={require("../assets/card1.png")} />
            </Pressable>

          <Pressable style={styles.card} onPress={() => handleNavigation('Quiz')}>
            <Image style={styles.cardImage} source={require("../assets/card2.png")} />
            </Pressable>
          </View>
          
          <View style={styles.card2Container}>
            {/* Cards for Quiz and Video Resource */}
      
          <Pressable style={styles.card} onPress={() => handleNavigation('Quiz')}>
            <Image style={styles.cardImage} source={require("../assets/card3.png")} />
          </Pressable>

          <Pressable style={styles.card} onPress={() => handleNavigation('VideoResource')}>
            <Image style={styles.cardImage} source={require("../assets/card4.png")} />
          </Pressable>
        </View>
      </ScrollView>

       {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavBar}>
        {/* Icons for User Profile, Educational, Forum, and Games */}
        <Pressable onPress={() => handleNavigation("UserProfile")}>
          <Image style={styles.bottomNavIcon} source={require("../assets/-icon-person-outline.png")} />
        </Pressable>
        <Pressable onPress={() => handleNavigation("Educational")}>
          <Image style={styles.bottomNavIcon} source={require("../assets/-icon-book-saved3.png")} />
        </Pressable>
        <Pressable onPress={() => handleNavigation("Forum")}>
          <Image style={styles.bottomNavIcon} source={require("../assets/-icon-discussion.png")} />
        </Pressable>
        <Pressable onPress={() => handleNavigation("Games")}>
          <Image style={styles.bottomNavIcon} source={require("../assets/-icon-game-controller-outline6.png")} />
        </Pressable>
      </View>

      {/* Surface Icon */}
      <Image style={styles.surfaceIcon} resizeMode="cover" source={require("../assets/navigation-barr2.png")} />

      {/* Calculator Icon */}
      <Pressable onPress={() => handleNavigation("Calculator")} style={styles.iconCalculatorParent}>
        <Image style={styles.iconCalculator} resizeMode="cover" source={require("../assets/-icon-calculator.png")} />
      </Pressable>
    </View>
  );
};

// Define styles for the component
const styles = StyleSheet.create({
  // ... (styles omitted for brevity)
  selectDatePickerPlaceHolder: {
    fontFamily: "FiraSans-Regular",
    color: "#131414",
    fontSize: 14,
  },
  selectDatePickerValue: {
    position: "absolute",
    left: 29,
    top: 173,
  },
  iconLayout2: {
    overflow: "hidden",
    width: "100%",
  },
  calcLayout: {
    height: 330,
    width: 400,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    width: 33,
    marginLeft: 72,
  },
  selectDateRange: {
    top: 120,
    fontSize: 22,
    fontWeight: "600",
    fontFamily: "Nunito-SemiBold",
    textAlign: "left",
    position: "absolute",
    marginLeft: 30,
    marginRight: 30,
    // width: 310
  },
  line1Border: {
    // borderColor: "#131414",
    borderStyle: "solid"
  },
  option: {
    fontSize: 14,
    letterSpacing: -0.2,
    lineHeight: 18,
    fontFamily: "FiraSans-Regular",
    // color: "#131414",
    textAlign: "left"
  },
  line1: {
    borderRightWidth: 1,
    width: 1,
    height: 13,
    marginLeft: 8
  },
  iconChevrondown: {
    width: 16,
    height: 16,
    overflow: "hidden",
    marginLeft: 8
  },
  stateactive: {
    borderRadius: 5,
    borderWidth: 1,
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 12,
    paddingTop: 6,
    paddingRight: 8,
    paddingBottom: 6
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
  },
  rectangleView: {
    alignSelf: "center",
    left: 5,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    flex: 1,
    width: "90%",
    height: 436,
    top: 260,
  },
  primaryText1: {
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Inter-Medium",
    color: "#000",
    textAlign: "center",
    marginTop: 30,
    paddingLeft: 16,
    paddingRight: 16,
  },
  vectorIcon: {
    height: 2,
    top: 30,
  },
  donutIcon: {
    width: 250,
    height: 250,
    top: 50,
    alignSelf: "center",
  },
  foodParent: {
    top: 60,
    flexDirection: 'row',
    justifyContent: 'space-around', // or 'space-between' for equal space
    alignItems: 'center',
  },
  groupContainer: {
    alignItems: 'center',
    marginHorizontal: 10, // Adjust the spacing between elements
  },
  groupLayout: {
    width: 13, // Adjust the width as needed
    height: 13, // Adjust the height as needed
  },
  food: {
    // Your food text styles
  },
  energy: {
    // Your energy text styles
  },
  travel: {
    // Your travel text styles
  },
  foodTypo: {
    fontSize: 15,
    fontFamily: "Inter-Regular",
    color: "#000",
  },  
  calcTrack2Child: {
    top: 0,
  },
  calcTrack2Item: {
    top: 545,
  },
  iconCalculator: {
    width: 41,
    height: 45,
  },
  iconCalculatorWrapper: {
    top: 745,
    left: 165,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  select: {
    top: 15,
  },
  calcTrack2: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
  },
  surfaceIcon: {
    flex: 1,
    width: "100%",
    height: 135,
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
  // Add elevation to the bottomNavBar style
bottomNavBar: {
  flex: 1,
  flexDirection: "row",
  height: 70,
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 16,
  paddingBottom: 10,
  position: "relative",
  zIndex: 3,
},

  bottomNavIcon: {
    width: 30,
    height: 30,
    top: 25,
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
    zIndex: 3,
  },
  searchContainer: {
    top: 160,
    left: 30,
    position: "absolute",
    width: "80%",
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(1, 66, 122, 0.7)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  search: {
    borderRadius: 20,
    flex: 1,
    width: "100%",
    height: 40,
    fontFamily: "Nunito-semibold",
    fontSize: 16,
    color: "#fff",
    top: 10,
  },
  searchIcon1: {
    flex: 1,
    width: 20,
    height: 20,
    // overflow: "hidden"
    position: "absolute",
    right: 20
  },
  scrollContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 16,
    top: 210,
    height: 98,
    position: "absolute",
  },

  communityCard1: {
    width: 98,
    height: 98,
    marginRight: 10,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  communityCard1Child: {
    borderRadius: 16,
    width: 98,
    position: "absolute",
    height: 98,
  },
  communityCard1Item: {
    top: 10,
    borderRadius: 12,
    width: 54,
    position: "absolute",
    height: 54,
  },
  food: {
    fontSize: 15,
    lineHeight: 20,
    fontFamily: "Nunito-Regular",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 90,
  },
  foodWrapper: {
    top: 65,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 21,
    paddingVertical: 0,
    position: "absolute",
  },
  subTitleContainer: {  
    top: 360,
    // left: 30,
    position: "absolute",
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "left",
    justifyContent: "left",
    paddingHorizontal: 20,
  },
  subitle1: {
    fontSize: 13,
    lineHeight: 18,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "Roboto-Bold",
    color: "#01427a",
    textAlign: "left"
  },
  scrollView2: {
    top: 390,
    // overflow: "scroll",
    // position: "relative",
  },
  scrollViewContent: {
    marginRight: 10,
    marginLeft: 10,
    // overflow: "scroll",
  },
  card1Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "100%",
    // position: "relative",
  },
  card2Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "100%",
    // position: "relative",
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    // marginBottom: 16,
    padding: 10,
  },
  cardImage: {
    width: "100%",
    height: 236,
    borderRadius: 10,
  },
});

// Export the Educational component
export default Educational;
