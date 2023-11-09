import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const IconDiscussion1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.iconDiscussion, style]}
      onPress={() => navigation.navigate("BottomTabsRoot", { screen: "Forum" })}
    >
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/-icon-discussion.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  iconDiscussion: {
    width: 30,
    height: 30,
  },
});

export default IconDiscussion1;
