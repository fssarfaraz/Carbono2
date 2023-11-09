import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const IconDiscussion2 = ({ style }) => {
  return (
    <Image
      style={[styles.iconDiscussion, style]}
      contentFit="cover"
      source={require("../assets/-icon-discussion1.png")}
    />
  );
};

const styles = StyleSheet.create({
  iconDiscussion: {
    width: 30,
    height: 30,
  },
});

export default IconDiscussion2;
