/*
Date: 19/11/2023
Component: SectionForm1.js
Purpose: This component holds the link to create a new post from the forum homepage
*/

import * as React from "react";
import { StyleSheet, View, TextInput, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const SectionForm1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.forumInner, styles.groupLayout]}>
      <View style={[styles.groupWrapper, styles.groupPosition]}>
        {/*Navigate to forum create to create a new post by clicking anywhere on this component*/}
        <Pressable
          style={[styles.groupWrapper, styles.groupPosition]}
          onPress={() => navigation.navigate("ForumCreate")}
        >
          <LinearGradient
            style={[styles.groupChild, styles.groupPosition]}
            locations={[0, 1]}
            colors={["rgba(255, 255, 255, 0.58)", "rgba(66, 141, 248, 0.42)"]}
          />
          <Image
            style={styles.groupItem}
            contentFit="cover"
            source={require("../assets/ellipse-5.png")}
          />
          <TextInput
            style={styles.whatsOnYour}
            placeholder="What's on your mind?"
            placeholderTextColor="#0a0806"
          />
          <View style={[styles.groupContainer, styles.parentLayout]}>
            <Pressable style={[styles.imageParent, styles.parentLayout]}>
              <Text style={[styles.image, styles.imageTypo]}>image</Text>
              <Image
                style={[styles.addPhotoAlternateIcon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/add-photo-alternate.png")}
              />
            </Pressable>
          </View>
          <Pressable style={[styles.videosParent, styles.parentLayout]}>
            <Text style={[styles.videos, styles.imageTypo]}>Videos</Text>
            <Image
              style={[styles.movieCreationIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/movie-creation.png")}
            />
          </Pressable>
          <Pressable style={[styles.attachParent, styles.parentLayout]}>
            <Text style={[styles.videos, styles.imageTypo]}>Attach</Text>
            <Image
              style={[styles.movieCreationIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/movie-creation.png")}
            />
          </Pressable>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 123,
    width: 370,
    position: "absolute",
  },
  groupPosition: {
    top: 0,
    left: 0,
  },
  parentLayout: {
    height: 21,
    position: "absolute",
  },
  imageTypo: {
    textAlign: "left",
    color: Color.black,
    textTransform: "capitalize",
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.nunitoRegular,
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: "transparent",
    left: 0,
    height: 123,
    width: 370,
    position: "absolute",
  },
  groupItem: {
    top: 16,
    left: 20,
    width: 40,
    height: 40,
    position: "absolute",
  },
  whatsOnYour: {
    top: 27,
    fontSize: FontSize.paragraphH1Reg_size,
    fontFamily: FontFamily.nunitoRegular,
    left: 75,
    position: "absolute",
  },
  image: {
    left: 19,
  },
  addPhotoAlternateIcon: {
    height: "76.19%",
    width: "27.59%",
    top: "9.52%",
    right: "72.41%",
    bottom: "14.29%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  imageParent: {
    width: 58,
    height: 21,
    left: 0,
    top: 0,
  },
  groupContainer: {
    width: 58,
    height: 21,
    top: 87,
    left: 75,
  },
  videos: {
    left: 21,
  },
  movieCreationIcon: {
    top: 2,
    width: 16,
    height: 16,
    left: 0,
  },
  videosParent: {
    left: 155,
    width: 65,
    top: 87,
  },
  attachParent: {
    left: 242,
    width: 63,
    top: 87,
  },
  groupWrapper: {
    left: 0,
    height: 123,
    width: 370,
    position: "absolute",
  },
  forumInner: {
    top: 130,
    left: 12,
  },
});

export default SectionForm1;
