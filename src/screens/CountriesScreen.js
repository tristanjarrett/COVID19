import * as React from 'react';
import { View } from 'react-native';
import Countries from '../components/Countries';

function CountriesScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Countries navigation={navigation} />
        </View>
    );
}

export default CountriesScreen;