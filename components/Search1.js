import * as React from "react";
import { TextInput, StyleSheet } from "react-native";

const Search1 = () => {
  return <TextInput style={styles.search} />;
};

const styles = StyleSheet.create({
  search: {
    position: "absolute",
    top: 147,
    left: 31,
    width: 295,
    height: 40,
  },
});

export default Search1;
