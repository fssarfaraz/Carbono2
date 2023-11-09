import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const IconPersonOutline1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.iconPersonOutline, style]}
      onPress={() =>
        navigation.navigate("BottomTabsRoot", { screen: "UserProfile" })
      }
    >
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/-icon-person-outline.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  iconPersonOutline: {
    width: 30,
    height: 30,
  },
});

export default IconPersonOutline1;
