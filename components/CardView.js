/*
Date: 19/11/2023
Component: CardView.js
Purpose: This component displays the user name and address for the current user. Used in the UserProfile hompage.
*/

import * as React from "react";
import {View, StyleSheet, Text} from "react-native";
import {Image} from "expo-image";
import {Border, FontSize, FontFamily, Color} from "../GlobalStyles";
import { app } from "../App";
import {useState} from "react";
import { useEffect } from "react";
//database imports
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import {getDatabase, ref, onValue} from 'firebase/database';

const CardView = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const auth = getAuth(app);
  const database = getDatabase();

  //verify the current user and then set. Auth is dependency so current user changes accordingly
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if(user) 
      {
        setCurrentUser(user);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  //useeffect so that it renders as soon as the page loads
  useEffect(() => {
    if (currentUser) 
    {
      const user = auth.currentUser;
      console.log('Current user:', user);

      // Get email from current user
      const email = user.email;
      console.log('Current user email:', email);

      const userRef = ref(database, 'users/');
      console.log('User reference:', userRef);
      console.log('User UID:', user.uid);

      //snapshot of the database users table
      onValue(userRef, (snapshot) => {
        // Find matching user by comparing emails
        const users = snapshot.val();
        const matchingUser = Object.values(users).find((u) => u.email.toLowerCase() === email);

        //matching user found
        if (matchingUser) 
        {
          setName(matchingUser.name);
          setAddress(matchingUser.address);
        } 
        else 
        {
          console.log('User not found in the database');
        }
      });
    }
  }, [currentUser, database]);

  return (
    {/*Image*/}
    <View style={styles.card}>
      <View style={[styles.subtract, styles.subtractLayout]}>
        <Image
          style={styles.subtractLayout}
          contentFit="cover"
          source={require("../assets/portada.png")}
        />
        <View style={styles.media}>
          <View style={styles.mediaBody}>
            <View style={styles.avatar}>
              <Image
                style={styles.avatarIcon}
                contentFit="cover"
                source={require("../assets/avatar.png")}
              />
            </View>
            {/*Component holds the user's name and address to display*/}
            <View style={styles.mediaContent}>
              <Text style={styles.userName}>{name}</Text>
              {address ? <Text style={styles.userLocation}>{address}</Text> : null}
            </View>
          </View>
          <View style={styles.mediaOption} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create(
  {
  subtractLayout: 
  {
    height: 214,
    width: 360,
  },

  avatarIcon: 
  {
    borderRadius: Border.br_31xl,
    width: 100,
    height: 100,
  },

  avatar: 
  {
    flexDirection: "row",
    alignItems: "center",
  },
  
  userName: 
  {
    fontSize: FontSize.paragraphH1Reg_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.black,
    textAlign: "center",
  },

  userLocation: 
  {
    fontSize: FontSize.body15Regular_size,
    letterSpacing: 1,
    lineHeight: 26,
    fontFamily: FontFamily.bodyBody1,
    color: Color.mutedColor,
    marginTop: 3,
    textAlign: "center",
    alignSelf: "stretch",
  },

  mediaContent: 
  {
    marginTop: 10,
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },

  mediaBody: 
  {
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },

  mediaOption: 
  {
    justifyContent: "center",
    marginTop: 5,
    alignItems: "center",
    overflow: "hidden",
  },

  media: 
  {
    marginTop: 46,
    width: "107.5%",
    top: "50%",
    right: "-3.61%",
    left: "-3.89%",
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
  },

  subtract: 
  {
    top: 0,
    left: 0,
    position: "absolute",
  },

  card: 
  {
    top: 112,
    left: 17,
    borderRadius: Border.br_xl,
    backgroundColor: Color.labelDarkPrimary,
    height: 335,
    overflow: "hidden",
    width: 360,
    position: "absolute",
  },
}
);

export default CardView;

