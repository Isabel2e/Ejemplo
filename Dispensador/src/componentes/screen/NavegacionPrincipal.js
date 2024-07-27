import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//importar screen Principal

const Stack = createStackNavigator();
import LoginPrincipal from "./Login/LoginPrincipal";
import Navegation from "../Navegation";
import Cuenta from "./Login/Cuenta";

function MyStackLogin () {
    return (
       <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Login" component={LoginPrincipal}/>
        <Stack.Screen options={{headerShown:false}} name="crearcuenta" component={Cuenta}/>
        <Stack.Screen options={{headerShown:false}} name="Dash" component={Navegation}/>
       </Stack.Navigator>
    )
}

export default function Navegation2 () {
    return(
        <NavigationContainer>
         <MyStackLogin/>
        </NavigationContainer>
    )
}