import * as React from "react";
import { StyleSheet, View, TextInput, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import { useState } from "react";
import {getDatabase, ref, set, onValue, update} from "firebase/database";
import { getAuth} from 'firebase/auth';
import { app } from "../App";

const CommentForm = ({post}) => {

  const [comment, setComment] = useState("");

  // Create a reference to the database
  const database = getDatabase();
  const auth = getAuth(app);
  const user = auth.currentUser;
  const email = user.email;
  // Split email on "@" 
  const emailParts = email.split('@');
  // Get first part (before "@")
  const emailName = emailParts[0];

  const addToDatabase = async (comment) => {
    // Get the current date
    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0];
    console.log(formattedDate);
    const timeString = date.toLocaleTimeString();
    console.log(timeString);
    const key = `${formattedDate}-${emailName}-${timeString}`;
    console.log('Defined key', key);
    const entry = 
    {
      email: email,
      comment: comment || [],
      likes: 0,
      date: formattedDate,
    };
    console.log('Defined entry')

    const postsRef = ref(database, 'posts/');
    onValue(postsRef, (snapshot) => {
      // Find matching user  
      const posts = snapshot.val();
      const emailP = post.email;
      const matchingPost = Object.values(posts).find((u) => u.email.toLowerCase() === emailP);

      if (matchingPost) 
      {
        const emailParts = emailP.split('@');
        // Get first part (before "@")
        const emailName = emailParts[0];
        const key2 = `${matchingPost.date}-${emailName}-${matchingPost.title}`;
        const commentsRef = ref(database, 'posts/' + key2 + '/CommentsPosted/' + key)

        set(ref(database, 'posts/' + key2 + '/CommentsPosted/' + key), entry).then(() => 
        {
          update(ref(database, 'posts/' + key2), 
          {
            likes: post.likes,
            comments: post.comments + 1,
            date: post.date,
            email: post.email,
            post: post.post,
            title: post.title
          });
        console.log('comment added');
        }).catch((error) => 
        {
          // An error occurred
          alert("Error adding to database: " + error.message);
        });
      } 
      else 
      {
        console.log('Post not found in the database');
      }
    });
  }

  const handleSubmit = async () => {
    if(!comment)
    {
      alert("Please enter a title for the post");
    }
    else
    {
      addToDatabase(comment);
      alert("Comment created.");
    }
  }

  return (
    <View style={[styles.navigationComment, styles.navBgLayout]}>
      <View style={[styles.navBg, styles.navBgLayout]} />
      <View style={[styles.textInput, styles.ctaFlexBox]}>
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
