import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, StatusBar, Text } from "react-native";
import { Button } from "@rneui/themed";
import Property1HomeImage from "../components/Property1HomeImage";
import { useNavigation } from "@react-navigation/native";
import FormContainer1 from "../components/FormContainer1";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import Search1 from "../components/Search1";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const SearchQuery = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchQuery}>
      <Image
        style={[styles.searchQueryChild, styles.searchPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.searchQueryItem, styles.searchPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Property1HomeImage
        imageDimensions={require("../assets/navigation-barr1.png")}
        property1HomeIconPosition="absolute"
        property1HomeIconWidth={402}
        property1HomeIconHeight={106}
        property1HomeIconTop={746}
        property1HomeIconLeft={0}
      />
      <View style={[styles.iconPersonOutlineParent, styles.nameFlexBox]}>
        <Pressable
          style={styles.iconLayout2}
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
        <Image
          style={[styles.iconBookSaved, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/-icon-book-saved.png")}
        />
        <Pressable
          style={[styles.iconDiscussion, styles.iconLayout2]}
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
        <Image
          style={[styles.iconGameControllerOutline, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/-icon-game-controller-outline1.png")}
        />
      </View>
      <View style={styles.iconCalculatorWrapper}>
        <Image
          style={styles.iconCalculator}
          contentFit="cover"
          source={require("../assets/-icon-calculator.png")}
        />
      </View>
      <FormContainer1
        dimensionCode={require("../assets/rectangle.png")}
        carDimensions={require("../assets/rectangle1.png")}
        productCode={require("../assets/rectangle2.png")}
      />
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
      <View style={styles.searchQueryInner} />
      <Search1 />
      <Pressable
        style={[styles.loremIpsumDolorContainer, styles.loremPosition]}
        onPress={() => navigation.navigate("SearchResults")}
      >
        <Text style={styles.loremTypo}>{`Lorem ipsum dolor sit amet.....

Lorem ipsum dolor sit amet.....

Lorem ipsum dolor sit amet.....

Lorem ipsum dolor sit amet.....`}</Text>
      </Pressable>
      <Text style={[styles.loremIpsum, styles.loremTypo]}>Lorem Ipsum</Text>
      <Image
        style={[styles.arrow1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/arrow-1.png")}
      />
      <Image
        style={[styles.arrow4Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/arrow-1.png")}
      />
      <Image
        style={[styles.arrow3Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/arrow-1.png")}
      />
      <Image
        style={[styles.arrow2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/arrow-1.png")}
      />
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
  materialSymbolsarrowBackIoIconBtn: {
    left: 9,
    top: 54,
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
  loremPosition: {
    left: 65,
    position: "absolute",
  },
  loremTypo: {
    color: Color.labelDarkPrimary,
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 20,
    fontSize: FontSize.body15Regular_size,
    textAlign: "left",
  },
  iconLayout: {
    height: 16,
    width: 16,
    left: 336,
    position: "absolute",
  },
  searchQueryChild: {
    top: 0,
    height: 394,
  },
  searchQueryItem: {
    top: 435,
    height: 417,
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
  iconCalculator: {
    width: 41,
    height: 45,
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
    top: 90,
    left: 31,
    width: 372,
    height: 42,
    alignItems: "center",
  },
  searchQueryInner: {
    height: "24.41%",
    width: "86.77%",
    top: "16.67%",
    right: "5.6%",
    bottom: "58.92%",
    left: "7.63%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDarkslateblue_300,
    position: "absolute",
  },
  loremIpsumDolorContainer: {
    top: 190,
  },
  loremIpsum: {
    top: 157,
    left: 65,
    position: "absolute",
  },
  arrow1Icon: {
    top: 182,
  },
  arrow4Icon: {
    top: 301,
  },
  arrow3Icon: {
    top: 261,
  },
  arrow2Icon: {
    top: 221,
  },
  searchQuery: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default SearchQuery;
