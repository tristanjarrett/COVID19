import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

import BarChart from '../components/BarChart';

function largeNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

class GlobalStats extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
            barData: []
        };
    }

    componentDidMount() {
        fetch('https://api.covid19api.com/summary')
        .then((response) => response.json())
        .then((json) => {
            this.setState({ 
                data: json,
                barData: [
                    { label: 'New Confirmed', value: parseInt(json.Global.NewConfirmed), color: 'orange' },
                    { label: 'New Deaths', value: parseInt(json.Global.NewDeaths), color: 'red' },
                    { label: 'New Recovered', value: parseInt(json.Global.NewRecovered), color: 'green' }
                  ]
            });
        })
        .catch((error) => console.error(error))
        .finally(() => {
            this.setState({ isLoading: false });
        });
    }

    render() {
        const { data, isLoading, barData } = this.state;

        return (
            <SafeAreaView style={ styles.container }>

                {isLoading ? <ActivityIndicator/> : (
                    <View style={styles.chartSection}>
                        <Text style={styles.chartTitle}>Latest New Data</Text>
                        <View style={styles.chart}>
                            <BarChart data={barData} round={100} unit="€"/>
                        </View>
                    </View>
                )}

                {isLoading ? <ActivityIndicator/> : (
                    <View style={ styles.infoSection }>

                        <View style={ styles.infoItem }>
                            <View style={ styles.infoItemCol }>
                                <Text style={ styles.inforItemTitle }>New Confirmed</Text>
                                <Text style={ styles.infoItemValue }>{largeNumber(data.Global.NewConfirmed)}</Text>
                            </View>
                            <View style={ styles.infoItemCol }>
                                <Text style={ styles.inforItemTitle }>Total Confirmed</Text>
                                <Text style={ styles.infoItemValue }>{largeNumber(data.Global.TotalConfirmed)}</Text>
                            </View>
                        </View>

                        <View style={ styles.infoItem }>
                            <View style={ styles.infoItemCol }>
                                <Text style={ styles.inforItemTitle }>New Deaths</Text>
                                <Text style={ [styles.infoItemValue, styles.fontBad] }>{largeNumber(data.Global.NewDeaths)}</Text>
                            </View>
                            <View style={ styles.infoItemCol }>
                                <Text style={ styles.inforItemTitle }>Total Deaths</Text>
                                <Text style={ [styles.infoItemValue, styles.fontBad] }>{largeNumber(data.Global.TotalDeaths)}</Text>
                            </View>
                        </View>

                        <View style={ styles.infoItem }>
                            <View style={ styles.infoItemCol }>
                                <Text style={ styles.inforItemTitle }>New Recovered</Text>
                                <Text style={ [styles.infoItemValue, styles.fontGood] }>{largeNumber(data.Global.NewRecovered)}</Text>
                            </View>
                            <View style={ styles.infoItemCol }>
                                <Text style={ styles.inforItemTitle }>Total Recovered</Text>
                                <Text style={ [styles.infoItemValue, styles.fontGood] }>{largeNumber(data.Global.TotalRecovered)}</Text>
                            </View>
                        </View>

                    </View>
                )}
                <View style={ styles.navSection }>
                    <TouchableOpacity
                        style={ styles.button }
                        onPress={() => this.props.navigation.navigate('Countries')}
                    >
                        <Text style={ styles.buttonText }>Search by Country</Text>
                    </TouchableOpacity>
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
    },
    navSection: {
        paddingHorizontal: 30
    },
    button: {
        alignItems: "center",
        backgroundColor: "#5b92eb",
        padding: 15,
        borderRadius: 5
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default GlobalStats;