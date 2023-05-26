import React from "react";
import { Text } from "react-native";
import { useFonts } from "expo-font";

export const useLoadAssets = () => {
  const [loaded] = useFonts({
    // eslint-disable-next-line global-require
    SourceCodePro: require("./assets/fonts/SourceCodePro-Regular.ttf"),
    // eslint-disable-next-line global-require
    "SourceCodePro-SemiBold": require("./assets/fonts/SourceCodePro-SemiBold.ttf"),
  });
  return { loaded };
};
export const themeDefaultValue = {
  text: {
    color: "white",
    fontSize: 16,
    fontFamily: "SourceCodePro",
  },
};
const ThemeContext = React.createContext(themeDefaultValue);

export const ThemedText = (props) => {
  const theme = React.useContext(ThemeContext);
  return <Text style={[theme.text, props.style]}>{props.children}</Text>;
};

export default ThemeContext;
