import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  StatusBar,
  TextInput,
  ScrollView,
} from "react-native";
import { Button } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Property1HomeImage from "../components/Property1HomeImage";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import Search from "../components/Search";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const LibraryOfResourcesQuizzes = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.libraryOfResourcesQuizzes}>
      <Image
        style={[styles.libraryOfResourcesQuizzesChild, styles.libraryPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Button
        title="Social Aspect"
        radius={10}
        iconPosition="left"
        type="solid"
        color="linear-gradient(45.05deg, #ffab01, rgba(255, 171, 1, 0))"
        titleStyle={styles.cardBtn}
        onPress={() => navigation.navigate("Articles")}
        containerStyle={styles.cardBtn1}
        buttonStyle={styles.cardBtn2}
      />
      <Button
        title="View All "
        radius="5"
        iconPosition="left"
        type="clear"
        color="#01427a"
        titleStyle={styles.viewAllBtn}
        containerStyle={styles.viewAllBtn1}
        buttonStyle={styles.viewAllBtn2}
      />
      <Button
        radius="5"
        iconPosition="left"
        type="clear"
        color="#23538f"
        icon={{ name: "chevron-right", type: "material-community" }}
        containerStyle={styles.vectorIconBtn}
        buttonStyle={styles.vectorIconBtn1}
      />
      <Button
        title={`Making 
A Plan`}
        radius={10}
        iconPosition="left"
        type="solid"
        color="linear-gradient(97.68deg, #b18cfe, #fff)"
        titleStyle={styles.card1Btn}
        onPress={() => navigation.navigate("Articles")}
        containerStyle={styles.card1Btn1}
        buttonStyle={styles.card1Btn2}
      />
      <Image
        style={[styles.libraryOfResourcesQuizzesItem, styles.libraryPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Button
        title="SDGs"
        radius={10}
        iconPosition="left"
        type="solid"
        color="linear-gradient(-84.81deg, #4a743f, #fff)"
        titleStyle={styles.card2Btn}
        onPress={() => navigation.navigate("Articles")}
        containerStyle={styles.card2Btn1}
        buttonStyle={styles.card2Btn2}
      />
      <Text style={styles.subitle}>Top picks</Text>
      <Property1HomeImage
        imageDimensions={require("../assets/navigation-barr20.png")}
        property1HomeIconPosition="absolute"
        property1HomeIconWidth={402}
        property1HomeIconHeight={106}
        property1HomeIconTop={746}
        property1HomeIconLeft={0}
      />
      <View style={[styles.iconPersonOutlineParent, styles.nameFlexBox]}>
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
            source={require("../assets/-icon-game-controller-outline.png")}
          />
        </Pressable>
      </View>
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
      <View style={[styles.name, styles.nameFlexBox]}>
        <Text style={styles.quizzes}>Quizzes</Text>
      </View>
      <Search
        searchPosition="absolute"
        searchWidth={340}
        searchTop={114}
        searchLeft={30}
        searchBorderRadius={20}
        searchMarginLeft="unset"
      />
      <Button
        title="UN Progress"
        radius={10}
        iconPosition="left"
        type="solid"
        color="linear-gradient(-84.81deg, #fe6250, #fff)"
        titleStyle={styles.card3Btn}
        onPress={() => navigation.navigate("Articles")}
        containerStyle={styles.card3Btn1}
        buttonStyle={styles.card3Btn2}
      />
      <ScrollView
        style={styles.cardParent}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Button
          title="Mauna Loa"
          radius={10}
          iconPosition="left"
          type="solid"
          color="linear-gradient(-84.81deg, #e187f5, #fff)"
          titleStyle={styles.card4Btn}
          onPress={() => navigation.navigate("Articles")}
          containerStyle={styles.card4Btn1}
          buttonStyle={styles.card4Btn2}
        />
        <Button
          title="The Ozone"
          radius={10}
          iconPosition="left"
          type="solid"
          color="linear-gradient(-84.81deg, #6b4f5b, #fff)"
          titleStyle={styles.card5Btn}
          onPress={() => navigation.navigate("Articles")}
          containerStyle={styles.card5Btn1}
          buttonStyle={styles.card5Btn2}
        />
        <Button
          title="Green Learning"
          radius={10}
          iconPosition="left"
          type="solid"
          color="linear-gradient(-84.81deg, #f9d4d4, #283df7)"
          titleStyle={styles.card6Btn}
          onPress={() => navigation.navigate("Articles")}
          containerStyle={styles.card6Btn1}
          buttonStyle={styles.card6Btn2}
        />
      </ScrollView>
      <LinearGradient
        style={styles.gradientLayer}
        locations={[0, 1]}
        colors={["#01427a", "rgba(44, 44, 46, 0)"]}
      />
      <Button
        radius="5"
        iconPosition="left"
        type="clear"
        color="#fff"
        icon={{ name: "chevron-left", type: "material-community" }}
        onPress={() => navigation.navigate("CalcTrack")}
        containerStyle={styles.materialSymbolsarrowBackIoIconBtn}
        buttonStyle={styles.materialSymbolsarrowBackIoIconBtn1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardBtn: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
  },
  cardBtn1: {
    left: 198,
    top: 202,
    position: "absolute",
  },
  cardBtn2: {
    borderRadius: 10,
    width: 151,
    height: 161,
    overflow: "hidden",
  },
  viewAllBtn: {
    color: "#01427a",
    fontSize: 15,
    fontFamily: "Roboto-Regular",
  },
  viewAllBtn1: {
    left: 35,
    top: 586,
    position: "absolute",
  },
  viewAllBtn2: {},
  vectorIconBtn: {
    left: "25.95%",
    right: "71.25%",
    top: "69.13%",
    bottom: "29.34%",
    position: "absolute",
  },
  vectorIconBtn1: {
    height: "1.53%",
    width: "2.8%",
  },
  card1Btn: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
  },
  card1Btn1: {
    left: 32,
    top: 202,
    position: "absolute",
  },
  card1Btn2: {
    borderRadius: 10,
    width: 150,
    height: 161,
    overflow: "hidden",
  },
  card2Btn: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
  },
  card2Btn1: {
    left: 198,
    top: 387,
    position: "absolute",
  },
  card2Btn2: {
    borderRadius: 10,
    width: 151,
    height: 161,
    overflow: "hidden",
  },
  iconCalculatorBtn: {
    position: "relative",
  },
  iconCalculatorBtn1: {
    width: 41,
    height: 45,
  },
  card3Btn: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
  },
  card3Btn1: {
    left: 32,
    top: 384,
    position: "absolute",
  },
  card3Btn2: {
    borderRadius: 10,
    width: 150,
    height: 161,
    overflow: "hidden",
  },
  card4Btn: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
  },
  card4Btn1: {
    left: 146,
    top: 0,
    position: "absolute",
  },
  card4Btn2: {
    borderRadius: 10,
    width: 122,
    height: 111,
    overflow: "hidden",
  },
  card5Btn: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
  },
  card5Btn1: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  card5Btn2: {
    borderRadius: 10,
    width: 126,
    height: 111,
    overflow: "hidden",
  },
  card6Btn: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
  },
  card6Btn1: {
    left: 288,
    top: 0,
    position: "absolute",
  },
  card6Btn2: {
    borderRadius: 10,
    width: 126,
    height: 111,
    overflow: "hidden",
  },
  materialSymbolsarrowBackIoIconBtn: {
    left: 27,
    top: 83,
    position: "absolute",
  },
  materialSymbolsarrowBackIoIconBtn1: {
    width: 15,
    height: 17,
    overflow: "hidden",
  },
  libraryPosition: {
    width: 400,
    left: 0,
    position: "absolute",
  },
  nameFlexBox: {
    flexDirection: "row",
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
  libraryOfResourcesQuizzesChild: {
    top: 0,
    height: 336,
  },
  libraryOfResourcesQuizzesItem: {
    top: 435,
    height: 417,
  },
  subitle: {
    top: 176,
    left: 35,
    fontSize: FontSize.size_smi,
    lineHeight: 18,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
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
    alignItems: "flex-end",
  },
  iconCalculatorWrapper: {
    top: 746,
    left: 170,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  quizzes: {
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    width: 310,
    textAlign: "left",
  },
  name: {
    top: 70,
    left: 41,
    width: 363,
    height: 42,
    alignItems: "center",
  },
  cardParent: {
    top: 619,
    left: 30,
    height: 111,
    maxHeight: 111,
    position: "absolute",
    width: "100%",
  },
  gradientLayer: {
    top: 730,
    left: 329,
    width: 111,
    height: 89,
    transform: [
      {
        rotate: "-90.01deg",
      },
    ],
    backgroundColor: "transparent",
    position: "absolute",
  },
  libraryOfResourcesQuizzes: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default LibraryOfResourcesQuizzes;
