// import * as React from "react";
// import { Image, View, Pressable, Text, TouchableHighlight, StyleSheet } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { useNavigation } from "@react-navigation/native";
// import { FontAwesome5 } from "@expo/vector-icons";
// import TravelCard from "../components/TravelCard";
// import FormContainer from "../components/FormContainer";
// import { Color, FontSize, Padding, Border, FontFamily } from "../GlobalStyles";

// const CalcTrack = () => {
//   const navigation = useNavigation();

//   const handleNavigation = (screen) => {
//     navigation.navigate(screen);
//   };

//   return (
//     <View style={styles.calcTrack}>
//       {/* Background Images */}
//       <Image style={[styles.calcTrackChild, styles.calcLayout]} contentFit="cover" source={require("../assets/ellipse-3.png")} />
//       <Image style={[styles.calcTrackItem, styles.calcLayout]} contentFit="contain" source={require("../assets/ellipse-3.png")} />

//       {/* Back Button */}
//       <View style={styles.backButtonContainer}>
//         <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
//           <FontAwesome5 name="chevron-left" size={30} color="#01427A" />
//         </Pressable>
//       </View>

//       {/* Header Buttons */}
//       <View style={styles.headerButton}>
//         <TouchableHighlight
//           style={[styles.trackingSwitch, styles.trackingLayout]}
//           underlayColor="#fff"
//           activeOpacity={0.2}
//           onPress={() => navigation.navigate("Calculator")}
//         >
//           <>
//             <LinearGradient
//               style={[styles.trackingSwitchChild, styles.trackingLayout]}
//               locations={[0, 1]}
//               colors={["#fff", "rgba(255, 255, 255, 0.46)"]}
//             />
//             <Text style={styles.calculate}>Calculate</Text>
//           </>
//         </TouchableHighlight>

//         <Pressable style={[styles.alternativesSwitch, styles.trackingLayout]}>
//           <LinearGradient
//             style={[styles.trackingSwitchChild, styles.trackingLayout]}
//             locations={[0, 1]}
//             colors={["#428df8", "rgba(66, 141, 248, 0.42)"]}
//           />
//           <Text style={[styles.track, styles.trackTypo]}>Track</Text>
//         </Pressable>
//       </View>

//       {/* Travel Card */}
//       <View style={styles.graphContainer}>
//         <Image style={[styles.graphImage]} contentFit="contain" source={require("../assets/simple-line.png")} />
//       </View>

//       {/* View Reports Button */}
//       <LinearGradient style={styles.button} locations={[0, 1]} colors={["#428df8", "#5a09c1"]}>
//         <Pressable style={styles.pressable} onPress={() => navigation.navigate("CalcTrack2")}>
//           <Text style={[styles.viewReports, styles.trackTypo]}>View Reports</Text>
//         </Pressable>
//       </LinearGradient>

//       {/* Select Category Text */}
//       <Text style={styles.selectCategoryFor}>SELECT CATEGORY FOR HISTORY</Text>

//       {/* Form Containers */}
//       <FormContainer
//         itemType="Food"
//         itemImageCode={require("../assets/iconparksolidgreennewenergy.png")}
//         onGreenMaintainancePress={() => navigation.navigate("FoodTrackReport")}
//       />
//       <FormContainer
//         itemType="Energy"
//         itemImageCode={require("../assets/mingcutepackage2fill.png")}
//         propLeft={149}
//         propBackgroundColor="#01427a"
//         propLeft1={25}
//         onGreenMaintainancePress={() => navigation.navigate("EnergyTrackReport")}
//       />
//       <FormContainer
//         itemType="Travel"
//         itemImageCode={require("../assets/mingcutewalkfill.png")}
//         propLeft={272}
//         propBackgroundColor="#5a09c1"
//         propLeft1={27}
//         onGreenMaintainancePress={() => navigation.navigate("TravelTrackReport")}
//       />

