import {Text, TouchableOpacity, View} from "react-native";
import React from "react";
import styles from "./styles";

function Navigation({ state, descriptors, navigation }) {
  return (
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel || options.title || route.name
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
              <TouchableOpacity
                  key={index}
                  onPress={onPress}
                  style={styles.touchableOpacity}
              >
                <Text style={{...styles.navItemText, color: isFocused ? '#2C73D2' : '#222222' }}>
                  {label}
                </Text>
                {isFocused && <View style={styles.line} />}
              </TouchableOpacity>
          );
        })}
      </View>
  );
}
export default Navigation;
