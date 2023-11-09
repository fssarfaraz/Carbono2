import * as React from "react";
import { StyleSheet, View, TextInput, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const SectionForm = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.groupPosition}>
        <View style={styles.groupPosition}>
          <LinearGradient
            style={[styles.groupChild, styles.groupPosition]}
            locations={[0, 1]}
            colors={["rgba(66, 141, 248, 0)", "rgba(66, 141, 248, 0)"]}
          />
          <Image
            style={styles.groupItem}
            contentFit="cover"
            source={require("../assets/ellipse-51.png")}
          />
          <TextInput
            style={styles.whatsOnYour}
            placeholder="What’s on your mind?"
            placeholderTextColor="#717477"
          />
        </View>
      </View>
      <View style={[styles.tabs, styles.tabsFlexBox]}>
        <Image
          style={[styles.iconImage, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon--image.png")}
        />
        <Image
          style={[styles.iconGif, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon--gif.png")}
        />
        <Image
          style={[styles.iconGif, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon--camera.png")}
        />
        <Image
          style={[styles.iconGif, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon--attachment.png")}
        />
      </View>
      <Pressable style={[styles.close, styles.tabsFlexBox]}>
        <Image
          style={styles.iconClose}
          contentFit="cover"
          source={require("../assets/icon--close.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: 0,
    top: 0,
    height: 125,
    width: 370,
    position: "absolute",
  },
  tabsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    top: 85,
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: "transparent",
  },
  groupItem: {
    top: 16,
    left: 20,
    width: 40,
    height: 41,
    position: "absolute",
  },
  whatsOnYour: {
    top: 25,
    left: 79,
    fontWeight: "500",
    fontFamily: FontFamily.nunitoMedium,
    fontSize: FontSize.body17Regular_size,
    position: "absolute",
  },
  iconImage: {
    overflow: "hidden",
  },
  iconGif: {
    marginLeft: 16,
    overflow: "hidden",
  },
  tabs: {
    left: 63,
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorDimgray_200,
    borderColor: Color.colorDimgray_200,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
  },
  iconClose: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  close: {
    left: 19,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorDimgray_300,
    borderColor: Color.secondaryDarkGrey,
    padding: Padding.p_5xs,
  },
  groupParent: {
    top: 102,
    left: 10,
    height: 125,
    width: 370,
    position: "absolute",
  },
});

export default SectionForm;
