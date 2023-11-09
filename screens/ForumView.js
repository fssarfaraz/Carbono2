import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, StatusBar, Text } from "react-native";
import { Button } from "@rneui/themed";
import Property1HomeImage from "../components/Property1HomeImage";
import { useNavigation } from "@react-navigation/native";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import FilteredCardForm from "../components/FilteredCardForm";
import CardContainer from "../components/CardContainer";
import CommentForm from "../components/CommentForm";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const ForumView = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.forumView}>
      <Image
        style={[styles.forumViewChild, styles.forumViewPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.forumViewItem, styles.forumViewPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Property1HomeImage
        imageDimensions={require("../assets/navigation-barr5.png")}
        property1HomeIconPosition="absolute"
        property1HomeIconWidth={394}
        property1HomeIconHeight={106}
        property1HomeIconTop={746}
        property1HomeIconLeft={0}
      />
      <View style={[styles.iconPersonOutlineParent, styles.introFlexBox]}>
        <Pressable
          style={styles.iconLayout1}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "UserProfile" })
          }
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/-icon-person-outline.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.iconBookSaved, styles.iconLayout]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Educational" })
          }
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/-icon-book-saved3.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.iconDiscussion, styles.iconLayout1]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Forum" })
          }
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/-icon-discussion.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.iconGameControllerOutline, styles.iconLayout]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Games" })
          }
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/-icon-game-controller-outline5.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={styles.iconCalculatorWrapper}
        onPress={() => navigation.navigate("Calculator")}
      >
        <Image
          style={styles.iconCalculator}
          contentFit="cover"
          source={require("../assets/-icon-calculator3.png")}
        />
      </Pressable>
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
      <View style={[styles.intro, styles.introFlexBox]}>
        <Button
          radius={5}
          iconPosition="left"
          type="solid"
          color="#01427a"
          icon={{ name: "chevron-left", type: "material-community" }}
          containerStyle={styles.backIconBtn}
          buttonStyle={styles.backIconBtn1}
        />
        <Text style={styles.post}>Post</Text>
      </View>
      <FilteredCardForm />
      <CardContainer />
      <CommentForm />
    </View>
  );
};

const styles = StyleSheet.create({
  backIconBtn: {
    padding: 8,
  },
  backIconBtn1: {
    borderRadius: 30,
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  forumViewPosition: {
    width: 400,
    left: 0,
    position: "absolute",
  },
  introFlexBox: {
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
  forumViewChild: {
    top: 0,
    height: 330,
  },
  forumViewItem: {
    top: 502,
    height: 350,
  },
  icon: {
    height: "100%",
    width: "100%",
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
  post: {
    fontSize: FontSize.primaryText_size,
    letterSpacing: 2,
    lineHeight: 16,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorDarkslateblue_100,
    textAlign: "center",
    flex: 1,
  },
  intro: {
    top: 58,
    left: 18,
    width: 352,
    alignItems: "center",
  },
  forumView: {
    backgroundColor: Color.labelDarkPrimary,
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default ForumView;
