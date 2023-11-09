import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text, StatusBar } from "react-native";
import Property1HomeImage from "../components/Property1HomeImage";
import { useNavigation } from "@react-navigation/native";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { Border, FontFamily, Color, Padding, FontSize } from "../GlobalStyles";

const Games = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.games}>
      <Image
        style={styles.gamesChild}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Property1HomeImage
        imageDimensions={require("../assets/navigation-barr8.png")}
        property1HomeIconPosition="absolute"
        property1HomeIconWidth={394}
        property1HomeIconHeight={106}
        property1HomeIconTop={746}
        property1HomeIconLeft={0}
      />
      <View style={[styles.iconPersonOutlineParent, styles.parentFlexBox]}>
        <Pressable
          style={styles.iconLayout3}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "UserProfile" })
          }
        >
          <Image
            style={styles.iconLayout2}
            contentFit="cover"
            source={require("../assets/-icon-person-outline.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.iconBookSaved, styles.iconLayout1]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Educational" })
          }
        >
          <Image
            style={styles.iconLayout2}
            contentFit="cover"
            source={require("../assets/-icon-book-saved2.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.iconDiscussion, styles.iconLayout3]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Forum" })
          }
        >
          <Image
            style={styles.iconLayout2}
            contentFit="cover"
            source={require("../assets/-icon-discussion.png")}
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
          source={require("../assets/-icon-calculator2.png")}
        />
      </Pressable>
      <Image
        style={styles.gamesItem}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <View style={[styles.rectangleParent, styles.parentFlexBox]}>
        <View style={styles.frameChild} />
        <View style={styles.frameItem} />
        <View style={styles.frameItem} />
        <View style={styles.frameItem} />
        <View style={styles.frameItem} />
      </View>
      <Image
        style={styles.brC4s1EgsLauncherPdp2560xIcon}
        contentFit="cover"
        source={require("../assets/23brc4s1egslauncherpdp2560x14402560x144070cf344c9005-1.png")}
      />
      <Image
        style={styles.brC4s1EgsLauncherPdp2560xIcon1}
        contentFit="cover"
        source={require("../assets/23brc4s1egslauncherpdp2560x14402560x144070cf344c9005-2.png")}
      />
      <View style={styles.marvelsSpiderMan2Playstati} />
      <Image
        style={[styles.egsDestiny2lightfallBungieAIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/egs-destiny2lightfall-bungie-addon-g1a-00-1920x1080484927180fa94217cdce9e1bd5aa5e9f-1.png")}
      />
      <Image
        style={[styles.marvelsSpiderMan2PlaystatiIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/marvelsspiderman2playstation52021games3840x21601585-1.png")}
      />
      <View style={[styles.popularParent, styles.parentFlexBox]}>
        <Pressable onPress={() => navigation.navigate("PopularGames")}>
          <Text style={[styles.popular1, styles.popular1Typo]}>Popular</Text>
        </Pressable>
        <Pressable
          style={styles.new}
          onPress={() => navigation.navigate("NewGames")}
        >
          <Text style={[styles.popular1, styles.popular1Typo]}>New</Text>
        </Pressable>
        <Pressable
          style={styles.new}
          onPress={() => navigation.navigate("RecommendedGames")}
        >
          <Text style={[styles.popular1, styles.popular1Typo]}>
            Recommended
          </Text>
        </Pressable>
        <Pressable
          style={styles.new}
          onPress={() => navigation.navigate("AllGames")}
        >
          <Text style={[styles.allGames1, styles.allGames1Typo]}>
            All Games
          </Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("SearchQuery")}
      >
        <Image
          style={[styles.icon3, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
      </Pressable>
      <Text style={[styles.readyToPlay, styles.allGames1Typo]}>
        Ready To Play?
      </Text>
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
      <View style={styles.spaceVoyagersWrapper}>
        <Text style={[styles.spaceVoyagers, styles.popular1Typo]}>
          Space Voyagers
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout1: {
    width: 33,
    marginLeft: 72,
  },
  iconLayout3: {
    height: 30,
    width: 30,
  },
  iconLayout: {
    height: 326,
    width: 240,
    top: 272,
    borderRadius: Border.br_46xl,
    position: "absolute",
  },
  popular1Typo: {
    textAlign: "left",
    fontWeight: "600",
  },
  allGames1Typo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorDarkslateblue_100,
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  gamesChild: {
    top: 422,
    height: 430,
    width: 400,
    left: 0,
    position: "absolute",
  },
  iconBookSaved: {
    height: 31,
    marginLeft: 72,
  },
  iconDiscussion: {
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
  gamesItem: {
    height: 455,
    top: 0,
    width: 400,
    left: 0,
    position: "absolute",
  },
  frameChild: {
    borderRadius: 2,
    backgroundColor: "#4c4d5a",
    width: 13,
    height: 3,
  },
  frameItem: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.colorDimgray_100,
    width: 3,
    marginLeft: 6,
    height: 3,
  },
  rectangleParent: {
    top: 641,
    left: 173,
  },
  brC4s1EgsLauncherPdp2560xIcon: {
    top: 187,
    left: 1,
    borderRadius: 146,
    width: 392,
    height: 496,
    position: "absolute",
  },
  brC4s1EgsLauncherPdp2560xIcon1: {
    top: 237,
    left: 51,
    width: 292,
    height: 396,
    borderRadius: Border.br_46xl,
    position: "absolute",
  },
  marvelsSpiderMan2Playstati: {
    top: 525,
    left: 60,
    borderRadius: 27,
    backgroundColor: "rgba(31, 34, 40, 0.3)",
    width: 218,
    height: 53,
    position: "absolute",
  },
  egsDestiny2lightfallBungieAIcon: {
    left: 0,
    width: 240,
    top: 272,
  },
  marvelsSpiderMan2PlaystatiIcon: {
    left: 363,
  },
  popular1: {
    fontFamily: FontFamily.nunitoSemiBold,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
    fontWeight: "600",
    fontSize: FontSize.body15Regular_size,
  },
  new: {
    marginLeft: 37,
  },
  allGames1: {
    fontSize: FontSize.body15Regular_size,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  popularParent: {
    top: 172,
    left: 13,
  },
  icon3: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "86.34%",
    top: "12.12%",
    right: "8.7%",
    bottom: "85.59%",
    width: "4.96%",
    height: "2.29%",
    position: "absolute",
  },
  readyToPlay: {
    top: 93,
    left: 37,
    fontSize: FontSize.size_11xl,
    position: "absolute",
  },
  spaceVoyagers: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.labelDarkPrimary,
    textAlign: "left",
    fontWeight: "600",
    top: 0,
    left: 0,
    position: "absolute",
  },
  spaceVoyagersWrapper: {
    top: 543,
    left: 120,
    width: 98,
    height: 18,
    position: "absolute",
  },
  games: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Games;
