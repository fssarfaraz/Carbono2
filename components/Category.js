import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Category = ({
  categoryPosition,
  categoryBorderRadius,
  categoryBackgroundColor,
  categoryOverflow,
  categoryMarginLeft,
  onCategoryPress,
}) => {
  const categoryStyle = useMemo(() => {
    return {
      ...getStyleValue("position", categoryPosition),
      ...getStyleValue("borderRadius", categoryBorderRadius),
      ...getStyleValue("backgroundColor", categoryBackgroundColor),
      ...getStyleValue("overflow", categoryOverflow),
      ...getStyleValue("marginLeft", categoryMarginLeft),
    };
  }, [
    categoryPosition,
    categoryBorderRadius,
    categoryBackgroundColor,
    categoryOverflow,
    categoryMarginLeft,
  ]);

  return (
    <View style={[styles.category, categoryStyle]} onPress={onCategoryPress}>
      <Text style={[styles.text, styles.textPosition]}>Math</Text>
      <Image
        style={[styles.blobIcon, styles.textPosition]}
        contentFit="cover"
        source={require("../assets/blob.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    left: "50%",
    position: "absolute",
  },
  text: {
    marginLeft: -45,
    top: "70.41%",
    fontSize: FontSize.body15Regular_size,
    lineHeight: 20,
    fontFamily: FontFamily.body15Regular,
    color: Color.labelDarkPrimary,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 90,
  },
  blobIcon: {
    marginTop: -39,
    marginLeft: -25,
    top: "50%",
    width: 50,
    height: 50,
  },
  category: {
    borderRadius: 8,
    backgroundColor: Color.grey4Dark,
    overflow: "hidden",
  },
});

export default Category;
