// import * as React from "react";
// import { Image } from "expo-image";
// import { StyleSheet, Pressable, View, Text, StatusBar } from "react-native";
// import { Button } from "@rneui/themed";
// import { LinearGradient } from "expo-linear-gradient";
// import Property1HomeImage from "../components/Property1HomeImage";
// import { useNavigation } from "@react-navigation/native";
// import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
// import { FontFamily, Padding, FontSize, Border, Color } from "../GlobalStyles";
// import { FontAwesome5 } from "@expo/vector-icons";

// const QuizFinal = () => {
//   const navigation = useNavigation();

//   const handleNavigation = (screen) => {
//     navigation.navigate(screen);
//   };

//   return (
//     <View style={styles.quizFinal}>
//       <Image
//         style={[styles.quizFinalChild, styles.quizPosition]}
//         contentFit="cover"
//         source={require("../assets/ellipse-3.png")}
//       />
//       <Image
//         style={[styles.quizFinalItem, styles.quizPosition1]}
//         contentFit="cover"
//         source={require("../assets/ellipse-3.png")}
//       />
      
//       {/* Header */}
//       <View style={styles.header}>
//         <Pressable
//           style={styles.backButton}
//           onPress={() => navigation.goBack()}
//         >
//           <FontAwesome5 name="chevron-left" size={30} color="#01427A" />
//         </Pressable>
//       </View>
      
//       {/* Middle rectangle */}

//       <View style={styles.rectangleParent}>
//         <LinearGradient 
//           style={styles.rectangleLineargradient} 
//           locations={[0,0.11,1]} 
//           colors={['#eff7ff','rgba(221, 236, 254, 0.89)','rgba(66, 141, 248, 0)']} 
//           useAngle={true} angle={-45.31} />

//         <Text style={styles.title1}>{'Well Done!'}</Text>
//         <Image style={styles.checkIcon} resizeMode="cover" source={require("../assets/Check.png")} />

//         <View style={styles.startContainer}>
//           <Image style={styles.iconStar1} resizeMode="cover" source={require("../assets/Icon-Star.png")} />
//           <Image style={styles.iconStar2} resizeMode="cover" source={require("../assets/Icon-Star.png")} />
//           <Image style={styles.iconStar3} resizeMode="cover" source={require("../assets/Icon-Star.png")} />
//         </View>

//         <Text style={styles.youEarned}>You Earned 100 pts</Text>

//         <View style={styles.ButtonContainer}>
//           <View style={styles.buttonContinue1}>
//         <Pressable onPress={() => handleNavigation("Educational")}>
//           <Text style={styles.buttonText}>Back To Resources</Text>
//         </Pressable>
//         </View>

//         <View style={styles.buttonContinue2}>
//         <Pressable onPress={() => handleNavigation("Quiz")}>
//           <Text style={styles.buttonText}>Play Again</Text>
//         </Pressable>
//         </View>
//         </View>


//       </View>

//       {/* Bottom Navigation Bar */}
//       <View style={styles.bottomNavBar}>
//         <Pressable onPress={() => handleNavigation("UserProfile")}>
//           <Image
//             style={styles.bottomNavIcon}
//             source={require("../assets/-icon-person-outline.png")}
//           />
//         </Pressable>
//         <Pressable onPress={() => handleNavigation("Educational")}>
//           <Image
//             style={styles.bottomNavIcon}
//             source={require("../assets/-icon-book-saved3.png")}
//           />
//         </Pressable>
//         <Pressable onPress={() => handleNavigation("Forum")}>
//           <Image
//             style={styles.bottomNavIcon}
//             source={require("../assets/-icon-discussion.png")}
//           />
//         </Pressable>
//         <Pressable onPress={() => handleNavigation("Games")}>
//           <Image
//             style={styles.bottomNavIcon}
//             source={require("../assets/-icon-game-controller-outline6.png")}
//           />
//         </Pressable>
//       </View>

//       {/* Surface Icon */}
//       <Image
//         style={styles.surfaceIcon}
//         resizeMode="cover"
//         source={require("../assets/navigation-barr2.png")}
//       />

