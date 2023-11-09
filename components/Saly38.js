import React, { useState } from "react";
import { Pressable, StyleSheet, TextInput } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Padding, FontFamily, FontSize } from "../GlobalStyles";

const Saly38 = () => {
  const [frameTextInput, setFrameTextInput] = useState("Name of Food Item");

  return (
    <Pressable style={styles.saly38}>
      <Image
        style={[styles.saly38Icon, styles.textinputLayout]}
        contentFit="cover"
        source={require("../assets/saly38.png")}
      />
      <LinearGradient
        style={styles.wrapper}
        locations={[0, 1]}
        colors={["#0682ef", "#094ed3"]}
      >
        <TextInput
          style={[styles.textinput, styles.textinputLayout]}
          value={frameTextInput}
          onChangeText={setFrameTextInput}
          placeholder="Name of Food Item"
          secureTextEntry={true}
          placeholderTextColor="#fff"
        />
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textinputLayout: {
    overflow: "hidden",
    width: "100%",
    height: "100%",
  },
  saly38Icon: {
    top: "-7.69%",
    right: "-0.75%",
    bottom: "7.69%",
    left: "0.75%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  textinput: {
    borderRadius: Border.br_31xl,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_30xl,
    paddingVertical: Padding.p_8xs,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    fontSize: FontSize.primaryText_size,
    backgroundColor: "transparent",
  },
  wrapper: {
    left: "15%",
    top: "95.29%",
    right: "16.25%",
    bottom: "-5.21%",
    width: "68.75%",
    height: "9.93%",
    position: "absolute",
  },
  saly38: {
    top: 208,
    left: -3,
    width: 400,
    height: 403,
    position: "absolute",
  },
});

export default Saly38;
