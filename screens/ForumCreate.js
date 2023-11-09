import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, StatusBar, Pressable, Text } from "react-native";
import Property1HomeImage from "../components/Property1HomeImage";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { useNavigation } from "@react-navigation/native";
import SectionForm from "../components/SectionForm";
import FormContainer1 from "../components/FormContainer1";
import { FontSize, FontFamily, Padding, Color } from "../GlobalStyles";

const ForumCreate = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.forumCreate}>
      <Image
        style={[styles.forumCreateChild, styles.forumPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.forumCreateItem, styles.forumPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Property1HomeImage
        imageDimensions={require("../assets/navigation-barr4.png")}
        property1HomeIconPosition="absolute"
        property1HomeIconWidth={394}
        property1HomeIconHeight={106}
        property1HomeIconTop={746}
        property1HomeIconLeft={0}
      />
      <View style={[styles.iconPersonOutlineParent, styles.publishFlexBox]}>
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/-icon-person-outline.png")}
        />
        <Image
          style={[styles.iconBookSaved, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-book-saved3.png")}
        />
        <Image
          style={[styles.iconDiscussion, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/-icon-discussion1.png")}
        />
        <Image
          style={[styles.iconGameControllerOutline, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-game-controller-outline4.png")}
        />
      </View>
      <View style={styles.iconCalculatorWrapper}>
        <Image
          style={styles.iconCalculator}
          contentFit="cover"
          source={require("../assets/-icon-calculator3.png")}
        />
      </View>
      <StyleDefaultDarkModeTrue
        styleDefaultDarkModeTrueAlignSelf="unset"
        styleDefaultDarkModeTruePosition="absolute"
        styleDefaultDarkModeTrueTop={10}
        styleDefaultDarkModeTrueLeft={9}
        styleDefaultDarkModeTrueBackgroundColor="rgba(255, 255, 255, 0)"
        styleDefaultDarkModeTrueWidth={375}
        styleDefaultDarkModeTrueMarginLeft="unset"
        styleDefaultDarkModeTrueMarginTop="unset"
      />
      <View style={styles.intro}>
        <Pressable style={[styles.publish, styles.publishFlexBox]}>
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
      <SectionForm />
      <FormContainer1
        dimensionCode={require("../assets/rectangle4.png")}
        carDimensions={require("../assets/rectangle5.png")}
        productCode={require("../assets/rectangle6.png")}
      />
      <View style={styles.cursor} />
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
  forumCreateChild: {
    width: 529,
    height: 330,
    top: 0,
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
    left: 92,
    fontSize: FontSize.paragraphH1Reg_size,
    letterSpacing: 1.8,
    textTransform: "uppercase",
    color: Color.colorDarkslateblue_100,
    textAlign: "center",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    lineHeight: 16,
    top: 4,
  },
  discard1: {
    color: Color.colorGray_400,
  },
  discard: {
    left: -6,
  },
  intro: {
    top: 62,
    left: 29,
    width: 340,
    height: 24,
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
});

export default ForumCreate;
