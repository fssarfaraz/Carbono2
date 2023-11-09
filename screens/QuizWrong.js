import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, StatusBar } from "react-native";
import { ProgressBar } from "react-native-paper";
import { Button } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import Property1HomeImage from "../components/Property1HomeImage";
import { useNavigation } from "@react-navigation/native";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const QuizWrong = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quizWrong}>
      <Image
        style={[styles.quizWrongChild, styles.quizPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.quizWrongItem, styles.quizPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={[styles.sliderIndicator, styles.progressbarLayout]}>
          <ProgressBar
            style={styles.progressbarLayout}
            progress={0.07}
            color="rgba(66, 141, 248, 0.32)"
          />
        </View>
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
          <Text style={[styles.loremIpsumDolor, styles.of15FlexBox]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse
            dolor etiam sed ante donec quis sapien.
          </Text>
          <Text style={[styles.of15, styles.of15FlexBox]}>1 Of 15</Text>
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
      </View>
      <LinearGradient
        style={[styles.gradientLayer, styles.groupChildLayout]}
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
      <View style={[styles.questionParent, styles.questionLayout]}>
        <View style={[styles.question, styles.questionLayout]}>
          <View style={[styles.bg, styles.questionLayout]} />
        </View>
        <Text style={[styles.wrong, styles.of15FlexBox]}>Wrong</Text>
        <Image
          style={styles.cancelIcon}
          contentFit="cover"
          source={require("../assets/cancel.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressbar: {
    height: 49,
    width: 443,
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
  buttonContinueBtn: {
    color: "#fdfdfd",
    fontSize: 22,
    fontWeight: "600",
    fontFamily: "Nunito-SemiBold",
  },
  buttonContinueBtn1: {
    left: 27,
    top: 605,
    position: "absolute",
  },
  buttonContinueBtn2: {
    width: 343,
    height: 60,
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
    width: 393,
    position: "absolute",
  },
  progressbarLayout: {
    height: 49,
    width: 443,
  },
  of15FlexBox: {
    textAlign: "center",
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
  questionLayout: {
    height: 185,
    width: 231,
    position: "absolute",
  },
  quizWrongChild: {
    height: 394,
    top: 0,
    width: 400,
  },
  quizWrongItem: {
    top: 435,
    height: 417,
  },
  groupChild: {
    height: 705,
    left: 0,
    top: 0,
    backgroundColor: Color.labelDarkPrimary,
  },
  sliderIndicator: {
    marginLeft: -212,
    top: 13,
    left: "50%",
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
    fontFamily: FontFamily.nunitoRegular,
    textAlign: "center",
    width: 359,
    left: 0,
    top: 0,
  },
  of15: {
    top: 90,
    left: 158,
    fontSize: FontSize.secondaryText_size,
    lineHeight: 22,
    color: Color.gray,
    width: 43,
    height: 18,
    fontFamily: FontFamily.nunitoRegular,
    textAlign: "center",
  },
  quizQuestion: {
    top: 70,
    left: 19,
    height: 108,
    width: 359,
    position: "absolute",
  },
  rectangleParent: {
    top: 65,
    left: -3,
    width: 462,
    height: 705,
    position: "absolute",
  },
  gradientLayer: {
    top: 743,
    left: 1,
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
  bg: {
    borderRadius: Border.br_21xl,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 2,
    left: 0,
    top: 0,
  },
  question: {
    left: 0,
    top: 0,
  },
  wrong: {
    top: 133,
    left: 44,
    fontSize: FontSize.size_9xl,
    lineHeight: 45,
    fontWeight: "800",
    fontFamily: FontFamily.nunitoExtraBold,
    color: "#e82424",
    width: 145,
    height: 33,
  },
  cancelIcon: {
    top: 37,
    left: 69,
    width: 96,
    height: 96,
    position: "absolute",
  },
  questionParent: {
    top: 459,
    left: 73,
  },
  quizWrong: {
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.labelDarkPrimary,
  },
});

export default QuizWrong;
