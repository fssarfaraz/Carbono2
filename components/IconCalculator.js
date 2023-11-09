import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const IconCalculator = ({ style }) => {
  return (
    <Image
      style={[styles.iconCalculator, style]}
      contentFit="cover"
      source={require("../assets/-icon-calculator2.png")}
    />
  );
};

const styles = StyleSheet.create({
  iconCalculator: {
    width: 41,
    height: 45,
  },
});

export default IconCalculator;
