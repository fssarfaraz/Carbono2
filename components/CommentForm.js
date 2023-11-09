import * as React from "react";
import { StyleSheet, View, TextInput, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const CommentForm = () => {
  return (
    <View style={[styles.navigationComment, styles.navBgLayout]}>
      <View style={[styles.navBg, styles.navBgLayout]} />
      <View style={[styles.textInput, styles.ctaFlexBox]}>
        <TextInput
          style={styles.typeYourComment}
          placeholder="Type your comment here..."
          placeholderTextColor="#000"
        />
        <View style={[styles.cta, styles.ctaFlexBox]}>
          <Image
            style={styles.iconPlus}
            contentFit="cover"
            source={require("../assets/icon--plus.png")}
          />
          <LinearGradient
            style={styles.send}
            locations={[0, 1]}
            colors={["#01427a", "#ac1af0"]}
          >
            <Pressable style={[styles.pressable, styles.ctaFlexBox]}>
              <Image
                style={styles.iconSend}
                contentFit="cover"
                source={require("../assets/icon--send.png")}
              />
            </Pressable>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBgLayout: {
    height: 88,
    width: 375,
    position: "absolute",
  },
  ctaFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  navBg: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorGray_500,
    overflow: "hidden",
  },
  typeYourComment: {
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.size_sm,
  },
  iconPlus: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  iconSend: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  pressable: {
    justifyContent: "center",
    padding: Padding.p_7xs,
    backgroundColor: "transparent",
    borderRadius: Border.br_13xl,
    flexDirection: "row",
  },
  send: {
    marginLeft: 16,
  },
  cta: {
    justifyContent: "flex-end",
  },
  textInput: {
    top: 12,
    left: 16,
    backgroundColor: Color.labelDarkPrimary,
    width: 343,
    justifyContent: "space-between",
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_9xs,
    paddingRight: Padding.p_9xs,
    paddingBottom: Padding.p_9xs,
    borderRadius: Border.br_13xl,
    flexDirection: "row",
    position: "absolute",
  },
  navigationComment: {
    top: 645,
    left: 9,
  },
});

export default CommentForm;
