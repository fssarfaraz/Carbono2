import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "@rneui/themed";
import Property1HomeImage from "../components/Property1HomeImage";
import { useNavigation } from "@react-navigation/native";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { Border, Color, FontSize, Padding, FontFamily } from "../GlobalStyles";

const AllGames = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.allGames}>
      <Image
        style={[styles.allGamesChild, styles.allPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.allGamesItem, styles.allPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={styles.rdIcon}
        contentFit="cover"
        source={require("../assets/3rd.png")}
      />
      <Property1HomeImage
        imageDimensions={require("../assets/navigation-barr10.png")}
        property1HomeIconPosition="absolute"
        property1HomeIconWidth={394}
        property1HomeIconHeight={106}
        property1HomeIconTop={746}
        property1HomeIconLeft={0}
      />
      <View style={styles.iconPersonOutlineParent}>
        <Pressable
          style={[styles.iconPersonOutline, styles.iconLayout2]}
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
          style={[styles.iconBookSaved, styles.iconLayout1]}
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
          style={[styles.iconDiscussion, styles.iconLayout2]}
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
          style={[styles.iconGameControllerOutline, styles.iconLayout1]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Games" })
          }
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/-icon-game-controller-outline10.png")}
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
          source={require("../assets/-icon-calculator4.png")}
        />
      </Pressable>
      <Pressable style={styles.nd}>
        <LinearGradient
          style={[styles.ndChild, styles.childPosition]}
          locations={[0, 1]}
          colors={["#0682ef", "#094ed3"]}
        />
        <Image
          style={[styles.shadowIcon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/shadow.png")}
        />
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
        <Image
          style={[styles.imageRemovebgPreview2Icon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/imageremovebgpreview-2.png")}
        />
        <Text style={[styles.hoursPlayed, styles.hoursPosition]}>
          <Text style={[styles.text, styles.textTypo]}>{`1442
`}</Text>
          <Text style={styles.hoursPlayed1}>Hours played</Text>
        </Text>
        <Image
          style={[styles.ml1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/ml-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.st, styles.stPosition]}
        onPress={() => navigation.navigate("GameSelectedScreen")}
      >
        <LinearGradient
          style={[styles.stChild, styles.childPosition]}
          locations={[0, 1]}
          colors={["#e187f5", "#9266f3"]}
        />
        <Image
          style={[styles.maskGroupIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <Image
          style={[styles.fortnitePlayerRemovebgPreviIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/fortnite-playerremovebgpreview-1.png")}
        />
        <Image
          style={[styles.fortniteIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/fortnite.png")}
        />
        <Text style={[styles.hoursPlayed2, styles.hoursPosition]}>
          <Text style={[styles.text, styles.textTypo]}>{`425
`}</Text>
          <Text style={styles.hoursPlayed1}>Hours played</Text>
        </Text>
      </Pressable>
      <Text style={[styles.allGames1, styles.stPosition]}>All Games</Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
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
      <Button
        radius={5}
        iconPosition="left"
        type="solid"
        color="#fff"
        icon={{ name: "chevron-left", type: "material-community" }}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Games" })
        }
        containerStyle={styles.materialSymbolsarrowBackIoIconBtn}
        buttonStyle={styles.materialSymbolsarrowBackIoIconBtn1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  materialSymbolsarrowBackIoIconBtn: {
    left: 14,
    top: 60,
    position: "absolute",
  },
  materialSymbolsarrowBackIoIconBtn1: {
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  allPosition: {
    width: 400,
    left: 0,
    position: "absolute",
  },
  iconLayout2: {
    width: 30,
    height: 30,
  },
  iconLayout1: {
    width: 33,
    marginLeft: 72,
  },
  childPosition: {
    backgroundColor: "transparent",
    borderRadius: Border.br_31xl,
    bottom: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  iconPosition1: {
    height: 245,
    top: 0,
    position: "absolute",
  },
  hoursPosition: {
    color: Color.labelDarkPrimary,
    textAlign: "left",
    left: 30,
    position: "absolute",
  },
  textTypo: {
    fontWeight: "700",
    fontSize: FontSize.size_31xl,
  },
  iconPosition: {
    left: 30,
    position: "absolute",
  },
  stPosition: {
    left: "2.29%",
    width: "93.89%",
    position: "absolute",
  },
  iconLayout: {
    top: "0%",
    width: "43.9%",
    bottom: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  allGamesChild: {
    height: 455,
    top: 0,
    left: 0,
  },
  allGamesItem: {
    top: 422,
    height: 430,
  },
  rdIcon: {
    height: "33.22%",
    width: "104.58%",
    top: "81.46%",
    right: "-4.58%",
    bottom: "-14.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconPersonOutline: {
    height: 30,
  },
  iconBookSaved: {
    height: 31,
    marginLeft: 72,
  },
  iconDiscussion: {
    marginLeft: 72,
    height: 30,
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
  ndChild: {
    top: "10.2%",
    height: "89.8%",
    backgroundColor: "transparent",
    borderRadius: Border.br_31xl,
  },
  shadowIcon: {
    left: 135,
    width: 196,
    opacity: 0.1,
  },
  maskGroupIcon: {
    bottom: "0%",
    right: "0%",
    top: "10.2%",
    height: "89.8%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  imageRemovebgPreview2Icon: {
    left: 150,
    width: 182,
  },
  text: {
    fontFamily: FontFamily.robotoBold,
  },
  hoursPlayed1: {
    fontSize: FontSize.primaryText_size,
    lineHeight: 30,
    fontWeight: "500",
    fontFamily: FontFamily.nunitoMedium,
  },
  hoursPlayed: {
    top: 130,
    textAlign: "left",
  },
  ml1Icon: {
    top: 55,
    width: 100,
    height: 32,
  },
  nd: {
    height: "28.76%",
    top: "52%",
    right: "2.54%",
    bottom: "19.25%",
    left: "3.56%",
    width: "93.89%",
    position: "absolute",
  },
  stChild: {
    height: "80%",
    top: "20%",
  },
  maskGroupIcon1: {
    right: "5.15%",
    left: "50.95%",
    opacity: 0.1,
  },
  fortnitePlayerRemovebgPreviIcon: {
    right: "2.44%",
    left: "53.66%",
    borderBottomRightRadius: 52,
  },
  fortniteIcon: {
    top: 85,
    width: 93,
    height: 30,
  },
  hoursPlayed2: {
    top: 160,
    textAlign: "left",
  },
  st: {
    height: "32.28%",
    top: "18.78%",
    right: "3.82%",
    bottom: "48.94%",
  },
  allGames1: {
    top: "11.15%",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorDarkslateblue_100,
    fontWeight: "700",
    fontSize: FontSize.size_31xl,
    textAlign: "left",
  },
  vectorIcon: {
    top: 587,
    left: -240,
    width: 12,
    height: 10,
    position: "absolute",
  },
  allGames: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default AllGames;
