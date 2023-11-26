import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SectionCardForm1 from "../components/SectionCardForm1";
import SectionForm1 from "../components/SectionForm1";
import Search from "../components/Search";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";
import { ScrollView } from "react-native";
import { useEffect, useState } from "react";
import {getDatabase, onValue, ref, set} from "firebase/database";
import { getAuth} from 'firebase/auth';
import { app } from "../App";

const Forum = () => {
  const navigation = useNavigation();

  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);
  const [gotPosts, setGotPosts] = useState(false);

  // Create a reference to the database
  const database = getDatabase();
  const auth = getAuth(app);

  const fetchPosts = () => {
    //fetching energy data
    const postsRef = ref(database, "posts/");

    onValue(postsRef, (snapshot) => {
      const data = snapshot.val();

      const allThePosts = Object.entries(data).map(([id, entry]) => ({
        comments: entry.comments,
        date: entry.date,
        email: entry.email,
        post: entry.post,
        likes: entry.likes,
        title: entry.title,
      }));

      //if data is not empty
      if (allThePosts.length > 0) 
      {
        console.log('Posts:', allThePosts);
        setPosts(allThePosts);
        setGotPosts(true);
      } 
      else 
      {
        console.log("No energy data found for current user");
        setEnergyData([]);
      }
    });
  }

  useEffect(() => {
    // Fetch posts from the database
    fetchPosts();
  }, [database]);

  return (
    <View style={styles.forum}>
      {/* Background Images */}
      <Image style={[styles.ellipse1, styles]} contentFit="cover" source={require("../assets/ellipse-3.png")} />
      <Image style={[styles.ellipse2, styles]} contentFit="contain" source={require("../assets/ellipse-3.png")} />

      {/*Whats on your mind*/}
      <SectionForm1 />
      
      {/* Trending posts*/}
        <View style={{ top: -400 }}>
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <View key={index}>
                <Pressable onPress={() => navigation.navigate("ForumView", { post: post })}>
                  <SectionCardForm1 post={post} />
                </Pressable>
              </View>
            ))
          ) : (
            <Text>No posts to show</Text>
          )}
        </View>

      <Search
        searchInputValue={require("../assets/search2.png")}
        searchPlaceholder="Search"
        searchPosition="absolute"
        searchWidth={358}
        searchTop={202}
        searchLeft={12}
        searchBorderRadius={20}
        searchMarginLeft="unset"
        rectangleViewBorderRadius={20}
        rectangleViewBackgroundColor="rgba(1, 66, 122, 0.7)"
        frameViewWidth="23.18%"
        frameViewRight="73.91%"
        frameViewLeft="2.91%"
        searchFontFamily="Nunito-Regular"
        onSearchPress={() => navigation.navigate("SearchQuery")}
      />
      <Text style={styles.trendingTopics}>TRENDING TOPICS</Text>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavBar}>
        <Pressable onPress={() => handleNavigation("UserProfile")}>
          <Image style={styles.bottomNavIcon} source={require("../assets/-icon-person-outline.png")} />
        </Pressable>
        <Pressable onPress={() => handleNavigation("Educational")}>
          <Image style={styles.bottomNavIcon} source={require("../assets/-icon-book-saved3.png")} />
        </Pressable>
        <Pressable onPress={() => handleNavigation("Forum")}>
          <Image style={styles.bottomNavIcon} source={require("../assets/-icon-discussion.png")} />
        </Pressable>
        <Pressable onPress={() => handleNavigation("Games")}>
          <Image style={styles.bottomNavIcon} source={require("../assets/-icon-game-controller-outline6.png")} />
        </Pressable>
      </View>

      {/* Surface Icon */}
      <Image style={styles.surfaceIcon} resizeMode="cover" source={require("../assets/navigation-barr2.png")} />

      {/* Calculator Icon */}
      <Pressable onPress={() => handleNavigation("Calculator")} style={styles.iconCalculatorParent}>
        <Image style={styles.iconCalculator} resizeMode="cover" source={require("../assets/-icon-calculator.png")} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ellipse2: {
    top: 545,
    height: 400,
    width: 550,
    left: 45,
    position: "absolute",
  },
  ellipse1: {
    top: -115,
    height: 400,
    width: 550,
    left: -210,
    position: "absolute",
  },
  trendingTopics: {
    top: 262,
    left: 12,
    fontSize: FontSize.primaryText_size,
    lineHeight: 30,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
    width: 310,
    height: 37,
    position: "absolute",
  },
  forum: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
  bottomNavBar: {
    flexDirection: "row",
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 10,
    position: "relative",
    zIndex: 2,
  },
  bottomNavIcon: {
    width: 30,
    height: 30,
    top: 700,
  },
  surfaceIcon: {
    flex: 1,
    width: "100%",
    height: 135,
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
  iconCalculator: {
    top: 728,
    width: 40,
    height: 45,
    alignSelf: "center",
    position: "absolute",
    zIndex: 2,
  },
  iconCalculatorParent: {
    flex: 1,
    position: "absolute",
    width: "100%",
    padding: 10,
    zIndex: 2,
  },
});

export default Forum;
