import * as React from "react";
import { Text, StyleSheet, View, Pressable, StatusBar } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Property1HomeImage from "../components/Property1HomeImage";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import Search from "../components/Search";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const LibraryofResourcesTranspor = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.libraryofResourcesTranspor}>
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <Text style={styles.subitle}>New arrivals</Text>
          <View style={styles.frame2}>
            <Text style={styles.viewAll}>{`View All `}</Text>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
          </View>
        </View>
        <View style={styles.frame3}>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame.png")}
          />
          <View style={styles.frame4}>
            <LinearGradient
              style={styles.card}
              locations={[0, 0.71]}
              colors={["#eb5757", "#fff"]}
            >
              <Pressable
                style={styles.pressable}
                onPress={() => navigation.navigate("Articles")}
              >
                <Image
                  style={styles.vectorIcon1}
                  contentFit="cover"
                  source={require("../assets/vector1.png")}
                />
                <Text style={styles.publicTransport}>{`Public 
Transport`}</Text>
              </Pressable>
            </LinearGradient>
          </View>
          <View style={styles.frame5}>
            <LinearGradient
              style={styles.card1}
              locations={[0, 0.46]}
              colors={["#2a417d", "#fff"]}
            >
              <Pressable
                style={styles.pressable}
                onPress={() => navigation.navigate("Articles")}
              >
                <Text style={styles.cycling}>Cycling</Text>
                <Image
                  style={styles.illustrationIdeaIdeasManP}
                  contentFit="cover"
                  source={require("../assets/-illustration-idea-ideas-man-plant-pants.png")}
                />
                <Image
                  style={styles.groupIcon}
                  contentFit="cover"
                  source={require("../assets/group.png")}
                />
              </Pressable>
            </LinearGradient>
          </View>
          <Property1HomeImage
            imageDimensions={require("../assets/navigation-barr.png")}
            property1HomeIconPosition="absolute"
            property1HomeIconWidth={394}
            property1HomeIconHeight={105}
            property1HomeIconTop={557}
            property1HomeIconLeft={0}
          />
          <View style={styles.frame6}>
            <Pressable
              style={styles.groupWrapper}
              onPress={() => navigation.navigate("Calculator")}
            >
              <Image
                style={styles.groupIcon1}
                contentFit="cover"
                source={require("../assets/group1.png")}
              />
            </Pressable>
          </View>
          <View style={styles.frame7}>
            <View style={styles.iconPersonOutlineParent}>
              <Pressable
                style={styles.iconPersonOutline}
                onPress={() =>
                  navigation.navigate("BottomTabsRoot", {
                    screen: "UserProfile",
                  })
                }
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/-icon-person-outline.png")}
                />
              </Pressable>
              <Pressable
                style={styles.iconBookSaved}
                onPress={() =>
                  navigation.navigate("BottomTabsRoot", {
                    screen: "Educational",
                  })
                }
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/-icon-book-saved.png")}
                />
              </Pressable>
              <Pressable
                style={styles.iconDiscussion}
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
                style={styles.iconGameControllerOutline}
                onPress={() =>
                  navigation.navigate("BottomTabsRoot", { screen: "Games" })
                }
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/-icon-game-controller-outline.png")}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.frame8}>
            <Text style={styles.subitle}>Top picks</Text>
          </View>
          <View style={styles.frame9}>
            <LinearGradient
              style={styles.card2}
              locations={[0, 0.86]}
              colors={["#4a743f", "#fff"]}
            >
              <Pressable
                style={styles.pressable}
                onPress={() => navigation.navigate("Articles")}
              >
                <Text style={styles.greenAndBiofuels}>{`Green and 
BioFuels`}</Text>
              </Pressable>
            </LinearGradient>
          </View>
          <View style={styles.frame10}>
            <Text style={styles.viewAll}>{`View All `}</Text>
          </View>
          <Image
            style={styles.frameIcon1}
            contentFit="cover"
            source={require("../assets/frame1.png")}
          />
          <Image
            style={styles.frameIcon2}
            contentFit="cover"
            source={require("../assets/frame2.png")}
          />
          <View style={styles.frame11}>
            <LinearGradient
              style={styles.card3}
              locations={[0, 1]}
              colors={["#f58cfe", "#fff"]}
            >
              <Pressable
                style={styles.pressable}
                onPress={() => navigation.navigate("Articles")}
              >
                <Text style={styles.cycling}>{`Green 
Driving`}</Text>
                <Image
                  style={styles.groupIcon2}
                  contentFit="cover"
                  source={require("../assets/group2.png")}
                />
              </Pressable>
            </LinearGradient>
          </View>
          <View style={styles.frame12}>
            <LinearGradient
              style={styles.card4}
              locations={[0, 0.46]}
              colors={["#95bcd8", "#fff"]}
            >
              <Pressable
                style={styles.pressable}
                onPress={() => navigation.navigate("Articles")}
              >
                <Text style={styles.cycling}>Reduce carbon</Text>
                <Image
                  style={styles.illustrationIdeaIdeasManP1}
                  contentFit="cover"
                  source={require("../assets/-illustration-idea-ideas-man-plant-pants1.png")}
                />
                <Image
                  style={styles.emojiExhaustGasesFactory}
                  contentFit="cover"
                  source={require("../assets/-emoji-exhaust-gases-factory.png")}
                />
              </Pressable>
            </LinearGradient>
          </View>
          <View style={styles.frame13}>
            <LinearGradient
              style={styles.card5}
              locations={[0, 0.46]}
              colors={["#4f2776", "#fff"]}
            >
              <Pressable
                style={styles.pressable}
                onPress={() => navigation.navigate("Articles")}
              >
                <Text style={styles.cycling}>Sustainable</Text>
                <Image
                  style={styles.illustrationIdeaIdeasManP2}
                  contentFit="cover"
                  source={require("../assets/-illustration-idea-ideas-man-plant-pants2.png")}
                />
                <Image
                  style={styles.iconSustainableEnergy}
                  contentFit="cover"
                  source={require("../assets/-icon-sustainable-energy.png")}
                />
              </Pressable>
            </LinearGradient>
          </View>
          <View style={styles.frame14}>
            <LinearGradient
              style={styles.card5}
              locations={[0, 0.95, 1]}
              colors={["#f29100", "#fdf0dd", "#fff"]}
            >
              <Pressable
                style={styles.pressable}
                onPress={() => navigation.navigate("Articles")}
              >
                <Image
                  style={styles.iconEcoFriendlyBulb}
                  contentFit="cover"
                  source={require("../assets/-icon-eco-friendly-bulb.png")}
                />
                <Text style={styles.ecoFriendlyModifications}>{`Eco-friendly
Modifications`}</Text>
              </Pressable>
            </LinearGradient>
          </View>
          <View style={styles.frame15}>
            <LinearGradient
              style={styles.gradientLayer}
              locations={[0, 1]}
              colors={["#01427a", "rgba(44, 44, 46, 0)"]}
            />
          </View>
          <View style={styles.frame16}>
            <LinearGradient
              style={styles.gradientLayer1}
              locations={[0, 1]}
              colors={["#01427a", "rgba(44, 44, 46, 0)"]}
            />
          </View>
          <View style={styles.frame17}>
            <LinearGradient
              style={styles.gradientLayer2}
              locations={[0, 1]}
              colors={["#01427a", "rgba(44, 44, 46, 0)"]}
            />
          </View>
          <Image
            style={styles.frameIcon3}
            contentFit="cover"
            source={require("../assets/frame3.png")}
          />
          <View style={styles.frame18}>
            <LinearGradient
              style={styles.card7}
              locations={[0, 1]}
              colors={["#21aa58", "#fff"]}
            >
              <Pressable
                style={styles.pressable7}
                onPress={() => navigation.navigate("Articles")}
              >
                <Text style={styles.communityInitiatives}>{`Community
Initiatives`}</Text>
                <Image
                  style={styles.frameIcon4}
                  contentFit="cover"
                  source={require("../assets/frame4.png")}
                />
              </Pressable>
            </LinearGradient>
          </View>
          <View style={styles.frame19}>
            <LinearGradient
              style={styles.card8}
              locations={[0, 1]}
              colors={["#b18cfe", "#fff"]}
            >
              <Pressable
                style={styles.pressable8}
                onPress={() => navigation.navigate("Articles")}
              >
                <Text style={styles.communityInitiatives}>{`Electric
Vechices`}</Text>
                <Image
                  style={styles.frameIcon5}
                  contentFit="cover"
                  source={require("../assets/frame5.png")}
                />
              </Pressable>
            </LinearGradient>
          </View>
        </View>
      </View>
      <View style={styles.frame20}>
        <View style={styles.frame21}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/ellipse-3.png")}
          />
          <StyleDefaultDarkModeTrue
            styleDefaultDarkModeTrueAlignSelf="unset"
            styleDefaultDarkModeTruePosition="unset"
            styleDefaultDarkModeTrueTop="unset"
            styleDefaultDarkModeTrueLeft="unset"
            styleDefaultDarkModeTrueBackgroundColor="rgba(255, 255, 255, 0)"
            styleDefaultDarkModeTrueWidth={375}
            styleDefaultDarkModeTrueMarginLeft={135}
            styleDefaultDarkModeTrueMarginTop={-145}
          />
        </View>
        <View style={styles.frame22}>
          <View style={styles.frame23}>
            <View style={styles.name}>
              <Text style={styles.transport}>Transport</Text>
            </View>
            <Image
              style={styles.frameIcon6}
              contentFit="cover"
              source={require("../assets/frame6.png")}
            />
          </View>
          <Search
            searchInputValue={require("../assets/search.png")}
            searchPlaceholder="Search"
            searchPosition="unset"
            searchWidth={349}
            searchTop="unset"
            searchLeft="unset"
            searchBorderRadius={20}
            searchMarginLeft={147}
            rectangleViewBorderRadius={20}
            rectangleViewBackgroundColor="rgba(1, 66, 122, 0.7)"
            frameViewWidth="23.18%"
            frameViewRight="73.93%"
            frameViewLeft="2.89%"
            searchFontFamily="Nunito-Regular"
            onSearchPress={() => navigation.navigate("SearchQuery")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subitle: {
    position: "relative",
    fontSize: FontSize.size_smi,
    lineHeight: 18,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
  },
  viewAll: {
    position: "relative",
    fontSize: FontSize.body15Regular_size,
    lineHeight: 20,
    fontFamily: FontFamily.bodyBody1,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
  },
  vectorIcon: {
    position: "relative",
    width: 11,
    height: 13,
    marginLeft: 11,
  },
  frame2: {
    width: 76,
    height: 20,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frame1: {
    width: 339,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 20,
    marginLeft: 154,
  },
  frameIcon: {
    position: "absolute",
    top: 464,
    left: 0,
    width: 587,
    height: 330,
    overflow: "hidden",
  },
  vectorIcon1: {
    position: "absolute",
    height: "37.28%",
    width: "41.82%",
    top: "50.32%",
    right: "8.18%",
    bottom: "12.41%",
    left: "50%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  publicTransport: {
    position: "absolute",
    top: 11,
    left: 17,
    fontSize: FontSize.primaryText_size,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.labelDarkPrimary,
    textAlign: "left",
    width: 138,
    height: 87,
  },
  pressable: {
    borderRadius: Border.br_3xs,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    backgroundColor: "transparent",
  },
  card: {
    position: "relative",
    width: 143,
    height: 158,
  },
  frame4: {
    position: "absolute",
    top: 396,
    left: 0,
    width: 330,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  cycling: {
    position: "absolute",
    top: 11,
    left: 12,
    fontSize: FontSize.primaryText_size,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.labelDarkPrimary,
    textAlign: "left",
    width: 138,
    height: 87,
  },
  illustrationIdeaIdeasManP: {
    position: "absolute",
    height: "70.56%",
    width: "62.94%",
    top: "29.19%",
    right: "0%",
    bottom: "0.25%",
    left: "37.06%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupIcon: {
    position: "absolute",
    height: "26.15%",
    width: "40.56%",
    top: "59.01%",
    right: "49.65%",
    bottom: "14.84%",
    left: "9.79%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  card1: {
    position: "relative",
    width: 143,
    height: 161,
  },
  frame5: {
    position: "absolute",
    top: 397,
    left: 0,
    width: 493,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  groupIcon1: {
    position: "relative",
    width: 41,
    height: 45,
  },
  groupWrapper: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: Padding.p_3xs,
  },
  frame6: {
    position: "absolute",
    top: 557,
    left: 0,
    width: 227,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  iconPersonOutline: {
    position: "relative",
    width: 30,
    height: 30,
  },
  iconBookSaved: {
    position: "relative",
    width: 33,
    height: 30,
    marginLeft: 72,
  },
  iconDiscussion: {
    position: "relative",
    width: 30,
    height: 30,
    marginLeft: 72,
  },
  iconGameControllerOutline: {
    position: "relative",
    width: 33,
    height: 23,
    marginLeft: 72,
  },
  iconPersonOutlineParent: {
    width: 385,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  frame7: {
    position: "absolute",
    top: 607,
    left: 0,
    width: 413,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frame8: {
    position: "absolute",
    top: 372,
    left: 0,
    width: 95,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  greenAndBiofuels: {
    position: "absolute",
    top: 11,
    left: 12,
    fontSize: FontSize.primaryText_size,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.labelDarkPrimary,
    textAlign: "left",
    width: 233,
  },
  card2: {
    position: "relative",
    width: 141,
    height: 159,
  },
  frame9: {
    position: "absolute",
    top: 395,
    left: 0,
    width: 171,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frame10: {
    position: "absolute",
    top: 370,
    left: 0,
    width: 342,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameIcon1: {
    position: "absolute",
    top: 198,
    left: 0,
    width: 369,
    height: 13,
    overflow: "hidden",
  },
  frameIcon2: {
    position: "absolute",
    top: 374,
    left: 0,
    width: 358,
    height: 13,
    overflow: "hidden",
  },
  groupIcon2: {
    position: "absolute",
    height: "40.99%",
    width: "51.67%",
    top: "50.31%",
    right: "28.89%",
    bottom: "8.7%",
    left: "19.44%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  card3: {
    position: "relative",
    width: 144,
    height: 161,
  },
  frame11: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 165,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  illustrationIdeaIdeasManP1: {
    position: "absolute",
    height: "70.55%",
    width: "62.94%",
    top: "29.2%",
    right: "0%",
    bottom: "0.25%",
    left: "37.06%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  emojiExhaustGasesFactory: {
    position: "absolute",
    height: "41.9%",
    width: "41.26%",
    top: "42.7%",
    right: "47.76%",
    bottom: "15.4%",
    left: "10.98%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  card4: {
    position: "relative",
    width: 143,
    height: 163,
  },
  frame12: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 488,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  illustrationIdeaIdeasManP2: {
    position: "absolute",
    height: "70.52%",
    width: "62.94%",
    top: "29.22%",
    right: "0%",
    bottom: "0.26%",
    left: "37.06%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconSustainableEnergy: {
    position: "absolute",
    height: "25.78%",
    width: "36.29%",
    top: "57.79%",
    right: "51.12%",
    bottom: "16.43%",
    left: "12.59%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  card5: {
    position: "relative",
    width: 143,
    height: 154,
  },
  frame13: {
    position: "absolute",
    top: 189,
    left: 0,
    width: 493,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  iconEcoFriendlyBulb: {
    position: "absolute",
    height: "46.56%",
    width: "57.76%",
    top: "50%",
    right: "20.56%",
    bottom: "3.44%",
    left: "21.68%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ecoFriendlyModifications: {
    position: "absolute",
    top: 14,
    left: 13,
    fontSize: FontSize.primaryText_size,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.labelDarkPrimary,
    textAlign: "left",
    width: 141,
    height: 43,
  },
  frame14: {
    position: "absolute",
    top: 189,
    left: 0,
    width: 334,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  gradientLayer: {
    position: "relative",
    width: 161,
    height: 89,
    transform: [
      {
        rotate: "-90.01deg",
      },
    ],
    backgroundColor: "transparent",
  },
  frame15: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 509,
    height: 89,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingLeft: 348,
  },
  gradientLayer1: {
    position: "relative",
    width: 160,
    height: 89,
    transform: [
      {
        rotate: "-90.01deg",
      },
    ],
    backgroundColor: "transparent",
  },
  frame16: {
    position: "absolute",
    top: 397,
    left: 0,
    width: 507,
    height: 89,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingLeft: 347,
  },
  gradientLayer2: {
    position: "relative",
    width: 155,
    height: 89,
    transform: [
      {
        rotate: "-90.01deg",
      },
    ],
    backgroundColor: "transparent",
  },
  frame17: {
    position: "absolute",
    top: 188,
    left: 0,
    width: 507,
    height: 89,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingLeft: 352,
  },
  frameIcon3: {
    position: "absolute",
    top: 467,
    left: 0,
    width: 145,
    height: 73,
    overflow: "hidden",
  },
  communityInitiatives: {
    position: "relative",
    fontSize: FontSize.primaryText_size,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.labelDarkPrimary,
    textAlign: "left",
    width: 138,
    height: 87,
  },
  frameIcon4: {
    position: "relative",
    width: 101,
    height: 85,
    overflow: "hidden",
    marginTop: -31,
  },
  pressable7: {
    borderRadius: Border.br_3xs,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_xs,
    paddingTop: Padding.p_2xs,
    paddingBottom: 9,
    backgroundColor: "transparent",
  },
  card7: {
    width: 143,
    height: 161,
  },
  frame18: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 327,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameIcon5: {
    position: "relative",
    width: 94,
    height: 56,
    overflow: "hidden",
    marginTop: -21,
  },
  pressable8: {
    borderRadius: Border.br_3xs,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_2xs,
    backgroundColor: "transparent",
  },
  card8: {
    width: 143,
    height: 154,
  },
  frame19: {
    position: "absolute",
    top: 188,
    left: 0,
    width: 165,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frame3: {
    width: 587,
    height: 794,
    overflow: "hidden",
    marginLeft: 126,
    marginTop: 12,
  },
  frame: {
    position: "absolute",
    top: 171,
    left: -126,
    width: 713,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameChild: {
    position: "relative",
    width: 400,
    height: 330,
  },
  frame21: {
    width: 510,
    height: 330,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  transport: {
    position: "relative",
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    textAlign: "left",
    width: 310,
  },
  name: {
    width: 372,
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 157,
  },
  frameIcon6: {
    position: "relative",
    width: 154,
    height: 17,
    overflow: "hidden",
    marginLeft: -529,
  },
  frame23: {
    width: 529,
    height: 42,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frame22: {
    width: 529,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: -510,
  },
  frame20: {
    position: "absolute",
    top: -175,
    left: -126,
    width: 529,
    height: 330,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingRight: 19,
  },
  libraryofResourcesTranspor: {
    position: "relative",
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default LibraryofResourcesTranspor;
