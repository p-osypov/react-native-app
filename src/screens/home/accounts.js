import React from "react";
import { View } from "react-native";
import { ThemedText as Text } from "../../theme";
import styles from "./accounts.styles";

const Accounts = ({ accountsData, activeAccount }) => (
  <View style={styles.container}>
    {accountsData.map(({ currency, amount }) => {
      const isActive = activeAccount === currency;
      const extraStyles = isActive ? styles.activeItem : {};
      return (
        <View key={currency} style={[styles.item, extraStyles]}>
          <Text style={styles.itemCurrency}>{currency}</Text>
          <Text style={styles.itemAmount}>{amount}</Text>
        </View>
      );
    })}
  </View>
);

export default Accounts;
