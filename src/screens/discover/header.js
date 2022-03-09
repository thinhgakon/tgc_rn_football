import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';
import {Icons, Colors} from './../../constants';

const DiscoverHeader = () => {

    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Discover</Text>
            <View style={styles.headerIcon}>
                <Image source={Icons.Search} style={{marginRight: 20}} />
                <Image source={Icons.Notification} />
                <View style={styles.headerBadge}>
                    <Text style={{color: Colors.white, fontSize: 8}}>3</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 30,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        lineHeight: 35,
        fontSize: 30,
        color: Colors.white,
    },
    headerIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerBadge: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: -5,
        right: 5,
    }
});

export default DiscoverHeader;
