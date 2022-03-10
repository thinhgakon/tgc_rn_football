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

const Discover = ({navigation}) => {

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{}} style={{}}>
                <StatusBar hidden={true} />

                <DiscoverHeader />

                <DiscoverBanner />

                <DiscoverTeams />

                <DiscoverMatches />

                <DiscoverNews navigation={navigation} />
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
