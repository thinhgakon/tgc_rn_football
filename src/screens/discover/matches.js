import React from 'react';
import {
    Text,
    View,
    Image,
    FlatList,
    StyleSheet
} from 'react-native';
import {Icons, Colors} from '../../constants';
import dummyData from '../../mock';

const renderMatches = ({item, index}) => {
    return (
        <View style={{
            width: 112,
            height: 156,
            backgroundColor: '#2648D1',
            marginLeft: index === 0 ? 16 : 0,
            marginRight: index === dummyData.Teams.length - 1 ? 0 : 10,
            borderRadius: 8,
        }}>
            <View style={{
                marginTop: 10,
                marginHorizontal: 8,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.white,
                borderRadius: 30,
                paddingHorizontal: 5,
                paddingVertical: 10,
            }}>
                <Text style={{
                    fontSize: 9,
                    color: '#2648D1',
                }}>{item.name}</Text>
            </View>

            <View style={{
                width: 90,
                flexDirection: 'row',
                marginTop: 9,
                justifyContent: 'space-between',
                marginLeft: 11,
            }}>
                <Image style={{width: 40}} source={item.team1.logo} />
                <Image style={{width: 40}} source={item.team2.logo} />
            </View>
            <View style={{
                alignItems: 'center'
            }}>
                <Text style={{marginTop: 9, fontSize: 10, color: Colors.white}}>
                    {item.team1.name}
                </Text>
                <Text style={{fontSize: 6, color: Colors.white}}>
                    vs
                </Text>
                <Text style={{fontSize: 10, color: Colors.white}}>
                    {item.team2.name}
                </Text>
            </View>
        </View>
    );
};

const DiscoverMatches = () => {

    return (
        <View style={styles.teams}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 16,
                marginBottom: 15,
                marginTop: 23
            }}>
                <Text style={{
                    color: Colors.white,
                    fontSize: 18,
                }}>
                    Upcoming Matches
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
            <View>
                <FlatList
                    keyExtractor={(item) => '_team' + item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{}}
                    data={dummyData.Matches}
                    renderItem={renderMatches}
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

export default DiscoverMatches;
