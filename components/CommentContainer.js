import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, Border, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CommentContainer = ({
  userImageUrl,
  userName,
  reactionEmoji,
  timeAndLikesText,
  propMarginTop,
  propFontFamily,
}) => {
  const comment5Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  const jessicaThompsonStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", propFontFamily),
    };
  }, [propFontFamily]);

  return (
    <View style={[styles.comment5, comment5Style]}>
      <View style={styles.info}>
        <Image
          style={styles.profilePhotoIcon}
          contentFit="cover"
          source={userImageUrl}
        />
        <View style={styles.commentData}>
          <Text style={[styles.jessicaThompson, jessicaThompsonStyle]}>
            {userName}
          </Text>
          <Text style={[styles.text, styles.textTypo]}>{reactionEmoji}</Text>
          <Text style={[styles.mAgo, styles.textTypo]}>{timeAndLikesText}</Text>
        </View>
      </View>
      <Image
        style={styles.iconLike}
        contentFit="cover"
        source={require("../assets/icon--like1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    marginTop: 4,
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.size_smi,
  },
  profilePhotoIcon: {
    borderRadius: Border.br_81xl,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  jessicaThompson: {
    fontFamily: FontFamily.numansRegular,
    color: Color.black,
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.size_smi,
  },
  text: {
    fontFamily: FontFamily.hKGrotesk,
    color: Color.labelDarkPrimary,
  },
  mAgo: {
    fontFamily: FontFamily.nunitoRegular,
    color: Color.secondaryLighterGray,
  },
  commentData: {
    marginLeft: 8,
  },
  info: {
    flexDirection: "row",
  },
  iconLike: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  comment5: {
    width: 327,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default CommentContainer;
