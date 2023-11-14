import * as React from "react";
import {View, StyleSheet, Text} from "react-native";
import {Image} from "expo-image";
import {Border, FontSize, FontFamily, Color} from "../GlobalStyles";
import { app } from "../App";
import {useState} from "react";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import {getDatabase, ref, onValue} from 'firebase/database';

const CardView = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const auth = getAuth(app);
  const database = getDatabase();

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

      const userRef = ref(database, 'users/');
      console.log('User reference:', userRef);
      console.log('User UID:', user.uid);

      onValue(userRef, (snapshot) => {
        // Find matching user
        const users = snapshot.val();
        const matchingUser = Object.values(users).find((u) => u.email.toLowerCase() === email);

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

