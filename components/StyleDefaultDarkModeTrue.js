import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StyleDefaultDarkModeTrue = ({
  styleDefaultDarkModeTrueAlignSelf,
  styleDefaultDarkModeTruePosition,
  styleDefaultDarkModeTrueTop,
  styleDefaultDarkModeTrueLeft,
  styleDefaultDarkModeTrueBackgroundColor,
  styleDefaultDarkModeTrueWidth,
  styleDefaultDarkModeTrueMarginLeft,
  styleDefaultDarkModeTrueMarginTop,
}) => {
  const styleDefaultDarkModeTrueStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", styleDefaultDarkModeTrueAlignSelf),
      ...getStyleValue("position", styleDefaultDarkModeTruePosition),
      ...getStyleValue("top", styleDefaultDarkModeTrueTop),
      ...getStyleValue("left", styleDefaultDarkModeTrueLeft),
      ...getStyleValue(
        "backgroundColor",
        styleDefaultDarkModeTrueBackgroundColor
      ),
      ...getStyleValue("width", styleDefaultDarkModeTrueWidth),
      ...getStyleValue("marginLeft", styleDefaultDarkModeTrueMarginLeft),
      ...getStyleValue("marginTop", styleDefaultDarkModeTrueMarginTop),
    };
  }, [
    styleDefaultDarkModeTrueAlignSelf,
    styleDefaultDarkModeTruePosition,
    styleDefaultDarkModeTrueTop,
    styleDefaultDarkModeTrueLeft,
    styleDefaultDarkModeTrueBackgroundColor,
    styleDefaultDarkModeTrueWidth,
    styleDefaultDarkModeTrueMarginLeft,
    styleDefaultDarkModeTrueMarginTop,
  ]);

  return (
    <View
      style={[styles.styledefaultDarkModetrue, styleDefaultDarkModeTrueStyle]}
    >
      <View style={styles.battery}>
        <View style={styles.border} />
        <Image
          style={styles.capIcon}
          contentFit="cover"
          source={require("../assets/cap.png")}
        />
        <View style={styles.capacity} />
      </View>
      <Image
        style={styles.wifiIcon}
        contentFit="cover"
        source={require("../assets/wifi.png")}
      />
      <Image
        style={styles.cellularConnectionIcon}
        contentFit="cover"
        source={require("../assets/cellular-connection.png")}
      />
      <View style={[styles.timeStyle, styles.timeLayout]}>
        <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  border: {
    top: 0,
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.labelDarkPrimary,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    position: "absolute",
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.labelDarkPrimary,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    top: 17,
    right: 14,
    width: 24,
    height: 11,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -7.5,
    top: "50%",
    left: 0,
    fontSize: FontSize.body15Regular_size,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    color: Color.labelDarkPrimary,
    textAlign: "center",
  },
  timeStyle: {
    top: 11,
    left: 21,
    height: 21,
  },
  styledefaultDarkModetrue: {
    alignSelf: "stretch",
    height: 44,
  },
});

export default StyleDefaultDarkModeTrue;
