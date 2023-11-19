/*  
Date: 19-11-2023
Screen: UserProfile
Purpose: UserProfile displays the user's personal profile information in the Carbono app,
 allowing them to view and manage their account details and preferences.
*/

// React and Expo imports
import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";

// External library imports
import { Button } from "@rneui/themed"; // Themed button component
import { useNavigation } from "@react-navigation/native"; // Navigation hook
import CardView from "../components/CardView"; // Custom CardView component
import {Padding, Border, Color, FontSize, FontFamily} from "../GlobalStyles";
import FontAwesome from '@expo/vector-icons/FontAwesome'; // FontAwesome icons
import { app } from "../App"; // Firebase app
import { useState, useEffect } from "react"; // State and effect hooks
import { getAuth } from "firebase/auth"; // Firebase authentication
import { onAuthStateChanged } from "firebase/auth"; // Firebase auth state change listener
import { getDatabase, ref, onValue } from 'firebase/database'; // Firebase Realtime Database
import { LinearGradient } from "expo-linear-gradient"; // Gradient component for buttons and backgrounds


/**
 * UserProfile component represents the user profile screen.
 * It includes profile information, articles, and navigation options.
 */
const UserProfile = () => {
  const navigation = useNavigation();

  // Function to handle navigation to different screens
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  // State variables for managing user data
  const [currentUser, setCurrentUser] = useState(null);
  const [name, setName] = useState('');

  // Firebase authentication and database setup
  const auth = getAuth(app);
  const database = getDatabase();

  // Effect hook to listen for changes in authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setCurrentUser(user);
      }
    });
    return () => unsubscribe();
  }, [auth])

  // Effect hook to fetch user data when the current user is available
  useEffect(() => {
    if (currentUser) {
      const user = auth.currentUser;
      console.log('Current user:', user);

      // Get email from current user
      const email = user.email;
      console.log('Current user email:', email);

      // Reference to the 'users' node in the database
      const userRef = ref(database, 'users/');
      console.log('User reference:', userRef);
      console.log('User UID:', user.uid);

      // Listen for changes in the 'users' node
      onValue(userRef, (snapshot) => {
        // Find matching user
        const users = snapshot.val();
        const matchingUser = Object.values(users).find((u) => u.email.toLowerCase() === email);

        if (matchingUser) {
          setName(matchingUser.name);
        } else {
          console.log('User not found in the database');
        }
      })
    }
  }, [currentUser, database]);

  // JSX representing the user profile screen layout
  return (
    <View style={styles.userProfile}>
      {/* Ellipse Images for decorative purposes */}
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

      {/* Card displaying article information */}
      <View style={[styles.card, styles.cardLayout]}>
        <View style={styles.cardBody}>
          <Text
            style={[styles.articleTitle, styles.articleBox,]}
          >
            Reducing your Transport Footprint
          </Text>
          <Text
            style={[styles.subText, styles.articleBox]}
          >
            Managing Travel In Today’s Connected World
          </Text>
        </View>

        {/* Button to navigate to the Educational screen */}
        <View style={styles.cardFooter}>
          <Pressable
            style={styles.nextButton}
            onPress={() => handleNavigation("Educational")}
          >
            <LinearGradient
              style={styles.gradientButton}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#428DF8", "#5A09C1"]}
            >
              <Text style={styles.nextButtonText}>READ ARTICLE</Text>
            </LinearGradient>
          </Pressable>
        </View>
      </View>

      {/* Custom CardView component */}
      <CardView />

      {/* Section displaying tips for the user */}
      <View style={[styles.tipTitleContainer]}>
        <Text style={styles.tipsForYou1} numberOfLines={1}>Tips for you</Text>
      </View>

      {/* Section displaying user's name and settings button */}
      <View style={styles.name}>
        <Text style={styles.userNameBox} numberOfLines={1}>
          Hello {name}!
        </Text>
        <View style={styles.settingsBtnIcon}>
          <FontAwesome.Button backgroundColor='#00000000' name="gear" color="#ffffff" size={26} onPress={() => navigation.navigate("SettingsPage")} />
        </View>
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavBar}>
        {/* Navigation icons for various screens */}
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


