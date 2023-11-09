import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const IconGameControllerOutline2 = ({ style }) => {
  return (
    <Image
      style={[styles.iconGameControllerOutline, style]}
      contentFit="cover"
      source={require("../assets/-icon-game-controller-outline9.png")}
    />
  );
};

const styles = StyleSheet.create({
  iconGameControllerOutline: {
    width: 33,
    height: 24,
  },
});

export default IconGameControllerOutline2;
