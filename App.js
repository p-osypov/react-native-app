import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import Navigation from './src/components/navigation';

const Tab = createBottomTabNavigator();

function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home" tabBar={(props) => <Navigation {...props} />}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Details" component={DetailsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App;
