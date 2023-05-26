import React from "react";
import { StyleSheet, View } from "react-native";
import Background from "../../components/background";
import { ThemedText as Text } from "../../theme";

const styles = StyleSheet.create({
  accountsContainer: {
    color: "white",
    flex: 1,
  },
  transactionsContainer: {
    color: "white",
    flex: 1,
  },
});

const Home = () => (
  <Background>
    <View style={styles.accountsContainer}>
      <Text>Home Screen</Text>
    </View>
    <View style={styles.transactionsContainer}>
      <Text>Transactions</Text>
    </View>
  </Background>
);

export default Home;
