// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { Home } from './src/screens/Home'

// const GameScreen = () => {
//   return (
//     <>

//       <Home />
//     </>
//   );
// };

// export default GameScreen;
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Home } from './src/screens/Home';
import { Pressable, StatusBar, } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const GameScreen = () => {
  const navigation = useNavigation();
  const [showGame, setShowGame] = useState(true);

  const handleBackPress = () => {
    navigation.navigate("GameSelectedScreen");
  };

  return (
    <View style={styles.container}>
      {showGame ? (
        <>
          {/* Header */}
          <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <FontAwesome5 name="chevron-left" size={30} color="#01427A" />
          </Pressable>
          </View>

          <Home />
        </>
      ) : (
        <Home />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
  },
  gameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameText: {
    fontSize: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    top: 60,
    left: 20,
    zIndex: 1,
  },
  backButton: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    padding: 10,
  },
});

export default GameScreen;
