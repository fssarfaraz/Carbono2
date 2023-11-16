import * as React from "react";
import { Image, ScrollView, StyleSheet, View, Pressable, Text, TouchableHighlight } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import EnergyCard from "../components/EnergyCard";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const Calculator = () => {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.calculator}>
       {/* Background Images */}
       <Image style={[styles.calcTrackChild, styles.calcLayout]} 
        contentFit="cover" 
        source={require("../assets/ellipse-3.png")} 
        />

      <Image style={[styles.calcTrackItem, styles.calcLayout]} 
        contentFit="contain" 
        source={require("../assets/ellipse-3.png")}
        />

      {/* Back Button */}
      <View style={styles.backButtonContainer}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <FontAwesome5 name="chevron-left" size={30} color="#01427A" />
        </Pressable>
      </View>

      {/* Header Buttons */}
      <View style={styles.headerButton}>
        <TouchableHighlight
          style={[styles.trackingSwitch, styles.trackingLayout]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Calculator")}
        >
          <>
            <LinearGradient
              style={[styles.trackingSwitchChild, styles.trackingLayout]}
              locations={[0, 1]}
              colors={["#fff", "rgba(255, 255, 255, 0.46)"]}
            />
            <Text style={styles.calculate}>Calculate</Text>
          </>
        </TouchableHighlight>

        <Pressable style={[styles.alternativesSwitch, styles.trackingLayout]}>
          <LinearGradient
            style={[styles.trackingSwitchChild, styles.trackingLayout]}
            locations={[0, 1]}
            colors={["#428df8", "rgba(66, 141, 248, 0.42)"]}
          />
          <Text style={[styles.track, styles.trackTypo]}>Track</Text>
        </Pressable>
      </View>
    
      <View style={styles.carbonFootprintCalculator}>
        <Text style={styles.selectCategoryTypo}>{"Carbon Footprint Calculator"}</Text>
        <Text style={styles.selectCategory}>SELECT CATEGORY</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        <Pressable style={styles.communityCard1} onPress={() => navigation.navigate("CalcEnergy")}>
          {/* Replace this with your EnergyCard component */}
          <View style={styles.communityCard1Child} />
          <Image
            style={styles.communityCard1Item}
            resizeMode="cover"
            source={require("../assets/rectangle-56.png")}
          />
          <View style={styles.foodWrapper}>
            <Text style={styles.food}>Energy</Text>
          </View>
        </Pressable>

        <Pressable style={styles.communityCard1} onPress={() => navigation.navigate("CalcTravel")}>
          {/* Replace this with your TravelCard component */}
          <View style={styles.communityCard1Child} />
          <Image
            style={styles.communityCard1Item}
            resizeMode="cover"
            source={require("../assets/rectangle-561.png")}
          />
          <View style={styles.foodWrapper}>
            <Text style={styles.food}>Travel</Text>
          </View>
        </Pressable>

        <Pressable style={styles.communityCard1} onPress={() => navigation.navigate("CalcFood")}>
          {/* Replace this with your FoodCard component */}
          <View style={styles.communityCard1Child} />
          <Image
            style={styles.communityCard1Item}
            resizeMode="cover"
            source={require("../assets/rectangle-562.png")}
          />
          <View style={styles.foodWrapper}>
            <Text style={styles.food}>Food</Text>
          </View>
        </Pressable>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavBar}>
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

