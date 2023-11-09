import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const FilteredCardForm = () => {
  return (
    <View style={[styles.posts, styles.postsFlexBox]}>
      <View style={[styles.post1, styles.postsFlexBox]}>
        <View style={styles.content}>
          <View style={[styles.profileInfo, styles.profileInfoFlexBox]}>
            <View style={styles.infoFlexBox}>
              <Image
                style={styles.profilePhotoIcon}
                contentFit="cover"
                source={require("../assets/profile-photo.png")}
              />
              <View style={styles.jacobWashingtonParent}>
                <Text style={[styles.jacobWashington, styles.ifYouThinkTypo]}>
                  Jacob Washington
                </Text>
                <Text style={[styles.mAgo, styles.mAgoTypo]}>20m ago</Text>
              </View>
            </View>
            <Image
              style={styles.iconDotsVertical}
              contentFit="cover"
              source={require("../assets/icon--dots-vertical.png")}
            />
          </View>
          <Text
            style={[styles.ifYouThink, styles.ifYouThinkTypo]}
          >{`“If you think you are too small to make a difference, try sleeping with a mosquito.”
~ Dalai Lama`}</Text>
          <View style={[styles.postActions, styles.profileInfoFlexBox]}>
            <View style={styles.infoFlexBox}>
              <Image
                style={styles.iconLike}
                contentFit="cover"
                source={require("../assets/icon--like.png")}
              />
              <Text style={[styles.text, styles.mAgoTypo]}>2,245</Text>
            </View>
            <View style={[styles.comment, styles.infoFlexBox]}>
              <Image
                style={styles.iconLike}
                contentFit="cover"
                source={require("../assets/icon--comment.png")}
              />
              <Text style={[styles.text, styles.mAgoTypo]}>45</Text>
            </View>
          </View>
        </View>
        <View style={styles.divider} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postsFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  profileInfoFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  ifYouThinkTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.nunitoRegular,
  },
  mAgoTypo: {
    color: Color.colorDarkslateblue_100,
    fontSize: FontSize.secondaryText_size,
    textAlign: "left",
    fontFamily: FontFamily.nunitoRegular,
    lineHeight: 16,
  },
  infoFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  profilePhotoIcon: {
    borderRadius: Border.br_81xl,
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  jacobWashington: {
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    color: Color.black,
    fontFamily: FontFamily.nunitoRegular,
  },
  mAgo: {
    marginTop: 2,
  },
  jacobWashingtonParent: {
    marginLeft: 8,
  },
  iconDotsVertical: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  profileInfo: {
    alignSelf: "stretch",
  },
  ifYouThink: {
    fontSize: FontSize.bodyBody1_size,
    lineHeight: 24,
    marginTop: 16,
    alignSelf: "stretch",
  },
  iconLike: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  text: {
    marginLeft: 8,
  },
  comment: {
    width: 456,
  },
  postActions: {
    width: 327,
    marginTop: 16,
  },
  content: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  divider: {
    borderStyle: "solid",
    borderColor: Color.colorDarkslateblue_100,
    borderTopWidth: 2,
    height: 2,
    marginTop: 16,
    alignSelf: "stretch",
  },
  post1: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  posts: {
    position: "absolute",
    top: 115,
    left: 8,
    width: 375,
    justifyContent: "center",
  },
});

export default FilteredCardForm;
