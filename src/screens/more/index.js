import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

const More = () => {

    return (
        <View style={styles.container}>
            <Text>More Screen</Text>
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

export default More;
