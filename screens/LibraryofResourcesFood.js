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

const LibraryofResourcesFood = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.libraryofResourcesFood}>
      <Image
        style={[styles.libraryofResourcesFoodChild, styles.libraryofLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <LinearGradient
        style={[styles.card, styles.cardLayout3]}
        locations={[0, 0.71]}
        colors={["#eb5757", "#fff"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Articles")}
        >
          <Text style={[styles.sustainableKitchen, styles.ecoTipsLayout]}>
            Sustainable Kitchen
          </Text>
          <Text style={[styles.text, styles.textTypo]}>
            <Text style={styles.text1}>🌱</Text>
            <Text style={styles.text2}>🔪</Text>
          </Text>
        </Pressable>
      </LinearGradient>
      <Property1HomeImage
        imageDimensions={require("../assets/navigation-barr17.png")}
        property1HomeIconPosition="absolute"
        property1HomeIconWidth={394}
        property1HomeIconHeight={105}
        property1HomeIconTop={760}
        property1HomeIconLeft={0}
      />
      <Image
        style={[
          styles.libraryofResourcesFoodItem,
          styles.greenGastronomyPosition,
        ]}
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
          style={styles.iconLayout2}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "UserProfile" })
          }
        >
          <Image
            style={styles.iconLayout3}
            contentFit="cover"
            source={require("../assets/-icon-person-outline.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.iconBookSaved, styles.iconLayout1]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Educational" })
          }
        >
          <Image
            style={styles.iconLayout3}
            contentFit="cover"
            source={require("../assets/-icon-book-saved.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.iconDiscussion, styles.iconLayout2]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Forum" })
          }
        >
          <Image
            style={styles.iconLayout3}
            contentFit="cover"
            source={require("../assets/-icon-discussion.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.iconGameControllerOutline, styles.iconLayout1]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Games" })
          }
        >
          <Image
            style={styles.iconLayout3}
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
        <Text style={styles.food}>Food</Text>
      </View>
      <Text style={[styles.subitle, styles.subitleTypo]}>New arrivals</Text>
      <Text style={[styles.subitle1, styles.subitleTypo]}>Top picks</Text>
      <LinearGradient
        style={[styles.card1, styles.cardLayout1]}
        locations={[0, 1]}
        colors={["#b18cfe", "#fff"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Articles")}
        >
          <Text style={[styles.ecoTips, styles.ecoTipsTypo]}>Eco Tips</Text>
          <Image
            style={[styles.iconChefMale, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-icon-chef-male.png")}
          />
        </Pressable>
      </LinearGradient>
      <LinearGradient
        style={[styles.card2, styles.cardPosition2]}
        locations={[0, 0.86]}
        colors={["#4a743f", "#fff"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Articles")}
        >
          <Text style={[styles.greenRecipes, styles.ecoTipsTypo]}>{`Green 
Recipes`}</Text>
          <Image
            style={[styles.iconChef, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-icon-chef.png")}
          />
        </Pressable>
      </LinearGradient>
      <Text style={[styles.viewAll, styles.viewTypo]}>{`View All `}</Text>
      <Text style={[styles.viewAll1, styles.viewTypo]}>{`View All `}</Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Pressable style={styles.vector} onPress={() => {}}>
        <Image
          style={[styles.icon4, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
      </Pressable>
      <Pressable style={styles.vector1} onPress={() => {}}>
        <Image
          style={[styles.icon4, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector10.png")}
        />
      </Pressable>
      <LinearGradient
        style={[styles.card3, styles.cardLayout]}
        locations={[0.43, 1]}
        colors={["#fe8c8c", "#9ab3da"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Articles")}
        >
          <Text style={[styles.ecoTips, styles.ecoTipsTypo]}>
            Sustainable Cooking
          </Text>
          <Image
            style={[styles.emojiGreenSalad, styles.emojiGreenSaladPosition]}
            contentFit="cover"
            source={require("../assets/-emoji-green-salad.png")}
          />
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
          <Text style={[styles.ecoTips, styles.ecoTipsTypo]}>
            Low-Carbon Cuisine
          </Text>
          <Image
            style={[styles.iconFoodDishKitchen, styles.emojiGreenSaladPosition]}
            contentFit="cover"
            source={require("../assets/-icon-food-dish-kitchen.png")}
          />
        </Pressable>
      </LinearGradient>
      <LinearGradient
        style={[styles.card5, styles.cardLayout2]}
        locations={[0, 0.46]}
        colors={["#95bcd8", "#fff"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Articles")}
        >
          <Text style={[styles.ecoTips, styles.ecoTipsTypo]}>
            Reduce carbon
          </Text>
          <Image
            style={[styles.illustrationIdeaIdeasManP, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-illustration-idea-ideas-man-plant-pants3.png")}
          />
          <Image
            style={[styles.emojiExhaustGasesFactory, styles.iconLayout]}
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
          <View style={[styles.greenGastronomyWrapper, styles.greenLayout]}>
            <Text style={[styles.greenGastronomy, styles.greenLayout]}>
              Green Gastronomy
            </Text>
          </View>
          <Text style={[styles.text3, styles.textTypo]}>
            <Text style={styles.text4}>🌿</Text>
            <Text style={styles.text5}>🥂</Text>
          </Text>
        </Pressable>
      </LinearGradient>
      <LinearGradient
        style={[styles.card7, styles.cardPosition]}
        locations={[0, 1]}
        colors={["#2150aa", "#fff"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Articles")}
        >
          <Text style={[styles.ecoTips, styles.ecoTipsTypo]}>Eco Eats</Text>
          <Text style={[styles.text6, styles.textTypo]}>{`🌿

🍽️`}</Text>
          <LinearGradient
            style={styles.gradientLayer}
            locations={[0, 1]}
            colors={["#01427a", "rgba(44, 44, 46, 0)"]}
          />
        </Pressable>
      </LinearGradient>
      <LinearGradient
        style={[styles.card8, styles.cardPosition]}
        locations={[0.46, 1]}
        colors={["#aa2121", "#fff"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Articles")}
        >
          <Text style={[styles.ecoTips, styles.ecoTipsTypo]}>Green Nosh</Text>
          <Text style={[styles.text7, styles.textTypo]}>
            <Text style={styles.text8}>🌱</Text>
            <Text style={styles.text9}>🍲</Text>
          </Text>
        </Pressable>
      </LinearGradient>
      <LinearGradient
        style={[styles.card9, styles.cardLayout3]}
        locations={[0, 0.71]}
        colors={["#4c241d", "#fff"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Articles")}
        >
          <Text style={[styles.sustainableKitchen, styles.ecoTipsLayout]}>
            Sustainable Kitchen
          </Text>
          <Text style={[styles.text, styles.textTypo]}>
            <Text style={styles.text1}>🌱</Text>
            <Text style={styles.text2}>🔪</Text>
          </Text>
          <LinearGradient
            style={[styles.gradientLayer1, styles.gradientLayout]}
            locations={[0, 1]}
            colors={["#01427a", "rgba(44, 44, 46, 0)"]}
          />
        </Pressable>
      </LinearGradient>
      <LinearGradient
        style={[styles.gradientLayer2, styles.gradientLayout]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  materialSymbolsarrowBackIoIconBtn: {
    left: 15,
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
  cardLayout3: {
    height: 158,
    width: 150,
    position: "absolute",
  },
  ecoTipsLayout: {
    height: 87,
    width: 138,
  },
  textTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    lineHeight: 28,
    position: "absolute",
  },
  greenGastronomyPosition: {
    top: 0,
    left: 0,
  },
  nameFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout1: {
    width: 33,
    marginLeft: 72,
  },
  iconLayout2: {
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
  cardLayout1: {
    height: 154,
    top: 391,
  },
  ecoTipsTypo: {
    top: 11,
    textAlign: "left",
    color: Color.labelDarkPrimary,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.primaryText_size,
    left: 12,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  cardPosition2: {
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
  cardLayout: {
    height: 161,
    top: 205,
  },
  emojiGreenSaladPosition: {
    top: "50.31%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  cardPosition1: {
    left: 184,
    width: 143,
    position: "absolute",
  },
  cardLayout2: {
    width: 143,
    position: "absolute",
  },
  greenLayout: {
    height: 43,
    width: 141,
    position: "absolute",
  },
  cardPosition: {
    left: 346,
    width: 143,
    position: "absolute",
  },
  gradientLayout: {
    width: 156,
    transform: [
      {
        rotate: "-90.01deg",
      },
    ],
    backgroundColor: "transparent",
    position: "absolute",
  },
  libraryofResourcesFoodChild: {
    top: 467,
    height: 385,
    left: 0,
    width: 400,
  },
  sustainableKitchen: {
    top: 17,
    textAlign: "left",
    color: Color.labelDarkPrimary,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.primaryText_size,
    left: 12,
    width: 138,
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_25xl,
  },
  text2: {
    fontSize: FontSize.size_38xl,
  },
  text: {
    top: 90,
    left: 38,
  },
  pressable: {
    borderRadius: Border.br_3xs,
    backgroundColor: "transparent",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  card: {
    left: 189,
    top: 598,
  },
  libraryofResourcesFoodItem: {
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
  iconLayout3: {
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
  food: {
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    width: 310,
    textAlign: "left",
  },
  name: {
    top: 72,
    left: 31,
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
  ecoTips: {
    height: 87,
    width: 138,
  },
  iconChefMale: {
    height: "56.36%",
    top: "35.71%",
    bottom: "7.92%",
    left: "20.28%",
    right: "19.02%",
    width: "60.7%",
    position: "absolute",
  },
  card1: {
    left: 22,
    width: 143,
    position: "absolute",
  },
  greenRecipes: {
    width: 233,
  },
  iconChef: {
    height: "42.26%",
    width: "31.88%",
    top: "46.54%",
    right: "19.38%",
    bottom: "11.19%",
    left: "48.75%",
    position: "absolute",
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
    position: "absolute",
  },
  icon4: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "90.59%",
    top: "20.42%",
    right: "6.62%",
    bottom: "78.05%",
    width: "2.8%",
    height: "1.53%",
    position: "absolute",
  },
  vector1: {
    left: "88.04%",
    top: "67.84%",
    right: "8.65%",
    bottom: "30.87%",
    width: "3.31%",
    height: "1.29%",
    position: "absolute",
  },
  emojiGreenSalad: {
    height: "35.28%",
    width: "49.79%",
    right: "25.21%",
    bottom: "14.41%",
    left: "25%",
  },
  card3: {
    width: 144,
    left: 21,
    position: "absolute",
  },
  iconFoodDishKitchen: {
    height: "32.42%",
    bottom: "17.27%",
    left: "20.28%",
    right: "19.02%",
    width: "60.7%",
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
    position: "absolute",
  },
  emojiExhaustGasesFactory: {
    height: "39.14%",
    width: "41.26%",
    top: "44.11%",
    right: "46.15%",
    bottom: "16.75%",
    left: "12.59%",
    position: "absolute",
  },
  card5: {
    left: 546,
    top: 203,
    height: 163,
  },
  greenGastronomy: {
    top: 0,
    left: 0,
    textAlign: "left",
    color: Color.labelDarkPrimary,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.primaryText_size,
  },
  greenGastronomyWrapper: {
    top: 14,
    left: 13,
  },
  text4: {
    fontSize: 54,
  },
  text5: {
    fontSize: 37,
  },
  text3: {
    top: 91,
    left: 26,
  },
  card6: {
    height: 154,
    top: 391,
  },
  text6: {
    top: 66,
    left: 44,
    fontSize: FontSize.size_37xl,
  },
  gradientLayer: {
    top: 161,
    left: -8,
    width: 161,
    transform: [
      {
        rotate: "-90.01deg",
      },
    ],
    height: 89,
    backgroundColor: "transparent",
    position: "absolute",
  },
  card7: {
    height: 161,
    top: 205,
  },
  text8: {
    fontSize: 68,
  },
  text9: {
    fontSize: FontSize.size_31xl,
  },
  text7: {
    top: 81,
    left: 13,
  },
  card8: {
    height: 154,
    top: 391,
  },
  gradientLayer1: {
    top: 157,
    left: -14,
    height: 89,
    width: 156,
  },
  card9: {
    left: 351,
    top: 599,
  },
  gradientLayer2: {
    top: 547,
    left: 348,
    height: 79,
  },
  libraryofResourcesFood: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default LibraryofResourcesFood;
