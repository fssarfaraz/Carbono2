import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const NavigationBarrImage = ({ style }) => {
  return (
    <Image
      style={[styles.navigationBarrIcon, style]}
      contentFit="cover"
      source={require("../assets/navigation-barr9.png")}
    />
  );
};

const styles = StyleSheet.create({
  navigationBarrIcon: {
    width: 393,
    height: 105,
  },
});

export default NavigationBarrImage;
