/*
Date: 19/11/2023
Component: CommentForm.js
Purpose: This component allows the user to enter comments on posts and then adds them to the database. Used in ForumView
*/

import * as React from "react";
import { StyleSheet, View, TextInput, Pressable, ScrollView, KeyboardAvoidingView } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import { useState, useEffect, useCallback } from "react";
import {getDatabase, ref, set, onValue, update} from "firebase/database";
import { getAuth} from 'firebase/auth';
import { app } from "../App";

const CommentForm = ({post}) => {

  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [noComments, setNoComments] = useState(post.comments);

  // Create a reference to the database
  const database = getDatabase();
  const auth = getAuth(app);
  const user = auth.currentUser;
  const email = user.email;
  // Split email on "@" 
  const emailParts = email.split('@');
  // Get first part (before "@")
  const emailName = emailParts[0];

  //get the user's name from database to display
  const getName = () => {
    const userRef = ref(database, 'users/');

    onValue(userRef, (snapshot) => {
      // Find matching user by comparing emails
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

  //call getName when the page loads
  useEffect(() => {
    getName();
  }, [database]);

  //function to add the comment to the database
  const addToDatabase = async (comment) => {
    // Get the current date
    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0];
    console.log(formattedDate);
    const timeString = date.toLocaleTimeString();
    console.log(timeString);
    //define the comment's key and entry. Entry includes the ID of the post being commented on
    const key = `${formattedDate}-${emailName}-${timeString}`;
    console.log('Defined key', key);
    const entry = 
    {
      email: email,
      comment: comment || [],
      likes: 0,
      date: formattedDate,
      id: key,
      postID: post.id,
      name: name,
    };
    console.log('Defined entry')

    //set in the Comments table
    set(ref(database, 'Comments/' + key), entry).then(() => 
    {
    }).catch((error) => 
    {
      // An error occurred
      alert("Error adding to database: " + error.message);
    });
  }

  //function to update the number of comments on the post in the database
  const updatePostComments = async () => {
    const email = post.email;
    const emailParts = email.split('@');
    // Get first part (before "@")
    const emailName = emailParts[0];
    //post key
    const key = `${post.date}-${emailName}-${post.title}`;
    //increment number of comments
    let newComments = post.comments + 1;
    //update database
    await update(ref(database, 'posts/' + key), 
    {
      comments: newComments,
    });
    console.log('Comment added');
  };

  //function to publish comment
  const handleSubmit = async () => {
    //if the comment field is empty
    if(!comment)
    {
      alert("Please enter a title for the post");
    }
    else
    {
      await addToDatabase(comment);
      updatePostComments();
      alert("Comment created.");
    }
  }

  return (
    <View style={[styles.navigationComment, styles.navBgLayout]}>
      <View style={[styles.navBg, styles.navBgLayout]} />
      <View style={[styles.textInput, styles.ctaFlexBox]}>
        {/*Hold and set comment*/}
        <TextInput
          style={styles.typeYourComment}
          placeholder="Type your comment here..."
          placeholderTextColor="#000"
          value={comment}
          onChangeText={setComment}
          multiline={true}
        />
        <View style={[styles.cta, styles.ctaFlexBox]}>
          <Image
            style={styles.iconPlus}
            contentFit="cover"
            source={require("../assets/icon--plus.png")}
          />
          <LinearGradient
            style={styles.send}
            locations={[0, 1]}
            colors={["#01427a", "#ac1af0"]}
          >
            {/*Button to publish comment. calls handleSubmit on press*/}
            <Pressable style={[styles.pressable, styles.ctaFlexBox]} onPress={handleSubmit}>
              <Image
                style={styles.iconSend}
                contentFit="cover"
                source={require("../assets/icon--send.png")}
              />
            </Pressable>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBgLayout: {
    height: 88,
    width: 375,
    position: "absolute",
  },
  ctaFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  navBg: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorGray_500,
    overflow: "hidden",
  },
  typeYourComment: {
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.size_sm,
  },
  iconPlus: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  iconSend: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  pressable: {
    justifyContent: "center",
    padding: Padding.p_7xs,
    backgroundColor: "transparent",
    borderRadius: Border.br_13xl,
    flexDirection: "row",
  },
  send: {
    marginLeft: 16,
  },
  cta: {
    justifyContent: "flex-end",
  },
  textInput: {
    top: 12,
    left: 16,
    backgroundColor: Color.labelDarkPrimary,
    width: 343,
    justifyContent: "space-between",
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_9xs,
    paddingRight: Padding.p_9xs,
    paddingBottom: Padding.p_9xs,
    borderRadius: Border.br_13xl,
    flexDirection: "row",
    position: "absolute",
  },
  navigationComment: {
    top: 645,
    left: 9,
  },
});

export default CommentForm;
