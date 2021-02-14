import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import BarChart from '../components/BarChart';

function largeNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

class Country extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            barData: [
                { label: 'New Confirmed', value: parseInt(this.props.data.NewConfirmed), color: 'orange' },
                { label: 'New Deaths', value: parseInt(this.props.data.NewDeaths), color: 'red' },
                { label: 'New Recovered', value: parseInt(this.props.data.NewRecovered), color: 'green' }
              ]
        };
    }

    render() {
        const { data, barData } = this.state;
        return (
            <SafeAreaView style={ styles.container }>

                <View style={styles.chartSection}>
                    <Text style={styles.chartTitle}>Latest New Data</Text>
                    <View style={styles.chart}>
                        <BarChart data={barData} round={100} unit="€"/>
                    </View>
                </View>
                
                <View style={ styles.infoSection }>

                    <View style={ styles.infoItem }>
                        <View style={ styles.infoItemCol }>
                            <Text style={ styles.inforItemTitle }>New Confirmed</Text>
                            <Text style={ styles.infoItemValue }>{largeNumber(data.NewConfirmed)}</Text>
                        </View>
                        <View style={ styles.infoItemCol }>
                            <Text style={ styles.inforItemTitle }>Total Confirmed</Text>
                            <Text style={ styles.infoItemValue }>{largeNumber(data.TotalConfirmed)}</Text>
                        </View>
                    </View>

                    <View style={ styles.infoItem }>
                        <View style={ styles.infoItemCol }>
                            <Text style={ styles.inforItemTitle }>New Deaths</Text>
                            <Text style={ [styles.infoItemValue, styles.fontBad] }>{largeNumber(data.NewDeaths)}</Text>
                        </View>
                        <View style={ styles.infoItemCol }>
                            <Text style={ styles.inforItemTitle }>Total Deaths</Text>
                            <Text style={ [styles.infoItemValue, styles.fontBad] }>{largeNumber(data.TotalDeaths)}</Text>
                        </View>
                    </View>

                    <View style={ styles.infoItem }>
                        <View style={ styles.infoItemCol }>
                            <Text style={ styles.inforItemTitle }>New Recovered</Text>
                            <Text style={ [styles.infoItemValue, styles.fontGood] }>{largeNumber(data.NewRecovered)}</Text>
                        </View>
                        <View style={ styles.infoItemCol }>
                            <Text style={ styles.inforItemTitle }>Total Recovered</Text>
                            <Text style={ [styles.infoItemValue, styles.fontGood] }>{largeNumber(data.TotalRecovered)}</Text>
                        </View>
                    </View>

                </View>
                    
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    chartSection: {
        padding: 20
    },
    chartTitle: {
        fontSize: 16
    },
    chart: {
        alignItems: 'center',
        paddingTop: 20
    },
    infoSection: {
        padding: 20
    },
    infoItem: {
        flexDirection: 'row',
        padding: 15,
        borderWidth: 1,
        borderColor: '#e1e1e1',
        marginBottom: 10
    },
    infoItemCol: {
        flexDirection: 'column',
        flex: 1
    },
    inforItemTitle: {
        fontSize: 16
    },
    infoItemValue: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    fontGood: {
        color: '#20a827'
    },
    fontBad: {
        color: '#ff0000'
    }
});

export default Country;