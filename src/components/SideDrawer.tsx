import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./Login";
import DrawerContent from "./DrawerContent";

const Drawer = createDrawerNavigator();

const SideDrawer = () =>{
    return(
     <NavigationContainer>
         <Drawer.Navigator drawerContent={props => <DrawerContent/>}>
             <Drawer.Screen name="Home" component={Login}/>
         </Drawer.Navigator>
     </NavigationContainer>
    );
}