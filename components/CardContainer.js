import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import CommentContainer from "./CommentContainer";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const CardContainer = () => {
  return (
    <View style={[styles.comments, styles.recentFlexBox]}>
      <View style={[styles.sectionTitle, styles.comment3FlexBox]}>
        <Text style={styles.comments45}>Comments (45)</Text>
        <View style={[styles.recent, styles.recentFlexBox]}>
          <Text style={[styles.recent1, styles.recent1Typo]}>Recent</Text>
          <Image
            style={[styles.iconChevronDown, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon--chevron-down.png")}
          />
        </View>
      </View>
      <View style={styles.data}>
        <CommentContainer
          userImageUrl={require("../assets/profile-photo1.png")}
          userName="Jessica Thompson"
          reactionEmoji="❤️"
          timeAndLikesText="2m ago • 86 Likes"
        />
        <CommentContainer
          userImageUrl={require("../assets/profile-photo2.png")}
          userName="Dustin Grant"
          reactionEmoji="Lol 😆"
          timeAndLikesText="10m ago • 4 Likes"
          propMarginTop={20}
          propFontFamily="Nunito-Regular"
        />
        <View style={[styles.comment3, styles.comment3FlexBox]}>
          <View style={styles.info}>
            <View style={[styles.lParent, styles.recentFlexBox]}>
              <Text style={styles.l}>L</Text>
              <Image
                style={[styles.iconComment, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/icon--comment1.png")}
              />
            </View>
            <View style={styles.commentData}>
              <Text style={[styles.leslieAlexander, styles.recent1Typo]}>
                Leslie Alexander
              </Text>
              <Text style={[styles.veryTrue, styles.mAgoTypo]}>Very true!</Text>
              <Text style={[styles.mAgo, styles.mAgoTypo]}>
                15m ago • 19 Likes
              </Text>
            </View>
          </View>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/icon--like1.png")}
          />
        </View>
        <CommentContainer
          userImageUrl={require("../assets/profile-photo3.png")}
          userName="Kat Williams"
          reactionEmoji="😊"
          timeAndLikesText="19m ago • 177 Likes"
          propMarginTop={20}
          propFontFamily="Numans-Regular"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  recentFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  comment3FlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  recent1Typo: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 16,
  },
  iconLayout: {
    overflow: "hidden",
    height: 16,
    width: 16,
  },
  mAgoTypo: {
    marginTop: 4,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    lineHeight: 16,
  },
  comments45: {
    fontSize: FontSize.secondaryText_size,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    textAlign: "left",
    color: Color.colorDarkslateblue_100,
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 16,
  },
  recent1: {
    color: Color.colorDarkslateblue_100,
  },
  iconChevronDown: {
    marginLeft: 4,
  },
  recent: {
    flexDirection: "row",
    justifyContent: "center",
  },
  sectionTitle: {
    alignSelf: "stretch",
  },
  l: {
    fontSize: FontSize.size_3xs,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.primarySocialBlue,
    textAlign: "left",
  },
  iconComment: {
    display: "none",
    marginLeft: 10,
  },
  lParent: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.secondaryDarkGrey,
    width: 24,
    height: 24,
    padding: Padding.p_xs,
    flexDirection: "row",
    justifyContent: "center",
  },
  leslieAlexander: {
    color: Color.black,
  },
  veryTrue: {
    fontFamily: FontFamily.numansRegular,
    color: Color.black,
  },
  mAgo: {
    color: Color.secondaryLighterGray,
    fontFamily: FontFamily.nunitoRegular,
  },
  commentData: {
    marginLeft: 8,
  },
  info: {
    flexDirection: "row",
  },
  comment3: {
    width: 327,
    marginTop: 20,
  },
  data: {
    marginTop: 32,
    justifyContent: "center",
  },
  comments: {
    position: "absolute",
    top: 301,
    left: 33,
    justifyContent: "center",
  },
});

export default CardContainer;
