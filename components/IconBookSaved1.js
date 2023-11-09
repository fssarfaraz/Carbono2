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

const IconBookSaved1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.iconBookSaved, style]}
      onPress={() =>
        navigation.navigate("BottomTabsRoot", { screen: "Educational" })
      }
    >
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/-icon-book-saved2.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupIcon: {
    width: 33,
    height: 31,
  },
  iconBookSaved: {
    justifyContent: "center",
  },
});

export default IconBookSaved1;
