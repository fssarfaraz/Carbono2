import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, StatusBar } from "react-native";
import { ProgressBar } from "react-native-paper";
import { Button } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Property1HomeImage from "../components/Property1HomeImage";
import { FontFamily, Color, FontSize, Padding } from "../GlobalStyles";
import { FontAwesome5 } from "@expo/vector-icons";
import { Li, Pr, Vi } from "react-flags-select";

const QuizCorrect = () => {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.quiz}>
      <Image
        style={[styles.quizChild]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.quizItem]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />

      {/* Header */}
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome5 name="chevron-left" size={30} color="#01427A" />
        </Pressable>
      </View>

      <View style={styles.rectangleParent}>
        {/* progress bar */}
        <View style={styles.progressBar}>
          <ProgressBar
            progress={0.5}
            color={Color.primary}
            style={styles.progressBar}
          />
          </View>

        {/* Question */}
        <View style={styles.question}>
          <Text style={styles.questionText}>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Habitasse dolor etiam sed ante donec quis sapien.
          </Text>
        </View>

        {/* Question no */}
        <View style={styles.question1}>
          <Text style={styles.questionText1}>Question 1 of 10</Text>
        </View>

        {/* image  */}
        <View style={styles.questionImageContainer}>
          <Image
            style={styles.questionImage}
            contentFit="cover"
            source={require("../assets/image-question.png")}
          />
        </View>

        {/* Answer */}
        <View style={styles.answerContainer}>
          <View style={styles.row1}>
          <Pressable 
            // onPress={() => handleNavigation("QuizCorrect")}
            style={styles.pressableContainer}>
            <Text style={styles.pressableText}>Answer 1</Text>
          </Pressable>
          <Pressable 
            // onPress={() => handleNavigation("QuizWrong")}
            style={styles.pressableContainer}>
            <Text style={styles.pressableText}>Answer 2</Text>
          </Pressable>
          </View>

          <View style={styles.row2}>
          <Pressable 
            // onPress={() => handleNavigation("QuizWrong")}
            style={styles.pressableContainer}>
            <Text style={styles.pressableText}>Answer 3</Text>
          </Pressable>
          <Pressable 
            // onPress={() => handleNavigation("QuizWrong")}
            style={styles.pressableContainer}>
            <Text style={styles.pressableText}>Answer 4</Text>
          </Pressable>
          </View>
        </View>

        <View style={styles.continueContainer}>
          <Pressable 
            onPress={() => handleNavigation("QuizFinal")}
            style={styles.continueButton}>
            <Text style={styles.continueText}>Continue</Text>
          </Pressable>
        </View>
        
        {/* Correct icon display over the text */}
        <View style={styles.correctAnswer}>
          <LinearGradient
            colors={['#FFFFFF', '#ECFBE1D8', '#E9FBDDD2', '#96ED5F29']}
            style={styles.correctAnswer}
          >
          <Image
            style={styles.vector7}
            source={require("../assets/Ok.png")}
          />
          <Text style={styles.okText}>Correct</Text>
          </LinearGradient>
        </View>

      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavBar}>
        <Pressable onPress={() => handleNavigation("UserProfile")}>
          <Image
            style={styles.bottomNavIcon}
            source={require("../assets/-icon-person-outline.png")}
          />
        </Pressable>
        <Pressable onPress={() => handleNavigation("Educational")}>
          <Image
            style={styles.bottomNavIcon}
            source={require("../assets/-icon-book-saved3.png")}
          />
        </Pressable>
        <Pressable onPress={() => handleNavigation("Forum")}>
          <Image
            style={styles.bottomNavIcon}
            source={require("../assets/-icon-discussion.png")}
          />
        </Pressable>
        <Pressable onPress={() => handleNavigation("Games")}>
          <Image
            style={styles.bottomNavIcon}
            source={require("../assets/-icon-game-controller-outline6.png")}
          />
        </Pressable>
      </View>

      {/* Surface Icon */}
      <Image
        style={styles.surfaceIcon}
        resizeMode="cover"
        source={require("../assets/navigation-barr2.png")}
      />

      {/* Calculator Icon */}
      <Pressable onPress={() => handleNavigation("Calculator")} style={styles.iconCalculatorParent}>
        <Image
          style={styles.iconCalculator}
          resizeMode="cover"
          source={require("../assets/-icon-calculator.png")}
        />
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  quizChild: {
    flex: 1,
    height: 852,
    position: "absolute",
    width: "100%",
    zIndex: -1,
  },
  quizItem: {
    flex: 1,
    height: 852,
    position: "absolute",
    width: "100%",
    zIndex: -1,
  },
  progressBar: {
    top: 10,
    height: 8,
    width: 255,
    alignSelf: "center",
  },
  question: {
    flex: 1,
    top: 30,
    margin: 20,
    alignSelf: "center",
    alignItems: "center",
    width: 350,
    right: 10,
  },
  questionText: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Nunito-SemiBold",
    color: "#000",
    textAlign: "center",
    paddingRight: 20,
    paddingLeft: 20,
  },
  question1: { 
    flex: 1,
    bottom: 60,
    alignSelf: "center",
    alignItems: "center",
    right: 10,
  },
  questionText1: {
    fontSize: 14,
    lineHeight: 22,
    fontFamily: "Nunito-Regular",
    color: "#000",
    textAlign: "center"
  },
  questionImageContainer: {
    flex: 1,
    marginRight: 40,
    marginLeft: 30,
    bottom: 200,
  },
  questionImage: {
    width: "100%",
    height: 212,
    alignSelf: "center",
    margin: 20,
    padding: 20,
    borderRadius: 20,
  },
  rectangleParent: {
    top: 100,
    width: 410,
    height: 725,
    position: "absolute",
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    top: 40,
  },
  backButton: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    padding: 25,
  },
  bottomNavBar: {
    flexDirection: "row",
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 10,
    position: "relative",
    zIndex: 2,
  },
  surfaceIcon: {
    flex: 1,
    width: "100%",
    height: 135,
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
  bottomNavIcon: {
    width: 30,
    height: 30,
    marginBottom: 50,
    top: 700,
  },
  iconCalculator: {
    top: 728,
    width: 40,
    height: 45,
    alignSelf: "center",
    position: "absolute",
    zIndex: 2,
  },
  iconCalculatorParent: {
    flex: 1,
    position: "absolute",
    width: "100%",
    padding: 10,
    zIndex: 2,
  },
  answerContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    bottom: 125,
    width: "90%",
    marginLeft: 20,
    marginRight: 35,
    height: 50,
    alignSelf: "center",
    alignItems: "center",
  },
  row1: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    height: 50,
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  row2: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    height: 100,
    alignSelf: "center",
    alignItems: "center",
  },
  pressableContainer: {
    flex: 1,
    height: 50,
    borderRadius: 6,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  pressableText: {
    fontSize: 14,
    lineHeight: 22,
    fontFamily: "Nunito-Regular",
    color: "#000",
    textAlign: "center",
    paddingRight: 20,
    paddingLeft: 20,
  },
  continueContainer: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    bottom: 20,
  },
  continueButton: {
    width: 250,
    height: 50,
    borderRadius: 6,
    backgroundColor: Color.primary,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    backgroundColor: "#428df8"
  },
  continueText: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: "Nunito-SemiBold",
    color: "#fdfdfd",
    textAlign: "center"
  },
  correctAnswer: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    bottom: 70,
    zIndex: 2,
    width: 200,
    height: 200,
    padding: 20,
    position: "absolute",
    borderRadius: 20,
  },
  vector7: {
    width: 90,
    height: 90,
    alignSelf: "center",
    justifyContent: "center",
    bottom: 20,
  },
  okText: {
    fontSize: 28,
    // lineHeight: 28,
    fontWeight: "600",
    fontFamily: "Nunito-SemiBold",
    color: "#000",
    textAlign: "center",
    bottom: 30,
    position: "absolute",
  },
});

export default QuizCorrect;
