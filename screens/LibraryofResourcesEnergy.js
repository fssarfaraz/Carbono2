import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Property1HomeImage from "../components/Property1HomeImage";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import Search from "../components/Search";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const LibraryofResourcesEnergy = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.libraryofResourcesEnergy}>
      <Image
        style={[styles.libraryofResourcesEnergyChild, styles.libraryofLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <LinearGradient
        style={[styles.card, styles.cardLayout1]}
        locations={[0, 0.71]}
        colors={["#eb5757", "#fff"]}
      >
        <Pressable style={styles.pressable}>
          <Text style={[styles.hydroPower, styles.greenLayout]}>
            Hydro Power
          </Text>
          <Image
            style={[styles.iconHydroPower, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/-icon-hydro-power.png")}
          />
        </Pressable>
      </LinearGradient>
      <LinearGradient
        style={styles.card1}
        locations={[0, 0.46]}
        colors={["#2a417d", "#fff"]}
      >
        <Pressable style={styles.pressable}>
          <Text style={[styles.green, styles.greenTypo]}>Green</Text>
          <Image
            style={[
              styles.illustrationIdeaIdeasManP,
              styles.illustrationPosition,
            ]}
            contentFit="cover"
            source={require("../assets/-illustration-idea-ideas-man-plant-pants.png")}
          />
          <Image
            style={[styles.iconGreenNewEnergy, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/-icon-green-new-energy.png")}
          />
          <LinearGradient
            style={[styles.gradientLayer, styles.gradientTransform]}
            locations={[0, 1]}
            colors={["#01427a", "rgba(44, 44, 46, 0)"]}
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
        style={[styles.libraryofResourcesEnergyItem, styles.energyPosition]}
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
          source={require("../assets/group1.png")}
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
            style={styles.iconLayout3}
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
            style={styles.iconLayout3}
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
            style={styles.iconLayout3}
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
            style={styles.iconLayout3}
            contentFit="cover"
            source={require("../assets/-icon-game-controller-outline.png")}
          />
        </Pressable>
      </View>
      <Search
        searchInputValue={require("../assets/search5.png")}
        searchPlaceholder="Search"
        searchPosition="absolute"
        searchWidth={347}
        searchTop={114}
        searchLeft={21}
        searchBorderRadius={20}
        searchMarginLeft="unset"
        rectangleViewBorderRadius={20}
        rectangleViewBackgroundColor="rgba(1, 66, 122, 0.7)"
        frameViewWidth="23.2%"
        frameViewRight="73.89%"
        frameViewLeft="2.91%"
        searchFontFamily="Nunito-Regular"
        onSearchPress={() => navigation.navigate("SearchQuery")}
      />
      <View style={[styles.name, styles.nameFlexBox]}>
        <Text style={styles.energy}>Energy</Text>
      </View>
      <Text style={[styles.subitle, styles.subitleTypo]}>New arrivals</Text>
      <Text style={[styles.subitle1, styles.subitleTypo]}>Top picks</Text>
      <LinearGradient
        style={[styles.card2, styles.cardLayout]}
        locations={[0, 1]}
        colors={["#b18cfe", "#fff"]}
      >
        <Pressable style={styles.pressable}>
          <Text style={[styles.green, styles.greenTypo]}>Solar Power</Text>
          <Image
            style={[styles.emojiSolarEnergy, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/-emoji-solar-energy.png")}
          />
        </Pressable>
      </LinearGradient>
      <LinearGradient
        style={styles.card3}
        locations={[0, 0.86]}
        colors={["#4a743f", "#fff"]}
      >
        <Pressable style={styles.pressable}>
          <Text style={[styles.smartHome, styles.greenTypo]}>Smart Home</Text>
          <Image
            style={[styles.iconInternetOfThingsAwsI, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/-icon-internet-of-things-aws-iot-alexa-smart-homes-kill.png")}
          />
        </Pressable>
      </LinearGradient>
      <Text style={[styles.viewAll, styles.viewTypo]}>{`View All `}</Text>
      <Text style={[styles.viewAll1, styles.viewTypo]}>{`View All `}</Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Pressable
        style={[styles.vector, styles.vectorPosition]}
        onPress={() => navigation.toggleDrawer()}
      >
        <Image
          style={[styles.icon4, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vector1, styles.vectorPosition]}
        onPress={() => navigation.toggleDrawer()}
      >
        <Image
          style={[styles.icon4, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
      </Pressable>
      <LinearGradient
        style={[styles.card4, styles.cardPosition1]}
        locations={[0, 1]}
        colors={["#f58cfe", "#fff"]}
      >
        <Pressable style={styles.pressable}>
          <Text style={[styles.green, styles.greenTypo]}>{`Renewable 
Energy`}</Text>
          <Image
            style={[styles.iconRenewableEnergy, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/-icon-renewable-energy.png")}
          />
        </Pressable>
      </LinearGradient>
      <LinearGradient
        style={[styles.card5, styles.cardPosition]}
        locations={[0, 1]}
        colors={["#21aa58", "#fff"]}
      >
        <Pressable style={styles.pressable}>
          <Text
            style={[styles.energyStorageSolutions, styles.energyTypo]}
          >{`Energy Storage Solutions
`}</Text>
          <Image
            style={[styles.iconLowEnergyHouse, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/-icon-low-energy-house.png")}
          />
        </Pressable>
      </LinearGradient>
      <LinearGradient
        style={[styles.card6, styles.cardLayout1]}
        locations={[0, 0.46]}
        colors={["#95bcd8", "#fff"]}
      >
        <Pressable style={styles.pressable}>
          <Text style={[styles.green, styles.greenTypo]}>Wind</Text>
          <Image
            style={[
              styles.illustrationIdeaIdeasManP1,
              styles.illustrationPosition,
            ]}
            contentFit="cover"
            source={require("../assets/-illustration-idea-ideas-man-plant-pants1.png")}
          />
          <Image
            style={[styles.emojiWindEnergy, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/-emoji-wind-energy.png")}
          />
          <LinearGradient
            style={[styles.gradientLayer1, styles.gradientTransform]}
            locations={[0, 1]}
            colors={["#01427a", "rgba(44, 44, 46, 0)"]}
          />
        </Pressable>
      </LinearGradient>
      <LinearGradient
        style={[styles.card7, styles.cardLayout]}
        locations={[0, 0.46]}
        colors={["#4f2776", "#fff"]}
      >
        <Pressable style={styles.pressable}>
          <Text style={[styles.green, styles.greenTypo]}>Smart</Text>
          <Image
            style={[
              styles.illustrationIdeaIdeasManP2,
              styles.illustrationPosition,
            ]}
            contentFit="cover"
            source={require("../assets/-illustration-idea-ideas-man-plant-pants2.png")}
          />
          <Image
            style={[styles.iconSmartHome, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/-icon-smart-home.png")}
          />
        </Pressable>
      </LinearGradient>
      <LinearGradient
        style={[styles.gradientLayer2, styles.gradientTransform]}
        locations={[0, 1]}
        colors={["#01427a", "rgba(44, 44, 46, 0)"]}
      />
      <LinearGradient
        style={[styles.card8, styles.cardPosition]}
        locations={[0, 0.95, 1]}
        colors={["#f29100", "#fdf0dd", "#fff"]}
      >
        <Pressable style={styles.pressable}>
          <View style={[styles.bioEnergyWrapper, styles.bioLayout]}>
            <Text style={[styles.bioEnergy, styles.bioLayout]}>Bio Energy</Text>
          </View>
          <Image
            style={[styles.iconBioEnergy, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/-icon-bio-energy.png")}
          />
        </Pressable>
      </LinearGradient>
      <Pressable
        style={styles.materialSymbolsarrowBackIo}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon6, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/materialsymbolsarrowbackios1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  libraryofLayout: {
    width: 400,
    position: "absolute",
  },
  cardLayout1: {
    width: 143,
    position: "absolute",
  },
  greenLayout: {
    height: 87,
    width: 138,
  },
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  greenTypo: {
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
  illustrationPosition: {
    left: "37.06%",
    right: "0%",
    width: "62.94%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  gradientTransform: {
    transform: [
      {
        rotate: "-90.01deg",
      },
    ],
    height: 89,
    backgroundColor: "transparent",
    position: "absolute",
  },
  energyPosition: {
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
    top: 381,
    width: 143,
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
  vectorPosition: {
    height: "1.53%",
    width: "2.8%",
    right: "7.89%",
    left: "89.31%",
    position: "absolute",
  },
  cardPosition1: {
    top: 205,
    height: 161,
  },
  cardPosition: {
    left: 184,
    width: 143,
    position: "absolute",
  },
  energyTypo: {
    color: Color.labelDarkPrimary,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    lineHeight: 28,
    textAlign: "left",
  },
  bioLayout: {
    height: 43,
    width: 141,
    position: "absolute",
  },
  iconLayout3: {
    height: "100%",
    width: "100%",
  },
  libraryofResourcesEnergyChild: {
    top: 472,
    height: 380,
    left: 0,
    width: 400,
  },
  hydroPower: {
    left: 17,
    textAlign: "left",
    color: Color.labelDarkPrimary,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.primaryText_size,
    top: 11,
    position: "absolute",
  },
  iconHydroPower: {
    height: "42.15%",
    width: "56.85%",
    top: "50.32%",
    right: "11.68%",
    bottom: "7.53%",
    left: "31.47%",
    position: "absolute",
  },
  pressable: {
    borderRadius: Border.br_3xs,
    backgroundColor: "transparent",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  card: {
    left: 182,
    height: 158,
    top: 600,
    width: 143,
  },
  green: {
    height: 87,
    width: 138,
  },
  illustrationIdeaIdeasManP: {
    height: "70.56%",
    top: "29.19%",
    bottom: "0.25%",
    left: "37.06%",
    right: "0%",
    width: "62.94%",
  },
  iconGreenNewEnergy: {
    height: "29.19%",
    width: "40.49%",
    top: "54.04%",
    right: "48.32%",
    bottom: "16.77%",
    left: "11.19%",
    position: "absolute",
  },
  gradientLayer: {
    top: 160,
    left: 1,
    width: 160,
  },
  card1: {
    left: 350,
    height: 161,
    width: 143,
    top: 600,
    position: "absolute",
  },
  libraryofResourcesEnergyItem: {
    height: 338,
    width: 400,
    position: "absolute",
  },
  iconCalculator: {
    width: 41,
    height: 45,
  },
  iconCalculatorWrapper: {
    top: 763,
    left: 165,
    padding: Padding.p_3xs,
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
    top: 808,
    width: 385,
    alignItems: "flex-end",
    left: 32,
  },
  energy: {
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    width: 310,
    textAlign: "left",
  },
  name: {
    top: 72,
    left: 31,
    width: 372,
    height: 42,
    alignItems: "center",
  },
  subitle: {
    top: 172,
    left: 28,
  },
  subitle1: {
    top: 574,
    left: 32,
  },
  emojiSolarEnergy: {
    height: "55.45%",
    width: "59.72%",
    top: "34.42%",
    right: "20%",
    bottom: "10.13%",
    left: "20.28%",
    position: "absolute",
  },
  card2: {
    left: 25,
  },
  smartHome: {
    width: 233,
  },
  iconInternetOfThingsAwsI: {
    height: "40%",
    width: "57.66%",
    top: "45.91%",
    right: "21.06%",
    bottom: "14.09%",
    left: "21.28%",
    position: "absolute",
  },
  card3: {
    left: 26,
    top: 602,
    height: 159,
    width: 141,
    position: "absolute",
  },
  viewAll: {
    top: 180,
    left: 288,
  },
  viewAll1: {
    left: 286,
    top: 574,
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
    top: "21.48%",
    bottom: "77%",
  },
  vector1: {
    top: "67.61%",
    bottom: "30.87%",
  },
  iconRenewableEnergy: {
    height: "36.02%",
    width: "42.36%",
    top: "50.31%",
    right: "27.08%",
    bottom: "13.66%",
    left: "30.56%",
    position: "absolute",
  },
  card4: {
    left: 21,
    width: 144,
    position: "absolute",
  },
  energyStorageSolutions: {
    left: 6,
    fontSize: 19,
    width: 163,
    height: 65,
    textAlign: "left",
    top: 11,
    position: "absolute",
  },
  iconLowEnergyHouse: {
    height: "46.4%",
    width: "47.55%",
    top: "47.2%",
    right: "25.87%",
    bottom: "6.4%",
    left: "26.57%",
    position: "absolute",
  },
  card5: {
    top: 205,
    height: 161,
  },
  illustrationIdeaIdeasManP1: {
    height: "70.55%",
    top: "29.2%",
    bottom: "0.25%",
    left: "37.06%",
    right: "0%",
    width: "62.94%",
  },
  emojiWindEnergy: {
    height: "45.4%",
    width: "34.97%",
    top: "41.04%",
    right: "51.12%",
    bottom: "13.56%",
    left: "13.92%",
    position: "absolute",
  },
  gradientLayer1: {
    top: 162,
    left: 5,
    width: 161,
  },
  card6: {
    left: 345,
    top: 203,
    height: 163,
  },
  illustrationIdeaIdeasManP2: {
    height: "70.52%",
    top: "29.22%",
    bottom: "0.26%",
    left: "37.06%",
    right: "0%",
    width: "62.94%",
  },
  iconSmartHome: {
    height: "33.18%",
    width: "37.76%",
    top: "44.16%",
    right: "47.62%",
    bottom: "22.66%",
    left: "14.62%",
    position: "absolute",
  },
  card7: {
    left: 348,
  },
  gradientLayer2: {
    top: 535,
    left: 351,
    width: 154,
  },
  bioEnergy: {
    top: 0,
    left: 0,
    textAlign: "left",
    color: Color.labelDarkPrimary,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.primaryText_size,
  },
  bioEnergyWrapper: {
    top: 14,
    left: 13,
  },
  iconBioEnergy: {
    height: "42.85%",
    width: "39.86%",
    top: "44.83%",
    right: "26.57%",
    bottom: "12.32%",
    left: "33.57%",
    position: "absolute",
  },
  card8: {
    top: 384,
    height: 151,
  },
  icon6: {
    overflow: "hidden",
  },
  materialSymbolsarrowBackIo: {
    top: 85,
    width: 15,
    height: 17,
    left: 13,
    position: "absolute",
  },
  libraryofResourcesEnergy: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default LibraryofResourcesEnergy;
