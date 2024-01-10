import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import ContactScreen from './screens/ContactScreen';
import Ionicons from "react-native-vector-icons/Ionicons";
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingsScreen from './screens/SettingsScreen';
import FilterScreen from './screens/filterScreen';

const Stack = createNativeStackNavigator();
function StackNavigator() {
    return (
      <Stack.Navigator
      screenOptions={{
        title:'Instagram'
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Conatct" component={ContactScreen} />
      </Stack.Navigator>
    );
  }


const Tab = createBottomTabNavigator();
const TabNavigator = ()=>{
    return(
        <Tab.Navigator screenOptions={{
             headerShown: false
        }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
              tabBarIcon:({focused,size,color})=>(
                <Ionicons name="home" color={color} size={size} />
              ),
             
            }} />
            <Tab.Screen name="User" component={UserScreen}  options={{
              tabBarIcon:({focused,size,color})=>(
                <Ionicons name="person-sharp" color={focused ?'red':'gray'} size={size} />
              ),tabBarBadge:4
            }} />
            <Tab.Screen name="Conatct" component={ContactScreen} options={{
              tabBarIcon:({focused,size,color})=>(
                <Ionicons name="information-circle-outline" color={color} size={size} />
              )
            }} />
        </Tab.Navigator>
    )
}



const Drawer = createDrawerNavigator();
const DrawerNavigation = ()=>{
    return (
        <Drawer.Navigator >
          <Drawer.Screen name="HomeTab" component={TabNavigator} />
          <Drawer.Screen name="filter" component={FilterScreen} />
          <Drawer.Screen name="settings" component={SettingsScreen} />
        </Drawer.Navigator>
      );
    }
  





const Navigation = () => {
  return (
    <NavigationContainer>
          <DrawerNavigation />
        </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})