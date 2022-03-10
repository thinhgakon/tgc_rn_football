import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DiscoverDetail} from './../screens';
import Tabs from './tabs';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Tabs"
                    component={Tabs}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="DiscoverDetail"
                    component={DiscoverDetail}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
