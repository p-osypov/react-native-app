import React from "react";
import { View } from "react-native";
import Background from "../../components/background";
import { ThemedText as Text } from "../../theme";
import styles from "./home.styles";
import BgElements from "./bg-elements";
import Accounts from "./accounts";

const accountsData = [
  { currency: "USD", amount: 11.03 },
  { currency: "EUR", amount: 10.51 },
  { currency: "GBP", amount: 1.01 },
];
const Home = () => {
  const [activeAccount, setActiveAccount] = React.useState(
    accountsData[0].currency
  );
  const onPressAccount = (currency) => () => {
    setActiveAccount(currency);
  };
  return (
    <Background>
      <View style={styles.accountsContainer}>
        <BgElements />
        <View style={styles.accountsContentContainer}>
          <Text style={styles.accountsTitle}>Your accounts</Text>
          <Accounts
            accountsData={accountsData}
            activeAccount={activeAccount}
            onPressAccount={onPressAccount}
          />
        </View>
      </View>
      <View style={styles.transactionsContainer}>
        <Text>Transactions</Text>
      </View>
    </Background>
  );
};

export default Home;
