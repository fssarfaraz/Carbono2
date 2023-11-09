import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text, StatusBar } from "react-native";
import { Button } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import Property1HomeImage from "../components/Property1HomeImage";
import { useNavigation } from "@react-navigation/native";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { FontFamily, Padding, FontSize, Border, Color } from "../GlobalStyles";

const QuizFinal = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quizFinal}>
      <Image
        style={[styles.quizFinalChild, styles.quizPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.quizFinalItem, styles.quizPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Property1HomeImage
        imageDimensions={require("../assets/navigation-barr19.png")}
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
            source={require("../assets/-icon-book-saved5.png")}
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
            source={require("../assets/-icon-game-controller-outline15.png")}
          />
        </Pressable>
      </Pressable>
      <Pressable
        style={styles.iconCalculatorWrapper}
        onPress={() => navigation.navigate("Calculator")}
      >
        <Button
          radius="5"
          iconPosition="left"
          type="clear"
          icon={{ name: "calculator", type: "material-community" }}
          onPress={() => navigation.navigate("Calculator")}
          containerStyle={styles.iconCalculatorBtn}
          buttonStyle={styles.iconCalculatorBtn1}
        />
      </Pressable>
      <View style={styles.buttonContinue}>
        <Button
          title="Back To Resources"
          radius={10}
          iconPosition="left"
          type="solid"
          color="#428df8"
          onPress={() => navigation.navigate("LibraryOfResourcesQuizzes")}
          containerStyle={styles.rectangleButtonBtn}
          buttonStyle={styles.rectangleButtonBtn1}
        />
        <Button
          title="Play Again"
          radius={10}
          iconPosition="left"
          type="solid"
          color="#428df8"
          onPress={() => navigation.navigate("Quiz")}
          containerStyle={styles.rectangleButton1Btn}
          buttonStyle={styles.rectangleButton1Btn1}
        />
        <Pressable
          style={styles.playAgain}
          onPress={() => navigation.navigate("Quiz")}
        >
          <Text style={[styles.playAgain1, styles.ptsTypo]}>Play Again</Text>
        </Pressable>
        <Pressable
          style={styles.backToResourcesContainer}
          onPress={() => navigation.navigate("LibraryOfResourcesQuizzes")}
        >
          <Text style={[styles.backToResources, styles.ptsTypo]}>
            Back To Resources
          </Text>
        </Pressable>
      </View>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <LinearGradient
          style={[styles.groupChild, styles.groupChildLayout]}
          locations={[0, 0.11, 1]}
          colors={[
            "#eff7ff",
            "rgba(221, 236, 254, 0.89)",
            "rgba(66, 141, 248, 0)",
          ]}
        />
        <View style={styles.content}>
          <Text style={styles.label}>
            <Text style={styles.youEarned}>You Earned</Text>
            <Text style={styles.ptsTypo}> 80 pts</Text>
          </Text>
          <Image
            style={styles.starIcon}
            contentFit="cover"
            source={require("../assets/star.png")}
          />
          <Image
            style={styles.checkIcon}
            contentFit="cover"
            source={require("../assets/check.png")}
          />
          <Text
            style={[styles.title, styles.titlePosition]}
          >{`Well Done! `}</Text>
        </View>
      </View>
      <StyleDefaultDarkModeTrue
        styleDefaultDarkModeTrueAlignSelf="unset"
        styleDefaultDarkModeTruePosition="absolute"
        styleDefaultDarkModeTrueTop={0}
        styleDefaultDarkModeTrueLeft={1}
        styleDefaultDarkModeTrueBackgroundColor="rgba(255, 255, 255, 0)"
        styleDefaultDarkModeTrueWidth={375}
        styleDefaultDarkModeTrueMarginLeft="unset"
        styleDefaultDarkModeTrueMarginTop="unset"
      />
      <Button
        radius="5"
        iconPosition="left"
        type="clear"
        icon={{ name: "close", type: "material-community" }}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Educational" })
        }
        containerStyle={styles.navigationIconBtn}
        buttonStyle={styles.navigationIconBtn1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconCalculatorBtn: {
    position: "relative",
  },
  iconCalculatorBtn1: {
    width: 41,
    height: 45,
  },
  rectangleButtonBtn: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleButtonBtn1: {
    borderRadius: 10,
    width: 296,
    height: 64,
  },
  rectangleButton1Btn: {
    left: 0,
    top: 86,
    position: "absolute",
  },
  rectangleButton1Btn1: {
    borderRadius: 10,
    width: 296,
    height: 64,
  },
  navigationIconBtn: {
    left: 13,
    top: 61,
    position: "absolute",
  },
  navigationIconBtn1: {
    width: 24,
    height: 24,
  },
  quizPosition: {
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
  ptsTypo: {
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
  },
  groupChildLayout: {
    height: 422,
    width: 325,
    position: "absolute",
  },
  titlePosition: {
    left: 0,
    top: 0,
  },
  quizFinalChild: {
    height: 394,
    top: 0,
    width: 400,
  },
  quizFinalItem: {
    top: 435,
    height: 417,
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
    flexDirection: "row",
    alignItems: "flex-end",
    position: "absolute",
  },
  iconCalculatorWrapper: {
    top: 745,
    left: 165,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  playAgain1: {
    color: "#fdfdfd",
    width: 118,
    height: 29,
    textAlign: "center",
    lineHeight: 28,
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
  },
  playAgain: {
    left: 93,
    top: 103,
    position: "absolute",
  },
  backToResources: {
    color: "rgba(255, 255, 255, 0.91)",
    width: 270,
    height: 28,
    textAlign: "center",
    lineHeight: 28,
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
  },
  backToResourcesContainer: {
    left: 15,
    top: 18,
    position: "absolute",
  },
  buttonContinue: {
    top: 550,
    left: 39,
    width: 296,
    height: 150,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: "transparent",
    left: 0,
    top: 0,
  },
  youEarned: {
    fontFamily: FontFamily.nunitoRegular,
  },
  label: {
    top: 292,
    left: 11,
    fontSize: FontSize.primaryText_size,
    lineHeight: 24,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  starIcon: {
    top: 212,
    left: 42,
    width: 124,
    height: 52,
    position: "absolute",
  },
  checkIcon: {
    top: 48,
    left: 12,
    width: 184,
    height: 184,
    position: "absolute",
  },
  title: {
    fontSize: FontSize.size_21xl,
    lineHeight: 36,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorDarkslateblue_100,
    textAlign: "center",
    position: "absolute",
  },
  content: {
    top: 68,
    left: 61,
    width: 209,
    height: 316,
    position: "absolute",
  },
  rectangleParent: {
    top: 102,
    left: 34,
  },
  quizFinal: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default QuizFinal;
