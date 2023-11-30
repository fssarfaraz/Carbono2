import React, { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { Color, Padding } from "../GlobalStyles";

const SearchQuery = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      {/* Background Images */}
      <Image style={styles.backgroundImage} source={require("../assets/ellipse-3.png")} />
      <Image style={styles.backgroundImage2} source={require("../assets/ellipse-3.png")} />

      {/* Back Button */}
      <View style={styles.backButtonContainer}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <FontAwesome5 name="chevron-left" size={30} color="#01427A" />
        </Pressable>
      </View>

      {/* Title */}
      <Text style={styles.title}>REDUCING YOUR FOOTPRINT</Text>

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.search}
          value={search}
          onChangeText={setSearch}
          placeholder="Search"
          placeholderTextColor="#fff"
          fontSize={18}
          zIndex={32}
        /> 
        <Pressable 
          onPress={() => handleNavigation("SearchResults")}
          style={styles.searchIcon}
        >
          <Image style={styles.searchIcon} resizeMode="cover" source={require("../assets/search.png")} />
        </Pressable>
        {/* <Image style={styles.searchIcon} resizeMode="cover" source={require("../assets/search.png")} /> */}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavBar}>
        {/* Navigation Icons */}
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

const styles = {
  container: {
    flex: 1,
    backgroundColor: Color.labelDarkPrimary,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
  backgroundImage: {
    height: 330,
    width: 400,
    right: 100,
    position: "absolute",
  },
  backgroundImage2: {
    height: 630,
    width: 600,
    left: 100,
    position: "absolute",
    top: 430,
  },
  backButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 54,
    left: 16,
    zIndex: 30,
  },
  backButton: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    padding: 10,
  },
  title: {
    top: 120,
    fontSize: 22,
    fontWeight: "600",
    fontFamily: "Nunito-SemiBold",
    textAlign: "left",
    position: "absolute",
    marginLeft: 30,
    marginRight: 30,
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
    zIndex: 32,
  },
  search: {
    borderRadius: 20,
    flex: 1,
    width: "100%",
    height: 40,
    fontFamily: "Nunito-Regular",
    fontSize: 16,
    color: "#fff", // Add this line for text color
  },
  searchIcon: {
    flex: 1,
    width: 20,
    height: 20,
    position: "absolute",
    right: 10,
    zIndex: 32,
  },
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
    top: 365,
    zIndex: 30,
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
  surfaceIcon: {
    flex: 1,
    width: "100%",
    height: 135,
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
};

export default SearchQuery;
