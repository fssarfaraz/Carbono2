/*
Date: 19/11/2023
Screen: Edit Profile
Purpose: The Edit Profile screen allows users to modify their profile information, including their name, email, address, and gender. 
Users can update their details, and the changes will be saved to their profile in the app. 
This screen provides a user-friendly interface for editing and managing personal information within the application.
*/

// Import necessary modules and components

import React, { useState } from "react";
// React and its hooks
import { Image } from "expo-image";
// Image component from Expo
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  TextInput,
} from "react-native";
// Components and styles from React Native
import { Button } from "@rneui/themed";
// Button component from rneui/themed
import DropDownPicker from "react-native-dropdown-picker";
// Dropdown picker component
import { useNavigation } from "@react-navigation/native";
// Navigation hook from React Navigation
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";
// Custom global styles
import { app } from "../App";
// Firebase app configuration
import { useEffect } from "react";
// Firebase authentication functions
import { getAuth } from "firebase/auth";
// Firebase authentication state change listener
import { onAuthStateChanged } from "firebase/auth";
import {getDatabase, ref, onValue, update} from 'firebase/database';
// Firebase Realtime Database functions
import { ScrollView } from "react-native";
import { add } from "react-native-reanimated";
import { FontAwesome5 } from "@expo/vector-icons";
// FontAwesome5 icons


