import React from 'react';
import { ActivityIndicator, View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

function largeNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

class GlobalStats extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true
        };
    }

    componentDidMount() {
        fetch('https://api.covid19api.com/summary')
        .then((response) => response.json())
        .then((json) => {
            this.setState({ data: json });
        })
        .catch((error) => console.error(error))
        .finally(() => {
            this.setState({ isLoading: false });
        });
    }

    render() {
        const { data, isLoading } = this.state;
        return (
            <View style={ styles.container }>
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
                    {/* <Button
                        title="Search by Country"
                        onPress={() => this.props.navigation.navigate('Countries')}
                    /> */}
                    <TouchableOpacity
                        style={ styles.button }
                        onPress={() => this.props.navigation.navigate('Countries')}
                    >
                        <Text style={ styles.buttonText }>Search by Country</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1
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
        padding: 30
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