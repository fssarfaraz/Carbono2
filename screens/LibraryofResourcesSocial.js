import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, StatusBar, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import Property1HomeImage from "../components/Property1HomeImage";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import Search from "../components/Search";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const LibraryofResourcesSocial = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.libraryofResourcesSocial}>
      <Image
        style={[styles.libraryofResourcesSocialChild, styles.libraryofLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <LinearGradient
        style={[styles.card, styles.cardLayout2]}
        locations={[0, 0.71]}
        colors={["#eb5757", "#fff"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Articles")}
        >
          <Text
            style={[styles.climateCrafts, styles.climateCraftsLayout]}
          >{`Climate 
Crafts`}</Text>
          <Image
            style={[styles.illustrationGlobalWarming, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/-illustration-global-warming.png")}
          />
        </Pressable>
      </LinearGradient>
      <Property1HomeImage
        imageDimensions={require("../assets/navigation-barr.png")}
        property1HomeIconPosition="absolute"
        property1HomeIconWidth={394}
        property1HomeIconHeight={105}
        property1HomeIconTop={760}
        property1HomeIconLeft={0}
      />
      <Image
        style={[styles.libraryofResourcesSocialItem, styles.lowCarbonPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Pressable
        style={styles.iconCalculatorWrapper}
        onPress={() => navigation.navigate("Calculator")}
      >
        <Image
          style={styles.iconCalculator}
          contentFit="cover"
          source={require("../assets/-icon-calculator7.png")}
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
            source={require("../assets/-icon-game-controller-outline16.png")}
          />
        </Pressable>
      </View>
      <Search
        searchInputValue={require("../assets/search4.png")}
        searchPlaceholder="Search"
        searchPosition="absolute"
        searchWidth={349}
        searchTop={114}
        searchLeft={21}
        searchBorderRadius={20}
        searchMarginLeft="unset"
        rectangleViewBorderRadius={20}
        rectangleViewBackgroundColor="rgba(1, 66, 122, 0.7)"
        frameViewWidth="23.18%"
        frameViewRight="73.93%"
        frameViewLeft="2.89%"
        searchFontFamily="Nunito-Regular"
        onSearchPress={() => navigation.navigate("SearchQuery")}
      />
      <View style={[styles.name, styles.nameFlexBox]}>
        <Text style={styles.social}>Social</Text>
      </View>
      <Text style={[styles.subitle, styles.subitleTypo]}>New arrivals</Text>
      <Text style={[styles.subitle1, styles.subitleTypo]}>Top picks</Text>
      <LinearGradient
        style={[styles.card1, styles.cardLayout]}
        locations={[0, 1]}
        colors={["#b18cfe", "#fff"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Articles")}
        >
          <Text style={[styles.ecoEssentials, styles.ecoTypo]}>{`Eco 
Essentials`}</Text>
          <Image
            style={[styles.iconEcoEarth1, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/-icon-eco-earth-1.png")}
          />
        </Pressable>
      </LinearGradient>
      <LinearGradient
        style={[styles.card2, styles.cardPosition3]}
        locations={[0, 0.86]}
        colors={["#4a743f", "#fff"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Articles")}
        >
          <Text style={[styles.ecoHacks, styles.ecoTypo]}>Eco Hacks</Text>
          <Image
            style={[styles.iconEcoLight1, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/-icon-eco-light-1.png")}
          />
        </Pressable>
      </LinearGradient>
      <Text style={[styles.viewAll, styles.viewTypo]}>{`View All `}</Text>
      <Text style={[styles.viewAll1, styles.viewTypo]}>{`View All `}</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector10.png")}
      />
      <LinearGradient
        style={[styles.card3, styles.cardPosition2]}
        locations={[0.43, 1]}
        colors={["#fe8c8c", "#9ab3da"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Articles")}
        >
          <Text style={[styles.ecoEssentials, styles.ecoTypo]}>
            Green Wisdom
          </Text>
          <Text style={[styles.text, styles.textTypo]}>📘</Text>
        </Pressable>
      </LinearGradient>
      <LinearGradient
        style={[styles.card4, styles.cardPosition1]}
        locations={[0, 1]}
        colors={["#21aa58", "#fff"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Articles")}
        >
          <Text style={[styles.ecoEssentials, styles.ecoTypo]}>{`Carbon 
Smart`}</Text>
          <Text style={[styles.text, styles.textTypo]}>⚙️</Text>
        </Pressable>
      </LinearGradient>
      <LinearGradient
        style={[styles.card5, styles.cardLayout1]}
        locations={[0, 0.46]}
        colors={["#95bcd8", "#fff"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Articles")}
        >
          <Text style={[styles.ecoEssentials, styles.ecoTypo]}>
            Reduce carbon
          </Text>
          <Image
            style={[styles.illustrationIdeaIdeasManP, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/-illustration-idea-ideas-man-plant-pants3.png")}
          />
          <Image
            style={[styles.emojiExhaustGasesFactory, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/-emoji-exhaust-gases-factory1.png")}
          />
        </Pressable>
      </LinearGradient>
      <LinearGradient
        style={[styles.card6, styles.cardPosition1]}
        locations={[0, 0.95, 1]}
        colors={["#f29100", "#fdf0dd", "#fff"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Articles")}
        >
          <View style={[styles.lowCarbonWrapper, styles.lowLayout]}>
            <Text style={[styles.lowCarbon, styles.lowLayout]}>Low Carbon</Text>
          </View>
        </Pressable>
      </LinearGradient>
      <LinearGradient
        style={[styles.card7, styles.cardPosition]}
        locations={[0.31, 1]}
        colors={["#433e5e", "#fff"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Articles")}
        >
          <Text style={[styles.ecoEssentials, styles.ecoTypo]}>
            Footprint Fixes
          </Text>
          <Image
            style={[styles.iconEcoFriendly, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/-icon-eco-friendly.png")}
          />
        </Pressable>
      </LinearGradient>
      <LinearGradient
        style={[styles.card8, styles.cardLayout1]}
        locations={[0, 1]}
        colors={["#2150aa", "#fff"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Articles")}
        >
          <Text style={[styles.ecoEssentials, styles.ecoTypo]}>Eco Eats</Text>
          <Text style={[styles.text2, styles.textTypo]}>{`🌿

🍽️`}</Text>
        </Pressable>
      </LinearGradient>
      <LinearGradient
        style={[styles.card9, styles.cardPosition]}
        locations={[0.46, 1]}
        colors={["#aa2121", "#fff"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Articles")}
        >
          <Text style={[styles.ecoEssentials, styles.ecoTypo]}>
            Sustainable Tips
          </Text>
          <Text style={[styles.text3, styles.textTypo]}>📔</Text>
          <LinearGradient
            style={[styles.gradientLayer, styles.gradientTransform]}
            locations={[0, 1]}
            colors={["#01427a", "rgba(44, 44, 46, 0)"]}
          />
        </Pressable>
      </LinearGradient>
      <LinearGradient
        style={[styles.card10, styles.cardLayout2]}
        locations={[0, 0.71]}
        colors={["#4c241d", "#fff"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Articles")}
        >
          <Text
            style={[styles.climateCrafts, styles.climateCraftsLayout]}
          >{`Climate 
Crafts`}</Text>
          <Image
            style={[styles.illustrationGlobalWarming, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/-illustration-global-warming.png")}
          />
        </Pressable>
      </LinearGradient>
      <LinearGradient
        style={[styles.gradientLayer1, styles.gradientTransform]}
        locations={[0, 1]}
        colors={["#01427a", "rgba(44, 44, 46, 0)"]}
      />
      <LinearGradient
        style={[styles.gradientLayer2, styles.gradientTransform]}
        locations={[0, 1]}
        colors={["#01427a", "rgba(44, 44, 46, 0)"]}
      />
      <Button
        radius={5}
        iconPosition="left"
        type="solid"
        color="#fff"
        icon={{ name: "chevron-left", type: "material-community" }}
        onPress={() => navigation.goBack()}
        containerStyle={styles.materialSymbolsarrowBackIoIconBtn}
        buttonStyle={styles.materialSymbolsarrowBackIoIconBtn1}
      />
      <Image
        style={[styles.iconEcoHouse, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/-icon-eco-house.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  materialSymbolsarrowBackIoIconBtn: {
    left: 13,
    top: 84,
    position: "absolute",
  },
  materialSymbolsarrowBackIoIconBtn1: {
    width: 15,
    height: 17,
    overflow: "hidden",
  },
  libraryofLayout: {
    width: 400,
    position: "absolute",
  },
  cardLayout2: {
    height: 158,
    width: 150,
    position: "absolute",
  },
  climateCraftsLayout: {
    height: 87,
    width: 138,
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lowCarbonPosition: {
    top: 0,
    left: 0,
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
  subitleTypo: {
    color: Color.colorDarkslateblue_100,
    fontFamily: FontFamily.robotoBold,
    textTransform: "uppercase",
    lineHeight: 18,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  cardLayout: {
    height: 154,
    top: 391,
  },
  ecoTypo: {
    left: 12,
    textAlign: "left",
    color: Color.labelDarkPrimary,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.primaryText_size,
    top: 11,
    position: "absolute",
  },
  cardPosition3: {
    left: 21,
    position: "absolute",
  },
  viewTypo: {
    fontFamily: FontFamily.bodyBody1,
    lineHeight: 20,
    fontSize: FontSize.body15Regular_size,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
    position: "absolute",
  },
  cardPosition2: {
    top: 205,
    height: 161,
  },
  textTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    lineHeight: 28,
    position: "absolute",
  },
  cardPosition1: {
    left: 184,
    width: 143,
    position: "absolute",
  },
  cardLayout1: {
    width: 143,
    position: "absolute",
  },
  lowLayout: {
    height: 43,
    width: 141,
    position: "absolute",
  },
  cardPosition: {
    left: 346,
    width: 143,
    position: "absolute",
  },
  gradientTransform: {
    transform: [
      {
        rotate: "-90.01deg",
      },
    ],
    backgroundColor: "transparent",
    position: "absolute",
  },
  libraryofResourcesSocialChild: {
    top: 467,
    height: 385,
    left: 0,
    width: 400,
  },
  climateCrafts: {
    left: 17,
    textAlign: "left",
    color: Color.labelDarkPrimary,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.primaryText_size,
    top: 11,
    height: 87,
    width: 138,
    position: "absolute",
  },
  illustrationGlobalWarming: {
    height: "42.41%",
    width: "44.67%",
    right: "20%",
    bottom: "7.59%",
    left: "35.33%",
    top: "50%",
    maxWidth: "100%",
  },
  pressable: {
    borderRadius: Border.br_3xs,
    backgroundColor: "transparent",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  card: {
    left: 192,
    top: 598,
  },
  libraryofResourcesSocialItem: {
    height: 355,
    width: 400,
    position: "absolute",
  },
  iconCalculator: {
    width: 41,
    height: 45,
  },
  iconCalculatorWrapper: {
    top: 760,
    left: 166,
    padding: Padding.p_3xs,
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
    top: 810,
    width: 385,
    alignItems: "flex-end",
    left: 28,
  },
  social: {
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    width: 310,
    textAlign: "left",
  },
  name: {
    top: 72,
    left: 32,
    width: 363,
    height: 42,
    alignItems: "center",
  },
  subitle: {
    top: 172,
    left: 28,
  },
  subitle1: {
    top: 575,
    left: 29,
  },
  ecoEssentials: {
    height: 87,
    width: 138,
  },
  iconEcoEarth1: {
    height: "40.91%",
    width: "39.86%",
    right: "30.07%",
    bottom: "9.09%",
    left: "30.07%",
    top: "50%",
    maxWidth: "100%",
  },
  card1: {
    left: 22,
    width: 143,
    position: "absolute",
  },
  ecoHacks: {
    width: 233,
  },
  iconEcoLight1: {
    height: "46.54%",
    width: "34.38%",
    top: "40.25%",
    right: "33.13%",
    bottom: "13.21%",
    left: "32.5%",
  },
  card2: {
    width: 160,
    height: 159,
    top: 598,
  },
  viewAll: {
    top: 171,
    left: 291,
  },
  viewAll1: {
    top: 573,
    left: 288,
  },
  vectorIcon: {
    height: "1.57%",
    width: "5.34%",
    top: "47.02%",
    right: "6.11%",
    bottom: "51.41%",
    left: "88.55%",
  },
  vectorIcon1: {
    height: "1.53%",
    width: "2.8%",
    top: "20.42%",
    right: "6.62%",
    bottom: "78.05%",
    left: "90.59%",
  },
  vectorIcon2: {
    height: "1.29%",
    width: "3.31%",
    top: "67.84%",
    right: "8.65%",
    bottom: "30.87%",
    left: "88.04%",
  },
  text: {
    top: 98,
    left: 41,
    fontSize: FontSize.size_42xl,
  },
  card3: {
    width: 144,
    height: 161,
    left: 21,
    position: "absolute",
  },
  card4: {
    height: 161,
    top: 205,
  },
  illustrationIdeaIdeasManP: {
    height: "70.55%",
    width: "62.94%",
    top: "29.2%",
    right: "0%",
    bottom: "0.25%",
    left: "37.06%",
  },
  emojiExhaustGasesFactory: {
    height: "39.14%",
    width: "41.26%",
    top: "44.11%",
    right: "46.15%",
    bottom: "16.75%",
    left: "12.59%",
  },
  card5: {
    left: 546,
    top: 203,
    height: 163,
  },
  lowCarbon: {
    top: 0,
    left: 0,
    textAlign: "left",
    color: Color.labelDarkPrimary,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.primaryText_size,
  },
  lowCarbonWrapper: {
    top: 14,
    left: 13,
  },
  card6: {
    height: 154,
    top: 391,
  },
  iconEcoFriendly: {
    height: "44.81%",
    width: "51.05%",
    top: "44.81%",
    right: "24.48%",
    bottom: "10.39%",
    left: "24.48%",
  },
  card7: {
    height: 154,
    top: 391,
  },
  text2: {
    top: 66,
    left: 44,
    fontSize: FontSize.size_37xl,
  },
  card8: {
    left: 525,
    top: 126,
    height: 161,
  },
  text3: {
    top: 84,
    left: 72,
    fontSize: 58,
  },
  gradientLayer: {
    top: 167,
    left: -17,
    width: 167,
    height: 89,
  },
  card9: {
    height: 161,
    top: 205,
  },
  card10: {
    left: 353,
    top: 601,
  },
  gradientLayer1: {
    top: 547,
    left: 347,
    width: 156,
    height: 79,
  },
  gradientLayer2: {
    top: 757,
    left: 360,
    width: 157,
    height: 77,
  },
  iconEcoHouse: {
    height: "7.81%",
    width: "17.3%",
    top: "52.11%",
    right: "26.21%",
    bottom: "40.08%",
    left: "56.49%",
  },
  libraryofResourcesSocial: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default LibraryofResourcesSocial;
