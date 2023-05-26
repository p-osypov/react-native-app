import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/home";
import Details from "./screens/details";
import ThemeContext, { themeDefaultValue, useLoadAssets } from "./theme";

const Stack = createStackNavigator();

function App() {
  const { loaded } = useLoadAssets();
  if (!loaded) return null;

  return (
    <ThemeContext.Provider value={themeDefaultValue}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

export default App;
