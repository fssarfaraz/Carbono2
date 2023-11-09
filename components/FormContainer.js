import React, { useMemo } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormContainer = ({
  itemType,
  itemImageCode,
  propLeft,
  propBackgroundColor,
  propLeft1,
  onGreenMaintainancePress,
}) => {
  const greenMaintainanceStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  const rectangleView1Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const foodStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  return (
    <Pressable
      style={[
        styles.greenMaintainance,
        styles.greenLayout,
        greenMaintainanceStyle,
      ]}
      onPress={onGreenMaintainancePress}
    >
      <View
        style={[
          styles.greenMaintainanceChild,
          styles.greenLayout,
          rectangleView1Style,
        ]}
      />
      <Text style={[styles.food, foodStyle]}>{itemType}</Text>
      <Image
        style={styles.iconParkSolidgreenNewEner}
        contentFit="cover"
        source={itemImageCode}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  greenLayout: {
    height: 103,
    width: 103,
    position: "absolute",
  },
  greenMaintainanceChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorDodgerblue_100,
  },
  food: {
    top: 69,
    left: 34,
    fontSize: FontSize.body17Regular_size,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    color: Color.labelDarkPrimary,
    textAlign: "center",
    position: "absolute",
  },
  iconParkSolidgreenNewEner: {
    top: 24,
    left: 32,
    width: 40,
    height: 40,
    overflow: "hidden",
    position: "absolute",
  },
  greenMaintainance: {
    top: 564,
    left: 19,
  },
});

export default FormContainer;
