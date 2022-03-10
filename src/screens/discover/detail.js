import React from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { Colors, Images, Icons } from './../../constants';

const DiscoverDetail = () => {

    return (
        <View style={styles.container}>
            <ImageBackground style={{
                width: '100%',
                height: 342,
                position: 'absolute',
                top: 0,
            }}
                resizeMode='cover'
                source={Images.News1}
            />

            <View style={{
                height: 52,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 16,
                marginTop: 44
            }}>
                <Image source={Icons.Back} />
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
                }}>LIVE Transfer Talk: Ronaldo pushing for Man City move</Text>
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
                    <Image source={Images.Avatar1} />
                    <View style={{ marginLeft: 14 }}>
                        <Text style={{ color: Colors.white, fontSize: 16, marginBottom: 3 }}>Brian Imanuel</Text>
                        <Text style={{ color: '#C4C4C4', fontSize: 12 }}>May 15, 2020 </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={Icons.Likes} />
                    <Text style={{ color: Colors.white, fontSize: 12, marginLeft: 8, marginRight: 15 }}>1403</Text>
                    <Image source={Icons.Comments} />
                    <Text style={{ color: Colors.white, fontSize: 12, marginLeft: 8 }}>976</Text>
                </View>
            </View>

            <ScrollView contentContainerStyle={{
                height: 300,
                marginHorizontal: 16,
            }}>
                <View>
                    <View style={{ marginHorizontal: 16, marginTop: 15 }}>
                        <Text style={{ color: '#EAEBFF' }}>
                            Cristiano Ronaldo has left Juventus' training session early on Wednesday morning after sustaining a blow to the arm.
                        </Text>
                        <Text style={{ color: '#EAEBFF' }}>
                            After reportedly asking not to start for last Saturday's 2-2 draw at Udinese, could this mean he is ruled out for Saturday's home match against Empoli
                        </Text>
                        <Text style={{ color: '#EAEBFF' }}>
                            After reportedly asking not to start for last Saturday's 2-2 draw at Udinese, could this mean he is ruled out for Saturday's home match against Empoli
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
                    <Text style={{ fontSize: 18, color: Colors.white, marginRight: 8 }}>Read More</Text>
                    <Image style={{ width: 24, height: 24 }} source={Icons.Down} />
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
