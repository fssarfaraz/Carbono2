import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1HomeImage = ({
  imageDimensions,
  property1HomeIconPosition,
  property1HomeIconWidth,
  property1HomeIconHeight,
  property1HomeIconTop,
  property1HomeIconLeft,
}) => {
  const property1HomeIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1HomeIconPosition),
      ...getStyleValue("width", property1HomeIconWidth),
      ...getStyleValue("height", property1HomeIconHeight),
      ...getStyleValue("top", property1HomeIconTop),
      ...getStyleValue("left", property1HomeIconLeft),
    };
  }, [
    property1HomeIconPosition,
    property1HomeIconWidth,
    property1HomeIconHeight,
    property1HomeIconTop,
    property1HomeIconLeft,
  ]);

  return (
    <Image
      style={[styles.property1homeIcon, property1HomeIconStyle]}
      contentFit="cover"
      source={imageDimensions}
    />
  );
};

const styles = StyleSheet.create({
  property1homeIcon: {
    width: 405,
    height: 134,
  },
});

export default Property1HomeImage;
