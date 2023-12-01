import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text, StatusBar, ScrollView } from "react-native";
import Property1HomeImage from "../components/Property1HomeImage";
import { useNavigation } from "@react-navigation/native";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { Border, FontFamily, Color, Padding, FontSize } from "../GlobalStyles";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";


const Games = () => {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };
  
  //  This is a demo comment to test the git commit
  const gamesData = [
    { id: 1, name: "Flappy Cup", image: require("../assets/FlappyCupSplash.png") },
    { id: 2, name: "Eco Tac Toe", image: require("../assets/ecotactoesplash.png") },
    //{ id: 2, name: "Space Voyagers 3", image: require("../assets/egs-destiny2lightfall-bungie-addon-g1a-00-1920x1080484927180fa94217cdce9e1bd5aa5e9f-1.png") },
    //{ id: 2, name: "Space Voyagers 4", image: require("../assets/marvelsspiderman2playstation52021games3840x21601585-1.png") },
    // Add more games as needed
    // 
  ];

  return (
    <View style={styles.games}>
      <Image
        style={styles.gamesChild}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />

      <Image
        style={styles.gamesItem}
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

      <View style={styles.readyToPlayContainer}>
        <Text style={[styles.readyToPlay]}>
          READY TO PLAY?
        </Text>

        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("SearchQuery")}
        >
          <Image
            style={[styles.icon3]}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
        </Pressable>
      </View>

      {/* Horizontal Pressables */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {gamesData.map((game) => (
          <View key={game.id} style={styles.gameContainer}>
            <Pressable
              style={styles.gamePressable}
              onPress={() => handleNavigation("GameSelectedScreen", { gameId: game.id })}
            >
              <Image style={styles.gameImage} contentFit="cover" source={game.image} />
            </Pressable>
            <View style={styles.gameNameContainer}>
              <Text style={styles.gameName}>{game.name}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
     
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
  readyToPlayContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
    top: 90,
    paddingLeft: 40,
    paddingRight: 30,
  },
  vector: {
    marginRight: 10,
  },
  icon3: {
    width: 24,
    height: 24,
  },
  readyToPlay: {
    fontSize: 18,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    // textAlign: "left",
    color: Color.colorDarkslateblue_100,
    // top: 130,
    // left: 37,
    fontSize: FontSize.size_11xl,
    // position: "absolute",
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    top: 60,
    left: 20,
  },
  backButton: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    padding: 10,
  },
  gameContainer: {
    top: 150,
    alignItems: "center",
    marginRight: 20,
  },
  gamePressable: {
    borderRadius: Border.br_11xl,
    overflow: "hidden",
  },
  gameImage: {
    width: 200,
    height: 350,
  },
  gameNameContainer: {
    backgroundColor: Color.colorDarkslateblue_100,
    borderRadius: Border.br_11xl,
    overflow: "hidden",
    top: 15,
    paddingRight: 5,
    paddingLeft: 5,
  },
  gameName: {
    color: "#FFF",
    fontFamily: FontFamily.nunitoBold,
    fontSize: 20,
    padding: 15,
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
    // top: 730,
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
});

export default Games;