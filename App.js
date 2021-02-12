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
      <Stack.Navigator initialRouteName="Global Statistics" screenOptions={navTheme}>
        <Stack.Screen
          name="Global Statistics"
          component={GlobalStatsScreen}
          options={{ title: 'Global Statistics' }}
        />
        <Stack.Screen
          name="Countries"
          component={CountriesScreen}
          options={{ title: "Countries" }}
        />
        <Stack.Screen
          name="Country"
          component={CountryScreen}
          options={
            ({ route }) => ({ title: route.params.countryName })
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;