// Styles for the UserProfile component
const styles = StyleSheet.create(
  {
  articleBtn: {
    borderStyle: "solid",
    width: 132,
    height: 39,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#000",  // Add this line to set a background color
    borderRadius: Border.br_xl,    // Add this line for rounded corners
  },

  iconLayout: 
  {
    height: 30,
    width: 30,
  },

  cardLayout: 
  {
    borderRadius: Border.br_xl,
    alignItems: "center",
  },

  articleBox: 
  {
    lineHeight: 23,
    letterSpacing: 1,
    textAlign: "left",
    color: Color.black,
    alignSelf: "stretch",
  },

  ellipse1: 
  {
    top: -160,
    height: 600,
    width: 500,
    position: "absolute",
    left: 10,
  },

  ellipse2: 
  {
    top: 460,
    height: 600,
    width: 500,
    left: -100,
    position: "absolute",
  },

  articleTitle: 
  {
    fontSize: FontSize.size_3xl,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    textAlign: "left",
    color: Color.black,
  },

  subText: 
  {
    fontSize: FontSize.bodyBody1_size,
    fontFamily: FontFamily.bodyBody1,
    marginTop: 15,
    textAlign: "left",
    color: Color.black,
  },

  cardBody:
  {
    padding: Padding.p_6xl,
    alignSelf: "stretch",
    alignItems: "center",
  },

  articleBtn: 
  {
    borderStyle: "solid",
    width: 132,
    height: 39,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  cardFooter: 
  {
    paddingHorizontal: Padding.p_6xl,
    paddingBottom: Padding.p_6xl,
    alignSelf: "stretch",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },

  card: 
  {
    top: 490,
    left: 15,
    backgroundColor: "rgba(66, 141, 248, 0.2)",
    width: 360,
    height: 221,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },

  headingBox: 
  {
    fontSize: FontSize.size_11xl,
    letterSpacing: 0,
    fontWeight: "300",
    fontFamily: FontFamily.nunitoLight,
    textAlign: "center",
    color: "#000",
    top: 450,
    left: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  userNameBox: 
  {
    fontSize: FontSize.size_9xl,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    color: Color.colorGray_100,
    width: 215,
    textAlign: "left",
  },

  settingsBtnIcon:
  {
    left: 100,
  },

  name: 
  {
    top: 53,
    left: 25,
    width: 375,
    height: 45,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },

  userProfile: 
  {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },

  pictureBox:
  {
    paddingHorizontal:40, 
    backgroundColor:"#FFF",
    height:"50%",
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50,
    flexDirection:"row", 
    width:"100%", 
    marginTop:40
  },

  profileBox: 
  {
    top: 70,
    left: 9,
    backgroundColor: "rgba(66, 141, 248, 0.12)",
    width: 360,
    height: 221,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
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
    marginRight: 20,
    marginLeft: 20,
  },
  bottomNavIcon: {
    right: -10,
    flex: 1,
    position: "absolute",
    top: 740,
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
  nextButton: {
    borderRadius: 30,
    marginVertical: 0,
    marginHorizontal: 16,
    // marginBottom: 100,
    position: "relative",
    // width: "70%",
    justifyContent: "center",
    alignSelf: "center",
    overflow: "hidden",
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
  },
  gradientButton: {
    padding: 16,
    alignItems: "center",
  },
  tipTitleContainer: {
    top: 430,
    left: 20,
    width: 375,
    height: 45,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  tipsForYou1: {
    fontSize: 30,
    letterSpacing: 0,
    fontWeight: "300",
    fontFamily: "Nunito-Light",
    color: "#000",
    textAlign: "center"
    },
}
);

// Export the UserProfile component
export default UserProfile;
