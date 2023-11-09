import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  Pressable,
  StatusBar,
  Text,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "@rneui/themed";
import Property1HomeImage from "../components/Property1HomeImage";
import { useNavigation } from "@react-navigation/native";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import Search from "../components/Search";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const SearchResults = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchResults}>
      <Image
        style={[styles.searchResultsChild, styles.searchPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.searchResultsItem, styles.searchPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <LinearGradient
        style={styles.gradientLayer}
        locations={[0, 1]}
        colors={["#01427a", "rgba(44, 44, 46, 0)"]}
      />
      <ScrollView
        style={styles.tipsCard4Parent}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={[styles.tipsCard4, styles.tipsCardLayout]}>
          <View style={[styles.tipsCard4Child, styles.tipsChildLayout]} />
          <ImageBackground
            style={[styles.tipsCard4Item, styles.tipsItemLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle41.png")}
          />
          <Button
            title={`Lorem ipsum dolor sit amet, consectet
adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna 
aliqua. Id cursus metus aliquam eleife
mi in nulla. Lacinia at quis risus sed.`}
            radius="5"
            iconPosition="left"
            type="clear"
            color="rgba(0, 0, 0, 0.5)"
            titleStyle={styles.loremIpsumDolorBtn}
            containerStyle={styles.loremIpsumDolorBtn1}
            buttonStyle={styles.loremIpsumDolorBtn2}
          />
          <Button
            title="Lorem Ipsum lorem ipsum"
            radius="5"
            iconPosition="left"
            type="clear"
            color="#000"
            titleStyle={styles.loremIpsumLoremBtn}
            containerStyle={styles.loremIpsumLoremBtn1}
            buttonStyle={styles.loremIpsumLoremBtn2}
          />
        </View>
        <View style={[styles.tipsCard3, styles.tipsCardLayout]}>
          <View style={[styles.tipsCard3Child, styles.tipsChildLayout]} />
          <ImageBackground
            style={[styles.tipsCard3Item, styles.tipsItemLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle40.png")}
          />
          <Button
            title="Lorem Ipsum lorem ipsum"
            radius="5"
            iconPosition="left"
            type="clear"
            color="#000"
            titleStyle={styles.loremIpsumLorem1Btn}
            containerStyle={styles.loremIpsumLorem1Btn1}
            buttonStyle={styles.loremIpsumLorem1Btn2}
          />
          <Button
            title={`Lorem ipsum dolor sit amet, consectet
adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna 
aliqua. Id cursus metus aliquam eleife
mi in nulla. Lacinia at quis risus sed.`}
            radius="5"
            iconPosition="left"
            type="clear"
            color="rgba(0, 0, 0, 0.5)"
            titleStyle={styles.loremIpsumDolor1Btn}
            containerStyle={styles.loremIpsumDolor1Btn1}
            buttonStyle={styles.loremIpsumDolor1Btn2}
          />
        </View>
        <View style={[styles.tipsCard2, styles.tipsCardLayout]}>
          <View style={[styles.tipsCard3Child, styles.tipsChildLayout]} />
          <ImageBackground
            style={[styles.tipsCard4Item, styles.tipsItemLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle411.png")}
          />
          <Button
            title="Lorem Ipsum lorem ipsum"
            radius="5"
            iconPosition="left"
            type="clear"
            color="#000"
            titleStyle={styles.loremIpsumLorem2Btn}
            containerStyle={styles.loremIpsumLorem2Btn1}
            buttonStyle={styles.loremIpsumLorem2Btn2}
          />
          <Button
            title={`Lorem ipsum dolor sit amet, consectet
adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna 
aliqua. Id cursus metus aliquam eleife
mi in nulla. Lacinia at quis risus sed.`}
            radius="5"
            iconPosition="left"
            type="clear"
            color="rgba(0, 0, 0, 0.5)"
            titleStyle={styles.loremIpsumDolor2Btn}
            containerStyle={styles.loremIpsumDolor2Btn1}
            buttonStyle={styles.loremIpsumDolor2Btn2}
          />
        </View>
        <View style={[styles.tipsCard1, styles.tipsCardLayout]}>
          <View style={[styles.tipsCard3Child, styles.tipsChildLayout]} />
          <ImageBackground
            style={[styles.tipsCard3Item, styles.tipsItemLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle401.png")}
          />
          <Button
            title="Lorem Ipsum lorem ipsum"
            radius="5"
            iconPosition="left"
            type="clear"
            color="#000"
            titleStyle={styles.loremIpsumLorem3Btn}
            containerStyle={styles.loremIpsumLorem3Btn1}
            buttonStyle={styles.loremIpsumLorem3Btn2}
          />
          <Button
            title={`Lorem ipsum dolor sit amet, consectet
adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna 
aliqua. Id cursus metus aliquam eleife
mi in nulla. Lacinia at quis risus sed.`}
            radius="5"
            iconPosition="left"
            type="clear"
            color="rgba(0, 0, 0, 0.5)"
            titleStyle={styles.loremIpsumDolor3Btn}
            containerStyle={styles.loremIpsumDolor3Btn1}
            buttonStyle={styles.loremIpsumDolor3Btn2}
          />
        </View>
      </ScrollView>
      <Property1HomeImage
        imageDimensions={require("../assets/navigation-barr15.png")}
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
            source={require("../assets/-icon-game-controller-outline1.png")}
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
        <Text style={styles.reducingYourFootprint}>
          Reducing Your Footprint
        </Text>
      </View>
      <Search
        searchPosition="absolute"
        searchWidth={346}
        searchTop={126}
        searchLeft={30}
        searchBorderRadius={20}
        searchMarginLeft="unset"
      />
      <Text style={styles.loremIpsum}>Lorem Ipsum</Text>
      <Button
        radius="5"
        iconPosition="left"
        type="clear"
        color="#fff"
        icon={{ name: "chevron-left", type: "material-community" }}
        onPress={() => navigation.goBack()}
        containerStyle={styles.materialSymbolsarrowBackIoIconBtn}
        buttonStyle={styles.materialSymbolsarrowBackIoIconBtn1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loremIpsumDolorBtn: {
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: 10,
    fontWeight: "500",
    fontFamily: "Nunito-Medium",
  },
  loremIpsumDolorBtn1: {
    left: 154,
    top: 39,
    position: "absolute",
  },
  loremIpsumDolorBtn2: {},
  loremIpsumLoremBtn: {
    color: "#000",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
  },
  loremIpsumLoremBtn1: {
    left: 154,
    top: 16,
    position: "absolute",
  },
  loremIpsumLoremBtn2: {},
  loremIpsumLorem1Btn: {
    color: "#000",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
  },
  loremIpsumLorem1Btn1: {
    left: 154,
    top: 15,
    position: "absolute",
  },
  loremIpsumLorem1Btn2: {},
  loremIpsumDolor1Btn: {
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: 10,
    fontWeight: "500",
    fontFamily: "Nunito-Medium",
  },
  loremIpsumDolor1Btn1: {
    left: 154,
    top: 38,
    position: "absolute",
  },
  loremIpsumDolor1Btn2: {},
  loremIpsumLorem2Btn: {
    color: "#000",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
  },
  loremIpsumLorem2Btn1: {
    left: 154,
    top: 16,
    position: "absolute",
  },
  loremIpsumLorem2Btn2: {},
  loremIpsumDolor2Btn: {
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: 10,
    fontWeight: "500",
    fontFamily: "Nunito-Medium",
  },
  loremIpsumDolor2Btn1: {
    left: 154,
    top: 39,
    position: "absolute",
  },
  loremIpsumDolor2Btn2: {},
  loremIpsumLorem3Btn: {
    color: "#000",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
  },
  loremIpsumLorem3Btn1: {
    left: 154,
    top: 20,
    position: "absolute",
  },
  loremIpsumLorem3Btn2: {},
  loremIpsumDolor3Btn: {
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: 10,
    fontWeight: "500",
    fontFamily: "Nunito-Medium",
  },
  loremIpsumDolor3Btn1: {
    left: 154,
    top: 43,
    position: "absolute",
  },
  loremIpsumDolor3Btn2: {},
  iconCalculatorBtn: {
    position: "relative",
  },
  iconCalculatorBtn1: {
    width: 41,
    height: 45,
  },
  materialSymbolsarrowBackIoIconBtn: {
    left: 15,
    top: 49,
    position: "absolute",
  },
  materialSymbolsarrowBackIoIconBtn1: {
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  searchPosition: {
    width: 400,
    left: 0,
    position: "absolute",
  },
  tipsCardLayout: {
    height: 128,
    width: 350,
    left: 0,
    position: "absolute",
  },
  tipsChildLayout: {
    borderRadius: Border.br_base,
    height: 128,
    width: 350,
    left: 0,
    top: 0,
    position: "absolute",
  },
  tipsItemLayout: {
    height: 100,
    width: 119,
    borderRadius: Border.br_sm,
    left: 14,
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
  searchResultsChild: {
    height: 394,
    top: 0,
  },
  searchResultsItem: {
    top: 435,
    height: 417,
  },
  gradientLayer: {
    top: 727,
    width: 393,
    height: 86,
    backgroundColor: "transparent",
    left: 0,
    position: "absolute",
  },
  tipsCard4Child: {
    backgroundColor: "rgba(242, 242, 242, 0.5)",
  },
  tipsCard4Item: {
    top: 14,
  },
  tipsCard4: {
    top: 456,
  },
  tipsCard3Child: {
    backgroundColor: Color.colorWhitesmoke_300,
  },
  tipsCard3Item: {
    top: 13,
  },
  tipsCard3: {
    top: 303,
  },
  tipsCard2: {
    top: 152,
  },
  tipsCard1: {
    top: 0,
  },
  tipsCard4Parent: {
    top: 180,
    left: 26,
    maxWidth: 350,
    width: 350,
    position: "absolute",
    flex: 1,
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
  reducingYourFootprint: {
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    width: 310,
    textAlign: "left",
  },
  name: {
    top: 76,
    left: 30,
    width: 372,
    height: 42,
    alignItems: "center",
  },
  loremIpsum: {
    top: 135,
    left: 64,
    fontSize: FontSize.body15Regular_size,
    lineHeight: 20,
    fontFamily: FontFamily.nunitoRegular,
    color: Color.labelDarkPrimary,
    textAlign: "left",
    position: "absolute",
  },
  searchResults: {
    backgroundColor: Color.labelDarkPrimary,
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default SearchResults;