//       {/* Bottom Navigation Bar */}
//       <View style={styles.bottomNavBar}>
//         <Pressable onPress={() => handleNavigation("UserProfile")}>
//           <Image style={styles.bottomNavIcon} source={require("../assets/-icon-person-outline.png")} />
//         </Pressable>
//         <Pressable onPress={() => handleNavigation("Educational")}>
//           <Image style={styles.bottomNavIcon} source={require("../assets/-icon-book-saved3.png")} />
//         </Pressable>
//         <Pressable onPress={() => handleNavigation("Forum")}>
//           <Image style={styles.bottomNavIcon} source={require("../assets/-icon-discussion.png")} />
//         </Pressable>
//         <Pressable onPress={() => handleNavigation("Games")}>
//           <Image style={styles.bottomNavIcon} source={require("../assets/-icon-game-controller-outline6.png")} />
//         </Pressable>
//       </View>

//       {/* Surface Icon */}
//       <Image style={styles.surfaceIcon} resizeMode="cover" source={require("../assets/navigation-barr2.png")} />

//       {/* Calculator Icon */}
//       <Pressable onPress={() => handleNavigation("Calculator")} style={styles.iconCalculatorParent}>
//         <Image style={styles.iconCalculator} resizeMode="cover" source={require("../assets/-icon-calculator.png")} />
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   iconLayout: {
//     width: 33,
//     marginLeft: 72,
//   },
//   iconLayout1: {
//     height: 30,
//     width: 30,
//   },
//   calcTrackItem: {
//     // top: 545,
//     top: 400,
//     height: 430
//   },
//   calcLayout: {
//     width: 600,
//   },
//   calcTrackChild: {
//     height: 255,
//     top: 0,
//     right: 140,
//   },
//   backButtonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     position: "absolute",
//     top: 54,
//     left: 16,
//   },
//   backButton: {
//     flex: 1,
//     width: "100%",
//     overflow: "hidden",
//     padding: 10,
//   },
//   iconCalculator: {
//     width: 41,
//     height: 45,
//   },
//   iconCalculatorWrapper: {
//     top: 745,
//     left: 165,
//     padding: Padding.p_3xs,
//     position: "absolute",
//   },
//   headerButton: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     position: "absolute",
//     top: 54,
//     width: "100%",
//     zIndex: 2,
//   },
//   trackingLayout: {
//     height: 51,
//     width: 165,
//     position: "absolute",
//   },
//   trackingSwitch: {
//     left: 20,
//     top: 71,
//     width: 165,
//   },
//   trackingSwitchChild: {
//     borderRadius: Border.br_sm,
//     backgroundColor: "transparent",
//     width: 165,
//     left: 0,
//     top: 0,
//   },
//   graphContainer: {
//     top: 120,
//     width: "100%",
//     height: 300,
//     position: "absolute",
//     zIndex: 1,
//     paddingRight: 20,
//     paddingLeft: 20,
//     alignItems: "center",
//   },
//   graphImage: {
//     width: "100%",
//     height: "100%",
//   },
//   calculate: {
//     left: 43,
//     fontWeight: "600",
//     fontFamily: FontFamily.poppinsSemiBold,
//     color: Color.colorGray_400,
//     textAlign: "center",
//     fontSize: FontSize.bodyBody1_size,
//     top: 13,
//     position: "absolute",
//   },
//   track: {
//     left: 60,
//     fontWeight: "500",
//     fontFamily: FontFamily.poppinsMedium,
//     top: 13,
//     color: Color.labelDarkPrimary,
//     position: "absolute",
//   },
//   alternativesSwitch: {
//     left: 205,
//     top: 71,
//     width: 165,
//   },
//   button: {
//     left: 39,
//     top: 435,
//     width: 315,
//     position: "absolute",
//     borderRadius: Border.br_11xl,
//   },
//   pressable: {
//     borderRadius: Border.br_11xl,
//     alignItems: "center",
//     justifyContent: "center",
//     paddingHorizontal: Padding.p_5xl,
//     paddingVertical: 14,
//     backgroundColor: "transparent",
//     flexDirection: "row",
//     width: "100%",
//   },
//   trackTypo: {
//     color: Color.labelDarkPrimary,
//     textAlign: "center",
//     // fontSize: FontSize.bodyBody1,
//     fontSize: 18,
//   },
//   viewReports: {
//     letterSpacing: 1,
//     lineHeight: 24,
//     fontFamily: FontFamily.nunitoBold,
//     fontWeight: "700",
//     flex: 1,
//   },
//   selectCategoryFor: {
//     top: 515,
//     left: 37,
//     fontSize: FontSize.primaryText_size,
//     fontFamily: FontFamily.robotoBold,
//     color: Color.colorDarkslateblue_100,
//     textAlign: "left",
//     fontWeight: "700",
//     position: "absolute",
//     paddingRight: 10,
//     paddingLeft: 10,
//   },
//   calcTrack: {
//     backgroundColor: Color.labelDarkPrimary,
//     height: 852,
//     overflow: "hidden",
//     width: "100%",
//     flex: 1,
//   },
//   surfaceIcon: {
//     flex: 1,
//     width: "100%",
//     height: 135,
//     position: "absolute",
//     bottom: 0,
//     zIndex: 1,
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
//   bottomNavIcon: {
//     width: 30,
//     height: 30,
//     top: 70,
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
// });

// export default CalcTrack;


import * as React from "react";
import { Image, View, Pressable, Text, TouchableHighlight, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import FormContainer from "../components/FormContainer";
import { Color, FontSize, Padding, Border, FontFamily } from "../GlobalStyles";
import { LineChart } from "react-native-chart-kit";
import {getDatabase, onValue, ref, set} from "firebase/database";
import { getAuth} from 'firebase/auth';
import { app } from "../App";
import { useState, useEffect } from "react";
 
const CalcTrack = () => {
  const navigation = useNavigation();
 
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };
 
  console.log('creating arrays');
  const [energyData, setEnergyData] = useState([]);
  console.log('first array');
  const [travelData, setTravelData] = useState([]);
  // Create a reference to the database
  const database = getDatabase();
  const auth = getAuth(app);
  const travelRef = ref(database, 'footprint-travel/');
  const energyRef = ref(database, 'footprint-energy/');
 
  const fetchData = async () => {
    try
    {
      console.log('data loading');
      const email = auth.currentUser.email;
      console.log('got email');
      onValue(energyRef, (snapshotE) => {
        let energyD = [];
        const energies = snapshotE.val();
        console.log('got energies')
        Object.values(energies).forEach(entry => {
          if(entry.email.toLowerCase() === email)
          {
            console.log('got matching e users');
            energyD.push({
              x: new Date(entry.date).getTime(),
              y: entry.result,
            });
            console.log('pushed e');
          }
        });
      })
 
      onValue(travelRef, (snapshotT) => {
        let travelD = [];
        const travels = snapshotT.val();
        Object.values(travels).forEach(entry => {
          if(entry.email.toLowerCase() === email)
          {
            console.log('got matching t users');
            travelD.push({
              x: new Date(entry.date).getTime(),
              y: entry.result,
            });
            console.log('pushed t');
          }
        });
      })
      console.log('setting state');
      // Set state
      setEnergyData(energyD);
      console.log('set state e');
      setTravelData(travelD);
      console.log('set state t');
    }
    catch(err)
    {
      alert("Error fetching data: " + err.message);
    }
  }
 
  useEffect(() => {
    fetchData();
  }, []);
 
  function getLastDate(data)
  {
    return data.reduce((max, point) => {
      return point.x > max ? point.x : max
    }, 0)
  }
    const maxDate = Math.max(getLastDate(energyData), getLastDate(travelData))
 
    function getLabels(maxDate)
    {
      const labels = []
      const current = new Date(maxDate)
      current.setMonth(current.getMonth() - 3)
      while (current <= maxDate)
      {
        labels.push(current)
        current.setDate(current.getDate() + 1)
      }
      return labels;
    }
 
  const labels = getLabels(maxDate)
 
  return (
    <View style={styles.calcTrack}>
      {/* Background Images */}
      <Image style={[styles.ellipse1, styles.calcLayout]} contentFit="cover" source={require("../assets/ellipse-3.png")} />
      <Image style={[styles.ellipse2, styles.calcLayout]} contentFit="contain" source={require("../assets/ellipse-3.png")} />
 
      {/* Back Button */}
      
      <View style={styles.backButtonContainer}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <FontAwesome5 name="chevron-left" size={30} color="#01427A" />
        </Pressable>
      </View>
     
 
      {/* Header Buttons */}
      <View style={styles.headerButton}>
        <TouchableHighlight
          style={[styles.trackingSwitch, styles.trackingLayout]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Calculator")}
        >
          <>
            <LinearGradient
              style={[styles.trackingSwitchChild, styles.trackingLayout]}
              locations={[0, 1]}
              colors={["#fff", "rgba(255, 255, 255, 0.46)"]}
            />
            <Text style={styles.calculate}>Calculate</Text>
          </>
        </TouchableHighlight>
 
        <Pressable style={[styles.alternativesSwitch, styles.trackingLayout]}>
          <LinearGradient
            style={[styles.trackingSwitchChild, styles.trackingLayout]}
            locations={[0, 1]}
            colors={["#428df8", "rgba(66, 141, 248, 0.42)"]}
          />
          <Text style={[styles.track, styles.trackTypo]}>Track</Text>
        </Pressable>
      </View>
 
      <View style={styles.graphContainer}>
      <LineChart
        data={{
          //labels: energyData.map(data => data.label),
          //labels,
          datasets: [
            {
              data: energyData.map(data => ({
                x: data.x,
                y: data.y
              })),
              color: (opacity = 1) => `rgba(1, 66, 122, ${opacity})`,
            },
            {
              data: travelData.map(data => ({
                x: data.x,
                y: data.y
              })),  
              color: (opacity = 1) => `rgba(90, 9, 193, ${opacity})`  
            }
          ]
          }}
      width={Dimensions.get("window").width} // responsive size
      height={270}
      yAxisLabel="Carbon Emissions"
      yAxisSuffix=" kg"
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 1, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style:
        {
          borderRadius: 16
        },
        propsForDots:
        {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726"
        }
      }}
      />
      </View>
 
      {/* View Reports Button */}
      <LinearGradient style={styles.button} locations={[0, 1]} colors={["#428df8", "#5a09c1"]}>
        <Pressable style={styles.pressable} onPress={() => navigation.navigate("CalcTrack2")}>
          <Text style={[styles.viewReports, styles.trackTypo]}>View Reports</Text>
        </Pressable>
      </LinearGradient>
 
      {/* Select Category Text */}
      <Text style={styles.selectCategoryFor}>SELECT CATEGORY FOR HISTORY</Text>
 
      {/* Form Containers */}
      <FormContainer
        itemType="Food"
        itemImageCode={require("../assets/iconparksolidgreennewenergy.png")}
        onGreenMaintainancePress={() => navigation.navigate("FoodTrackReport")}
      />
      <FormContainer
        itemType="Energy"
        itemImageCode={require("../assets/mingcutepackage2fill.png")}
        propLeft={149}
        propBackgroundColor="#01427a"
        propLeft1={25}
        onGreenMaintainancePress={() => navigation.navigate("EnergyTrackReport")}
      />
      <FormContainer
        itemType="Travel"
        itemImageCode={require("../assets/mingcutewalkfill.png")}
        propLeft={272}
        propBackgroundColor="#5a09c1"
        propLeft1={27}
        onGreenMaintainancePress={() => navigation.navigate("TravelTrackReport")}
      />
 
      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavBar}>
        <Pressable onPress={() => handleNavigation("UserProfile")}>
          <Image style={styles.bottomNavIcon} source={require("../assets/-icon-person-outline.png")} />
        </Pressable>
        <Pressable onPress={() => handleNavigation("Educational")}>
          <Image style={styles.bottomNavIcon} source={require("../assets/-icon-book-saved3.png")} />
        </Pressable>
        <Pressable onPress={() => handleNavigation("Forum")}>
          <Image style={styles.bottomNavIcon} source={require("../assets/-icon-discussion.png")} />
        </Pressable>
        <Pressable onPress={() => handleNavigation("Games")}>
          <Image style={styles.bottomNavIcon} source={require("../assets/-icon-game-controller-outline6.png")} />
        </Pressable>
      </View>
 
      {/* Surface Icon */}
      <Image style={styles.surfaceIcon} resizeMode="cover" source={require("../assets/navigation-barr2.png")} />
 
      {/* Calculator Icon */}
      <Pressable onPress={() => handleNavigation("Calculator")} style={styles.iconCalculatorParent}>
        <Image style={styles.iconCalculator} resizeMode="cover" source={require("../assets/-icon-calculator.png")} />
      </Pressable>
    </View>
  );
};
 
