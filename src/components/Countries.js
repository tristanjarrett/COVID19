import React from 'react';
import { ActivityIndicator, View, Text, FlatList, Button } from 'react-native';

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
                <Button
                    title={item.Country}
                    onPress={() => {
                    this.props.navigation.navigate('Country', {
                        itemData: item
                    });
                    }}
                />
                )}
            />
            )}
        </View>
        );
    }
};

export default Countries;