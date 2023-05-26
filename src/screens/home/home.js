import React from "react";
import { View } from "react-native";
import Background from "../../components/background";
import { ThemedText as Text } from "../../theme";
import styles from "./home.styles";
import BgElements from "./bg-elements";

const Home = () => (
  <Background>
    <View style={styles.accountsContainer}>
      <BgElements />
      <View style={styles.accountsContentContainer}>
        <Text style={styles.accountsTitle}>Your accounts</Text>
      </View>
    </View>
    <View style={styles.transactionsContainer}>
      <Text>Transactions</Text>
    </View>
  </Background>
);

export default Home;
