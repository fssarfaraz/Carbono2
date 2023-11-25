/*  
Date: 19-11-2023
Screen: ResetPassword
Purpose: ResetPassword in the Carbono app enables users to securely update their passwords, 
incorporating validation and confirmation for enhanced security and account recovery.
*/

// React and Expo imports
import * as React from "react";
import {Image} from "expo-image";
import 
{
  StyleSheet,
  ImageBackground,
  TextInput,
  View,
} from "react-native";

// External library imports
import {Button} from "@rneui/themed"; // Themed button component
import {useNavigation} from "@react-navigation/native"; // Navigation hook
import {FontSize, FontFamily, Padding, Color, Border} from "../GlobalStyles";
import { getAuth, sendPasswordResetEmail, updatePassword } from "firebase/auth"; //Firebase authentication
import { getDatabase, ref, update, onValue } from "firebase/database"; // Firebase database methods for user data handling
import { app } from "../App"; // Firebase app instance
import {useState} from "react"; //useState hook for managing component state
import {ScrollView} from 'react-native'; // ScrollView component for scrollable content

// ResetPassword functional component definition
const ResetPassword = () => {
  const navigation = useNavigation(); // Initializing navigation hook

  // State variables for storing user inputs
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle password reset process
  const handleResetPassword = async () => 
  {
    // Checking if the new password and confirm password fields match
    if (newPassword !== confirmPassword) 
    {
      alert("Error", "New passwords do not match. Please try again.");
      return;
    }

    // Regex for validating the password complexity
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (!passwordRegex.test(newPassword)) 
    {
      alert("Error", "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character");
      return;
    }

    // Initializing Firebase Authentication and Database
    const auth = getAuth(app);
    const database = getDatabase();
    const usersRef = ref(database, 'users');

    try 
    {
      // Checking the user's email against the database
      onValue(usersRef, (snapshot) => 
      {
        const users = snapshot.val();

        for (const user in users) 
        {
          if (users[user].email === email) 
          { // Checking if the new password is different from the old password
            if (newPassword === users[user].password) 
            {
              alert("Error", "New password cannot be the same as the existing password.");
              return;
            }
            else
            { // Updating the user's password in Firebase Authentication
              updatePassword(users[user], newPassword);
              update(ref(database, 'users/' + user), 
              {
                password: newPassword,
              });
              alert("Success", "Password updated successfully.");
               // Navigating to the login page
              navigation.navigate("LoginPage");
              break;
            }
          }
        }
      });
    } catch (error)   
    {
      console.error(error);
      alert("Error", error.message);
    }
  };


  return (
    // ScrollView to allow content to be scrollable
    <ScrollView>
  {/* Main View container for the ResetPassword screen */}
    <View style={styles.resetPassword}>
      {/* Background Ellipse Images */}
      <Image
        style={[styles.ellipse1]}
        contentFit="cover"
        source={require("../assets/ellipse-14.png")}
      />

  
      <Image
        style={[styles.ellipse2]}
        contentFit="cover"
        source={require("../assets/ellipse-14.png")}
      />
  {/* Logo of the app */}
      <ImageBackground
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../assets/logo.png")}
      />

  {/* Reset Password Button */}
      <Button
        title="Reset Password"
        radius={30}
        iconPosition="left"
        type="solid"
        color="#428df8"
        titleStyle={styles.resetBtnText}
        onPress={handleResetPassword}
        containerStyle={styles.resetBtnCont}
        buttonStyle={styles.resetBtn}
      />

   {/* Text Inputs for email and passwords */}
      <TextInput
        style={[styles.userBox, styles.textInput]}
        placeholder="Enter Email"
        placeholderTextColor="#0a0806"
        onChangeText={setEmail}
        value={email}
      />

      <TextInput
        secureTextEntry 
        style={[styles.passBox, styles.textInput]}
        placeholder="Enter New Password"
        placeholderTextColor="#0a0806"
        onChangeText={setNewPassword}
        value={newPassword}
      />

      <TextInput
        secureTextEntry 
        style={[styles.rePassBox, styles.textInput]}
        placeholder="Re-Enter Password"
        placeholderTextColor="#0a0806"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
    </View>
    </ScrollView>
  );
};

 // Styles for the ResetPassword component
const styles = StyleSheet.create(
  {
  resetBtnText: 
  {
    color: "#fff",
    fontSize: 24,
    fontWeight: "300",
    fontFamily: "Nunito-Light",
  },

  resetBtnCont: 
  {
    left: 65,
    padding: 10,
    top: 570,
    position: "absolute",
  },

  resetBtn: 
  {
    borderRadius: 30,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: 
    {
      width: 0,
      height: 20,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 256,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  textInput: 
  {
    fontSize: FontSize.body15Regular_size,
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    width: 256,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: 
    {
      width: 0,
      height: 20,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_11xl,
    left: 76,
    position: "absolute",
  },

  ellipse1: 
  {
    top: -150,
    height: 600,
    width: 500,
    position: "absolute",
    left: 130,
  },

  ellipse2: 
  {
    top: 450,
    height: 600,
    width: 500,
    left: -146,
    position: "absolute",
  },

  logoIcon: 
  {
    top: 44,
    left: 85,
    width: 233,
    height: 238,
    position: "absolute",
  },

  userBox: 
  {
    top: 316,
  },

  passBox: 
  {
    top: 401,
  },

  rePassBox: 
  {
    top: 485,
  },

  resetPassword: 
  {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
}
);
// Exporting the ResetPassword component
export default ResetPassword;