import React from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import {Colors, Images, Icons, Fonts} from './../../constants';

const DiscoverDetail = ({navigation, route}) => {

    let {selectedArticle} = route.params;

    return (
        <View style={styles.container}>
            <ImageBackground style={{
                width: '100%',
                height: 342,
                position: 'absolute',
                top: 0,
            }}
                resizeMode='cover'
                source={selectedArticle.thumbnail}
            />

            <View style={{
                height: 52,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 16,
                marginTop: 44
            }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <Image source={Icons.Back} />
                </TouchableOpacity>

                <View style={{
                    width: 52,
                    height: 52,
                    borderRadius: 52,
                    backgroundColor: '#2648D1',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image source={Icons.Share} />
                </View>
            </View>
            <View style={{
                marginTop: 271,
                marginHorizontal: 16,

            }}>
                <Text style={{
                    color: Colors.white,
                    fontSize: 18,
                    fontFamily: Fonts.poppinsBold,
                    lineHeight: 27
                }}>
                    {selectedArticle?.type}
                    {selectedArticle?.type ? ' : ' : ''}
                    {selectedArticle?.title}
                </Text>
            </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 16,
                marginTop: 14
            }}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Image source={selectedArticle.author.avatar} />
                    <View style={{marginLeft: 14}}>
                        <Text style={{
                            color: Colors.white,
                            fontSize: 16,
                            fontFamily: Fonts.poppinsSemiBold,
                            marginBottom: 3
                        }}>
                            {selectedArticle.author.name}
                        </Text>
                        <Text style={{
                            color: '#C4C4C4', fontSize: 12,
                            fontFamily: Fonts.interRegular,
                        }}>May 15, 2020 </Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Image source={Icons.Likes} />
                    <Text style={{
                        color: Colors.white,
                        fontSize: 12, marginLeft: 8,
                        marginRight: 15,
                        fontFamily: Fonts.interRegular,
                    }}>
                        {selectedArticle.likes}
                    </Text>
                    <Image source={Icons.Comments} />
                    <Text style={{
                        color: Colors.white,
                        fontSize: 12,
                        marginLeft: 8,
                        fontFamily: Fonts.interRegular,
                    }}>
                        {selectedArticle.comments}
                    </Text>
                </View>
            </View>

            <ScrollView contentContainerStyle={{
                height: 300,
                marginHorizontal: 16,
            }}>
                <View>
                    <View style={{marginHorizontal: 16, marginTop: 15}}>
                        <Text style={{
                            color: '#EAEBFF',
                            fontFamily: Fonts.interRegular,
                            fontSize: 14,
                            lineHeight: 26
                        }}>
                            {selectedArticle.detail}
                        </Text>
                    </View>
                </View>
            </ScrollView>

            <View style={{
                width: 262,
                height: 56,
                borderRadius: 27.5,
                backgroundColor: '#2648D1',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                position: 'absolute',
                bottom: 22,
                marginHorizontal: 56
            }}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Text style={{fontSize: 18, color: Colors.white, marginRight: 8}}>Read More</Text>
                    <Image style={{width: 24, height: 24}} source={Icons.Down} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    }
});

export default DiscoverDetail;
