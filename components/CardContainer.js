import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import CommentContainer from "./CommentContainer";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import { useState, useCallback } from "react";

const CardContainer = ({post}) => {

  const [allComments, setComments] = useState([]);

  /*
  const getComments = useCallback((post) => {
    const postsRef = ref(database, 'posts/');

    onValue(postsRef, (snapshot) => {
      // Find matching user  
      const posts = snapshot.val();
      const email = post.email;
      const matchingPost = Object.values(posts).find((u) => u.email.toLowerCase() === email);

      if (matchingPost) 
      {
        const emailParts = email.split('@');
        // Get first part (before "@")
        const emailName = emailParts[0];
        const key = `${matchingPost.date}-${emailName}-${matchingPost.title}`;
        update(ref(database, 'posts/' + key), 
        {
          likes: post.likes + 1,
          comments: post.comments,
          date: post.date,
          email: post.email,
          post: post.post,
          title: post.title
        });
        console.log('Like added');
      } 
      else 
      {
        console.log('Post not found in the database');
      }
    });
    setLikes(post.likes + 1);
  }, [post]);
  */

  return (
    <View style={[styles.comments, styles.recentFlexBox]}>
      <View style={[styles.sectionTitle, styles.comment3FlexBox]}>
        <Text style={styles.comments45}>Comments {post.comments}</Text>
        <View style={[styles.recent, styles.recentFlexBox]}>
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
});

export default CardContainer;