const styles = StyleSheet.create({
  calculatorLayout: {
    height: 330,
    width: 400,
    left: 0,
    position: "absolute",
  },
  calcTrackItem: {
    // top: 545,
    top: 400,
    height: 430
  },
  calcLayout: {
    width: 430,
  },
  calcTrackChild: {
    height: 255,
    top: 0,
    right: 140,
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
  travelWrapperFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout: {
    width: 33,
    marginLeft: 72,
  },
  iconLayout1: {
    height: 30,
    width: 30,
  },
  carbonFootprintCalculator: {
    top: 200,
    alignItems: "left",
    justifyContent: "left",
    textAlign: "left",
    position: "absolute",
    paddingHorizontal: Padding.p_2xl,
  },
  selectCategoryTypo: {
    fontSize: 30,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
    textAlign: "left"
  },
  selectCategory: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Roboto-Bold",
    color: "#01427a",
    textAlign: "left",
    top: 40,
  },
  communityLayout: {
    height: 185,
    width: 164,
    position: "absolute",
  },
  selectTypo: {
    textAlign: "center",
    fontFamily: FontFamily.nunitoMedium,
    color: Color.labelDarkPrimary,
    fontWeight: "500",
  },
  trackingLayout: {
    height: 51,
    width: 165,
    position: "absolute",
  },
  trackTypo: {
    fontSize: FontSize.bodyBody1_size,
    top: 13,
    textAlign: "center",
    position: "absolute",
  },
  calculatorChild: {
    top: 0,
    width: 400,
  },
  calculatorItem: {
    top: 545,
  },
  iconBookSaved: {
    height: 31,
    marginLeft: 72,
  },
  iconDiscussion: {
    marginLeft: 72,
  },
  iconGameControllerOutline: {
    height: 24,
    marginLeft: 72,
  },
  iconPersonOutlineParent: {
    top: 807,
    width: 385,
    alignItems: "flex-end",
    left: 24,
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
  communityCard3Child: {
    borderRadius: Border.br_base,
    backgroundColor: Color.colorWhitesmoke_100,
    left: 0,
    top: 0,
  },
  communityCard3Item: {
    top: 15,
    left: 15,
    borderRadius: Border.br_xs,
    width: 134,
    height: 100,
    position: "absolute",
  },
  select: {
    top: 152,
    left: 62,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  travel: {
    fontSize: FontSize.primaryText_size,
  },
  travelWrapper: {
    top: 137,
    left: 39,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorDodgerblue_100,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: 0,
    overflow: "hidden",
  },
  communityCard3: {
    top: 379,
    left: 211,
  },
  trackingSwitchChild: {
    borderRadius: Border.br_sm,
    backgroundColor: "transparent",
    left: 0,
    top: 0,
  },
  calculate: {
    left: 43,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.labelDarkPrimary,
    top: 13,
  },
  trackingSwitch: {
    left: 20,
    top: 71,
    width: 165,
  },
  track: {
    left: 60,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.black,
    top: 13,
    fontWeight: "500",
  },
  alternativesSwitch: {
    left: 205,
    top: 71,
    width: 165,
  },
  calculator: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
  trackTypo: {
    color: Color.labelDarkPrimary,
    textAlign: "center",
    // fontSize: FontSize.bodyBody1,
    fontSize: 18,
  },
  track: {
    left: 60,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    top: 13,
    color: Color.labelDarkPrimary,
    position: "absolute",
  },
  trackingSwitchChild: {
    borderRadius: Border.br_sm,
    backgroundColor: "transparent",
    width: 165,
    left: 0,
    top: 0,
  },
  trackingLayout: {
    height: 51,
    width: 165,
    position: "absolute",
  },
  alternativesSwitch: {
    left: 205,
    top: 71,
    width: 165,
  },
  calculate: {
    left: 43,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorGray_400,
    textAlign: "center",
    fontSize: FontSize.bodyBody1_size,
    top: 13,
    position: "absolute",
  },
  trackingLayout: {
    height: 51,
    width: 165,
    position: "absolute",
  },
  trackingSwitch: {
    left: 20,
    top: 71,
    width: 165,
  },
  headerButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 54,
    width: "100%",
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
  bottomNavIcon: {
    width: 30,
    height: 30,
    top: 70,
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
  scrollContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 16,
    bottom: 200,
    height: 225,
    position: "absolute",
    // height: "100%",
  },
  communityCard1: {
    width: 164,
    marginRight: 10,
    // height: "100%",
  },
  communityCard1Child: {
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#f2f2f2",
    width: 164,
    position: "absolute",
    height: 225,
  },
  communityCard1Item: {
    top: 15,
    left: 15,
    borderRadius: 12,
    width: 134,
    position: "absolute",
    height: "65%",
  },
  food: {
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Nunito-Medium",
    color: "#fff",
    textAlign: "center",
  },
  foodWrapper: {
    top: 180,
    left: 39,
    borderRadius: 6,
    backgroundColor: "#428df8",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 21,
    paddingVertical: 0,
    position: "absolute",
  },
});

export default Calculator;
