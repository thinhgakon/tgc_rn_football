import React from 'react';
import {
    Text,
    View,
    Image,
    FlatList,
    StyleSheet
} from 'react-native';
import {Icons, Colors} from '../../constants';
import dummyData from './../../mock';

const renderTeams = ({item, index}) => {
    return (
        <View style={{
            width: 70,
            height: 65,
            borderRadius: 10,
            backgroundColor: '#222232',
            marginLeft: index === 0 ? 16 : 0,
            marginRight: index === dummyData.Teams.length - 1 ? 0 : 10,
            alignItems: 'center',
            justifyContent: 'center',
            // marginTop: 10,
        }}>
            <Image style={{
                width: 50,
                height: 50,
            }} source={item.logo} />
        </View>
    );
};

const DiscoverTeams = () => {

    return (
        <View style={styles.teams}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 16,
                marginBottom: 10,
            }}>
                <Text style={{
                    color: Colors.white,
                    fontSize: 18,
                }}>
                    Popular Teams
                </Text>
                <Text style={{
                    color: Colors.white,
                    fontSize: 9,
                    color: '#A0A3BD',
                    textTransform: 'uppercase'
                }}>
                    View all
                </Text>
            </View>
            <View style={{paddingVertical: 10}}>
                <FlatList
                    keyExtractor={(item) => '_team' + item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{}}
                    data={dummyData.Teams}
                    renderItem={renderTeams}
                >
                </FlatList>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {

    },
});

export default DiscoverTeams;