const styles = StyleSheet.create({
  iconLayout: {
    width: 33,
    marginLeft: 72,
  },
  iconLayout1: {
    height: 30,
    width: 30,
  },
  ellipse2: {
    top: 545,
    height: 400,
    width: 550,
    left: 45,
    position: "absolute",
  },
  ellipse1: {
    top: -115,
    height: 400,
    width: 550,
    left: -210,
    position: "absolute",
  },
  backButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 54,
    left: 16,
  },
  backButton: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    padding: 10,
  },
  iconCalculator: {
    width: 41,
    height: 45,
  },
  iconCalculatorWrapper: {
    top: 745,
    left: 165,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  headerButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 54,
    width: "100%",
    zIndex: 2,
  },
  trackingLayout: {
    height: 51,
    width: 165,
    position: "absolute",
  },
  trackingSwitch: {
    left: 20,
    top: 71,
    width: 165,
  },
  trackingSwitchChild: {
    borderRadius: Border.br_sm,
    backgroundColor: "transparent",
    width: 165,
    left: 0,
    top: 0,
  },
  graphContainer: {
    top: 120,
    width: "100%",
    height: 300,
    position: "absolute",
    zIndex: 1,
    paddingRight: 20,
    paddingLeft: 20,
    alignItems: "center",
  },
  graphImage: {
    width: "100%",
    height: "100%",
  },
  calculate: {
    left: 43,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorGray_400,
    textAlign: "center",
    fontSize: FontSize.bodyBody1_size,
    top: 13,
    position: "absolute",
  },
  track: {
    left: 60,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    top: 13,
    color: Color.labelDarkPrimary,
    position: "absolute",
  },
  alternativesSwitch: {
    left: 205,
    top: 71,
    width: 165,
  },
  button: {
    left: 39,
    top: 435,
    width: 315,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  pressable: {
    borderRadius: Border.br_11xl,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 14,
    backgroundColor: "transparent",
    flexDirection: "row",
    width: "100%",
  },
  trackTypo: {
    color: Color.labelDarkPrimary,
    textAlign: "center",
    // fontSize: FontSize.bodyBody1,
    fontSize: 18,
  },
  viewReports: {
    letterSpacing: 1,
    lineHeight: 24,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    flex: 1,
  },
  selectCategoryFor: {
    top: 515,
    left: 37,
    fontSize: FontSize.primaryText_size,
    fontFamily: FontFamily.robotoBold,
    color: Color.colorDarkslateblue_100,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
    paddingRight: 10,
    paddingLeft: 10,
  },
  calcTrack: {
    backgroundColor: Color.labelDarkPrimary,
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  surfaceIcon: {
    flex: 1,
    width: "100%",
    height: 135,
    position: "absolute",
    bottom: 0,
    zIndex: 1,
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
  bottomNavIcon: {
    width: 30,
    height: 30,
    top: 700,
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
});
 
export default CalcTrack;