import * as React from 'react';
import { View, Text } from 'react-native';

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

export default CountryScreen;