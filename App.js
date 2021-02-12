import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GlobalStatsScreen from './src/screens/GlobalStatsScreen';
import CountriesScreen from './src/screens/CountriesScreen';
import CountryScreen from './src/screens/CountryScreen';

const navTheme = {
  headerStyle: {
    backgroundColor: '#1b202b',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'normal'
  }
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          name="Global Statistics"
          component={GlobalStatsScreen}
          options={{ title: 'Global Statistics' }, navTheme}
        />
        <Stack.Screen
          name="Countries"
          component={CountriesScreen}
          options={{ title: "Countries" }, navTheme}
        />
        <Stack.Screen
          name="Country"
          component={CountryScreen}
          options={{ title: "Country" }, navTheme}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;