// React and Expo imports
import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, StatusBar, Text } from "react-native";

// External library imports
import { Button } from "@rneui/themed"; // Themed button component
import Property1HomeImage from "../components/Property1HomeImage"; // Custom image component
import { useNavigation } from "@react-navigation/native"; // Navigation hook
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";  // Style component for dark mode
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import { LinearGradient } from "expo-linear-gradient"; // Component for creating gradient effects
import { FontAwesome5 } from "@expo/vector-icons"; //Icons for UI elements

// PasswordResetSucess functional component definition
const PasswordResetSuccess = () => {
  const navigation = useNavigation(); // Hook to enable navigation actions

   // Function to navigate to a specified screen
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    // Main View container for the Password Reset Success screen
    <View style={styles.passwordResetSuccess}>
      {/* Background Ellipse Images */}
      <Image
        style={[styles.passwordResetSuccessChild, styles.passwordPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.passwordResetSuccessItem, styles.passwordPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      {/* Header with back button */}
      <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <FontAwesome5 name="chevron-left" size={30} color="#01427A" />
          </Pressable>
      </View>

     {/* Success Icon */}
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
     {/* Reset Password Title Text */}
      <Text style={styles.resetPassword}>Reset Password</Text>

       {/* Success Message */}
      <Text
        style={styles.yourPasswordHas}
      >{"Your password has been reset successfully"}</Text>
      
       {/* Continue Button to navigate to the login page */}
      <Pressable
            style={styles.nextButton1}
            onPress={() => handleNavigation("LoginPage")}
          >
            <LinearGradient
              style={styles.gradientButton}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#428DF8", "#01427a"]}
            >
              <Text style={styles.nextButtonText}>continue</Text>
            </LinearGradient>
      </Pressable>

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

//Styles for PasswordResetSuccess component
const styles = StyleSheet.create({
  iconCalculatorBtn: {
    position: "relative",
  },
  iconCalculatorBtn1: {
    width: 41,
    height: 45,
  },
  passwordPosition: {
    width: 400,
    left: 0,
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
  continueTypo: {
    height: 28,
    width: 141,
    color: Color.labelDarkPrimary,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.primaryText_size,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  passwordResetSuccessChild: {
    top: 0,
    height: 455,
  },
  passwordResetSuccessItem: {
    top: 422,
    height: 430,
  },
  icon: {
    height: "100%",
    width: "100%",
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
  iconCalculatorWrapper: {
    top: 745,
    left: 165,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  resetPassword: {
    fontSize: 36,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    textAlign: "center",
    color: Color.colorDarkslateblue_100,
    top: 300,
  },
  resetPassword1: {
    top: 417,
    left: 117,
  },
  continue: {
    marginTop: 140,
    marginLeft: -73.5,
    top: "50%",
    left: "50%",
  },
  vectorIcon: {
    height: "12.21%",
    width: "22.65%",
    top: "21.6%",
    right: "40.2%",
    bottom: "66.2%",
    left: "37.15%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  yourPasswordHas: {
    top: 445,
    fontSize: 21,
    fontFamily: FontFamily.nunitoSemiBold,
    color: "#404040",
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
    paddingRight: 40,
    paddingLeft: 40,
  },
  passwordResetSuccess: {
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
  nextButton1: {
    borderRadius: 10,
    marginTop: 16,
    marginBottom: 100,
    position: "relative",
    width: "60%",
    justifyContent: "center",
    alignSelf: "center",
    overflow: "hidden",
    position: "absolute",
    bottom: 170,
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
    top: 680,
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

// Export the PasswordResetSucess component 
export default PasswordResetSuccess;
