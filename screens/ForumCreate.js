import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, StatusBar, Pressable, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Padding, Color } from "../GlobalStyles";
import { useState, useEffect } from "react";
import {getDatabase, ref, set, onValue} from "firebase/database";
import { getAuth} from 'firebase/auth';
import { app } from "../App";

const ForumCreate = () => {
  const navigation = useNavigation();

  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [name, setName] = useState("");

  // Create a reference to the database
  const database = getDatabase();
  console.log('connected to database');
  const auth = getAuth(app);
  console.log('got auth');
  const user = auth.currentUser; 
  console.log('got current user');
  const email = user.email; 
  console.log('User email: ', email);
  // Split email on "@" 
  const emailParts = email.split('@');
  // Get first part (before "@")
  const emailName = emailParts[0];
  console.log(emailName);

  const getName = () => {
    const userRef = ref(database, 'users/');

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

  useEffect(() => {
    // Fetch poster name
    getName();
  }, [post]);

  const addToDatabase = async (title, post) => {
    // Get the current date
    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0];
    console.log(formattedDate);
    const key = `${formattedDate}-${emailName}-${title}`;
    console.log('Defined key', key);
    const entry = 
    {
      id: key,
      email: email,
      title: title,
      post: post,
      likes: 0,
      comments: 0,
      date: formattedDate,
      name: name,
    };
    console.log('Defined entry')
    // Set the user data in the database
    set(ref(database, 'posts/' + key), entry).then(() => 
    {
    }).catch((error) => 
    {
      // An error occurred
      alert("Error adding to database: " + error.message);
    });
  }

  const handleSubmit = async () => {
    if(!title)
    {
      alert("Please enter a title for the post");
    }
    if(!post)
    {
      alert("Please enter post content");
    }
    if(title && post)
    {
      addToDatabase(title, post);
      alert("Post created.");
      navigation.navigate('Forum');
    }
  }

  return (
    <View style={styles.forumCreate}>
      <Image
        style={[styles.ellipse1]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />

      <View style={styles.intro}>
        <Pressable style={[styles.publish, styles.publishFlexBox]}
          onPress={handleSubmit}>
          <Text
            style={[styles.publish1, styles.publish1Typo]}
          >{`Publish `}</Text>
        </Pressable>

        <Text style={[styles.createPost, styles.discardPosition]}>
          Create Post
        </Text>

        <Pressable
          style={[styles.discard, styles.discardPosition]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Forum" })
          }
        >
          <Text style={[styles.discard1, styles.publish1Typo]}>Discard</Text>
        </Pressable>
      </View>

      <View style={styles.inputBoxes}>
        <TextInput
          style={styles.titleInput}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.postInput}
          placeholder="What's on your mind?"
          multiline={true}
          value={post}
          onChangeText={setPost}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  forumPosition: {
    left: 0,
    position: "absolute",
  },
  publishFlexBox: {
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
  publish1Typo: {
    textAlign: "right",
    fontSize: FontSize.body15Regular_size,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    lineHeight: 16,
  },
  discardPosition: {
    top: 4,
    position: "absolute",
  },
  ellipse1: {
    width: 500,
    height: 380,
    top: -150,
    left: -35
  },
  forumCreateItem: {
    top: 505,
    width: 400,
    height: 347,
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
  publish1: {
    color: Color.labelDarkPrimary,
  },
  publish: {
    left: 256,
    borderRadius: 24,
    backgroundColor: Color.colorBlueviolet_200,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_9xs,
    top: 0,
  },
  createPost: {
    left: 95,
    fontSize: 17,
    letterSpacing: 1.8,
    textTransform: "uppercase",
    color: Color.colorDarkslateblue_100,
    textAlign: "center",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    lineHeight: 16,
    top: 0,
  },
  discard1: {
    color: Color.colorGray_400,
  },
  discard: {
    left: -6,
  },
  intro: {
    top: 65,
    left: 29,
    width: 340,
    height: 30,
    position: "absolute",
  },
  cursor: {
    top: 127,
    left: 89,
    borderStyle: "solid",
    borderColor: "#9d9b9b",
    borderRightWidth: 1,
    width: 1,
    height: 25,
    position: "absolute",
  },
  forumCreate: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
  inputBoxes: {
    marginTop: 10,
    padding: 16,
    top: -250,
  },
  titleInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  postInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    height: 210,
  },
});

export default ForumCreate;

