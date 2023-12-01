/*
Date: 19/11/2023
Screen: Passsword Reset Page
Purpose: This screen allows users to reset their account password. 
Users can enter a new password and confirm it to update their password. The screen also provides the option to cancel the password reset process. 
It ensures that the new password meets security requirements and updates it in the Firebase authentication and Realtime Database, providing a seamless and secure password reset experience for the user.
*/

// Import necessary dependencies for the PasswordResetInApp screen

import * as React from "react";
// Import React
import { Image } from "expo-image";
// Import the Image component from Expo for images
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";
// Import the Image component from Expo for images
import { useNavigation } from "@react-navigation/native";
// Import various components and styles from React Native for UI
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";
// Import global styles for color, font size, padding, and border
import { FontAwesome5 } from "@expo/vector-icons";
// Import icons from FontAwesome5

import { LinearGradient } from "expo-linear-gradient";
// Import the LinearGradient component from Expo for gradient backgrounds
import {useState} from "react";
// Import useState hook from React for state management
import { useEffect } from "react";
// Import useEffect hook from React for side effects
import { getAuth } from "firebase/auth";
// Import Firebase Authentication functions
import { onAuthStateChanged, updatePassword } from "firebase/auth";
// Import Firebase Authentication functions
import {getDatabase, ref, onValue, update} from 'firebase/database';
// Import Firebase Realtime Database functions
import { app } from "../App";
// Import the Firebase app configuration
import {ScrollView} from 'react-native';
// Import the ScrollView component from React Native for scrolling

// Initialize the navigation object
const PasswordResetInApp = () => {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
    // Function to navigate to a different screen
  };

  // State for storing new password, confirming nd storing current user
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  const auth = getAuth(app);
  // Initialize Firebase Authentication
  const database = getDatabase();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if(user) 
      {
        setCurrentUser(user); 
      }
    });
    return () => unsubscribe();
  }, [auth])

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) 
    {
      alert("Error", "New passwords do not match. Please try again.");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (!passwordRegex.test(newPassword)) 
    {
      alert("Error", "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character");
      return;
    }

    if(currentUser) 
    {
      const user = auth.currentUser; 
      console.log('Current user:', user);

      // Get email from current user
      const email = user.email; 
      console.log('Current user email:', email);

      const userRef = ref(database, 'users/');
      console.log('User reference:', userRef);
      console.log('User UID:', user.uid); 

      onValue(userRef, (snapshot) => {
        // Find matching user in database 
        const users = snapshot.val();
        const matchingUser = Object.values(users).find((u) => u.email.toLowerCase() === email);

        if (matchingUser) 
        {
          if (newPassword === matchingUser.password) 
          {
            alert("Error", "New password cannot be the same as the existing password.");
            return;
          }
          else
          {
            updatePassword(user, newPassword);
            update(ref(database, 'users/' + matchingUser.username), 
            {
              password: newPassword,
            });
            alert("Success", "Password updated successfully.");
            navigation.navigate("PasswordResetSuccess");
          }
        } 
        else 
        {
          console.log('User not found in the database');
        }
      });
    }
  };

  return (
    <ScrollView>
    <View style={[styles.passwordResetInApp, styles.fieldLayout]}>
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

      <View style={[styles.resetPasswordContainer]}>
        <Text style={styles.resetPassword}>Reset Password</Text>
      </View>

      {/* create New Password Text and a password field 
      and create a Re-enter text and password field */}

      <View style={[styles.passwordContainer]}>
        <Text style={[styles.newPassword]}>New Password</Text>
        <View style={[styles.passwordField]}>
          <TextInput
            style={[styles.supersecure123]}
            placeholder="New Password"
            placeholderTextColor="#333"
            secureTextEntry={true}
            onChangeText={setNewPassword}
            value={newPassword}
          />
        </View>

        <Text style={[styles.confirmPassword]}>Re-enter Password</Text>
        <View style={[styles.passwordField1]}>
          <TextInput
            style={[styles.supersecure123]}
            placeholder="Re-enter Password"
            placeholderTextColor="#333"
            secureTextEntry={true}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />
        </View>
      </View>

      <View style={[styles.buttonContainer]}>
        <Pressable
            style={styles.nextButton}
            onPress={handleResetPassword}
          >
            <LinearGradient
              style={styles.gradientButton}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#428DF8", "#5A09C1"]}
            >
              <Text style={styles.nextButtonText}>Reset Password</Text>
            </LinearGradient>
        </Pressable>

        <Pressable
            style={styles.nextButton1}
            onPress={() => handleNavigation("UserProfile")}
          >
            <LinearGradient
              style={styles.gradientButton}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#428DF8", "#5A09C1"]}
            >
              <Text style={styles.nextButtonText}>Cancel</Text>
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
    </ScrollView>
  );
};

