/*
Date: 19/11/2023
Screen: Component for Tracking and Displaying Energy and Travel Data
Purpose: This component is responsible for displaying and managing the tracking and visualization of energy and travel data for the user.
  It includes a chart for displaying the data, options to load the chart, and navigation to view reports.
*/

// Import necessary libraries and components

import React, { useState } from "react";
// Import React and useState hook
import { Image } from "expo-image";
// Import Image component from Expo
import { StyleSheet, View, Pressable, Text, Dimensions } from "react-native";
// Import styling components from React Native
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
// Import Datepicker component from UI Kitten
import { useNavigation } from "@react-navigation/native";
// Import useNavigation hook for navigation
import { FontAwesome5 } from "@expo/vector-icons";
// Import FontAwesome5 icons from Expo
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";
// Import global styles
import { useRoute } from '@react-navigation/native';
// Import useRoute hook for route information
import { LineChart } from "react-native-chart-kit";
// Import LineChart component for chart visualization

const CalcTrack2 = () => {
  // State for selected date
  const [selectDatePicker, setSelectDatePicker] = useState(undefined);
  const navigation = useNavigation();

  // Function to handle navigation
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  const route = useRoute();

  // Extract energyData and travelData from route params
  const {energyData, travelData} = route.params;
  console.log("Energy: ", energyData);
  console.log("Travel: ", travelData);

 // Function to determine label length based on data
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

  // Function to format date
  const formatDate = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    return formattedDate;
  }

  // Function to render the chart based on data
  const renderChart = () => {
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

    // Render chart for energyData when travelData is empty
    if(energyData.length > 0 && travelData.length === 0)
    {
      if (selectDatePicker)
      {
        const formattedDate = selectDatePicker.toISOString().split('T')[0];

        const selectedEnergyData = Object.entries(energyData).filter(([key, value]) => value.x === formattedDate)
        .map(([id, entry]) => ({
          id,
          x: entry.x,  
          y: entry.y
        }));
        
        if (selectedEnergyData.length === 0) 
        {
          alert("No entries found for the selected date.");
        }
        else
        {
          console.log('matching entries found');
          let mappedEnergyData;
          mappedEnergyData = selectedEnergyData.map(data => data.y);

          let sumE = 0;
          for(let i = 0; i < mappedEnergyData.length; i++) 
          {
            sumE += mappedEnergyData[i];
          }

          const labels = Array(mappedEnergyData.length).fill(0).map((_,i) => i);
          const screenWidth = Dimensions.get("window").width;
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
                ],
                legend: ["Energy"]
              }}
              width={screenWidth}
              height={238}
              chartConfig={chartConfig}
            />
          )
        }
      }
      else
      {
        console.log('energyData.length > 0 && travelData.length == 0');
        let mappedEnergyData;
        mappedEnergyData = energyData.map(data => data.y);

        let sumE = 0;
        for(let i = 0; i < mappedEnergyData.length; i++) 
        {
          sumE += mappedEnergyData[i];
        }

        const labels = Array(mappedEnergyData.length).fill(0).map((_,i) => i);
        const screenWidth = Dimensions.get("window").width;
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
              ],
              legend: ["Energy"]
            }}
            width={screenWidth}
            height={238}
            chartConfig={chartConfig}
          />
        )
      }
    }

    // Render chart for travelData when energyData is empty
    if(energyData.length == 0 && travelData.length > 0)
    {
      if (selectDatePicker)
      {
        const formattedDate = selectDatePicker.toISOString().split('T')[0];
        console.log('formatted: ', formattedDate);

        const selectedTravelData = Object.entries(travelData).filter(([key, value]) => value.x === formattedDate)
        .map(([id, entry]) => ({
          id,
          x: entry.x,  
          y: entry.y
        }));
        
        if (selectedTravelData.length === 0) 
        {
          alert("No entries found for the selected date.");
        }
        else
        {
          console.log('matching entries found');
          let mappedTravelData;
          mappedTravelData = selectedTravelData.map(data => data.y);

          let sumT = 0;
          for(let i = 0; i < mappedTravelData.length; i++) 
          {
            sumT += mappedTravelData[i];
          }

          const labels = Array(mappedTravelData.length).fill(0).map((_,i) => i);
          const screenWidth = Dimensions.get("window").width;
          return (
            <LineChart
              data=
              {{
                labels,
                datasets: 
                [
                {
                  data: mappedTravelData,
                  color: (opacity = 1) => `rgba(90, 9, 193, ${opacity})`,
                },
                ],
                legend: ["Travel"]
              }}
              width={screenWidth}
              height={238}
              chartConfig={chartConfig}
            />
          )
        }
      }
      else
      {
        console.log('energyData.length == 0 && travelData.length > 0');
        let mappedTravelData;
        mappedTravelData = travelData.map(data => data.y);

        let sumT = 0;
        for(let i = 0; i < mappedTravelData.length; i++) 
        {
          sumT += mappedTravelData[i];
        }

        // Create an array of labels for the LineChart based on data length
        const labels = Array(mappedTravelData.length).fill(0).map((_,i) => i);
        const screenWidth = Dimensions.get("window").width;
        return (
          <LineChart
            data=
            {{
              labels,
              datasets: 
              [
              {
                data: mappedTravelData,
                color: (opacity = 1) => `rgba(90, 9, 193, ${opacity})`,
              },
              ],
              legend: ["Travel"]
            }}
            width={screenWidth}
            height={238}
            chartConfig={chartConfig}
          />
        )
      }
    }
    
    // Render chart for both energyData and travelData when both have data
    if(energyData.length > 0 && travelData.length > 0)
    {
      if (selectDatePicker)
      {
        const formattedDate = selectDatePicker.toISOString().split('T')[0];
        console.log('formatted: ', formattedDate);

        const selectedTravelData = Object.entries(travelData).filter(([key, value]) => value.x === formattedDate)
        .map(([id, entry]) => ({
          id,
          x: entry.x,  
          y: entry.y
        }));

        // Select energyData entries for the selected date
        const selectedEnergyData = Object.entries(energyData).filter(([key, value]) => value.x === formattedDate)
        .map(([id, entry]) => ({
          id,
          x: entry.x,  
          y: entry.y
        }));
        
        // Check if both energyData and travelData have entries for the selected date
        if (selectedTravelData.length === 0 && selectedEnergyData.length === 0) 
        {
          alert("No entries found for the selected date.");
        }
        else if (selectedEnergyData.length > 0 && selectedTravelData.length > 0)
        {
          console.log('energyData.length > 0 && travelData.length > 0');
          let mappedEnergyData;
          mappedEnergyData = selectedEnergyData.map(data => data.y);

          let sumE = 0;
          for(let i = 0; i < mappedEnergyData.length; i++) 
          {
            sumE += mappedEnergyData[i];
          }

          let mappedTravelData;
          mappedTravelData = selectedTravelData.map(data => data.y);

          let sumT = 0;
          for(let i = 0; i < mappedTravelData.length; i++) 
          {
            sumT += mappedTravelData[i];
          }

           // Determine label length based on data
          const labels = labelLength(mappedEnergyData, mappedTravelData);
          const screenWidth = Dimensions.get("window").width;
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
            />
          )
        }
        else if (selectedEnergyData.length > 0 && selectedTravelData.length === 0)
        {
          console.log('matching entries found');
          let mappedEnergyData;
          mappedEnergyData = selectedEnergyData.map(data => data.y);

          let sumE = 0;
          for(let i = 0; i < mappedEnergyData.length; i++) 
          {
            sumE += mappedEnergyData[i];
          }

          const labels = Array(mappedEnergyData.length).fill(0).map((_,i) => i);
          const screenWidth = Dimensions.get("window").width;
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
                ],
                legend: ["Energy"]
              }}
              width={screenWidth}
              height={238}
              chartConfig={chartConfig}
            />
          )
        }
        else if (selectedEnergyData.length === 0 && selectedTravelData.length > 0)
        {
          console.log('matching entries found');
          let mappedTravelData;
          mappedTravelData = selectedTravelData.map(data => data.y);

          let sumT = 0;
          for(let i = 0; i < mappedTravelData.length; i++) 
          {
            sumT += mappedTravelData[i];
          }

          const labels = Array(mappedTravelData.length).fill(0).map((_,i) => i);
          const screenWidth = Dimensions.get("window").width;
          return (
            <LineChart
              data=
              {{
                labels,
                datasets: 
                [
                {
                  data: mappedTravelData,
                  color: (opacity = 1) => `rgba(90, 9, 193, ${opacity})`,
                },
                ],
                legend: ["Travel"]
              }}
              width={screenWidth}
              height={238}
              chartConfig={chartConfig}
            />
          )
        }
      }
      else
      {
        console.log('energyData.length > 0 && travelData.length > 0');
        let mappedEnergyData;
        mappedEnergyData = energyData.map(data => data.y);

        let sumE = 0;
        for(let i = 0; i < mappedEnergyData.length; i++) 
        {
          sumE += mappedEnergyData[i];
        }

        let mappedTravelData;
        mappedTravelData = travelData.map(data => data.y);

        let sumT = 0;
        for(let i = 0; i < mappedTravelData.length; i++) 
        {
          sumT += mappedTravelData[i];
        }

        // Determine label length based on data
        const labels = labelLength(mappedEnergyData, mappedTravelData);
        const screenWidth = Dimensions.get("window").width;
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
          />
        )
      }
    }

    // Handle case when both energyData and travelData are empty
    if(energyData.length == 0 && travelData.length == 0)
    {
      console.error('No Data');
      alert('No data to render report');
    }
  }

  // Check if a date is selected and format it
  if (selectDatePicker)
  {
    const formattedDate = selectDatePicker.toISOString().split('T')[0];
    console.log('formatted: ', formattedDate);
  }

  return (
    // Render the main view
    <View style={[styles.calcTrack2, styles.iconLayout2]}>
      <Image
        style={[styles.ellipse1]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.ellipse2]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      
      {/* Back Button */}
      <View style={styles.backButtonContainer}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <FontAwesome5 name="chevron-left" size={30} color="#01427A" />
        </Pressable>
      </View>
      
      {/* Select Date Range Text */}
      <Text style={[styles.selectDateRange, styles.selectPosition]}>
        SELECT DATE RANGE
      </Text>
      
      {/* Rectangle View */}
      <View style={styles.rectangleView}>
        <Text style={styles.primaryText1}>Your Footprint for {selectDatePicker ? formatDate(selectDatePicker) : "-"}</Text>
        <Image style={styles.vectorIcon} resizeMode="cover" source={require("../assets/vector16.png")} />
        {renderChart()}
      </View>

      {/* <DateRangeContainer /> */}
      <RNKDatepicker
        style={[styles.select, styles.selectPosition]}
        placeholder={() => (
          <View style={[styles.stateactive, styles.line1Border]}>
            <Text style={styles.option}>Date Range</Text>
            <View style={[styles.line1, styles.line1Border]} />
            <Image style={styles.iconChevrondown} resizeMode="cover" source={require("../assets/icon--chevron-down.png")} />
          </View>
        )}
        date={selectDatePicker}
        onSelect={setSelectDatePicker}
        controlStyle={styles.selectDatePickerValue}
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
  // Styles for various components and elements go here
  selectDatePickerPlaceHolder: {
    fontFamily: "FiraSans-Regular",
    color: "#131414",
    fontSize: 14,
  },
  selectDatePickerValue: {
    position: "absolute",
    left: 29,
    top: 173,
  },
  iconLayout2: {
    overflow: "hidden",
    width: "100%",
  },
  iconLayout: {
    width: 33,
    marginLeft: 72,
  },
  selectDateRange: {
    top: 100,
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.colorDarkslateblue_100,
    textAlign: "center",
    alignSelf: "center",
  },
  selectPosition: {
    position: "absolute",
  },
  line1Border: {
    // borderColor: "#131414",
    borderStyle: "solid"
  },
  option: {
    fontSize: 14,
    letterSpacing: -0.2,
    lineHeight: 18,
    fontFamily: "FiraSans-Regular",
    // color: "#131414",
    textAlign: "left"
  },
  line1: {
    borderRightWidth: 1,
    width: 1,
    height: 13,
    marginLeft: 8
  },
  iconChevrondown: {
    width: 16,
    height: 16,
    overflow: "hidden",
    marginLeft: 8
  },
  stateactive: {
    borderRadius: 5,
    borderWidth: 1,
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 12,
    paddingTop: 6,
    paddingRight: 8,
    paddingBottom: 6
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
  rectangleView: {
    alignSelf: "center",
    left: 5,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: 
    {
      width: 0,
      height: 2
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    flex: 1,
    width: "90%",
    height: 436,
    top: 260,
  },
  primaryText1: {
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Inter-Medium",
    color: "#000",
    textAlign: "center",
    marginTop: 30,
    paddingLeft: 16,
    paddingRight: 16,
  },
  vectorIcon: {
    height: 2,
    top: 30,
  },
  donutIcon: {
    width: 250,
    height: 250,
    top: 50,
    alignSelf: "center",
  },
  foodParent: {
    top: 60,
    flexDirection: 'row',
    justifyContent: 'space-around', // or 'space-between' for equal space
    alignItems: 'center',
  },
  groupContainer: {
    alignItems: 'center',
    marginHorizontal: 10, // Adjust the spacing between elements
  },
  groupLayout: {
    width: 13, // Adjust the width as needed
    height: 13, // Adjust the height as needed
  },
  foodTypo: {
    fontSize: 15,
    fontFamily: "Inter-Regular",
    color: "#000",
  },  
  ellipse1: {
    top: -115,
    height: 400,
    width: 550,
    left: -210,
    position: "absolute",
  },
  ellipse2: {
    top: 545,
    height: 400,
    width: 550,
    left: 0,
    position: "absolute",
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
  select: {
    top: 15,
  },
  calcTrack2: {
    backgroundColor: Color.labelDarkPrimary,
    flex: 1,
    height: 852,
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
    flex: 1,
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
    top: 155,
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

export default CalcTrack2;