//       {/* Calculator Icon */}
//       <Pressable onPress={() => handleNavigation("Calculator")} style={styles.iconCalculatorParent}>
//         <Image
//           style={styles.iconCalculator}
//           resizeMode="cover"
//           source={require("../assets/-icon-calculator.png")}
//         />
//       </Pressable>
  
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   iconCalculatorBtn: {
//     position: "relative",
//   },
//   iconCalculatorBtn1: {
//     width: 41,
//     height: 45,
//   },
//   rectangleButtonBtn: {
//     left: 0,
//     top: 0,
//     position: "absolute",
//   },
//   rectangleButtonBtn1: {
//     borderRadius: 10,
//     width: 296,
//     height: 64,
//   },
//   rectangleButton1Btn: {
//     left: 0,
//     top: 86,
//     position: "absolute",
//   },
//   rectangleButton1Btn1: {
//     borderRadius: 10,
//     width: 296,
//     height: 64,
//   },
//   navigationIconBtn: {
//     left: 13,
//     top: 61,
//     position: "absolute",
//   },
//   navigationIconBtn1: {
//     width: 24,
//     height: 24,
//   },
//   iconLayout: {
//     width: 33,
//     marginLeft: 72,
//   },
//   iconLayout1: {
//     height: 30,
//     width: 30,
//   },
//   ptsTypo: {
//     fontFamily: FontFamily.nunitoSemiBold,
//     fontWeight: "600",
//   },
//   groupChildLayout: {
//     height: 422,
//     width: 325,
//     position: "absolute",
//   },
//   titlePosition: {
//     left: 0,
//     top: 0,
//   },
//   quizFinalChild: {
//     height: 594,
//     width: 400,
//   },
//   quizPosition: {
//     top: -80,
//     width: 600,
//     left: -300,
//     position: "absolute",
//   },
//   quizFinalItem: {
//     top: 455,
//     height: 417,
//   },
//   quizPosition1: {
//     width: 600,
//     left: 50,
//     position: "absolute",
//   },
//   icon: {
//     height: "100%",
//     width: "100%",
//   },
//   iconBookSaved: {
//     height: 31,
//     marginLeft: 72,
//   },
//   iconDiscussion: {
//     marginLeft: 72,
//   },
//   iconGameControllerOutline: {
//     height: 24,
//     marginLeft: 72,
//   },
//   iconPersonOutlineParent: {
//     top: 807,
//     left: 24,
//     width: 385,
//     flexDirection: "row",
//     alignItems: "flex-end",
//     position: "absolute",
//   },
//   iconCalculatorWrapper: {
//     top: 745,
//     left: 165,
//     padding: Padding.p_3xs,
//     position: "absolute",
//   },
//   playAgain1: {
//     color: "#fdfdfd",
//     width: 118,
//     height: 29,
//     textAlign: "center",
//     lineHeight: 28,
//     fontSize: FontSize.size_3xl,
//     fontWeight: "600",
//   },
//   playAgain: {
//     left: 93,
//     top: 103,
//     position: "absolute",
//   },
//   backToResources: {
//     color: "rgba(255, 255, 255, 0.91)",
//     width: 270,
//     height: 28,
//     textAlign: "center",
//     lineHeight: 28,
//     fontSize: FontSize.size_3xl,
//     fontWeight: "600",
//   },
//   backToResourcesContainer: {
//     left: 15,
//     top: 18,
//     position: "absolute",
//   },
//   buttonContinue: {
//     top: 550,
//     left: 39,
//     width: 296,
//     height: 150,
//     position: "absolute",
//   },
//   groupChild: {
//     borderRadius: Border.br_3xs,
//     backgroundColor: "transparent",
//     left: 0,
//     top: 0,
//   },
//   youEarned: {
//     fontFamily: FontFamily.nunitoRegular,
//   },
//   label: {
//     top: 292,
//     left: 11,
//     fontSize: FontSize.primaryText_size,
//     lineHeight: 24,
//     color: Color.black,
//     textAlign: "left",
//     position: "absolute",
//   },
//   starIcon: {
//     top: 212,
//     left: 42,
//     width: 124,
//     height: 52,
//     position: "absolute",
//   },
//   checkIcon: {
//     top: 48,
//     left: 12,
//     width: 184,
//     height: 184,
//     position: "absolute",
//   },
//   title: {
//     fontSize: FontSize.size_21xl,
//     lineHeight: 36,
//     fontWeight: "700",
//     fontFamily: FontFamily.nunitoBold,
//     color: Color.colorDarkslateblue_100,
//     textAlign: "center",
//     position: "absolute",
//   },
//   content: {
//     top: 68,
//     left: 61,
//     width: 209,
//     height: 316,
//     position: "absolute",
//   },
//   rectangleParent: {
//     top: 102,
//     left: 34,
//   },
//   quizFinal: {
//     backgroundColor: Color.labelDarkPrimary,
//     flex: 1,
//     height: 852,
//     overflow: "hidden",
//     width: "100%",
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     top: 40,
//   },
//   backButton: {
//     flex: 1,
//     width: "100%",
//     overflow: "hidden",
//     padding: 25,
//   },
//   bottomNavBar: {
//     flexDirection: "row",
//     height: 70,
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 16,
//     paddingBottom: 10,
//     position: "relative",
//     zIndex: 2,
//   },
//   surfaceIcon: {
//     flex: 1,
//     width: "100%",
//     height: 135,
//     position: "absolute",
//     bottom: 0,
//     zIndex: 1,
//   },
//   bottomNavIcon: {
//     width: 30,
//     height: 30,
//     marginBottom: 50,
//     top: 612,
//     absolute: "absolute",
//   },
//   iconCalculator: {
//     top: 728,
//     width: 40,
//     height: 45,
//     alignSelf: "center",
//     position: "absolute",
//     zIndex: 2,
//   },
//   iconCalculatorParent: {
//     flex: 1,
//     position: "absolute",
//     width: "100%",
//     padding: 10,
//     zIndex: 2,
//   },
//   rectangleParent: {
//     top: 32,
//     alignContent: "center",
//     alignItems: "center",
//   },
//   rectangleLineargradient: {
//     borderRadius: 10,
//     width: 296,
//     height: 422,
//     position: "absolute",
//   },
//   title1: {
//     marginTop: 36,
//     fontSize: 40,
//     fontWeight: "700",
//     fontFamily: "Nunito-Bold",
//     color: "#01427a",
//     textAlign: "center"
//   },
//   checkIcon: {
//     flex: 1,
//     width: 184,
//     height: 184,
//     top: 132,
//     position: "absolute",
//   },
//   startContainer: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     top: 300,
//     position: "absolute",
//   },
//   iconStar1: {
//     width: 40,
//     height: 40,
//     marginRight: 10,
//   },
//   iconStar2: {
//     width: 52,
//     height: 52,
//     marginRight: 10,
//   },
//   iconStar3: {
//     width: 40,
//     height: 40,
//     marginRight: 10,
//   },
//   ButtonContainer: {
//     flex: 1,
//     justifyContent: "space-between",
//     alignItems: "center",
//     top: 440,
//     position: "absolute",
//     width: "100%",
//   },
//   buttonContinue1: {
//     width: 270,
//     borderRadius: 10,
//     backgroundColor: "#428df8",
//     type: "solid",
//     padding: 18,
//     margin: 10,
//   },
//   buttonContinue2: {
//     width: 270,
//     borderRadius: 10,
//     backgroundColor: "#428df8",
//     type: "solid",
//     padding: 18,
//     margin: 10,
//   },
//   buttonText: {
//     fontSize: 22,
//     fontWeight: "600",
//     fontFamily: "Nunito-SemiBold",
//     color: "rgba(255, 255, 255, 0.91)",
//     textAlign: "center",
//     height: 28
//   },
//   youEarned: {
//     fontSize: 20,
//     lineHeight: 24,
//     fontWeight: "600",
//     fontFamily: "Nunito-SemiBold",
//     color: "#01427a",
//     textAlign: "center",
//     top: 390,
//     position: "absolute",
//   },

// });

// export default QuizFinal;
import * as React from "react";
import { useState, useEffect } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text, StatusBar } from "react-native";
import { Button } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import Property1HomeImage from "../components/Property1HomeImage";
import { useNavigation } from "@react-navigation/native";
import StyleDefaultDarkModeTrue from "../components/StyleDefaultDarkModeTrue";
import { FontFamily, Padding, FontSize, Border, Color } from "../GlobalStyles";
import { FontAwesome5 } from "@expo/vector-icons";

