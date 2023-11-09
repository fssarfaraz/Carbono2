import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const IconPersonOutline2 = ({ style }) => {
  return (
    <Image
      style={[styles.iconPersonOutline, style]}
      contentFit="cover"
      source={require("../assets/-icon-person-outline1.png")}
    />
  );
};

const styles = StyleSheet.create({
  iconPersonOutline: {
    width: 30,
    height: 30,
  },
});

export default IconPersonOutline2;
