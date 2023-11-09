import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SectionCard = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.rectangleParent, styles.groupChildLayout]}
      onPress={() => navigation.navigate("ForumView")}
    >
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <Image
        style={styles.groupItem}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Text style={[styles.kristonWatshon, styles.amFlexBox]}>
        Kriston Watshon
      </Text>
      <Text style={[styles.am, styles.amTypo]}>
        <Text style={styles.text}>{`08:39 `}</Text>
        <Text style={styles.am1}>am</Text>
      </Text>
      <Text style={[styles.loremIpsumDolor, styles.text1Typo]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
        natoque id aenean.
      </Text>
      <Image
        style={[styles.groupInner, styles.groupInnerPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-23.png")}
      />
      <View style={[styles.like1Parent, styles.parentFlexBox]}>
        <Image
          style={styles.like1Icon}
          contentFit="cover"
          source={require("../assets/like-1.png")}
        />
        <Text style={[styles.text1, styles.text1Typo]}>1,964</Text>
      </View>
      <View style={[styles.vectorParent, styles.parentFlexBox]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <Text style={[styles.text1, styles.text1Typo]}>135</Text>
      </View>
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group3.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 361,
    width: 370,
    position: "absolute",
  },
  amFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  amTypo: {
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
  },
  text1Typo: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.black,
    textTransform: "capitalize",
  },
  groupInnerPosition: {
    left: 38,
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.labelDarkPrimary,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
  },
  groupItem: {
    top: 19,
    left: 36,
    width: 50,
    height: 50,
    position: "absolute",
  },
  kristonWatshon: {
    top: 20,
    left: 103,
    fontSize: FontSize.paragraphH1Reg_size,
    lineHeight: 27,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    textTransform: "capitalize",
  },
  text: {
    textTransform: "capitalize",
  },
  am1: {
    textTransform: "lowercase",
  },
  am: {
    top: 45,
    left: 104,
    fontSize: FontSize.secondaryText_size,
    lineHeight: 18,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  loremIpsumDolor: {
    top: 71,
    width: 286,
    height: 46,
    left: 38,
    position: "absolute",
    fontFamily: FontFamily.nunitoLight,
    fontWeight: "300",
  },
  groupInner: {
    top: 127,
    width: 295,
    height: 177,
    borderRadius: Border.br_3xs,
  },
  like1Icon: {
    overflow: "hidden",
    height: 24,
    width: 24,
  },
  text1: {
    fontWeight: "500",
    fontFamily: FontFamily.nunitoMedium,
    marginLeft: 5,
  },
  like1Parent: {
    top: 319,
    left: 45,
    justifyContent: "center",
  },
  vectorIcon: {
    height: 24,
    width: 24,
  },
  vectorParent: {
    top: 320,
    left: 127,
    width: 54,
    justifyContent: "flex-end",
  },
  vectorIcon1: {
    height: "5.98%",
    width: "6.49%",
    top: "88.37%",
    right: "40.54%",
    bottom: "5.65%",
    left: "52.97%",
  },
  groupIcon: {
    height: "6.65%",
    width: "4.54%",
    top: "88.64%",
    right: "10.05%",
    bottom: "4.71%",
    left: "85.41%",
  },
  rectangleParent: {
    top: 305,
    left: 10,
  },
});

export default SectionCard;
