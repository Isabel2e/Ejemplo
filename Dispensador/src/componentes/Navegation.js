import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";



//importar screen Principal

import Home from "./screen/Dash/Home";
import ScreenLuces from "./screen/Luces/ScreenLuces";
import ScreenSetting from "./screen/Setting/ScreenSetting";
import ScreenUser from "./screen/User/ScreenUser";
import ScreenPuerta from "./screen/Puertas/ScreenPuerta";
import UserDetalles from "./screen/User/UserDetalles";
import LoginPrincipal from "./screen/Login/LoginPrincipal";
import Formulariouser from "./screen/Login/FromnuevoUser";
import Editaruser from "./screen/User/Editaruser";
import Nuevouser from "./screen/User/Nuevouser";
import Mapa from "./screen/Mapa de la casa/Mapa";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
// ya no funciona desde que se creo navegacion2
function MyStack () {
    return (
       <Stack.Navigator>
        <Stack.Screen name="Usuarios" component={ScreenUser}/>
        <Stack.Screen name="Detalles" component={UserDetalles}/>
        <Stack.Screen name="nuevouser" component={Nuevouser}/>
        <Stack.Screen name="EditarUser" component={Editaruser}/>
       </Stack.Navigator>
    )
}

function navegar (){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Mapa" component={Mapa}/>
        </Stack.Navigator>
    )
}

function Mytabs (){
    return(
        <Tab.Navigator initialRouteName="menu" screenOptions={{tabBarActiveTintColor:'blue'}}>
        <Tab.Screen options={{headerShown: false ,tabBarBadge:'2',tabBarIcon:({color,size})=>(<MaterialCommunityIcons name="home" size={size} color={color} />)}} name="Home" component={navegar}/>
        <Tab.Screen options={{tabBarIcon:({color,size})=>(<MaterialCommunityIcons name="lightbulb" size={size} color={color} />)}} name="Luz" component={ScreenLuces}/>
        <Tab.Screen options={{tabBarIcon:({color,size})=>(<MaterialCommunityIcons name="door" size={size} color={color} />)}} name="Puerta" component={ScreenPuerta}/>
        <Tab.Screen options={{headerShown:false,tabBarIcon:({color,size})=>(<MaterialCommunityIcons name="account-supervisor-circle" size={size} color={color} />)}} name="Usuarios" component={MyStack}/>
        <Tab.Screen options={{tabBarIcon:({color,size})=>(<MaterialCommunityIcons name="cog" size={size} color={color} />)}} name="Ajustes" component={ScreenSetting}/>
        </Tab.Navigator>
    )
};

export default function Navegation () {
    return(
      
         <Mytabs/>
     
    )
}