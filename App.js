import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Countries from './src/components/Countries';
import GlobalStats from './src/components/GlobalStats';

const navTheme = {
  headerStyle: {
    backgroundColor: '#1b202b',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
}

function DashboardScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <GlobalStats navigation={navigation} />
      <Button
        title="Go to Countries"
        onPress={() => navigation.navigate('Countries')}
      />
    </View>
  );
}

function CountriesScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Countries navigation={navigation} />
    </View>
  );
}

function CountryScreen({ route }) {
  const { itemData } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row' }}>
        <Text>New Confirmed: {JSON.stringify(itemData.NewConfirmed)}</Text>
        <Text>Total Confirmed: {JSON.stringify(itemData.TotalConfirmed)}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text>New Deaths: {JSON.stringify(itemData.NewDeaths)}</Text>
        <Text>Total Deaths: {JSON.stringify(itemData.TotalDeaths)}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text>New Recovered: {JSON.stringify(itemData.NewRecovered)}</Text>
        <Text>Total Recovered: {JSON.stringify(itemData.TotalRecovered)}</Text>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
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