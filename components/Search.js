import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Search = ({
  searchInputValue,
  searchPlaceholder,
  searchPosition,
  searchWidth,
  searchTop,
  searchLeft,
  searchBorderRadius,
  searchMarginLeft,
  rectangleViewBorderRadius,
  rectangleViewBackgroundColor,
  frameViewWidth,
  frameViewRight,
  frameViewLeft,
  searchFontFamily,
  onSearchPress,
}) => {
  const searchStyle = useMemo(() => {
    return {
      ...getStyleValue("position", searchPosition),
      ...getStyleValue("width", searchWidth),
      ...getStyleValue("top", searchTop),
      ...getStyleValue("left", searchLeft),
      ...getStyleValue("borderRadius", searchBorderRadius),
      ...getStyleValue("marginLeft", searchMarginLeft),
    };
  }, [
    searchPosition,
    searchWidth,
    searchTop,
    searchLeft,
    searchBorderRadius,
    searchMarginLeft,
  ]);

  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", rectangleViewBorderRadius),
      ...getStyleValue("backgroundColor", rectangleViewBackgroundColor),
    };
  }, [rectangleViewBorderRadius, rectangleViewBackgroundColor]);

  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("width", frameViewWidth),
      ...getStyleValue("right", frameViewRight),
      ...getStyleValue("left", frameViewLeft),
    };
  }, [frameViewWidth, frameViewRight, frameViewLeft]);

  const search1Style = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", searchFontFamily),
    };
  }, [searchFontFamily]);

  return (
    <View style={[styles.search, searchStyle]} onPress={onSearchPress}>
      <View style={[styles.searchChild, rectangleViewStyle]} />
      <View style={[styles.searchParent, frameViewStyle]}>
        <Image
          style={styles.searchIcon}
          contentFit="cover"
          source={searchInputValue}
        />
        <Text style={[styles.search1, search1Style]}>{searchPlaceholder}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 4,
    backgroundColor: Color.gray3Dark,
    position: "absolute",
  },
  searchIcon: {
    top: 2,
    left: 0,
    width: 15,
    height: 15,
    overflow: "hidden",
    position: "absolute",
  },
  search1: {
    top: 0,
    left: 25,
    fontSize: FontSize.body15Regular_size,
    lineHeight: 20,
    fontFamily: FontFamily.body15Regular,
    color: Color.colorGray_800,
    textAlign: "left",
    position: "absolute",
  },
  searchParent: {
    height: "50%",
    width: "23.19%",
    top: "25%",
    right: "73.91%",
    bottom: "25%",
    left: "2.9%",
    position: "absolute",
  },
  search: {
    width: 345,
    height: 40,
  },
});

export default Search;
