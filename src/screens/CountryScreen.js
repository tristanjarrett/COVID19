import * as React from 'react';
import Country from '../components/Country';

function CountryScreen({ navigation, route }) {
    const { itemData } = route.params;
    
    return (
        <Country data={itemData} />
    );
}

export default CountryScreen;