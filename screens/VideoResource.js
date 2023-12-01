/*  
Date: 19-11-2023
Screen: VideoResource
Purpose:Holds and displays video resources
*/

import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Property1HomeImage from "../components/Property1HomeImage";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";
import { FontAwesome5 } from "@expo/vector-icons";

const VideoResource = () => {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    {/*Background*/}
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

      {/*Back Button*/}
      <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <FontAwesome5 name="chevron-left" size={30} color="#01427A" />
          </Pressable>
      </View>

      <View style={[styles.name, styles.backFlexBox]}>
        <Text style={styles.howJapanIs}>
          How Japan Is Curbing Its Footprint
        </Text>
      </View>
      
      
      <View style={[styles.playerButtonContainer]}>

        <Pressable style={[styles.playerButton]} onPress={() => handleNavigation("")}>
          <Image
            style={[styles.playIcon]}
            contentFit="cover"
            source={require("../assets/playerButton1.png")}
          />
        </Pressable>

        <Pressable style={[styles.playerButton]} onPress={() => handleNavigation("")}>
          <Image
            style={[styles.playIcon]}
            contentFit="cover"
            source={require("../assets/playerButton2.png")}
          />
        </Pressable>

        <Pressable style={[styles.playerButton]} onPress={() => handleNavigation("Educational")}>
          <Image
            style={[styles.playIcon2]}
            contentFit="cover"
            source={require("../assets/playerButton3.png")}
          />
        </Pressable>

        <Pressable style={[styles.playerButton]} onPress={() => handleNavigation("")}>
          <Image
            style={[styles.playIcon]}
            contentFit="cover"
            source={require("../assets/playerButton4.png")}
          />
        </Pressable>

        <Pressable style={[styles.playerButton]} onPress={() => handleNavigation("")}>
          <Image
            style={[styles.playIcon]}
            contentFit="cover"
            source={require("../assets/playerButton5.png")}
          />
        </Pressable>
      
      </View>

      <Image
        style={[styles.rectangleIcon, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-39.png")}
      />
      
      <Pressable style={styles.iconExpand} onPress={() => {}}>
        <Image
          style={[styles.icon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/-icon-expand.png")}
        />
      </Pressable>

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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 3,
    position: "absolute",
    top: 38,
  },
  backButton: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    padding: 25,
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
    top: 780,
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
  playerButtonContainer: {
    // keep this in straight line
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    selfAlign: "center",
    left: 18,
    alignItems: "center",
    zIndex: 2,
    position: "absolute",
    top: 600,
    width: "100%",
    // padding: 10,

  },
  playerButton: {
    width: 72,
    height: 72,
    // overflow: "hidden",
  },
  playIcon: {
    width: 36,
    height: 36,
    position: "absolute",
    zIndex: 2,
    top: 10,
  },
  playIcon2: {
    width: 72,
    height: 72,
    zIndex: 2,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    right: 18,
    top: -10,
  },
  
});

export default VideoResource;
