import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { ThemedText as Text } from "../../theme";
import styles from "./accounts.styles";

const Accounts = ({ accountsData, activeAccount, onPressAccount }) => (
  <View style={styles.container}>
    {accountsData.map(({ currency, amount }) => {
      const isActive = activeAccount === currency;
      const extraStyles = isActive ? styles.activeItem : {};
      return (
        <TouchableWithoutFeedback
          onPress={onPressAccount(currency)}
          key={currency}
        >
          <View style={[styles.item, extraStyles]}>
            <Text style={styles.itemCurrency}>{currency}</Text>
            <Text style={styles.itemAmount}>{amount}</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    })}
  </View>
);

export default Accounts;
