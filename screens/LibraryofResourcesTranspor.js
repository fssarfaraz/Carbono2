import React, { useState } from "react";
import { Image, Pressable, Text, TextInput, View, ScrollView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";
import { LinearGradient } from 'expo-linear-gradient';

const LibraryofResourcesTranspor = () => {
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
      {/* <Text style={styles.title1}>REDUCING YOUR FOOTPRINT</Text> */}

      <Text style={[styles.selectDateRange]}>
         Library of Resources Transport
      </Text>

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
      </View>

      {/* make the entire content container scrollable vertically and keep the visuals behind the surfaceIcon */}
      <ScrollView style={styles.contentContainer}>
      <View style={styles.section1TitleCont}>
            <Text style={styles.subitle1}>Top Picks</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={[styles.scrollContainer, { zIndex: 3 }]}
          >
            <Pressable style={styles.communityCard1} onPress={() => navigation.navigate("LibraryofResourcesEnergy")}>
              <LinearGradient
                colors={['#01427A', '#01427A00']} // Adjust gradient colors as needed
                style={styles.communityCard1}
              >
              {/* Replace this with your TransportCard component */}
              <View style={styles.communityCard1Child} />
              <Image
                style={styles.communityCard1Item}
                resizeMode="cover"
                source={require("../assets/trans_card1.png")}
              />
              {/* <View style={styles.foodWrapper}>
                <Text style={styles.food}>Transport</Text>
              </View> */}
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
                source={require("../assets/trans_card2.png")}
              />
              {/* <View style={styles.foodWrapper}>
                <Text style={styles.food}>Energy</Text>
              </View> */}
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
                source={require("../assets/trans_card3.png")}
              />
              {/* <View style={styles.foodWrapper}>
                <Text style={styles.food}>Food</Text>
              </View> */}
              </LinearGradient>
            </Pressable>
          </ScrollView>
          
          <View style={styles.newArrivalCont}>
          <View style={styles.section1TitleCont}>
            <Text style={styles.subitle1}>New Arrivals</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={[styles.scrollContainer, { zIndex: 3 }]}
          >
            <Pressable style={styles.communityCard1} onPress={() => navigation.navigate("LibraryofResourcesEnergy")}>
              <LinearGradient
                colors={['#01427A', '#01427A00']} // Adjust gradient colors as needed
                style={styles.communityCard1}
              >
              {/* Replace this with your TransportCard component */}
              <View style={styles.communityCard1Child} />
              <Image
                style={styles.communityCard1Item}
                resizeMode="cover"
                source={require("../assets/trans_card4.png")}
              />
              {/* <View style={styles.foodWrapper}>
                <Text style={styles.food}>Transport</Text>
              </View> */}
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
                source={require("../assets/trans_card5.png")}
              />
              {/* <View style={styles.foodWrapper}>
                <Text style={styles.food}>Energy</Text>
              </View> */}
              </LinearGradient>
            </Pressable>

            <Pressable style={styles.communityCard1} onPress={() => navigation.navigate("LibraryofResourcesEnergy")}>
              {/* Replace this with your FoodCard component */}
              <LinearGradient
                colors={['#01427A', '#01427A00']} // Adjust gradient colors as needed
                style={styles.communityCard1}
              >
              <View style={styles.communityCard1Child} />
              <Image
                style={styles.communityCard1Item}
                resizeMode="cover"
                source={require("../assets/trans_card6.png")}
              />
              {/* <View style={styles.foodWrapper}>
                <Text style={styles.food}>Food</Text>
              </View> */}
              </LinearGradient>
            </Pressable>
          </ScrollView>
          
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={[styles.scrollContainer, { zIndex: 3 }]}
          >
            <Pressable style={styles.communityCard1} onPress={() => navigation.navigate("LibraryofResourcesEnergy")}>
              <LinearGradient
                colors={['#01427A', '#01427A00']} // Adjust gradient colors as needed
                style={styles.communityCard1}
              >
              {/* Replace this with your TransportCard component */}
              <View style={styles.communityCard1Child} />
              <Image
                style={styles.communityCard1Item}
                resizeMode="cover"
                source={require("../assets/trans_card7.png")}
              />
              {/* <View style={styles.foodWrapper}>
                <Text style={styles.food}>Transport</Text>
              </View> */}
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
                source={require("../assets/trans_card8.png")}
              />
              {/* <View style={styles.foodWrapper}>
                <Text style={styles.food}>Energy</Text>
              </View> */}
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
                source={require("../assets/trans_card9.png")}
              />
              {/* <View style={styles.foodWrapper}>
                <Text style={styles.food}>Food</Text>
              </View> */}
              </LinearGradient>
            </Pressable>
          </ScrollView>
          </View>

      </ScrollView>

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
  title1: {
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
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 4,
  },
  bottomNavIcon: {
    width: 30,
    height: 30,
    bottom: 25,
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
    zIndex: 3,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "column",
    position: "absolute",
    top: 220,
    left: 0,
    zIndex: 2, // Adjust the zIndex
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    marginRight: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 16,
    backgroundColor: "rgba(242, 242, 242, 0.22)",
    minimumHeight: 128,
    width: "100%",
    
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    flex: 1,
    marginLeft: 20,
  },
  image: {
    width: "100%",
    height: 100,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
    color: "#000",
  },
  description: {
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: 10,
    fontWeight: "500",
    fontFamily: "Nunito-Medium"
  },
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    position: "absolute",
    // top: 200,
    left: 0,
    right: 0,
    zIndex: 4,
  },
  communityCard1: {
    width: 143,
    height: 154,
    marginRight: 10,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  communityCard1Child: {
    borderRadius: 16,
    width: "100%",
    position: "absolute",
    height: 154,
  },
  communityCard1Item: {
    // top: 10,
    borderRadius: 12,
    width: "100%",
    height: "100%",
    position: "absolute",
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
  section1TitleCont: {
    // top: 190,
    left: 30,
    position: "absolute",
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "left",
    justifyContent: "left",
    paddingHorizontal: 20,
  },
  scrollContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    height: 154,
    width: "100%",
  },
  newArrivalCont: {
    top: 30,
    width: "100%",
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
};

export default LibraryofResourcesTranspor;
