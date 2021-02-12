import * as React from 'react';
import Countries from '../components/Countries';

function CountriesScreen({ navigation }) {
    return (
        <Countries navigation={navigation} />
    );
}

export default CountriesScreen;