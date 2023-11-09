import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import { Image } from "expo-image";
import { Color, Border } from "../GlobalStyles";

const SupportCard = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupChild} />
      <View style={styles.helpSupportParent}>
        <Button
          title={`Help & Support`}
          radius="5"
          iconPosition="left"
          type="clear"
          color="#000"
          titleStyle={styles.helpSupportBtn}
          containerStyle={styles.helpSupportBtn1}
          buttonStyle={styles.helpSupportBtn2}
        />
        <Button
          title="Terms and Policies"
          radius="5"
          iconPosition="left"
          type="clear"
          color="#000"
          titleStyle={styles.termsAndPoliciesBtn}
          containerStyle={styles.termsAndPoliciesBtn1}
          buttonStyle={styles.termsAndPoliciesBtn2}
        />
        <Image
          style={[styles.tablercircleLetterIIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/tablercircleletteri.png")}
        />
        <View style={[styles.mdiquestionMarkCircleOutli, styles.iconPosition]}>
          <Image
            style={[styles.vectorIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helpSupportBtn: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Nunito-SemiBold",
  },
  helpSupportBtn1: {
    left: 72,
    top: 8,
    position: "absolute",
  },
  helpSupportBtn2: {},
  termsAndPoliciesBtn: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Nunito-SemiBold",
  },
  termsAndPoliciesBtn1: {
    left: 72,
    top: 46,
    position: "absolute",
  },
  termsAndPoliciesBtn2: {},
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  groupChild: {
    marginLeft: -174,
    backgroundColor: Color.colorDarkslateblue_200,
    borderRadius: Border.br_3xs,
    top: 0,
    height: 93,
    width: 348,
    left: "50%",
    position: "absolute",
  },
  tablercircleLetterIIcon: {
    top: 38,
    height: 30,
    width: 33,
    left: 0,
    overflow: "hidden",
    borderRadius: Border.br_3xs,
  },
  vectorIcon: {
    height: "83.39%",
    width: "83.44%",
    top: "8.47%",
    right: "8.28%",
    bottom: "8.14%",
    left: "8.28%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  mdiquestionMarkCircleOutli: {
    height: 30,
    width: 33,
    left: 0,
    overflow: "hidden",
    borderRadius: Border.br_3xs,
    top: 0,
  },
  helpSupportParent: {
    top: 16,
    left: 19,
    width: 231,
    height: 68,
    position: "absolute",
  },
  rectangleParent: {
    marginLeft: -179.5,
    top: 460,
    height: 93,
    width: 348,
    left: "50%",
    position: "absolute",
  },
});

export default SupportCard;