const QuizFinal = ({route}) => {
  const navigation = useNavigation();
  // const { result } = route.params;
  const [score, setScore] = useState(route.params.score);

  useEffect(() => {
    if (route.params?.score) {
      setScore(route.params.score);
    };
    console.log(route.params.score, " ", score);
  });

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.quizFinal}>
      <Image
        style={[styles.quizFinalChild, styles.quizPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.quizFinalItem, styles.quizPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      
      {/* Header */}
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome5 name="chevron-left" size={30} color="#01427A" />
        </Pressable>
      </View>
      
      {/* Middle rectangle */}

      <View style={styles.rectangleParent}>
        <LinearGradient 
          style={styles.rectangleLineargradient} 
          locations={[0,0.11,1]} 
          colors={['#eff7ff','rgba(221, 236, 254, 0.89)','rgba(66, 141, 248, 0)']} 
          useAngle={true} angle={-45.31} />

        <Text style={styles.title1}>{'Well Done!'}</Text>
        <Image style={styles.checkIcon} resizeMode="cover" source={require("../assets/Check.png")} />

        <View style={styles.startContainer}>
          <Image style={styles.iconStar1} resizeMode="cover" source={require("../assets/Icon-Star.png")} />
          <Image style={styles.iconStar2} resizeMode="cover" source={(score > 3 ) ? require("../assets/Icon-Star.png") : require("../assets/Icon-Star2.png")} />
          <Image style={styles.iconStar3} resizeMode="cover" source={(score > 6 ) ? require("../assets/Icon-Star.png") : require("../assets/Icon-Star2.png")} />
        </View>

        <Text style={styles.youEarned}>You Earned {score ? score : 0} pts</Text>

        <View style={styles.ButtonContainer}>
          <View style={styles.buttonContinue1}>
        <Pressable onPress={() => handleNavigation("LibraryOfResourcesQuizzes")}>
          <Text style={styles.buttonText}>Back To Resources</Text>
        </Pressable>
        </View>

        <View style={styles.buttonContinue2}>
        <Pressable onPress={() => navigation.navigate("Quiz", { correct: false, wrong: false, qnumber: 1})}>
          <Text style={styles.buttonText}>Play Again</Text>
        </Pressable>
        </View>
        </View>


      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavBar}>
        <Pressable onPress={() => handleNavigation("UserProfile")}>
          <Image
            style={styles.bottomNavIcon}
            source={require("../assets/-icon-person-outline.png")}
          />
        </Pressable>
        <Pressable onPress={() => handleNavigation("Educational")}>
          <Image
            style={styles.bottomNavIcon}
            source={require("../assets/-icon-book-saved3.png")}
          />
        </Pressable>
        <Pressable onPress={() => handleNavigation("Forum")}>
          <Image
            style={styles.bottomNavIcon}
            source={require("../assets/-icon-discussion.png")}
          />
        </Pressable>
        <Pressable onPress={() => handleNavigation("Games")}>
          <Image
            style={styles.bottomNavIcon}
            source={require("../assets/-icon-game-controller-outline6.png")}
          />
        </Pressable>
      </View>

      {/* Surface Icon */}
      <Image
        style={styles.surfaceIcon}
        resizeMode="cover"
        source={require("../assets/navigation-barr2.png")}
      />

      {/* Calculator Icon */}
      <Pressable onPress={() => handleNavigation("Calculator")} style={styles.iconCalculatorParent}>
        <Image
          style={styles.iconCalculator}
          resizeMode="cover"
          source={require("../assets/-icon-calculator.png")}
        />
      </Pressable>
  
    </View>
  );
};

