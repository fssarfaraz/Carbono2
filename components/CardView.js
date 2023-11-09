import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { Button } from "@rneui/themed";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const CardView = () => {
  return (
    <View style={styles.card}>
      <View style={[styles.subtract, styles.subtractLayout]}>
        <Image
          style={styles.subtractLayout}
          contentFit="cover"
          source={require("../assets/portada.png")}
        />
        <View style={styles.media}>
          <View style={styles.mediaBody}>
            <View style={styles.avatar}>
              <Image
                style={styles.avatarIcon}
                contentFit="cover"
                source={require("../assets/avatar.png")}
              />
            </View>
            <View style={styles.mediaContent}>
              <Text style={styles.frankEsteban}>Savannah Nguyen</Text>
              <Text style={styles.webDevelopment}>Sydney, Australia</Text>
            </View>
          </View>
          <View style={styles.mediaOption} />
        </View>
        <View style={styles.iconCamera}>
          <Button
            radius="5"
            iconPosition="left"
            type="clear"
            color="#212121"
            icon={{ name: "camera-outline", type: "material-community" }}
            containerStyle={styles.vectorIconBtn}
            buttonStyle={styles.vectorIconBtn1}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconBtn: {
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
    position: "absolute",
  },
  vectorIconBtn1: {
    height: "100%",
    width: "100%",
  },
  subtractLayout: {
    height: 214,
    width: 360,
  },
  avatarIcon: {
    borderRadius: Border.br_31xl,
    width: 100,
    height: 100,
  },
  avatar: {
    flexDirection: "row",
    alignItems: "center",
  },
  frankEsteban: {
    fontSize: FontSize.paragraphH1Reg_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.black,
    textAlign: "center",
  },
  webDevelopment: {
    fontSize: FontSize.body15Regular_size,
    letterSpacing: 1,
    lineHeight: 26,
    fontFamily: FontFamily.bodyBody1,
    color: Color.mutedColor,
    marginTop: 3,
    textAlign: "center",
    alignSelf: "stretch",
  },
  mediaContent: {
    marginTop: 10,
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  mediaBody: {
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  mediaOption: {
    justifyContent: "center",
    marginTop: 5,
    alignItems: "center",
    overflow: "hidden",
  },
  media: {
    marginTop: 46,
    width: "107.5%",
    top: "50%",
    right: "-3.61%",
    left: "-3.89%",
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
  },
  iconCamera: {
    height: "13.13%",
    width: "8.33%",
    top: "4.21%",
    right: "1.67%",
    bottom: "82.66%",
    left: "90%",
    position: "absolute",
  },
  subtract: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  card: {
    top: 112,
    left: 17,
    borderRadius: Border.br_xl,
    backgroundColor: Color.labelDarkPrimary,
    height: 335,
    overflow: "hidden",
    width: 360,
    position: "absolute",
  },
});

export default CardView;
