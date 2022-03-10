import React from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {Icons, Colors, Fonts} from '../../constants';
import dummyData from '../../mock';

const DiscoverNews = ({navigation}) => {

  const renderNews = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={
          () => {
            navigation.navigate('DiscoverDetail', {selectedArticle: item});
          }
        }
        style={{
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
          <Text style={{
            fontSize: 14,
            fontFamily: Fonts.poppinsMedium,
            color: Colors.white,
            marginBottom: 5
          }}>{item.title}</Text>
          <Text style={{
            fontSize: 11,
            color: '#808191',
            marginBottom: 5,
            fontFamily: Fonts.poppinsRegular,
          }} >
            {item.views} views - 2 days ago
          </Text>
          <Text style={{fontSize: 12, color: '#808191', fontFamily: Fonts.poppinsRegular, }}>
            {item.author.name}
          </Text>
        </View>
      </TouchableOpacity >
    );
  };

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
          fontFamily: Fonts.poppinsSemiBold,
        }}>
          Lastest News
        </Text>
        <Text style={{
          color: Colors.white,
          fontSize: 9,
          color: '#A0A3BD',
          textTransform: 'uppercase',
          fontFamily: Fonts.poppinsSemiBold,
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
