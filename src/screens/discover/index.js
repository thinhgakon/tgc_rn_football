import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    ScrollView,
} from 'react-native';
import {Colors} from '../../constants';

import DiscoverHeader from './header';
import DiscoverBanner from './banner';
import DiscoverTeams from './teams';
import DiscoverMatches from './matches';
import DiscoverNews from './news';

const Discover = () => {

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{}} style={{}}>
                <StatusBar hidden={true} />

                <DiscoverHeader />

                <DiscoverBanner />

                <DiscoverTeams />

                <DiscoverMatches />

                <DiscoverNews />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        // justifyContent: 'center',
        // alignItems: 'center',
    }
});

export default Discover;
