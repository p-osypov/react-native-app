import React from "react";
import { View } from "react-native";
import styles from "./bg-elements.styles";

const Home = () => (
  <View style={styles.container}>
    <View style={[styles.circle, styles.circle1]} />
    <View style={[styles.circle, styles.circle2]} />
    <View style={[styles.circle, styles.circle3]} />
  </View>
);

export default Home;
