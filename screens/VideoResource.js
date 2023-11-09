import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Property1HomeImage from "../components/Property1HomeImage";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const VideoResource = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.videoResource}>
      <Image
        style={[styles.videoResourceChild, styles.videoPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.videoResourceItem, styles.videoPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <LinearGradient
        style={styles.gradientLayer}
        locations={[0, 1]}
        colors={["rgba(1, 66, 122, 0.53)", "rgba(44, 44, 46, 0)"]}
      />
      <Pressable style={styles.wrapper} onPress={() => {}}>
        <Image
          style={[styles.icon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-20.png")}
        />
      </Pressable>
      <View style={[styles.videoResourceInner, styles.rectangleViewLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Image
        style={[styles.groupIcon, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/group-47.png")}
      />
      <View style={[styles.ellipseParent, styles.ellipseLayout]}>
        <Pressable
          style={[styles.container, styles.framePosition]}
          onPress={() => {}}
        >
          <Image
            style={[styles.icon, styles.iconGroupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-24.png")}
          />
        </Pressable>
        <Image
          style={[styles.back1Icon, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/back-1.png")}
        />
        <Image
          style={[styles.back2Icon, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/back-1.png")}
        />
        <Pressable
          style={[styles.frame, styles.framePosition]}
          onPress={() => {}}
        >
          <Image
            style={[styles.icon, styles.iconGroupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-24.png")}
          />
        </Pressable>
        <Image
          style={[styles.groupIcon1, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/group4.png")}
        />
      </View>
      <View style={[styles.ellipseGroup, styles.ellipseLayout]}>
        <Pressable
          style={[styles.ellipsePressable, styles.wrapper1Position]}
          onPress={() => {}}
        >
          <Image
            style={[styles.icon, styles.iconGroupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-24.png")}
          />
        </Pressable>
        <Image
          style={[styles.back1Icon1, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/back-11.png")}
        />
        <Image
          style={[styles.back2Icon1, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/back-11.png")}
        />
        <Pressable
          style={[styles.wrapper1, styles.wrapper1Position]}
          onPress={() => {}}
        >
          <Image
            style={[styles.icon, styles.iconGroupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-24.png")}
          />
        </Pressable>
        <Image
          style={[styles.return1Icon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/return-1.png")}
        />
      </View>
      <Pressable
        style={[styles.modal, styles.backLayout]}
        onPress={() => navigation.goBack()}
      >
        <Pressable
          style={[styles.back, styles.backFlexBox]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Educational" })
          }
        >
          <Image
            style={styles.backChild}
            contentFit="cover"
            source={require("../assets/group-8.png")}
          />
          <Text style={styles.close}>Close</Text>
        </Pressable>
      </Pressable>
      <Property1HomeImage
        imageDimensions={require("../assets/navigation-barr21.png")}
        property1HomeIconPosition="absolute"
        property1HomeIconWidth={394}
        property1HomeIconHeight={106}
        property1HomeIconTop={746}
        property1HomeIconLeft={0}
      />
      <View style={[styles.iconPersonOutlineParent, styles.backFlexBox]}>
        <Pressable
          style={styles.iconLayout1}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "UserProfile" })
          }
        >
          <Image
            style={styles.iconLayout4}
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
            style={styles.iconLayout4}
            contentFit="cover"
            source={require("../assets/-icon-book-saved3.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.iconDiscussion, styles.iconLayout1]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Forum" })
          }
        >
          <Image
            style={styles.iconLayout4}
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
            style={styles.iconLayout4}
            contentFit="cover"
            source={require("../assets/-icon-game-controller-outline16.png")}
          />
        </Pressable>
      </View>
      <Image
        style={[styles.rectangleIcon, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-39.png")}
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
      <Pressable style={styles.iconExpand} onPress={() => {}}>
        <Image
          style={[styles.icon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/-icon-expand.png")}
        />
      </Pressable>
      <View style={[styles.name, styles.backFlexBox]}>
        <Text style={styles.howJapanIs}>
          How Japan Is Curbing Its Footprint
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  videoPosition: {
    width: 400,
    left: 0,
    position: "absolute",
  },
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangleViewLayout: {
    backgroundColor: Color.colorLightslategray,
    borderRadius: Border.br_12xs,
    bottom: "24.65%",
    top: "72.54%",
    width: "2.04%",
    height: "2.82%",
    position: "absolute",
  },
  ellipseLayout: {
    width: "21.37%",
    height: "4.23%",
    position: "absolute",
  },
  framePosition: {
    width: "42.86%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  iconLayout3: {
    bottom: "27.78%",
    top: "27.78%",
    width: "19.05%",
    height: "44.44%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  wrapper1Position: {
    bottom: "100%",
    top: "-100%",
    width: "42.86%",
    height: "100%",
    position: "absolute",
  },
  iconLayout2: {
    bottom: "127.78%",
    top: "-72.22%",
    width: "19.05%",
    height: "44.44%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  backLayout: {
    height: 52,
    width: 102,
    left: "50%",
    top: "50%",
  },
  backFlexBox: {
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
  videoResourceChild: {
    top: 0,
    height: 455,
  },
  videoResourceItem: {
    top: 422,
    height: 430,
  },
  gradientLayer: {
    top: 44,
    left: -3,
    borderRadius: Border.br_xl,
    width: 394,
    height: 779,
    backgroundColor: "transparent",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: "40.97%",
    top: "69.72%",
    right: "40.71%",
    bottom: "21.83%",
    width: "18.32%",
    height: "8.45%",
    position: "absolute",
  },
  videoResourceInner: {
    right: "50.38%",
    left: "47.58%",
  },
  rectangleView: {
    right: "47.33%",
    left: "50.64%",
  },
  groupIcon: {
    height: "0.94%",
    width: "24.17%",
    top: "81.57%",
    right: "36.64%",
    bottom: "17.49%",
    left: "39.19%",
    position: "absolute",
  },
  container: {
    left: "0%",
    right: "57.14%",
  },
  back1Icon: {
    right: "73.81%",
    left: "7.14%",
  },
  back2Icon: {
    right: "65.48%",
    left: "15.48%",
  },
  frame: {
    left: "57.14%",
    right: "0%",
  },
  groupIcon1: {
    height: "56.11%",
    width: "27.62%",
    top: "21.94%",
    right: "8.93%",
    bottom: "21.94%",
    left: "63.45%",
    position: "absolute",
  },
  ellipseParent: {
    top: "71.83%",
    right: "63.36%",
    bottom: "23.94%",
    left: "15.27%",
  },
  ellipsePressable: {
    left: "-42.86%",
    right: "100%",
  },
  back1Icon1: {
    right: "107.14%",
    left: "-26.19%",
  },
  back2Icon1: {
    right: "115.48%",
    left: "-34.52%",
  },
  wrapper1: {
    left: "-100%",
    right: "157.14%",
  },
  return1Icon: {
    height: "61.11%",
    width: "26.19%",
    top: "-80.56%",
    right: "164.29%",
    bottom: "119.44%",
    left: "-90.48%",
    position: "absolute",
  },
  ellipseGroup: {
    top: "76.06%",
    right: "-5.85%",
    bottom: "19.72%",
    left: "84.48%",
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  backChild: {
    width: 24,
    height: 24,
  },
  close: {
    fontSize: FontSize.body15Regular_size,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.body15Bold,
    color: Color.labelDarkPrimary,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    width: 43,
    marginLeft: 10,
    alignItems: "center",
    height: 24,
  },
  back: {
    marginTop: -26.1,
    marginLeft: -50.95,
    paddingLeft: 20,
    paddingTop: 32,
    height: 52,
    width: 102,
    left: "50%",
    top: "50%",
  },
  modal: {
    marginTop: -382,
    marginLeft: -199.5,
    position: "absolute",
  },
  iconLayout4: {
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
    marginLeft: 72,
    height: 24,
  },
  iconPersonOutlineParent: {
    top: 807,
    left: 24,
    width: 385,
    alignItems: "flex-end",
  },
  rectangleIcon: {
    height: "44.48%",
    width: "86.51%",
    top: "22.77%",
    right: "6.62%",
    bottom: "32.75%",
    left: "6.87%",
    borderRadius: Border.br_3xs,
    position: "absolute",
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
  iconExpand: {
    left: "82.19%",
    top: "62.91%",
    right: "7.12%",
    bottom: "32.78%",
    width: "10.69%",
    height: "4.31%",
    position: "absolute",
  },
  howJapanIs: {
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    color: Color.black,
    textAlign: "left",
    width: 310,
  },
  name: {
    top: 124,
    left: 27,
    width: 372,
    height: 42,
    alignItems: "center",
  },
  videoResource: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default VideoResource;
