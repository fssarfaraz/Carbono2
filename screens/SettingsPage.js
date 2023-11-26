/*  
Date: 19-11-2023
Screen: SettingsPage
Purpose: The SettingsPage in the Carbono app allows users to manage their profile, 
customize settings, access support, and securely log out, enhancing user experience and security.
*/

// React and Expo imports
import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  View,
  StatusBar,
  Text,
  ImageBackground,
} from "react-native";

// External library imports
import { Button } from "@rneui/themed"; // Themed button component
import Property1HomeImage from "../components/Property1HomeImage";
import { useNavigation } from "@react-navigation/native"; // Navigation hook
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import SupportCard from "../components/SupportCard";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";
import { FontAwesome5 } from "@expo/vector-icons"; // Icons for UI elements
import { LinearGradient } from "expo-linear-gradient"; // Component for creating gradient effects

// SettingsPage functional component definition
const SettingsPage = () => {
  const navigation = useNavigation(); // Initializing navigation hook

  // Function to navigate to a specified screen
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (

    <View style={styles.settingsPage}>
       {/* Background Ellipse Images */}
      <Image
        style={styles.settingsPageChild}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={styles.settingsPageItem}
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

       {/* Settings Title */}
      <View style={styles.settingContainer}>
        <Text style={styles.settings}>SETTINGS</Text>
      </View>

    {/* General Section Container */}
      <View style={styles.generalContainer}>
        <View style={styles.textBackground}>
          <Text style={styles.supportTypo}>GENERAL</Text>
        </View>
      </View>
    {/* General Section with Options */}
      <View style={styles.generalSectionContainer}>
        {/* Next Button */}
        <View style={styles.generalContainer1}>
          {/* Edit Profile Option */}
          <View style={styles.editProfileContainer}>
            <Pressable
              style={styles.nextButton}
              onPress={() => handleNavigation("EditProfile")}
            >
              <Text style={styles.nextButtonText}>Edit Profile</Text>

            <Image style={[styles.iconamoonprofilelight]} 
                resizeMode="cover" 
                source={require("../assets/iconamoonprofilelight.png")} 
            />
            </Pressable>
          </View>
      {/* Notification Option */}
          <View style={styles.notificationContainer}>
            <Pressable
              style={styles.nextButton}
              onPress={() => handleNavigation("UserProfile")}
            >
              <Text style={styles.nextButtonText}>Notification</Text>

              <Image style={[styles.iconamoonnotification1]} 
                resizeMode="cover" 
                source={require("../assets/iconamoonnotification.png")} />
            </Pressable>
          </View>

    {/* Password Reset Option */}
          <View style={styles.passwordResetContainer}>
            <Pressable
              style={styles.nextButton}
              onPress={() => handleNavigation("PasswordResetInApp")}
            >
              <Text style={styles.nextButtonText}>Password Reset</Text>

              <ImageBackground style={styles.padlockOutlineIcon1} 
                resizeMode="cover" 
                source={require("../assets/padlockoutline.png")} />
            </Pressable>
          </View>
        </View>
      </View>

    {/* Support Section Container */}
      <View style={styles.supportContainer}>
        <View style={styles.supportTextBackground}>
          <Text style={styles.supportTypo1}>SUPPORT</Text>
        </View>
      </View>

    {/* Support Section with Options */}
      <View style={styles.supportSectionContainer}>
        {/* Next Button */}
        <View style={styles.supportContainer1}>
          <View style={styles.helpContainer}>
            <Pressable
              style={styles.nextButton}
              onPress={() => handleNavigation("EditProfile")}
            >
              <Text style={styles.nextButtonText}>Help & Support</Text>

            <Image style={[styles.helpicon]} 
                resizeMode="cover" 
                source={require("../assets/iconamoonprofilelight.png")} 
            />
            </Pressable>
          </View>

    {/* Terms and Policies Option */}
          <View style={styles.termsContainer}>
            <Pressable
              style={styles.nextButton}
              onPress={() => handleNavigation("UserProfile")}
            >
              <Text style={styles.nextButtonText}>Terms and Policies</Text>

              <Image style={[styles.termsIcon]} 
                resizeMode="cover" 
                source={require("../assets/iconamoonnotification.png")} />
            </Pressable>
          </View>

        </View>
      </View>

    {/* Account Section Container */}
      <View style={styles.accountContainer}>
        <View style={styles.accountBackground}>
          <Text style={styles.accountTypo}>ACCOUNT</Text>
        </View>
      </View>

    {/* Log Out Option */}
      <View style={styles.rectangleView}>
        <Pressable 
          onPress={() => handleNavigation("LoginPage")}>
        <Image style={styles.vectorIcon1} resizeMode="cover" source={require("../assets/Vector.png")} />
        <Text style={styles.logOut}>LOG OUT</Text>
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
  iconCalculatorBtn: {
    position: "relative",
  },
  iconCalculatorBtn1: {
    width: 41,
    height: 45,
  },
  
  materialSymbolsarrowBackIoIconBtn: {
    left: 41,
    top: 91,
    position: "absolute",
  },
  materialSymbolsarrowBackIoIconBtn1: {
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  rectangleIconLayout: {
    width: 358,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  groupChildLayout: {
    height: 165,
    width: 335,
    left: "50%",
    position: "absolute",
  },
  settingsPageChild: {
    left: 26,
    height: 369,
    width: 400,
    top: 0,
    position: "absolute",
  },
  settingsPageItem: {
    top: 472,
    height: 380,
    left: 0,
    width: 400,
    position: "absolute",
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
  rectangleIcon: {
    top: 574,
    left: 15,
    height: 33,
  },
  settingsPageChild1: {
    top: 407,
    height: 37,
    left: 17,
  },
  support: {
    top: 416,
    left: 9,
  },
  account: {
    top: 583,
    left: 7,
  },
  rectangleParent: {
    marginLeft: -179.5,
    top: 221,
  },
  settingsPage: {
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
  settingContainer: {
    top: 91,
    width: 206,
    height: 41,
    position: "absolute",
    alignSelf: "center",
  },
  settings: {
    textAlign: "center",
    fontSize: FontSize.size_7xl,
    letterSpacing: 1,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    width: 206,
    height: 41,
    textAlign: "center",
    color: Color.colorDarkslateblue_100,
    position: "absolute",
  },
  generalContainer: {
    top: 169,
    width: "100%",
    position: "absolute",
    alignSelf: "left", 
    paddingLeft: 20, 
    paddingRight: 20, 
  },
  textBackground: {
    width: "100%", 
    borderRadius: 7, 
    backgroundColor: "#428DF829", 
    padding: 5, 
  },
  supportTypo: {
    height: 28,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.body15Regular_size,
    textAlign: "left",
    color: Color.colorDarkslateblue_100,
    padding: 5,
    left: 10,
    letterSpacing: 1,
  },
  generalSectionContainer: {
    flex: 1,
    top: 230,
    width: "100%",
    position: "absolute",
    alignSelf: "left", 
    paddingTop: 20, 
  },
  generalContainer1: {
    top: 0,
    width: "90%",
    position: "absolute",
    alignSelf: "left", 
    
    borderRadius: 10,
    backgroundColor: "rgba(36, 39, 96, 0.05)",
    height: 155,
    marginLeft: 20, 
    marginRight: 20, 
  },
  editProfileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    top: 0,
    width: "100%",
    position: "absolute",
    alignSelf: "left",   
    paddingRight: 20, 
    paddingTop: 20, 
  },
  iconamoonprofilelight: {
    width: 24,
    height: 24,
    position: "absolute",
    right: 10,
    left: 25
  },
  nextButton: {
    left: 10,
  },
  nextButtonText: {
    left: 100,
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Nunito-SemiBold",
    textAlign: "right",
  },
  notificationContainer: {
    top: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    alignSelf: "left",  
    paddingRight: 20,  
    paddingTop: 15, 
  },
  iconamoonnotification1: {
    width: 24,
    height: 24,
    position: "absolute",
    right: 10,
    left: 25
  },
  passwordResetContainer: {
    top: 100,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    alignSelf: "left", 
    paddingRight: 20, 
    paddingTop: 10, 
  },
  padlockOutlineIcon1: {
    width: 24,
    height: 24,
    position: "absolute",
    right: 10,
    left: 25
  },
  supportContainer: {
    top: 410,
    width: "100%",
    position: "absolute",
    alignSelf: "left", 
    paddingLeft: 20, 
    paddingRight: 20, 
  },
  supportTextBackground: {
    width: "100%", 
    borderRadius: 7, 
    backgroundColor: "#428DF829", 
    padding: 5, 
  },
  supportTypo1: {
    height: 28,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.body15Regular_size,
    textAlign: "left",
    color: Color.colorDarkslateblue_100,
    padding: 5,
    left: 10,
    letterSpacing: 1,
  },
  supportSectionContainer: {
    flex: 1,
    top: 470,
    width: "100%",
    position: "absolute",
    alignSelf: "left", 
    paddingTop: 20, 
  },
  supportContainer1: {
    top: 0,
    width: "90%",
    position: "absolute",
    alignSelf: "left", 
    borderRadius: 10,
    backgroundColor: "rgba(36, 39, 96, 0.05)",
    height: 105,
    marginLeft: 20, 
    marginRight: 20, 
  },
  helpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    top: 0,
    width: "100%",
    position: "absolute",
    alignSelf: "left", 
    paddingRight: 20, 
    paddingTop: 20, 
  },
  helpicon: {
    width: 24,
    height: 24,
    position: "absolute",
    right: 10,
    left: 25
  },
  nextButton: {
    left: 10,
  },
  nextButtonText: {
    left: 100,
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Nunito-SemiBold",
    textAlign: "right",
  },
  termsContainer: {
    top: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    alignSelf: "left", 
    paddingRight: 20, 
    paddingTop: 15, 
  },
  termsIcon: {
    width: 24,
    height: 24,
    position: "absolute",
    right: 10,
    left: 25
  },
  accountContainer: {
    top: 600,
    width: "100%",
    position: "absolute",
    alignSelf: "left", 
    paddingLeft: 20, 
    paddingRight: 20, 
  },
  accountBackground: {
    width: "100%", 
    borderRadius: 7, 
    backgroundColor: "#428DF829", 
    padding: 5, 
  },
  accountTypo: {
    height: 28,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.body15Regular_size,
    textAlign: "left",
    color: Color.colorDarkslateblue_100,
    padding: 5,
    left: 10,
    letterSpacing: 1,
  },
  rectangleView: {
    borderRadius: 10,
    backgroundColor: "rgba(1, 66, 122, 0.05)",
    flex: 1,
    width: "85%",
    height: 45,
    position: "absolute",
    bottom: 150,
    marginLeft: 20, 
    marginRight: 20, 
    alignSelf: "center",
    paddingTop: 12,
  },
  vectorIcon1: {
    width: 22,
    height: 22,
    position: "absolute",
    marginLeft: 30, 
    },
  logOut: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
    color: "#5a09c1",
    textAlign: "left",
    width: "100%",
    paddingLeft: 77,
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
      top: 735,
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
// Exporting the SettingsPage component
export default SettingsPage;
