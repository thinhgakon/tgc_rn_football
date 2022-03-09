import * as React from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Discover, Explore, Standings, More} from './../screens';
import {Icons, Colors} from './../constants';

const Tab = createBottomTabNavigator();

const Tabs = () => {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: Colors.tabBackground
                }
            }}
        >
            <Tab.Screen
                name="Discover"
                component={Discover}
                options={{
                    tabBarLabel: ({focused, color}) => (
                        <Text style={focused ? styles.activeTab : styles.nomalTab} >
                            Discover
                        </Text>
                    ),
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={Icons.Discover}
                            resizeMode="contain"
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: focused ? Colors.primary : Colors.grey
                            }}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Explore"
                component={Explore}
                options={{
                    tabBarLabel: ({focused, color}) => (
                        <Text style={focused ? styles.activeTab : styles.nomalTab} >
                            Explore
                        </Text>
                    ),
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={Icons.Explore}
                            resizeMode="contain"
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: focused ? Colors.primary : Colors.grey
                            }}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Standings"
                component={Standings}
                options={{
                    tabBarLabel: ({focused, color}) => (
                        <Text style={focused ? styles.activeTab : styles.nomalTab} >
                            Standings
                        </Text>
                    ),
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={Icons.Standings}
                            resizeMode="contain"
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: focused ? Colors.primary : Colors.grey
                            }}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="More"
                component={More}
                options={{
                    tabBarLabel: ({focused, color}) => (
                        <Text style={focused ? styles.activeTab : styles.nomalTab} >
                            More
                        </Text>
                    ),
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={Icons.More}
                            resizeMode="contain"
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: focused ? Colors.primary : Colors.grey
                            }}
                        />
                    ),
                }}
            />
        </Tab.Navigator >
    );
};

const styles = StyleSheet.create({
    activeTab: {
        color: Colors.white,
    },
    nomalTab: {
        color: Colors.grey,
    }
});

export default Tabs;