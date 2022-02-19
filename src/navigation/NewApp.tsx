import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { navigationRef } from './Rootnavigation';
import ApiCall from "../components/Apicall"
import ApiPostCall from "../components/ApiPostCall";
import ListItems from "../components/ListItems";
import VideoPlayer from "../components/VideoPlayer";

const Stack = createStackNavigator();

const NewApp = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="ListItem">
            <Stack.Screen  name="VideoPlayer" component={VideoPlayer} /> 
            <Stack.Screen  name="ListItem" component={ListItems} /> 
            <Stack.Screen  name="ApiPostCall" component={ApiPostCall} /> 
               {/* <Stack.Screen  name="Apicall" component={ApiCall} />  */}
                {/* <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Login" component={Login} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default NewApp;