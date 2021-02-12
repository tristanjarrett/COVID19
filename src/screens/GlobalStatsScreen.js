import * as React from 'react';
import { View, Button } from 'react-native';
import GlobalStats from '../components/GlobalStats';

function GlobalStatsScreen({ navigation }) {
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

  export default GlobalStatsScreen;