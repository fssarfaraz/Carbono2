import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, StatusBar, Text } from "react-native";
import { Button } from "@rneui/themed";
import Property1HomeImage from "../components/Property1HomeImage";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";


const GameSelectedScreen = ({gameId}) => {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={[styles.gameSelectedScreen, styles.stChildLayout]}>
      <Image
        style={[styles.gameSelectedScreenChild, styles.gamePosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.gameSelectedScreenItem, styles.gamePosition]}
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

      <View style={[styles.st]}>
        <Image
          style={[styles.stChild]}
          contentFit="cover"
          source={gameId == 1 ? require("../assets/FlappyCupSplash.png") : require("../assets/ecotactoesplash.png")}
        />
       
      </View>

      <View style={[styles.textContainer]}>
      <View style={[styles.titleContainer]}>
        {gameId === 1 ? <Text style={[styles.title]}>Flappy Cup</Text> : <Text style={[styles.title]}>Eco Tac Toe</Text>}
      </View>

        <View style={[styles.informationContainer]}>
          <Text style={[styles.information]}>Information</Text>
        </View>

        <View style={[styles.itemContainer]}>
          <View style={[styles.genreContainer]}>
            <Text style={[styles.genre1]}>Genre</Text>
            <Text style={[styles.adventure]}>Arcade</Text>
          </View>

          <View style={styles.separator1} />

          <View style={[styles.createdContainer]}>
            <Text style={[styles.created]}>Created</Text>
            {gameId === 1 ? <Text style={[styles.date]}>12 Nov 2023</Text> : <Text style={[styles.date]}>20 Nov 2023</Text>}
          </View>

          <View style={styles.separator2} />

          <View style={[styles.updatedContainer]}>
            <Text style={[styles.updated]}>Updated</Text>
            {gameId === 1 ? <Text style={[styles.date1]}>19 Nov 2023</Text> : <Text style={[styles.date1]}>21 Nov 2023</Text>}
          </View>
        </View>
      </View>

      <Pressable
            style={styles.nextButton1}
            onPress={() => (gameId == 1) ? handleNavigation("GameScreen") : handleNavigation("TicTacToe")}
          >
            <LinearGradient
              style={styles.gradientButton}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#428DF8", "#428df8"]}
            >
              <Text style={styles.nextButtonText}>Let's Play!</Text>
            </LinearGradient>
      </Pressable>

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
  stChildLayout: {
    overflow: "hidden",
    width: "100%",
  },
  gamePosition: {
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
  wrapperSpaceBlock: {
    padding: Padding.p_3xs,
    position: "absolute",
  },
  gameSelectedScreenChild: {
    top: 0,
    height: 455,
  },
  gameSelectedScreenItem: {
    top: 422,
    height: 430,
  },
  st: {
    top: 0,
    height: "35%",
    position: "absolute",
    width: "100%",
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  stChild: {
    height: "100%",
    borderRadius: Border.br_31xl,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: "100%",
  },
  monumnetValley2Logo2: {
    top: 127,
    width: 194,
    height: 62,
    position: "absolute",
    zIndex: 1,
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
    flexDirection: "row",
    position: "absolute",
  },
  iconCalculator: {
    width: 41,
    height: 45,
  },
  iconCalculatorWrapper: {
    top: 745,
    left: 165,
  },
  vectorIcon: {
    top: 587,
    left: -240,
    width: 12,
    height: 10,
    position: "absolute",
  },
  
  letsPlay: {
    fontSize: FontSize.size_11xl,
    letterSpacing: 0,
    color: Color.labelDarkPrimary,
    textAlign: "center",
  },
  letsPlayWrapper: {
    top: 627,
    left: 70,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorDodgerblue_100,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 256,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  gameSelectedScreen: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    top: 60,
    left: 20,
    zIndex: 1,
  },
  backButton: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    padding: 10,
  },
  textContainer: {
    top: 300,
    left: 20,
    width: 335,
    // height: 300,
    position: "absolute",
  },
  titleContainer: {
    width: 335,
    position: "absolute",
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    top: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "500",
    fontFamily: "Nunito-Medium",
    color: "#01427a",
    textAlign: "center",
    width: 289
  },
  informationContainer: {
    top: 95,
    left: 0,
    width: 335,
    position: "absolute",
    paddingLeft: 20,
  },
  information: {
    fontSize: 32,
    fontWeight: "500",
    fontFamily: "Nunito-Medium",
    color: "#01427a",
    textAlign: "left",
    width: 289
  },
  itemContainer: {
    top: 65,
    width: 335,
    paddingLeft: 20,
    paddingRight: 20,
  },
  genreContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    top: 85,
  },
  genre1: {
    fontSize: 24,
    fontWeight: "300",
    fontFamily: "Nunito-Light"
  },
  adventure: {
    fontSize: 20,
    fontWeight: "200",
    fontFamily: "Nunito-ExtraLight"
  },
  createdContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    top: 95,
  },
  created: {
    fontSize: 24,
    fontWeight: "300",
    fontFamily: "Nunito-Light"
  },
  date: {
    fontSize: 20,
    fontWeight: "200",
    fontFamily: "Nunito-ExtraLight"
  },
  updatedContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    top: 105,
  },
  updated: {
    fontSize: 24,
    fontWeight: "300",
    fontFamily: "Nunito-Light"
  },
  date1: {
    fontSize: 20,
    fontWeight: "200",
    fontFamily: "Nunito-ExtraLight"
  },
  separator1: {
    height: 1,
    backgroundColor: 'gray', // Set your desired color for the separator
    marginTop: 5,
    marginBottom: 5,
    top: 95,
  },
  separator2: {
    height: 1,
    backgroundColor: 'gray', // Set your desired color for the separator
    marginTop: 5,
    marginBottom: 5,
    top: 105,
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
    top: 733,
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
  nextButton1: {
    borderRadius: 30,
    width: "60%",
    justifyContent: "center",
    alignSelf: "center",
    overflow: "hidden",
    position: "absolute",
    bottom: 165,
    // height: 50,
  },
  nextButtonText: {
    fontSize: 26,
    letterSpacing: 0,
    fontWeight: "300",
    fontFamily: "Nunito-Light",
    color: "#fff",
    textAlign: "center",
  },
  gradientButton: {
    padding: 10,
    alignItems: "center",
  },

});

export default GameSelectedScreen;
