/*
Date: 19/11/2023
Component: Search.js
Purpose: This component creates the search bar and search for post functionality. Used in Forum.js
*/

import React, { useMemo, useState, useCallback } from "react";
import { StyleSheet, View, Text, ImageSourcePropType, TextInput, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import {getDatabase, onValue, ref, update} from "firebase/database";
import { getAuth} from 'firebase/auth';
import { app } from "../App";

//dynamically generate search bar based on prop values
const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

//search object parameters
const Search = ({
  searchInputValue,
  searchPlaceholder,
  searchPosition,
  searchWidth,
  searchTop,
  searchLeft,
  searchBorderRadius,
  searchMarginLeft,
  rectangleViewBorderRadius,
  rectangleViewBackgroundColor,
  frameViewWidth,
  frameViewRight,
  frameViewLeft,
  searchFontFamily,
  //onSearchPress,
  //posts,
}) => {

  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState("");

  const database = getDatabase();

  //function to search for and display posts
  const handleSearch = () => {
    const postsRef = ref(database, 'posts/');

    //snapshot of all posts in the database
    onValue(postsRef, (snapshot) => {
      // Find matching user  
      const allPosts = snapshot.val();
      console.log(searchQuery);
      //find matching post by comparing post titles. Not case sensitive
      const matchingPost = Object.values(allPosts).find((u) => u.title.toLowerCase() === searchQuery.toLowerCase());

      if (matchingPost) 
      {
        //navigate to display the post if found
        navigation.navigate('ForumView', {post: matchingPost});
      } 
      else 
      {
        console.log('post not found in the database');
        alert('Post not found. Please enter the post title');
      }
    })
  };

  //memoizing style to ensure it doesnt re-render unnecessarily
  const searchStyle = useMemo(() => {
    return {
      ...getStyleValue("position", searchPosition),
      ...getStyleValue("width", searchWidth),
      ...getStyleValue("top", searchTop),
      ...getStyleValue("left", searchLeft),
      ...getStyleValue("borderRadius", searchBorderRadius),
      ...getStyleValue("marginLeft", searchMarginLeft),
    };
  }, [
    searchPosition,
    searchWidth,
    searchTop,
    searchLeft,
    searchBorderRadius,
    searchMarginLeft,
  ]);

  //memoizing style to ensure it doesnt re-render unnecessarily
  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", rectangleViewBorderRadius),
      ...getStyleValue("backgroundColor", rectangleViewBackgroundColor),
    };
  }, [rectangleViewBorderRadius, rectangleViewBackgroundColor]);

  //memoizing style to ensure it doesnt re-render unnecessarily
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("width", frameViewWidth),
      ...getStyleValue("right", frameViewRight),
      ...getStyleValue("left", frameViewLeft),
    };
  }, [frameViewWidth, frameViewRight, frameViewLeft]);

  //memoizing style to ensure it doesnt re-render unnecessarily
  const search1Style = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", searchFontFamily),
    };
  }, [searchFontFamily]);

  return (
    <View style={[styles.search, searchStyle]}>
      <View style={[styles.searchChild, rectangleViewStyle]} />
      <View style={[styles.searchParent, frameViewStyle]}>
        <Image
          style={styles.searchIcon}
          contentFit="cover"
          source={searchInputValue}
        />
        {/*Hold search query*/}
        <TextInput
          style={{left: 20, color: "#ffffff"}}
          placeholder={searchPlaceholder}
          placeholderTextColor="#ffffff"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {/*Click done to search by calling handleSearch*/}
        <TouchableOpacity
          style={{left: 300, top: -20}}
          activeOpacity={0.2}
          onPress={handleSearch}
        >
          <Text style={{color: "#ffffff"}}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 4,
    backgroundColor: Color.gray3Dark,
    position: "absolute",
  },
  searchIcon: {
    top: 2,
    left: 0,
    width: 15,
    height: 15,
    overflow: "hidden",
    position: "absolute",
  },
  search1: {
    top: 0,
    left: 25,
    fontSize: FontSize.body15Regular_size,
    lineHeight: 20,
    fontFamily: FontFamily.body15Regular,
    color: Color.colorGray_800,
    textAlign: "left",
    position: "absolute",
  },
  searchParent: {
    height: "50%",
    width: "23.19%",
    top: "25%",
    right: "73.91%",
    bottom: "25%",
    left: "2.9%",
    position: "absolute",
  },
  search: {
    width: 345,
    height: 40,
  },
});

export default Search;
