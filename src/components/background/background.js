import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
function Background({ children }) {
  return (
    <LinearGradient
      // Gradient colors
      colors={["#343338", "#29282D", "#222222"]}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
}

export default Background;
