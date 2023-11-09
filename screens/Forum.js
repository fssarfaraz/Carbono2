import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, StatusBar, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import SectionCardForm1 from "../components/SectionCardForm1";
import Property1HomeImage from "../components/Property1HomeImage";
import SectionCard from "../components/SectionCard";
import SectionForm1 from "../components/SectionForm1";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import Search from "../components/Search";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const Forum = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.forum}>
      <Image
        style={[styles.forumChild, styles.forumPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <SectionCardForm1 />
      <LinearGradient
        style={styles.gradientLayer}
        locations={[0, 1]}
        colors={["#01427a", "rgba(44, 44, 46, 0)"]}
      />
      <Property1HomeImage
        imageDimensions={require("../assets/navigation-barr3.png")}
        property1HomeIconPosition="absolute"
        property1HomeIconWidth={394}
        property1HomeIconHeight={106}
        property1HomeIconTop={746}
        property1HomeIconLeft={0}
      />
      <Pressable
        style={styles.iconPersonOutlineParent}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "UserProfile" })
        }
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/-icon-person-outline.png")}
        />
        <Pressable
          style={[styles.iconBookSaved, styles.iconLayout]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Educational" })
          }
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/-icon-book-saved2.png")}
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
            source={require("../assets/-icon-game-controller-outline3.png")}
          />
        </Pressable>
      </Pressable>
      <Pressable
        style={styles.iconCalculatorWrapper}
        onPress={() => navigation.navigate("Calculator")}
      >
        <Image
          style={styles.iconCalculator}
          contentFit="cover"
          source={require("../assets/-icon-calculator2.png")}
        />
      </Pressable>
      <Image
        style={[styles.forumItem, styles.forumPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <SectionCard />
      <SectionForm1 />
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
    </View>
  );
};

const styles = StyleSheet.create({
  forumPosition: {
    width: 400,
    left: 0,
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
  forumChild: {
    top: 440,
    height: 412,
  },
  gradientLayer: {
    top: 727,
    width: 393,
    height: 89,
    backgroundColor: "transparent",
    left: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconBookSaved: {
    height: 31,
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
    flexDirection: "row",
    alignItems: "flex-end",
    position: "absolute",
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
  forumItem: {
    top: 0,
    height: 352,
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
});

export default Forum;
