import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, StatusBar } from "react-native";
import { ProgressBar } from "react-native-paper";
import { Button } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Property1HomeImage from "../components/Property1HomeImage";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const Quiz = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quiz}>
      <Image
        style={[styles.quizChild, styles.quizPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.quizItem, styles.quizPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View style={[styles.sliderIndicator, styles.sliderPosition]}>
          <Image
            style={[styles.sliderIndicatorChild, styles.sliderPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-33.png")}
          />
          <View style={[styles.wrapper, styles.wrapperLayout]}>
            <ProgressBar
              style={styles.wrapperLayout}
              progress={0.1}
              color="#01427a"
            />
          </View>
          <Button
            radius="5"
            iconPosition="left"
            type="clear"
            icon={{ name: "close", type: "material-community" }}
            onPress={() => navigation.navigate("LibraryOfResourcesQuizzes")}
            containerStyle={styles.groupIconBtn}
            buttonStyle={styles.groupIconBtn1}
          />
        </View>
        <Button
          title="Continue"
          radius={6}
          iconPosition="left"
          type="solid"
          titleStyle={styles.buttonContinueBtn}
          onPress={() => navigation.navigate("QuizFinal")}
          containerStyle={styles.buttonContinueBtn1}
          buttonStyle={styles.buttonContinueBtn2}
        />
        <View style={[styles.answerOption, styles.answerOptionPosition]}>
          <Button
            title="A. Lorem Ipsum"
            radius={6}
            iconPosition="left"
            type="solid"
            titleStyle={styles.groupButtonBtn}
            onPress={() => navigation.navigate("QuizCorrect")}
            containerStyle={styles.groupButtonBtn1}
            buttonStyle={styles.groupButtonBtn2}
          />
          <Button
            title="C. Lorem Ipsum"
            radius={6}
            iconPosition="left"
            type="solid"
            titleStyle={styles.groupButton1Btn}
            onPress={() => navigation.navigate("QuizWrong")}
            containerStyle={styles.groupButton1Btn1}
            buttonStyle={styles.groupButton1Btn2}
          />
          <Button
            title="B. Lorem Ipsum"
            radius={6}
            iconPosition="left"
            type="solid"
            titleStyle={styles.groupButton2Btn}
            onPress={() => navigation.navigate("QuizWrong")}
            containerStyle={styles.groupButton2Btn1}
            buttonStyle={styles.groupButton2Btn2}
          />
          <Button
            title="D. Lorem Ipsum"
            radius={6}
            iconPosition="left"
            type="solid"
            titleStyle={styles.groupButton3Btn}
            onPress={() => navigation.navigate("QuizWrong")}
            containerStyle={styles.groupButton3Btn1}
            buttonStyle={styles.groupButton3Btn2}
          />
        </View>
        <Image
          style={styles.imageQuestionIcon}
          contentFit="cover"
          source={require("../assets/image-question.png")}
        />
        <View style={[styles.quizQuestion, styles.answerOptionPosition]}>
          <Text
            style={[styles.loremIpsumDolor, styles.of15Typo]}
            numberOfLines={3}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse
            dolor etiam sed ante donec quis sapien.
          </Text>
          <Text style={[styles.of15, styles.of15Typo]}>1 Of 15</Text>
        </View>
      </View>
      <LinearGradient
        style={[styles.gradientLayer, styles.groupChildPosition]}
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
            source={require("../assets/-icon-game-controller-outline5.png")}
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
        styleDefaultDarkModeTrueTop={10}
        styleDefaultDarkModeTrueLeft={9}
        styleDefaultDarkModeTrueBackgroundColor="rgba(255, 255, 255, 0)"
        styleDefaultDarkModeTrueWidth={375}
        styleDefaultDarkModeTrueMarginLeft="unset"
        styleDefaultDarkModeTrueMarginTop="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  progressbar: {
    height: 8,
    width: 225,
  },
  groupIconBtn: {
    left: "50%",
    marginLeft: -180.2,
    top: 10,
    position: "absolute",
  },
  groupIconBtn1: {
    width: 25,
    height: 24,
  },
  buttonContinueBtn: {
    color: "#fdfdfd",
    fontSize: 22,
    fontWeight: "600",
    fontFamily: "Nunito-SemiBold",
  },
  buttonContinueBtn1: {
    left: 25,
    top: 616,
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
  groupChildPosition: {
    left: 1,
    position: "absolute",
  },
  sliderPosition: {
    height: 44,
    width: 394,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  wrapperLayout: {
    height: 8,
    width: 225,
  },
  answerOptionPosition: {
    left: 25,
    width: 343,
    position: "absolute",
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
  quizChild: {
    height: 394,
    top: 0,
    width: 400,
  },
  quizItem: {
    top: 435,
    height: 417,
  },
  groupChild: {
    top: 40,
    width: 409,
    height: 685,
    backgroundColor: Color.labelDarkPrimary,
  },
  sliderIndicatorChild: {
    marginLeft: -196,
  },
  wrapper: {
    marginLeft: -139.2,
    top: 18,
    left: "50%",
    height: 8,
    width: 225,
    position: "absolute",
  },
  sliderIndicator: {
    marginLeft: -205,
  },
  answerOption: {
    top: 428,
    height: 148,
    width: 343,
  },
  imageQuestionIcon: {
    top: 206,
    left: 46,
    width: 301,
    height: 192,
    position: "absolute",
  },
  loremIpsumDolor: {
    fontSize: FontSize.bodyBody1_size,
    lineHeight: 24,
    color: Color.colorGray_200,
    width: 343,
    left: 0,
    fontFamily: FontFamily.nunitoRegular,
    top: 0,
  },
  of15: {
    top: 87,
    left: 151,
    fontSize: FontSize.secondaryText_size,
    lineHeight: 22,
    color: Color.gray,
  },
  quizQuestion: {
    top: 77,
    height: 109,
    width: 343,
  },
  rectangleParent: {
    top: 54,
    left: -1,
    width: 410,
    height: 725,
    position: "absolute",
  },
  gradientLayer: {
    top: 743,
    width: 393,
    height: 89,
    backgroundColor: "transparent",
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
  quiz: {
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.labelDarkPrimary,
  },
});

export default Quiz;
