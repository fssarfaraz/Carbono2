/*
Date: 19/11/2023
Component: SectionCardForm1.js
Purpose: This component holds and displays posts to be displayed on the forum homepage
*/

import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useState, useEffect } from "react";
import {getDatabase, onValue, ref, set} from "firebase/database";
import { getAuth} from 'firebase/auth';
import { app } from "../App";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

const SectionCardForm1 = ({post, role}) => {

  const navigation = useNavigation();
  
  return (
    <Pressable onPress={() => navigation.navigate("ForumView", { post: post, role: role })}>
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <Image
        style={styles.groupItem}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Pressable onPress={() => navigation.navigate("ForumView", { post: post, role: role })}>
        {/*Display poster name*/}
        <Text style={[styles.kristonWatshon, styles.amFlexBox]}>
          {post.name}
        </Text>
      </Pressable>
      <Text style={[styles.am, styles.amTypo]}>
           {/*Display post date*/}
        <Text style={styles.text}>{post.date}</Text>
      </Text>

      <Pressable onPress={() => navigation.navigate("ForumView", { post: post, role: role })}>
           {/*Display post title*/}
        <Text style={[styles.loremIpsumDolor, styles.text1Typo]}>
          {post.title}
        </Text>
      </Pressable>

       {/*Button to view full post*/}
      <Pressable onPress={() => navigation.navigate("ForumView", {post, role: role})} 
        style={{top: 150, left: 270}}>
        <Text style={{fontSize: 16, fontFamily: FontFamily.nunitoLight}}> View Post</Text>
      </Pressable>

      <View style={[styles.like1Parent, styles.parentFlexBox]}>
        <Image
          style={styles.like1Icon}
          contentFit="cover"
          source={require("../assets/like-1.png")}
        />
         {/*Display number of post likes*/}
        <Text style={[styles.text1, styles.likesSize]}>{post.likes}</Text>
      </View>
      <View style={[styles.vectorParent, styles.parentFlexBox]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
         {/*Display number of post comments*/}
        <Text style={[styles.text1, styles.likesSize]}>{post.comments}</Text>
      </View>
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group3.png")}
      />
    </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 200,
    width: 370,
    position: "absolute",
  },
  amFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  amTypo: {
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
  },
  text1Typo: {
    lineHeight: 30,
    fontSize: 24,
    textAlign: "left",
    color: Color.black,
    textTransform: "capitalize",
  },
  likesSize:
  {
    lineHeight: 21,
    fontSize: 14,
    textAlign: "left",
    color: Color.black,
    textTransform: "capitalize",
  },
  groupInnerPosition: {
    left: 38,
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.labelDarkPrimary,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
  },
  groupItem: {
    top: 19,
    left: 36,
    width: 50,
    height: 50,
    position: "absolute",
  },
  kristonWatshon: {
    top: 20,
    left: 103,
    fontSize: FontSize.paragraphH1Reg_size,
    lineHeight: 27,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    textTransform: "capitalize",
  },
  text: {
    textTransform: "capitalize",
  },
  am1: {
    textTransform: "lowercase",
  },
  am: {
    top: 45,
    left: 104,
    fontSize: FontSize.secondaryText_size,
    lineHeight: 18,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  loremIpsumDolor: {
    top: 90,
    width: 290,
    height: 70,
    left: 38,
    position: "absolute",
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
  },
  groupInner: {
    top: 127,
    width: 295,
    height: 177,
    borderRadius: Border.br_3xs,
  },
  like1Icon: {
    overflow: "hidden",
    height: 24,
    width: 24,
  },
  text1: {
    fontWeight: "500",
    fontFamily: FontFamily.nunitoMedium,
    marginLeft: 5,
  },
  like1Parent: {
    top: 150,
    left: 45,
    justifyContent: "center",
  },
  vectorIcon: {
    height: 24,
    width: 24,
  },
  vectorParent: {
    top: 150,
    left: 127,
    width: 54,
    justifyContent: "flex-end",
  },
  vectorIcon1: {
    height: "5.98%",
    width: "6.49%",
    top: "282.27%",
    right: "31.35%",
    bottom: "-188.25%",
    left: "62.16%",
  },
  groupIcon: {
    height: "6.65%",
    width: "4.54%",
    top: "282.55%",
    right: "2.81%",
    bottom: "-189.2%",
    left: "92.65%",
  },
  rectangleParent: {
    top: 700,
    left: 10,
  },
});

export default SectionCardForm1;

