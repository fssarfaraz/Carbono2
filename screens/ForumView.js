/*
Date: 20/11/2023
Screen: ForumView.js
Purpose: View post details. Called from Forum.js
*/

import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text, ScrollView } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import FilteredCardForm from "../components/FilteredCardForm";
import CardContainer from "../components/CardContainer";
import CommentForm from "../components/CommentForm";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";
import { FontAwesome5 } from "@expo/vector-icons";
import {useRoute} from "@react-navigation/native";

const ForumView = () => {
  const navigation = useNavigation();

  const route = useRoute();

  //bring in post and role from previous screen
  const {post} = route.params;
  console.log('View: ', post);
  
  let role = route.params.role;
  console.log('Role VIEW: ', role);

  return (
    <View style={styles.forumView}>
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

      <View style={[styles.intro, styles.introFlexBox]}>
        <Text style={styles.post}>Post</Text>
      </View>

      {/* Content Container */}
      <View style={styles.contentContainer}>
        {/* Header */}
        <View style={styles.backButtonContainer}>
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <FontAwesome5 name="chevron-left" size={30} color="#01427A" />
          </Pressable>
        </View>
      </View>

      {/*Components to view post details, comments and to create new comments*/}
      <FilteredCardForm post={post} role={role} />
      <CardContainer post={post} />
      <CommentForm post={post}/>
    </View>
  );
};

const styles = StyleSheet.create({
  backIconBtn: {
    padding: 8,
  },
  backIconBtn1: {
    borderRadius: 30,
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  introFlexBox: {
    flexDirection: "row",
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
  ellipse1: {
    top: -220,
    height: 500,
    width: 500,
    left: -20,
    position: "absolute",
  },
  ellipse2: {
    top: 580,
    height: 500,
    width: 500,
    left: -45,
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
    alignItems: "flex-end",
  },
  iconCalculator: {
    width: 41,
    height: 45,
  },
  iconCalculatorWrapper: {
    top: 745,
    left: 165,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  post: {
    fontSize: FontSize.primaryText_size,
    letterSpacing: 2,
    // lineHeight: 20,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorDarkslateblue_100,
    textAlign: "center",
    flex: 1,
  },
  intro: {
    top: 70,
    left: 18,
    width: 352,
    alignItems: "center",
  },
  forumView: {
    backgroundColor: Color.labelDarkPrimary,
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 16,
  },
  backButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 54,
    left: 16,
  },
  backButton: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    padding: 10,
    // paddingBottom: 18,
  },
});

export default ForumView;
