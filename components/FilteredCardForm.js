import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
import { useState, useEffect, useCallback } from "react";
import {getDatabase, onValue, ref, update, set} from "firebase/database";
import { getAuth} from 'firebase/auth';
import { app } from "../App";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

const FilteredCardForm = ({post, role}) => {

  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [likes, setLikes] = useState(post.likes);
  const [shouldShowMenu, setShouldShowMenu] = useState(false);

   // Create a reference to the database
  const database = getDatabase();
  const auth = getAuth(app);

  const getName = () => {
    const userRef = ref(database, 'users/');
    const user = auth.currentUser; 
    const email = user.email; 

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
    getName();
  }, [database]);

  const updatePostLikes = async () => {
    const email = post.email;
    const emailParts = email.split('@');
    // Get first part (before "@")
    const emailName = emailParts[0];
    const key = `${post.date}-${emailName}-${post.title}`;
    let newLikes = post.likes + 1;
    await update(ref(database, 'posts/' + key), 
    {
      likes: newLikes,
    });
    console.log('Like added');
    setLikes(post.likes + 1);
  };
  
  const toggleMenu = () => {
    setShouldShowMenu(!shouldShowMenu);
    console.log(shouldShowMenu);
  };

  const deletePost = async () =>  {
    const postsRef = ref(database, "posts/");
    let postId;
    console.log('delete');
    onValue(postsRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Post data:", data);
      // console.log("Current user:", auth.currentUser.email);
      console.log("Post title:", post.title);
      postId = Object.keys(data).find(
            (key) => data[key].title.toLowerCase() === post.title.toLowerCase()
          );
      console.log("Post ID:", postId);
    });

    // await database().ref(`posts/${postId}`).remove();
    await set(ref(database, `posts/${postId}`), null);
    navigation.goBack();
  }

  return (
    <View style={[styles.posts, styles.postsFlexBox]}>
      <View style={[styles.post1, styles.postsFlexBox]}>
        <View style={styles.content}>
          <View style={[styles.profileInfo, styles.profileInfoFlexBox]}>
            <View style={styles.infoFlexBox}>
              <Image
                style={styles.profilePhotoIcon}
                contentFit="cover"
                source={require("../assets/profile-photo.png")}
              />
              <View style={styles.jacobWashingtonParent}>
                <Text style={[styles.jacobWashington, styles.ifYouThinkTypo]}>
                  {name}
                </Text>
                <Text style={[styles.mAgo, styles.mAgoTypo]}>{post.date}</Text>
              </View>
            </View>
            <View>
              <Pressable onPress={toggleMenu}>
                <Image
                  style={styles.iconDotsVertical}
                  resizeMode="cover"
                  source={require('../assets/icon--dots-vertical.png')}
                />
              </Pressable>
            </View>

            {shouldShowMenu ? (
              <View>
                <Pressable onPress={deletePost}>
                  <Text>Delete</Text>
                </Pressable>
              </View>
            ) : null}
          </View>
          <Text
            style={[styles.ifYouThink, styles.ifYouThinkTypo]}
          >{post.post}</Text>

          <View style={[styles.postActions, styles.profileInfoFlexBox]}>
            <View style={styles.infoFlexBox}>
              <Pressable onPress={() => updatePostLikes(post, setLikes)}>
                <Image
                  style={styles.iconLike}
                  contentFit="cover"
                  source={require("../assets/icon--like.png")}
                />
              </Pressable>
              <Text style={[styles.text, styles.mAgoTypo]}>{likes}</Text>
            </View>

            <View style={[styles.comment, styles.infoFlexBox]}>
              <Image
                style={styles.iconLike}
                contentFit="cover"
                source={require("../assets/icon--comment.png")}
              />
              <Text style={[styles.text, styles.mAgoTypo]}>{post.comments}</Text>
            </View>
          </View>
        </View>
        <View style={styles.divider} />
      </View>
    </View>    
  );
};

const styles = StyleSheet.create({
  postsFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  profileInfoFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  ifYouThinkTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.nunitoRegular,
  },
  mAgoTypo: {
    color: Color.colorDarkslateblue_100,
    fontSize: 14,
    textAlign: "left",
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 16,
  },
  infoFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  profilePhotoIcon: {
    borderRadius: Border.br_81xl,
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  jacobWashington: {
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    color: Color.black,
    fontFamily: FontFamily.nunitoRegular,
  },
  mAgo: {
    marginTop: 2,
  },
  jacobWashingtonParent: {
    marginLeft: 8,
  },
  iconDotsVertical: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  profileInfo: {
    alignSelf: "stretch",
  },
  ifYouThink: {
    fontSize: FontSize.bodyBody1_size,
    lineHeight: 24,
    marginTop: 16,
    alignSelf: "stretch",
  },
  iconLike: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  text: {
    marginLeft: 8,
    top: 2,
  },
  comment: {
    width: 456,
  },
  postActions: {
    width: 327,
    marginTop: 16,
  },
  content: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  divider: {
    borderStyle: "solid",
    borderColor: Color.colorDarkslateblue_100,
    borderTopWidth: 2,
    height: 2,
    marginTop: 16,
    alignSelf: "stretch",
  },
  post1: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  posts: {
    position: "absolute",
    top: 115,
    left: 8,
    width: 375,
    justifyContent: "center",
  },
  menuText: {
    fontSize: 28,
    // lineHeight: 28,
    fontWeight: "600",
    fontFamily: "Nunito-SemiBold",
    color: "#000",
    textAlign: "center",
    bottom: 30,
    position: "absolute",
  },
  deleteMenu: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    bottom: 110,
    zIndex: 2,
    width: 200,
    height: 200,
    padding: 20,
    position: "absolute",
    borderRadius: 20,
  },
});

export default FilteredCardForm;

