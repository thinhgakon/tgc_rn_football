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

const renderNews = ({item, index}) => {
    return (
        <View style={{
            width: 319,
            height: 93,
            marginLeft: index === 0 ? 16 : 0,
            marginRight: index === dummyData.Teams.length - 1 ? 0 : 10,
            flexDirection: 'row'
        }}>
            <Image style={{
                width: 120,
                height: 93,
                borderRadius: 10,
                marginRight: 10
            }} source={item.thumbnail} />
            <View style={{
                width: 189
            }}>
                <Text style={{fontSize: 14, color: Colors.white, marginBottom: 10}}>{item.title}</Text>
                <Text style={{fontSize: 11, color: '#808191', marginBottom: 10}} >
                    {item.views} views - 2 days ago
                </Text>
                <Text style={{fontSize: 12, color: '#808191'}}>
                    {item.author.name}
                </Text>
            </View>
        </View >
    );
};

const DiscoverNews = () => {

    return (
        <View style={styles.news}>
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
                    Lastest News
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
                    data={dummyData.News}
                    renderItem={renderNews}
                >
                </FlatList>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    news: {
        marginBottom: 16
    },
});

export default DiscoverNews;
