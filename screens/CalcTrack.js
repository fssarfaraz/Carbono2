import * as React from "react";
import { Image, View, Pressable, Text, TouchableHighlight, StyleSheet, Dimensions, Button } from "react-native";
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

  //declaring arrays and boolean
  const [energyData, setEnergyData] = useState([]);
  const [travelData, setTravelData] = useState([]);
  const [showChart, setShowChart] = useState(false);
  const [gotEnergy, setGotEnergy] = useState(false);
  const [gotTravel, setGotTravel] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Create a reference to the database
  const database = getDatabase();
  const auth = getAuth(app);

  //fetching footprint data from database
  const handleLoadChart = () => {
    const email = auth.currentUser.email;
    console.log("waiting for energieeee and traveld");
  
    //fetching energy data
    const energyRef = ref(database, "footprint-energy/");
    //getting a all the energy data available at reference
    onValue(energyRef, (snapshot) => {
      const data = snapshot.val();
      //filtering data to only those of the current user and then storing id, date and result in array
      const energieee = Object.entries(data).filter(([key, value]) => value.email.toLowerCase() === email)
      .map(([id, entry]) => ({
        id,
        x: entry.date,  
        y: entry.result
      }));
      //if data is not empty
      if (energieee.length > 0) 
      {
        console.log('Energies:', energieee);
        setEnergyData(energieee);
        setGotEnergy(true);
      } 
      else 
      {
        console.log("No energy data found for current user");
        setEnergyData([]);
      }
      setIsLoading(false);
    });
  
    const travelRef = ref(database, "footprint-travel/");
    onValue(travelRef, (snapshot) => {
      const data = snapshot.val();
      const travelss = Object.entries(data).filter(([key, value]) => value.email.toLowerCase() === email)
      .map(([id, entry]) => ({
        id,
        x: entry.date,  
        y: entry.result
      }));

      if (travelss.length > 0) 
      {
        console.log('Travel:', travelss);
        setTravelData(travelss);
        setGotTravel(true);
      } 
      else 
      {
        console.log("No travel data found for current user");
        setTravelData([]);
      }
      setIsLoading(false);
    });
      if (energyData.length > 0 && travelData.length > 0) {
        setShowChart(true);
        console.log('Displaying chart');
      }
      else
      {
        console.log('Cannot display chart');
      }
  };

  const labelLength = (mappedEnergyData, mappedTravelData) => {
    if(mappedEnergyData.length > mappedTravelData.length)
    {
        labels = Array(mappedEnergyData.length).fill(0).map((_,i) => i);
        return labels;
    }
    else
    {
      labels = Array(mappedTravelData.length).fill(0).map((_,i) => i);
      return labels;
    }
  }

  const renderChart = () => {
    console.log('in render chart');
    if (energyData.length > 0 && travelData.length > 0 && !isLoading) 
    {
      console.log('in if statement')
      let mappedEnergyData;
      let mappedTravelData;
      console.log('mapping energy data')

      mappedEnergyData = energyData.map(data => data.y);
      mappedTravelData = travelData.map(data => data.y);
      console.log('mapped energy data');
      console.log(mappedEnergyData);
      console.log(mappedTravelData);
        
      const chartConfig = {
        backgroundGradientFrom: "#ffffff",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "#ffffff",
        backgroundGradientToOpacity: 1,
        strokeWidth: 3, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: true, // optional
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      };

      const screenWidth = Dimensions.get("window").width;
      console.log('Got screen width');
      const labels = labelLength(mappedEnergyData, mappedTravelData);
      console.log("got labels");
      return (
        <LineChart
          data=
          {{
            labels,
            datasets: 
            [
            {
              data: mappedEnergyData,
              color: (opacity = 1) => `rgba(1, 66, 122, ${opacity})`,
            },
            
            {
              data: mappedTravelData,
              color: (opacity = 1) => `rgba(90, 9, 193, ${opacity})`,
            }
            ],
            legend: ["Energy", "Travel"]
          }}
          width={screenWidth}
          height={238}
          chartConfig={chartConfig}
          bezier
        />
      )
    }
  };

  return (
    <View style={styles.calcTrack}>
      {/* Background Images */}
      <Image style={[styles.ellipse1]} contentFit="cover" source={require("../assets/ellipse-3.png")} />
      <Image style={[styles.ellipse2]} contentFit="contain" source={require("../assets/ellipse-3.png")} />

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
      <Button style={styles.loadChartButton} title="Load Chart" disabled={showChart} onPress={() => {
        if (!showChart) 
        {
          handleLoadChart();
        }
      }} />
      {showChart && renderChart()}
      </View>

      {/* View Reports Button */}
      <LinearGradient style={styles.button} locations={[0, 1]} colors={["#428df8", "#5a09c1"]}>
        <Pressable style={styles.pressable} onPress={() => {
          if (showChart) 
          {
            navigation.navigate("CalcTrack2", {energyData, travelData});
          } else 
          {
            alert("Please load the chart first");
          }
        }}>
          <Text style={[styles.viewReports, styles.trackTypo]}>View Reports</Text>
        </Pressable>
      </LinearGradient>

      {/* Select Category Text */}
      <Text style={styles.selectCategoryFor}>SELECT CATEGORY FOR HISTORY</Text>
      
      <View style={styles.formSection}>
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
        onGreenMaintainancePress={() => {
          if (showChart)
          {
            navigation.navigate("EnergyTrackReport", {energyData})
          }
          else
          {
            alert("Please load the chart first");
          }
        }}
      />
      
      <FormContainer
        itemType="Travel"
        itemImageCode={require("../assets/mingcutewalkfill.png")}
        propLeft={272}
        propBackgroundColor="#5a09c1"
        propLeft1={27}
        onGreenMaintainancePress={() => {
          if (showChart)
          {
            navigation.navigate("TravelTrackReport", {travelData})
          }
          else
          {
            alert("Please load the chart first");
          }
        }}
      />

      </View>

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
    zIndex: 2,
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
    top: 300,
    width: "80%",
    height: 40,
    position: "absolute",
    zIndex: 1,
    paddingRight: 20,
    paddingLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    BorderRadius: 20,
  },
  loadChartButton: {
    left: 39,
    top: 400,
    width: 315,
    position: "absolute",
    borderRadius: Border.br_11xl,
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
    top: 505,
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
    top: 575,
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
    top: 755,
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
  backButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 54,
    left: 16,
    zIndex: 2,
  },
  backButton: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    padding: 10,
  },
  FormContainer: {
    top: 40,
    width: "100%",
    height: 103,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1,
  },
  formSection: {
    top: 40,
    width: "100%",
    height: 103,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1,
  },
  backButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 54,
    left: 16,
    zIndex: 4,
  },
  backButton: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    padding: 10,
  },
});
 
export default CalcTrack;