import React, { useMemo } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const EnergyCard = ({
  imageDescription,
  itemDimensions,
  propTop,
  propLeft,
  onCommunityCard4Press,
}) => {
  const communityCard4Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <Pressable
      style={[
        styles.communityCard4,
        styles.communityLayout,
        communityCard4Style,
      ]}
      onPress={onCommunityCard4Press}
    >
      <View style={[styles.communityCard4Child, styles.communityLayout]} />
      <Image
        style={styles.communityCard4Item}
        contentFit="cover"
        source={imageDescription}
      />
      <View style={styles.energyWrapper}>
        <Text style={styles.energy}>{itemDimensions}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  communityLayout: {
    height: 185,
    width: 164,
    position: "absolute",
  },
  communityCard4Child: {
    top: 0,
    left: 0,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  communityCard4Item: {
    top: 15,
    left: 15,
    borderRadius: Border.br_xs,
    width: 134,
    height: 100,
    position: "absolute",
  },
  energy: {
    fontSize: FontSize.primaryText_size,
    fontWeight: "500",
    fontFamily: FontFamily.nunitoMedium,
    color: Color.labelDarkPrimary,
    textAlign: "center",
  },
  energyWrapper: {
    top: 137,
    left: 39,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorDodgerblue_100,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: 0,
    position: "absolute",
  },
  communityCard4: {
    top: 549,
    left: 18,
  },
});

export default EnergyCard;