// StyleSheet for defining the styles of UI components
const styles = StyleSheet.create({
  // ... (styles for various components and elements)
  iconCalculatorBtn: {
    position: "relative",
  },
  iconCalculatorBtn1: {
    width: 41,
    height: 45,
  },
  signUpBottonBtn: {
    left: 77,
    right: 103,
    bottom: 407,
    position: "absolute",
  },
  signUpBottonBtn1: {
    borderRadius: 10,
    height: 38,
  },
  signUpBotton1Btn: {
    left: 77,
    right: 103,
    bottom: 345,
    position: "absolute",
  },
  signUpBotton1Btn1: {
    borderRadius: 10,
    height: 38,
  },
  fieldLayout: {
    width: "100%",
    backgroundColor: Color.labelDarkPrimary,
  },
  iconLayout: {
    width: 33,
    marginLeft: 72,
  },
  iconLayout1: {
    height: 30,
    width: 30,
  },
  passwordPosition: {
    left: 57,
    right: 63,
    height: 30,
    position: "absolute",
  },
  passwordTypo: {
    fontSize: FontSize.paragraphH1Reg_size,
    fontFamily: FontFamily.bodyBody1,
    left: 57,
    textAlign: "left",
    color: Color.colorDarkslateblue_100,
    position: "absolute",
  },
  cancelPosition: {
    left: 117,
    position: "absolute",
  },
  cancelTypo: {
    height: 28,
    width: 141,
    textAlign: "center",
    color: Color.labelDarkPrimary,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.primaryText_size,
  },
  ellipse1: {
    top: -190,
    height: 600,
    width: 500,
    position: "absolute",
    left: 10,
  },
  ellipse2: {
    top: 470,
    height: 600,
    width: 500,
    left: -100,
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
  iconCalculatorWrapper: {
    top: 745,
    left: 165,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  resetPasswordContainer: {
    top: 130,
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
  },
  resetPassword: {
    fontSize: 36,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    textAlign: "center",
    color: Color.colorDarkslateblue_100,
  },
  iconseyeSlash: {
    right: 11,
    width: 18,
    height: 16,
    top: "50%",
    marginTop: -8,
    position: "absolute",
  },
  newPassword: {
    top: 202,
  },
  reEnterPassword: {
    top: 294,
  },
  resetPassword1: {
    top: 417,
  },
  cancel: {
    top: 474,
    left: 117,
    position: "absolute",
  },
  passwordResetInApp: {
    flex: 1,
    height: 852,
    overflow: "hidden",
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
  passwordContainer: {
    top: 250,
    left: 50,
    width: "100%",
    position: "absolute",
  },
  newPassword: {
    fontSize: 18,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    color: "#01427a",
    marginBottom: 16,
  },
  confirmPassword: {
    top: 52,
    fontSize: 18,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    color: "#01427a",
    marginBottom: 16,
  },
  passwordField: {
    borderColor: "#d4d4d4",
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    width: "80%",
    backgroundColor: "#fff",
    position: "absolute",
    top: 35,
 },
  passwordField1: {
    borderColor: "#d4d4d4",
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    width: "80%",
    backgroundColor: "#fff",
    position: "absolute",
    top: 125,
  },
  supersecure123: {
    left: 12,
    fontSize: FontSize.size_sm,
    color: "#333",
    fontFamily: FontFamily.bodyBody1,
    top: "50%",
    marginTop: -8,
    textAlign: "left",
    position: "absolute",
  },
  buttonContainer: {
    top: 450,
    width: "100%",
    position: "absolute",
  },
  nextButton: {
    borderRadius: 10,
    marginTop: 16,
    marginBottom: 10,
    position: "relative",
    width: "70%",
    justifyContent: "center",
    alignSelf: "center",
    overflow: "hidden",
    // top: 420,
  },
  nextButton1: {
    borderRadius: 10,
    marginTop: 16,
    marginBottom: 100,
    position: "relative",
    width: "70%",
    justifyContent: "center",
    alignSelf: "center",
    overflow: "hidden",
    // top: 20,
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
    top: 730,
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

export default PasswordResetInApp;