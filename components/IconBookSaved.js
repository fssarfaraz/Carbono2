import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const IconBookSaved2 = ({ style }) => {
  return (
    <Image
      style={[styles.iconBookSaved, style]}
      contentFit="cover"
      source={require("../assets/-icon-book-saved4.png")}
    />
  );
};

const styles = StyleSheet.create({
  iconBookSaved: {
    width: 33,
    height: 31,
  },
});

export default IconBookSaved2;
