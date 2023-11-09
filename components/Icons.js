import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const Icons = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.icons, style]}
      onPress={() => navigation.navigate("BottomTabsRoot", { screen: "Games" })}
    />
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 30,
    width: 30,
  },
  icons: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
});

export default Icons;
