import React from "react";
import Login from './screens/login';
import Signup from './screens/signup';
import Forget from './screens/forget';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Routes() {
    const Stack = createNativeStackNavigator();
    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Signup">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Forget" component={Forget} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}