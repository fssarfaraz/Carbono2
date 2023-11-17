import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, StatusBar, Text } from "react-native";
import { Button } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";
import { FontAwesome5 } from "@expo/vector-icons";

const CalcTravel = () => {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.calcTravel}>
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

      {/* Header */}
      <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <FontAwesome5 name="chevron-left" size={30} color="#01427A" />
          </Pressable>
      </View>

      <Text style={styles.selectTypeOf}>SELECT TYPE OF TRANSPORT</Text>
      
      <View style={styles.contentContainer}>
        <View style={styles.saly6Container}>
            <Image
              style={styles.saly6Icon}
              resizeMode="contain"
              source={require("../assets/-emoji-northeast-facing-airplane.png")}
            />
          </View>

          <Pressable
            style={styles.nextButton}
            onPress={() => handleNavigation("CalcAir")}
            >
            <LinearGradient
              style={styles.gradientButton}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#E187F5C7", "#5A09C1E3"]}
            >
              <Text style={styles.nextButtonText}>Air Travel</Text>
            </LinearGradient>
          </Pressable>

          <View style={styles.saly6Container}>
            <Image
              style={styles.saly6Icon}
              resizeMode="contain"
              source={require("../assets/-icon-bus.png")}
            />
          </View>

          <Pressable
            style={styles.nextButton}
            onPress={() => handleNavigation("CalcBus")}
            >
            <LinearGradient
              style={styles.gradientButton}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#0682EF", "#094ED3"]}
            >
              <Text style={styles.nextButtonText}>Public Transport</Text>
            </LinearGradient>
          </Pressable>

          <View style={styles.saly6Container}>
            <Image
              style={styles.saly6Icon}
              resizeMode="contain"
              source={require("../assets/group5.png")}
            />
          </View>

          <Pressable
            style={styles.nextButton}
            onPress={() => handleNavigation("CalcCar")}
            >
            <LinearGradient
              style={styles.gradientButton}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#428DF8", "#428DF8"]} 
            >
              <Text style={styles.nextButtonText}>Car/Motor Vehicle</Text>
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
  materialSymbolsarrowBackIoIconBtn: {
    left: 23,
    top: 50,
    position: "absolute",
  },
  materialSymbolsarrowBackIoIconBtn1: {
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  Layout2: {
    width: 33,
    marginLeft: 72,
  },
  iconLayout3: {
    height: 30,
    width: 30,
  },
  frameLayout: {
    height: "5.99%",
    width: "73.54%",
    position: "absolute",
  },
  iconLayout1: {
    borderRadius: Border.br_31xl,
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconPosition: {
    left: "36.39%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  airTravelTypo: {
    height: 41,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.labelDarkPrimary,
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  ellipse1: {
    top: -115,
    height: 400,
    width: 550,
    left: -210,
    position: "absolute",
  },
  ellipse2: {
    top: 545,
    height: 400,
    width: 550,
    left: 0,
    position: "absolute",
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
    left: 24,
    width: 385,
    flexDirection: "row",
    alignItems: "flex-end",
    position: "absolute",
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
  selectTypeOf: {
      fontSize: FontSize.size_3xl,
      color: Color.colorDarkslateblue_100,
      textAlign: "center",
      fontFamily: FontFamily.nunitoBold,
      fontWeight: "700",
      position: "absolute",
      top: 120,
      left: 0,
      right: 0,
  },
  pressable: {
    backgroundColor: "transparent",
  },
  wrapper: {
    top: "35.8%",
    bottom: "58.22%",
    right: "12.72%",
    left: "13.74%",
    width: "73.54%",
  },
  container: {
    left: "12.98%",
    top: "58.69%",
    right: "13.49%",
    bottom: "35.33%",
  },
  icon: {
    borderRadius: Border.br_31xl,
    height: "100%",
    width: "100%",
  },
  frame: {
    top: "79.58%",
    bottom: "14.44%",
    right: "12.72%",
    left: "13.74%",
    width: "73.54%",
  },
  emojiNorthEastFacingAirpl: {
    height: "10.56%",
    width: "22.9%",
    top: "25.23%",
    right: "39.95%",
    bottom: "64.2%",
    left: "37.15%",
    position: "absolute",
  },
  groupIcon: {
    height: "8.7%",
    width: "27.99%",
    top: "70.88%",
    right: "35.62%",
    bottom: "20.42%",
  },
  iconBus: {
    height: "11.33%",
    width: "25.78%",
    top: "47.54%",
    right: "37.84%",
    bottom: "41.14%",
  },
  airTravel: {
    top: 310,
    left: 105,
    width: 187,
    height: 41,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.labelDarkPrimary,
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  carmotorVehicles1: {
    width: 215,
    height: 41,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.labelDarkPrimary,
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
  },
  carmotorVehicles: {
    left: 91,
    top: 683,
    position: "absolute",
  },
  publicTransport: {
    top: 505,
    left: 104,
    width: 187,
    height: 41,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.labelDarkPrimary,
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  calcTravel: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    top: 60,
    left: 20,
  },
  backButton: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    padding: 10,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  saly6Container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  saly6Icon: {
    height: 80,
    width: 80,
  },
  nextButton: {
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 10,
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
    letterSpacing: 0.5,
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
});

export default CalcTravel;
