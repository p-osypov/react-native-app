import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Background from "../../components/background";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const Home = () => (
  <Background>
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  </Background>
);

export default Home;
