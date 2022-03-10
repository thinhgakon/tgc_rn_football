import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';
import {Icons, Colors, Images, Fonts} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';

const DiscoverBanner = () => {

    return (
        <View style={styles.banner}>
            <LinearGradient
                colors={['#4C4478', '#0C0C69']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{
                    height: 181.92,
                    borderRadius: 16,
                    backgroundColor: 'green',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                }}
            >
                <View
                    style={{
                        width: 175,
                        margin: 20,
                        justifyContent: 'space-between',
                    }}
                >
                    <View
                        style={{
                            width: 79,
                            height: 23,
                            borderRadius: 12,
                            backgroundColor: Colors.white,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                        }}
                    >
                        <Image source={Icons.Soccer} />
                        <Text
                            color="#181829"
                            style={{
                                fontFamily: Fonts.interSemiBold,
                                fontSize: 12,
                            }}
                        >
                            Football
                        </Text>
                    </View>
                    <Text
                        size={17} style={{
                            fontFamily: Fonts.interSemiBold,
                            fontSize: 17,
                            color: Colors.white
                        }}
                    >
                        Zidane and Real Madrid: Where it went wrong and what's next
                    </Text>
                    <Text
                        style={{
                            fontFamily: Fonts.interRegular,
                            fontSize: 12,
                            color: Colors.white,
                        }}
                    >
                        Tomorrow, 06.30 PM
                    </Text>
                </View>
            </LinearGradient>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                }}
            >
                <Image source={require('./../../../assets/images/Zidane.png')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    banner: {
        height: 200,
        marginHorizontal: 16,
        marginTop: 25,
        marginBottom: 23,
        // backgroundColor: 'red'
    },

});

export default DiscoverBanner;
