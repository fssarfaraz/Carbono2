import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, StatusBar } from "react-native";
import { ProgressBar } from "react-native-paper";
import { Button } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import Property1HomeImage from "../components/Property1HomeImage";
import { useNavigation } from "@react-navigation/native";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const QuizCorrect = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quizCorrect}>
      <Image
        style={[styles.quizCorrectChild, styles.quizPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.quizCorrectItem, styles.quizPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={[styles.sliderIndicator, styles.progressbarLayout]}>
          <ProgressBar
            style={styles.progressbarLayout}
            progress={0.07}
            color="rgba(66, 141, 248, 0.32)"
          />
        </View>
        <Button
          title="Next"
          radius={6}
          iconPosition="left"
          type="solid"
          titleStyle={styles.buttonContinueBtn}
          containerStyle={styles.buttonContinueBtn1}
          buttonStyle={styles.buttonContinueBtn2}
        />
        <View style={styles.answerOption}>
          <Button
            title="A. Lorem Ipsum"
            radius={5}
            iconPosition="left"
            type="solid"
            titleStyle={styles.groupButtonBtn}
            containerStyle={styles.groupButtonBtn1}
            buttonStyle={styles.groupButtonBtn2}
          />
          <Button
            title="C. Lorem Ipsum"
            radius={6}
            iconPosition="left"
            type="solid"
            titleStyle={styles.groupButton1Btn}
            containerStyle={styles.groupButton1Btn1}
            buttonStyle={styles.groupButton1Btn2}
          />
          <Button
            title="B. Lorem Ipsum"
            radius={6}
            iconPosition="left"
            type="solid"
            titleStyle={styles.groupButton2Btn}
            containerStyle={styles.groupButton2Btn1}
            buttonStyle={styles.groupButton2Btn2}
          />
          <Button
            title="D. Lorem Ipsum"
            radius={6}
            iconPosition="left"
            type="solid"
            titleStyle={styles.groupButton3Btn}
            containerStyle={styles.groupButton3Btn1}
            buttonStyle={styles.groupButton3Btn2}
          />
        </View>
        <Image
          style={styles.imageQuestionIcon}
          contentFit="cover"
          source={require("../assets/image-question.png")}
        />
        <View style={styles.quizQuestion}>
          <Text style={[styles.loremIpsumDolor, styles.of15Typo]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse
            dolor etiam sed ante donec quis sapien.
          </Text>
          <Text style={[styles.of15, styles.of15Typo]}>1 Of 15</Text>
        </View>
      </View>
      <LinearGradient
        style={styles.gradientLayer}
        locations={[0, 1]}
        colors={["#01427a", "rgba(44, 44, 46, 0)"]}
      />
      <Property1HomeImage
        imageDimensions={require("../assets/navigation-barr18.png")}
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
            source={require("../assets/-icon-book-saved.png")}
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
            source={require("../assets/-icon-game-controller-outline14.png")}
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
      <Image
        style={styles.quizCorrectInner}
        contentFit="cover"
        source={require("../assets/group-2083.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  progressbar: {
    height: 49,
    width: 443,
  },
  buttonContinueBtn: {
    color: "#fdfdfd",
    fontSize: 22,
    fontWeight: "600",
    fontFamily: "Nunito-SemiBold",
  },
  buttonContinueBtn1: {
    left: 27,
    top: 614,
    position: "absolute",
  },
  buttonContinueBtn2: {
    width: 343,
    height: 60,
  },
  groupButtonBtn: {
    color: "#fdfdfd",
    fontSize: 14,
    fontFamily: "Nunito-Regular",
  },
  groupButtonBtn1: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupButtonBtn2: {
    width: 160,
    height: 64,
  },
  groupButton1Btn: {
    color: "#181818",
    fontSize: 14,
    fontFamily: "Nunito-Regular",
  },
  groupButton1Btn1: {
    left: 0,
    top: 84,
    position: "absolute",
  },
  groupButton1Btn2: {
    width: 160,
    height: 64,
  },
  groupButton2Btn: {
    color: "#181818",
    fontSize: 14,
    fontFamily: "Nunito-Regular",
  },
  groupButton2Btn1: {
    left: 183,
    top: 0,
    position: "absolute",
  },
  groupButton2Btn2: {
    width: 160,
    height: 64,
  },
  groupButton3Btn: {
    color: "#181818",
    fontSize: 14,
    fontFamily: "Nunito-Regular",
  },
  groupButton3Btn1: {
    left: 183,
    top: 84,
    position: "absolute",
  },
  groupButton3Btn2: {
    width: 160,
    height: 64,
  },
  iconCalculatorBtn: {
    position: "relative",
  },
  iconCalculatorBtn1: {
    width: 41,
    height: 45,
  },
  quizPosition: {
    width: 400,
    left: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 723,
    position: "absolute",
  },
  progressbarLayout: {
    height: 49,
    width: 443,
  },
  of15Typo: {
    textAlign: "center",
    fontFamily: FontFamily.nunitoRegular,
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
  quizCorrectChild: {
    height: 394,
    top: 0,
  },
  quizCorrectItem: {
    top: 435,
    height: 417,
  },
  groupChild: {
    width: 397,
    left: 0,
    top: 0,
    backgroundColor: Color.labelDarkPrimary,
  },
  sliderIndicator: {
    marginLeft: -212,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  answerOption: {
    top: 417,
    left: 27,
    width: 343,
    height: 148,
    position: "absolute",
  },
  imageQuestionIcon: {
    top: 195,
    left: 48,
    width: 301,
    height: 192,
    position: "absolute",
  },
  loremIpsumDolor: {
    fontSize: FontSize.bodyBody1_size,
    lineHeight: 24,
    color: Color.colorGray_200,
    height: 59,
    width: 359,
    left: 0,
    top: 0,
  },
  of15: {
    top: 72,
    left: 158,
    fontSize: FontSize.secondaryText_size,
    lineHeight: 22,
    color: Color.gray,
    width: 43,
    height: 18,
  },
  quizQuestion: {
    top: 70,
    left: 18,
    height: 90,
    width: 359,
    position: "absolute",
  },
  rectangleParent: {
    top: 65,
    left: -3,
    width: 462,
  },
  gradientLayer: {
    top: 743,
    left: 1,
    width: 393,
    height: 89,
    backgroundColor: "transparent",
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
  quizCorrectInner: {
    top: 458,
    left: 73,
    width: 232,
    height: 186,
    position: "absolute",
  },
  quizCorrect: {
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.labelDarkPrimary,
  },
});

export default QuizCorrect;
