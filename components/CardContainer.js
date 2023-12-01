/*
Date: 19/11/2023
Component: CardContainer.js
Purpose: This component holds and displays all the comments for a specific post
*/

import * as React from "react";
import { Text, StyleSheet, View, FlatList, Pressable } from "react-native";
import { Image } from "expo-image";
import CommentContainer from "./CommentContainer";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import { useState, useCallback, useEffect } from "react";
import {getDatabase, ref, set, onValue, update} from "firebase/database";
import { getAuth} from 'firebase/auth';
import { app } from "../App";
import { Button } from "@rneui/base";
import { ScrollView } from "react-native-gesture-handler";

const CardContainer = ({post}) => {

  //connect to database
  const database = getDatabase();
  const auth = getAuth(app);

  const [allComments, setComments] = useState([]);

  //function to retreive comments from the database
  const getComments = () => {
    const commentRef = ref(database, `Comments/`);

    //create a snapshot of all comments in the database under the Comments table
    onValue(commentRef, (snapshot) => {
      const data = snapshot.val();
      //filtering data to only those of the current post and then storing all relevant information in array
      const commentsss = Object.entries(data).filter(([key, value]) => value.postID === post.id)
      .map(([id, entry]) => ({
        id: entry.id,
        x: entry.comment,  
        y: entry.likes,
        z: entry.date,
        a: entry.name,
      }));
      //if data is not empty
      if (commentsss.length > 0) 
      {
        console.log('Comments:', commentsss);
        setComments(commentsss);
        console.log('All Comments:', allComments);
      } 
      else 
      {
        console.log("No comments found for post");
        //set empty array to prevent null errors
        setComments([]);
      }
    });
  };

  //function to update the likes of every comment
  const updateCommentLikes = async (item) => {
    //key is the comment id
    const key = item.id;
    //increment likes
    let newLikes = item.likes + 1;
    //update the comment in the database with the new number of likes
    await update(ref(database, 'Comments/' + key), 
    {
      likes: newLikes,
    });
    console.log('Like added');
  };

  return (
    <View style={[styles.comments, styles.recentFlexBox]}>
    {/*Button to load comments. Once pressed, it will call the getComments function*/}
      <View style = {{top: 25, left: 210}}>
        <Button style={styles.loadCommButton} 
        title="Load Comments" 
        type="clear"
        titleStyle={styles.regsBtnText}
        onPress={() => { getComments()}}/>
      </View>
          
      <View style={[styles.sectionTitle, styles.comment3FlexBox]}>
      {/*If comments exist, display their number else display 0*/}
      <Text style={styles.comments45}>Comments {allComments.length > 0 ? `(${allComments.length})` : '(0)'}</Text>
        <View style={{top: 20, left: -105}}>
        {/*If comments exist, display flatlist with the comment details such as commenter name, date, likes and comment*/}
        {allComments.length > 0 && (
          <FlatList
          data={allComments}
          renderItem={({item}) => (<View style={{top: 0, left: 0, height: 140, width: 400, marginBottom: -40}}>
            <Text style={{fontSize: 15, fontFamily: FontFamily.nunitoLight}}> {item.a} </Text>
            <Text style={{fontFamily: FontFamily.nunitoRegular, fontSize: 15, top: 3}}> {item.x} </Text>
            <Text style={{fontFamily: FontFamily.nunitoLight, fontSize: 12, top: 10, left: 2, color: "#727477"}}> {item.z} </Text>
            <Text style={{fontFamily: FontFamily.nunitoLight, fontSize: 12, left: 100, top: -6, color: "#727477"}}> {item.y} likes </Text>
            <View style={{top: 0}}>
              {/*Press the image to like comment. Press calls the updateCommentLikes functio*/}
              <Pressable onPress={() => updateCommentLikes(item)}>
                  <Image
                    style={styles.vectorIcon}
                    contentFit="cover"
                    source={require("../assets/like-1.png")}
                  />
              </Pressable>
            </View>
          </View>
           )}
            keyExtractor={(item) => item.id}
          />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  recentFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  comment3FlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  recent1Typo: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 16,
  },
  iconLayout: {
    overflow: "hidden",
    height: 16,
    width: 16,
  },
  mAgoTypo: {
    marginTop: 4,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    lineHeight: 16,
  },
  comments45: {
    fontSize: FontSize.secondaryText_size,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    textAlign: "left",
    color: Color.colorDarkslateblue_100,
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 16,
  },
  recent1: {
    color: Color.colorDarkslateblue_100,
  },
  iconChevronDown: {
    marginLeft: 4,
  },
  recent: {
    flexDirection: "row",
    justifyContent: "center",
  },
  sectionTitle: {
    alignSelf: "stretch",
  },
  l: {
    fontSize: FontSize.size_3xs,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.primarySocialBlue,
    textAlign: "left",
  },
  iconComment: {
    display: "none",
    marginLeft: 10,
  },
  lParent: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.secondaryDarkGrey,
    width: 24,
    height: 24,
    padding: Padding.p_xs,
    flexDirection: "row",
    justifyContent: "center",
  },
  leslieAlexander: {
    color: Color.black,
  },
  veryTrue: {
    fontFamily: FontFamily.numansRegular,
    color: Color.black,
  },
  mAgo: {
    color: Color.secondaryLighterGray,
    fontFamily: FontFamily.nunitoRegular,
  },
  commentData: {
    marginLeft: 8,
  },
  info: {
    flexDirection: "row",
  },
  comment3: {
    width: 327,
    marginTop: 20,
  },
  data: {
    marginTop: 32,
    justifyContent: "center",
  },
  comments: {
    position: "absolute",
    top: 301,
    left: 33,
    justifyContent: "center",
  },
  vectorIcon: {
    height: 14,
    width: 14,
    top: -70,
    left: 340,
  },
  loadCommButton: {
    width: 100,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  regsBtnText: 
  {
    color: "#01427A",
    fontSize: 14,
    fontFamily: FontFamily.nunitoRegular
  },
});

export default CardContainer;
