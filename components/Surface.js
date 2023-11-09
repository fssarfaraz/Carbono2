import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border } from "../GlobalStyles";

const Surface = ({ style }) => {
  return (
    <LinearGradient
      style={[styles.surface, style]}
      locations={[0, 1]}
      colors={["#01427a", "rgba(1, 66, 122, 0)"]}
    />
  );
};

const styles = StyleSheet.create({
  surface: {
    borderRadius: Border.br_21xl,
    width: 63,
    height: 60,
    backgroundColor: "transparent",
  },
});

export default Surface;