// Define a functional component named EditProfile
const EditProfile = () => {
  // State variables for managing dropdown
  const [groupDropdownOpen, setGroupDropdownOpen] = useState(false);
  const [groupDropdownValue, setGroupDropdownValue] = useState();
  const [groupDropdownItems, setGroupDropdownItems] = useState([
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Prefer Not To Say", label: "Prefer Not To Say" },
  ]);
  // Navigation hook
  const navigation = useNavigation();

  // Function to handle navigation to other screens
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  // State variables to store user information
  const [currentUser, setCurrentUser] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [gender, setGender] = useState(null);
  const [userName, setUserName] = useState('');

  // Firebase authentication and database setup
  const auth = getAuth(app);
  const database = getDatabase();

  // UseEffect to listen for changes in user authentication
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if(user) 
      {
        setCurrentUser(user);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    if (currentUser) 
    {
      const user = auth.currentUser;
      console.log('Current user:', user);

      // Get email from current user
      const email = user.email;
      console.log('Current user email:', email);

      // Create a reference to the user in the database
      const userRef = ref(database, 'users/');
      console.log('User reference:', userRef);
      console.log('User UID:', user.uid);

      // Listen for changes to the user's data in the database
      onValue(userRef, (snapshot) => {
        // Find matching user
        const users = snapshot.val();
        const matchingUser = Object.values(users).find((u) => u.email.toLowerCase() === email);
        if(matchingUser)
        {
          //setName(matchingUser.name);
          //setEmail(matchingUser.email);
          //setAddress(matchingUser.address);
          //setGender(matchingUser.gender);
          setUserName(matchingUser.username);
        }
        else
        {
          console.log('User not found in the database');
        }
      });
    }
  }, [currentUser, database]);

  // Function to handle saving changes to user information
  const handleChanges = () => {
    // Update the user's information in the database
    const userRef = ref(database, 'users/' + userName);
    console.log('User reference:', userRef);
    /*
    const updates = 
    {
      //optional chaining so that null values are ignored
      name: name,
      email: email,
      address: address,
      gender: gender,
    };*/

    // Create an object with the updated user information
    const updates = {};
    if(name != null) 
    {
      updates.name = name;
    }

    if(email != null) 
    {
      updates.email = email; 
    }

    if(address != null)
    {
      updates.address = address;
    }

    if(gender != null)
    {
      updates.gender = gender;
    }

    // Update the user's information in the database
    update(userRef, updates).then(() => {
      // User's information updated successfully
      alert("Your information has been updated successfully.");
    }).catch((error) => 
    {
      // An error occurred while updating the user's information
      alert("An error occurred while updating your information. Please try again later.", error.message);
    });
  };

  // Return the JSX for the EditProfile screen
  return (
    <ScrollView>
    <View style={styles.editProfile}>
      {/* Background Images */}
      <Image
        style={styles.editProfileChild}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Image
        style={styles.editProfileItem}
        contentFit="cover"
        source={require("../assets/ellipse-23.png")}
      />

      {/* Back Button */}
      <View style={styles.backButtonContainer}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <FontAwesome5 name="chevron-left" size={30} color="#01427A" />
        </Pressable>
      </View>
      
      {/* User Profile Picture */}
      <View style={[styles.groupParent, styles.groupPosition]}>
        <Image
          style={[styles.groupChild, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/group-2.png")}
        />
        <Button
          radius="5"
          iconPosition="left"
          type="clear"
          color="#fff"
          icon={{ name: "camera-outline", type: "material-community" }}
          containerStyle={styles.solarcameraMinimalisticBoldIconBtn}
          buttonStyle={styles.solarcameraMinimalisticBoldIconBtn1}
        />
      </View>

      {/* Title */}
      <Text style={[styles.editProfile1, styles.nameFlexBox]}>
        Edit Profile
      </Text>

      <View style={[styles.inputContainer]}>
         {/* Save Changes Button */}
        <Button
          title="Save Changes"
          radius={10}
          iconPosition="left"
          type="solid"
          titleStyle={styles.buttonContinueBtn}
          onPress={handleChanges}
          containerStyle={styles.buttonContinueBtn1}
          buttonStyle={styles.buttonContinueBtn2}
        />
        <View style={[styles.nameParent, styles.parentLayout]}>
          <Text style={[styles.name, styles.nameFlexBox]}>Name</Text>
          <TextInput
            style={[styles.groupItem, styles.groupTypo]}
            placeholder="Update Name"
            placeholderTextColor="#544c4c"
            value={name}
            onChangeText={setName}
          />
        </View>
        {/* Email Input */}
        <View style={[styles.emailParent, styles.parentLayout]}>
          <Text style={[styles.name, styles.nameFlexBox]}>Email</Text>
          <TextInput
            style={[styles.groupItem, styles.groupTypo]}
            placeholder="Update Email"
            placeholderTextColor="#544c4c"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        {/* Address Input */}
        <View style={[styles.addressParent, styles.parentLayout1]}>
          <Text style={[styles.name, styles.nameFlexBox]}>Address</Text>
          <TextInput
            style={[styles.groupTextinput, styles.groupTypo]}
            placeholder="Update Address"
            multiline={true}
            placeholderTextColor="#544c4c"
            value={address}
            onChangeText={setAddress}
          />
        </View>
        {/* Gender Dropdown */}
        <View style={[styles.sexParent, styles.parentLayout1]}>
          <Text style={[styles.name, styles.nameFlexBox]}>Sex</Text>
          <View style={[styles.wrapper, styles.parentLayout1]}>
            <DropDownPicker
              open={groupDropdownOpen}
              setOpen={setGroupDropdownOpen}
              value={groupDropdownValue}
              setValue={setGroupDropdownValue}
              placeholder="Female"
              items={groupDropdownItems}
              labelStyle={styles.groupDropdownValue}
            />
          </View>
        </View>
      </View>

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
    </ScrollView>
  );
};

// StyleSheet for defining the styles of UI components

const styles = StyleSheet.create({
    // Styling rules for different UI elements like background, buttons, images, etc
  iconCalculatorBtn: {
    position: "relative",
  },
  iconCalculatorBtn1: {
    width: 41,
    height: 45,
  },
  solarcameraMinimalisticBoldIconBtn: {
    left: 111,
    top: 120,
    position: "absolute",
  },
  solarcameraMinimalisticBoldIconBtn1: {
    width: 28,
    height: 27,
    overflow: "hidden",
  },
  buttonContinueBtn: {
    color: "#fdfdfd",
    fontSize: 22,
    fontWeight: "600",
    fontFamily: "Nunito-SemiBold",
  },
  buttonContinueBtn1: {
    left: 36,
    top: 667,
    position: "absolute",
  },
  buttonContinueBtn2: {
    width: 343,
    height: 60,
  },
  groupDropdownValue: {
    color: "#544c4c",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Nunito-Medium",
  },
  iconLayout: {
    width: 33,
    marginLeft: 72,
  },
  iconLayout1: {
    height: 30,
    width: 30,
  },
  nameFlexBox: {
    textAlign: "left",
    color: Color.colorDarkslateblue_100,
    position: "absolute",
  },
  groupPosition: {
    height: 150,
    width: 148,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  parentLayout: {
    height: 69,
    width: 342,
    left: 36,
    position: "absolute",
  },
  groupTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    top: 25,
    width: 342,
    left: 0,
    position: "absolute",
  },
  parentLayout1: {
    width: 342,
    position: "absolute",
  },
  editProfileChild: {
    left: 27,
    width: 366,
    height: 390,
    top: 0,
    position: "absolute",
  },
  editProfileItem: {
    top: 504,
    width: 393,
    height: 348,
    left: 0,
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
  editProfile1: {
    top: 78,
    left: 133,
    fontSize: FontSize.size_7xl,
    // lineHeight: 23,

    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
  },
  groupChild: {
    marginTop: -75,
    marginLeft: -74,
  },
  groupParent: {
    marginTop: -301,
    marginLeft: -71.5,
  },
  name: {
    fontSize: FontSize.bodyBody1_size,
    // lineHeight: 14,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    left: 0,
    top: 0,
  },
  groupItem: {
    height: 44,
  },
  nameParent: {
    top: 299,
  },
  emailParent: {
    top: 391,
  },
  groupTextinput: {
    height: 47,
  },
  addressParent: {
    top: 483,
    left: 37,
    height: 72,
  },
  wrapper: {
    top: 27,
    height: 44,
    left: 0,
  },
  sexParent: {
    top: 578,
    height: 71,
    left: 36,
    width: 342,
  },
  editProfile: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
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
    top: 720,
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
  backButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 54,
    left: 16,
    zIndex: 2,
  },
  backButton: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    padding: 10,
  },
  inputContainer: {
    marginTop: 10,
    padding: 16,
    top: -40,
  },
});

export default EditProfile;
