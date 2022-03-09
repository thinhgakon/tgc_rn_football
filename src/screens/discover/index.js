import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

const Discover = () => {

    return (
        <View style={styles.container}>
            <Text>Discover Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Discover;
