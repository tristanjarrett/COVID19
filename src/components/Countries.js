import React from 'react';
import { ActivityIndicator, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

class Countries extends React.Component {
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
        <View>
            {isLoading ? <ActivityIndicator/> : (
            <FlatList
                data={data.Countries}
                keyExtractor={({ ID }, index) => ID}
                renderItem={({ item }) => (
                    <View style={styles.listRow}>
                        <TouchableOpacity
                            style={styles.listItem}
                            onPress={() => {
                                this.props.navigation.navigate('Country', {
                                    itemData: item
                                });
                            }}>
                            <Text style={ styles.title }>{item.Country}</Text>
                            <FontAwesomeIcon icon={ faChevronRight } style={ styles.icon } />
                        </TouchableOpacity>
                    </View>
                )}
            />
            )}
        </View>
        );
    }
};

const styles = StyleSheet.create({
    listRow: {
        borderBottomColor: '#e1e1e1',
        borderBottomWidth: 1
    },
    listItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10
    },
    title: {
        fontSize: 18
    },
    icon: {
        color: '#a9a9a9'
    }
});

export default Countries;