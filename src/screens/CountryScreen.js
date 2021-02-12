import * as React from 'react';
import { View, Text } from 'react-native';
import Country from '../components/Country';

function CountryScreen({ route }) {
    const { itemData } = route.params;
    return (
        <Country data={itemData} />
    );
}

export default CountryScreen;