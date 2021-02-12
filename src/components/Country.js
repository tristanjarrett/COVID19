import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

function largeNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

class Country extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        };
    }

    render() {
        const { data } = this.state;
        return (
            <SafeAreaView style={ styles.container }>
                
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