const styles = StyleSheet.create({
  iconCalculatorBtn: {
    position: "relative",
  },
  iconCalculatorBtn1: {
    width: 41,
    height: 45,
  },
  rectangleButtonBtn: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleButtonBtn1: {
    borderRadius: 10,
    width: 296,
    height: 64,
  },
  rectangleButton1Btn: {
    left: 0,
    top: 86,
    position: "absolute",
  },
  rectangleButton1Btn1: {
    borderRadius: 10,
    width: 296,
    height: 64,
  },
  navigationIconBtn: {
    left: 13,
    top: 61,
    position: "absolute",
  },
  navigationIconBtn1: {
    width: 24,
    height: 24,
  },
  iconLayout: {
    width: 33,
    marginLeft: 72,
  },
  iconLayout1: {
    height: 30,
    width: 30,
  },
  ptsTypo: {
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
  },
  groupChildLayout: {
    height: 422,
    width: 325,
    position: "absolute",
  },
  titlePosition: {
    left: 0,
    top: 0,
  },
  quizFinalChild: {
    height: 594,
    width: 400,
  },
  quizPosition: {
    top: -80,
    width: 600,
    left: -300,
    position: "absolute",
  },
  quizFinalItem: {
    top: 455,
    height: 417,
  },
  quizPosition1: {
    width: 600,
    left: 50,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconBookSaved: {
    height: 31,
    marginLeft: 72,
  },
  iconDiscussion: {
    marginLeft: 72,
  },
  iconGameControllerOutline: {
    height: 24,
    marginLeft: 72,
  },
  iconPersonOutlineParent: {
    top: 807,
    left: 24,
    width: 385,
    flexDirection: "row",
    alignItems: "flex-end",
    position: "absolute",
  },
  iconCalculatorWrapper: {
    top: 745,
    left: 165,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  playAgain1: {
    color: "#fdfdfd",
    width: 118,
    height: 29,
    textAlign: "center",
    lineHeight: 28,
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
  },
  playAgain: {
    left: 93,
    top: 103,
    position: "absolute",
  },
  backToResources: {
    color: "rgba(255, 255, 255, 0.91)",
    width: 270,
    height: 28,
    textAlign: "center",
    lineHeight: 28,
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
  },
  backToResourcesContainer: {
    left: 15,
    top: 18,
    position: "absolute",
  },
  buttonContinue: {
    top: 550,
    left: 39,
    width: 296,
    height: 150,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: "transparent",
    left: 0,
    top: 0,
  },
  youEarned: {
    fontFamily: FontFamily.nunitoRegular,
  },
  label: {
    top: 292,
    left: 11,
    fontSize: FontSize.primaryText_size,
    lineHeight: 24,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  starIcon: {
    top: 212,
    left: 42,
    width: 124,
    height: 52,
    position: "absolute",
  },
  checkIcon: {
    top: 48,
    left: 12,
    width: 184,
    height: 184,
    position: "absolute",
  },
  title: {
    fontSize: FontSize.size_21xl,
    lineHeight: 36,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorDarkslateblue_100,
    textAlign: "center",
    position: "absolute",
  },
  content: {
    top: 68,
    left: 61,
    width: 209,
    height: 316,
    position: "absolute",
  },
  rectangleParent: {
    top: 102,
    left: 34,
  },
  quizFinal: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    top: 40,
  },
  backButton: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    padding: 25,
  },
  bottomNavBar: {
    flexDirection: "row",
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 10,
    position: "relative",
    zIndex: 2,
  },
  surfaceIcon: {
    flex: 1,
    width: "100%",
    height: 135,
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
  bottomNavIcon: {
    width: 30,
    height: 30,
    marginBottom: 50,
    top: 612,
    absolute: "absolute",
  },
  iconCalculator: {
    top: 728,
    width: 40,
    height: 45,
    alignSelf: "center",
    position: "absolute",
    zIndex: 2,
  },
  iconCalculatorParent: {
    flex: 1,
    position: "absolute",
    width: "100%",
    padding: 10,
    zIndex: 2,
  },
  rectangleParent: {
    top: 32,
    alignContent: "center",
    alignItems: "center",
  },
  rectangleLineargradient: {
    borderRadius: 10,
    width: 296,
    height: 422,
    position: "absolute",
  },
  title1: {
    marginTop: 36,
    fontSize: 40,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
    color: "#01427a",
    textAlign: "center"
  },
  checkIcon: {
    flex: 1,
    width: 184,
    height: 184,
    top: 132,
    position: "absolute",
  },
  startContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: 300,
    position: "absolute",
  },
  iconStar1: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  iconStar2: {
    width: 52,
    height: 52,
    marginRight: 10,
  },
  iconStar3: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  ButtonContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    top: 440,
    position: "absolute",
    width: "100%",
  },
  buttonContinue1: {
    width: 270,
    borderRadius: 10,
    backgroundColor: "#428df8",
    type: "solid",
    padding: 18,
    margin: 10,
  },
  buttonContinue2: {
    width: 270,
    borderRadius: 10,
    backgroundColor: "#428df8",
    type: "solid",
    padding: 18,
    margin: 10,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "600",
    fontFamily: "Nunito-SemiBold",
    color: "rgba(255, 255, 255, 0.91)",
    textAlign: "center",
    height: 28
  },
  youEarned: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Nunito-SemiBold",
    color: "#01427a",
    textAlign: "center",
    top: 390,
    position: "absolute",
  },

});

export default QuizFinal;
