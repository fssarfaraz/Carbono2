import * as React from "react";
import {Image} from "expo-image";
import {StyleSheet, View, Pressable, Text} from "react-native";
import {Button} from "@rneui/themed";
import {useNavigation} from "@react-navigation/native";
import CardView from "../components/CardView";
import {Padding, Border, Color, FontSize, FontFamily} from "../GlobalStyles";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { app } from "../App";
import {useState} from "react";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import {getDatabase, ref, onValue} from 'firebase/database';

const UserProfile = () => {
  const navigation = useNavigation();

  const [currentUser, setCurrentUser] = useState(null);
  const [name, setName] = useState('');

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
  }, [auth])

  useEffect(() => {
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
        // Find matching user  
        const users = snapshot.val();
        const matchingUser = Object.values(users).find((u) => u.email.toLowerCase() === email);

        if (matchingUser) 
        {
          setName(matchingUser.name);
        } 
        else 
        {
          console.log('User not found in the database');
        }
      })
    }
  }, [currentUser, database]);

  return (
    <View style={styles.userProfile}>
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

        <View style={styles.cardFooter}>
          <Button
            style={[styles.articleBtn, styles.cardLayout]}
            title="Read Article"
            radius="5"
            iconPosition="left"
            type="outline"
            titleStyle={styles.articleBtnText}
          />
        </View>
      </View>
      <CardView/>

      <View style={[styles.headingBox]}>
        <Text style={styles.headingBox} numberOfLines={1}>
          Tips for you
        </Text>
      </View>

      <View style={styles.name}>
        <Text style={styles.userNameBox} numberOfLines={1}>
          Hello {name}!
        </Text>

        <View style={styles.settingsBtnIcon}>
          <FontAwesome.Button backgroundColor='#00000000' name="gear" color= "#ffffff" size={26} onPress={() => navigation.navigate("SettingsPage")} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create(
  {
  articleBtnText: 
  {
    color: "#000",
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Roboto-Bold",
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

  iconCalc: 
  {
    top: 749,
    left: 166,
    padding: Padding.p_3xs,
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
    top: 511,
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
    color: Color.black,
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
}
);

export default UserProfile;
