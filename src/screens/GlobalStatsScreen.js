import * as React from 'react';
import { View, Button } from 'react-native';
import GlobalStats from '../components/GlobalStats';

function GlobalStatsScreen({ navigation }) {
    return (
      <GlobalStats navigation={navigation} />
    );
  }

  export default GlobalStatsScreen;