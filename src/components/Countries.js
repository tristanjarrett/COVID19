import React from 'react';
import { ActivityIndicator, View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faChevronRight } from '@fortawesome/free-solid-svg-icons';

class Countries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
            searchString: ""
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
            <SafeAreaView style={styles.container}>
                <View style={ styles.searchBackground }>
                    <View style={styles.searchSection}>
                        <FontAwesomeIcon icon={ faSearch } style={ styles.searchIcon } />
                        <TextInput
                            style={styles.input}
                            placeholder="Search"
                            onChangeText={(searchString) => {this.setState({searchString}, console.log(searchString))}}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </View>
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
                                    itemData: item,
                                    countryName: item.Country,
                                });
                            }}>
                            <Text style={ styles.title }>{item.Country}</Text>
                            <FontAwesomeIcon icon={ faChevronRight } style={ styles.icon } />
                        </TouchableOpacity>
                    </View>
                )}
            />
            )}
        </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchBackground: {
        padding: 10,
        backgroundColor: '#e1e1e1'
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#b9b9b9'
    },
    searchIcon: {
        paddingHorizontal: 20,
        color: '#a9a9a9'
    },
    input: {
        flex: 1,
        fontSize: 18,
        color: '#424242',
        paddingVertical: 10
    },
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