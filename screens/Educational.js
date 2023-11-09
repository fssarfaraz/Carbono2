import * as React from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  View,
  StatusBar,
  TextInput,
} from "react-native";
import { Button } from "@rneui/themed";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Property1HomeImage from "../components/Property1HomeImage";
import Category from "../components/Category";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import Search from "../components/Search";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Educational = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.educational}>
      <Text style={styles.subitle}>Top picks</Text>
      <ScrollView
        style={styles.cardParent}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
      >
        <Button
          title="Social Conciousness"
          radius={8}
          iconPosition="left"
          type="solid"
          color="#ffab01"
          titleStyle={styles.cardBtn}
          onPress={() => navigation.navigate("Articles")}
          containerStyle={styles.cardBtn1}
          buttonStyle={styles.cardBtn2}
        />
        <Button
          title="Listen and learn"
          radius={8}
          iconPosition="left"
          type="solid"
          color="#ee719e"
          titleStyle={styles.card1Btn}
          containerStyle={styles.card1Btn1}
          buttonStyle={styles.card1Btn2}
        />
        <Button
          title="Watch Our Progress"
          radius={8}
          iconPosition="left"
          type="solid"
          color="#fe6250"
          titleStyle={styles.card2Btn}
          onPress={() => navigation.navigate("VideoResource")}
          containerStyle={styles.card2Btn1}
          buttonStyle={styles.card2Btn2}
        />
        <Button
          title="Making a plan"
          radius={8}
          iconPosition="left"
          type="solid"
          color="#b18cfe"
          titleStyle={styles.card3Btn}
          onPress={() => navigation.navigate("Quiz")}
          containerStyle={styles.card3Btn1}
          buttonStyle={styles.card3Btn2}
        />
      </ScrollView>
      <Image
        style={[styles.educationalChild, styles.educationalPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.educationalItem, styles.educationalPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Property1HomeImage
        imageDimensions={require("../assets/navigation-barr23.png")}
        property1HomeIconPosition="absolute"
        property1HomeIconWidth={402}
        property1HomeIconHeight={106}
        property1HomeIconTop={746}
        property1HomeIconLeft={0}
      />
      <View style={[styles.iconPersonOutlineParent, styles.nameFlexBox]}>
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
            source={require("../assets/-icon-game-controller-outline3.png")}
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
      <ScrollView
        style={styles.categories}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesScrollViewContent}
      >
        <Category
          categoryPosition="unset"
          categoryBackgroundColor="unset"
          categoryOverflow="unset"
          categoryMarginLeft="unset"
          onCategoryPress={() =>
            navigation.navigate("LibraryofResourcesTranspor")
          }
        />
        <Category
          categoryPosition="unset"
          categoryBackgroundColor="unset"
          categoryOverflow="unset"
          categoryMarginLeft={15}
          onCategoryPress={() =>
            navigation.navigate("LibraryofResourcesEnergy")
          }
        />
        <Category
          categoryPosition="unset"
          categoryBackgroundColor="unset"
          categoryOverflow="unset"
          categoryMarginLeft={15}
          onCategoryPress={() => navigation.navigate("LibraryofResourcesFood")}
        />
        <Category
          categoryPosition="unset"
          categoryBackgroundColor="unset"
          categoryOverflow="unset"
          categoryMarginLeft={15}
          onCategoryPress={() =>
            navigation.navigate("LibraryofResourcesSocial")
          }
        />
      </ScrollView>
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
        searchWidth={296}
        searchTop={112}
        searchLeft={30}
        searchBorderRadius={20}
        searchMarginLeft="unset"
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
    left: 0,
    top: 0,
    position: "absolute",
  },
  cardBtn2: {
    borderRadius: 8,
    width: 165,
    height: 236,
    overflow: "hidden",
  },
  card1Btn: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
  },
  card1Btn1: {
    left: 180,
    top: 286,
    position: "absolute",
  },
  card1Btn2: {
    borderRadius: 8,
    width: 165,
    height: 236,
    overflow: "hidden",
  },
  card2Btn: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
  },
  card2Btn1: {
    left: 180,
    top: 0,
    position: "absolute",
  },
  card2Btn2: {
    borderRadius: 8,
    width: 165,
    height: 271,
    overflow: "hidden",
  },
  card3Btn: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
  },
  card3Btn1: {
    left: 0,
    top: 251,
    position: "absolute",
  },
  card3Btn2: {
    borderRadius: 8,
    width: 165,
    height: 271,
    overflow: "hidden",
  },
  iconCalculatorBtn: {
    position: "relative",
  },
  iconCalculatorBtn1: {
    width: 41,
    height: 45,
  },
  categoryBtn: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "Nunito-Regular",
  },
  categoryBtn1: {
    position: "relative",
  },
  categoryBtn2: {
    borderRadius: 8,
    width: 90,
    height: 98,
    overflow: "hidden",
  },
  category1Btn: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "Nunito-Regular",
  },
  category1Btn1: {
    position: "relative",
  },
  category1Btn2: {
    borderRadius: 8,
    width: 90,
    height: 98,
    overflow: "hidden",
  },
  category2Btn: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "Nunito-Regular",
  },
  category2Btn1: {
    position: "relative",
  },
  category2Btn2: {
    borderRadius: 8,
    width: 90,
    height: 98,
    overflow: "hidden",
  },
  category3Btn: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "Nunito-Regular",
  },
  category3Btn1: {
    position: "relative",
  },
  category3Btn2: {
    borderRadius: 8,
    width: 90,
    height: 98,
    overflow: "hidden",
  },
  categoriesScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  educationalPosition: {
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
  subitle: {
    top: 284,
    fontSize: FontSize.size_smi,
    lineHeight: 18,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
    left: 30,
    position: "absolute",
  },
  cardParent: {
    top: 317,
    width: 345,
    maxWidth: 345,
    left: 30,
    position: "absolute",
    flex: 1,
  },
  educationalChild: {
    top: 0,
    height: 394,
  },
  educationalItem: {
    top: 435,
    height: 417,
  },
  icon: {
    height: "100%",
    width: "100%",
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
  categories: {
    top: 169,
    left: 28,
    position: "absolute",
    width: "100%",
  },
  reducingYourFootprint: {
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    width: 310,
    textAlign: "left",
  },
  name: {
    top: 62,
    width: 372,
    height: 42,
    alignItems: "center",
    left: 30,
  },
  educational: {
    backgroundColor: Color.labelDarkPrimary,
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Educational;
