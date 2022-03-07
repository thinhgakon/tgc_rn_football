import * as React from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Profile} from './../screens';
import {Icons, Colors} from './../constants';

const Tab = createBottomTabNavigator();

const Tabs = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    // tabBarLabel: 'Home',
                    tabBarLabel: ({focused, color}) => (
                        <Text style={focused ? styles.activeTab : styles.nomalTab} >
                            Home
                        </Text>
                    ),
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={Icons.home}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: focused ? Colors.primary : Colors.accent
                            }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    // tabBarLabel: 'Profile',
                    tabBarLabel: ({focused, color}) => (
                        <Text style={focused ? styles.activeTab : styles.nomalTab} >
                            Profile
                        </Text>
                    ),
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={Icons.profile}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: focused ? Colors.primary : Colors.accent
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
        color: Colors.primary,
    },
    nomalTab: {
        color: Colors.accent,
    }
});

export default Tabs;