import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import CategoriseScreen from '../screens/CategoriseScreen';
import CategoriseMeal from '../screens/CategoriseMeal';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';




const defaultStackOption = {
  headerStyle: {
    backgroundColor: Colors.primaryColor
  },
  headerTitleStyle: {
    fontFamily: 'OpenSans-Bold'
  },
  headerBackTitleStyles: {
    fontFamily: 'OpenSans-Regular'
  },
  headerTintColor: 'white'
};

const Stack = createNativeStackNavigator();
// stack navigator ->step 1
const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackOption}>
      <Stack.Screen
        name='Categorise'
        component={CategoriseScreen}
        options={{
          title: 'Meals Category'
        }}
      />
      <Stack.Screen name='CategoryMeals' component={CategoriseMeal} />
      <Stack.Screen name='MealDetails' component={MealDetailScreen} />
    </Stack.Navigator>
  );
};


const FiltersStack = createNativeStackNavigator();
const FiltersStackNavigator = ()=>{
  return(
    <FiltersStack.Navigator screenOptions={defaultStackOption}>
    <FiltersStack.Screen name='FiltersS' component={FiltersScreen} />
    </FiltersStack.Navigator>
  );
};

const FavoritesStack = createNativeStackNavigator();
const FavNavigator = () => {
  return (
    <FavoritesStack.Navigator screenOptions={defaultStackOption}>
      <FavoritesStack.Screen name='FavoritesS' component={FavoritesScreen} />
      <FavoritesStack.Screen name='MealDetails' component={MealDetailScreen} />
    </FavoritesStack.Navigator>
  );
};


const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator shifting={true}
    barStyle={{
      backgroundColor:Colors.primaryColor,
      height:45,
      marginBottom:20
    }} 
    screenOptions={{

    }}
    >
      <Tab.Screen name='Meal' component={MyStack}
       options={{
         tabBarIcon:({focused,color})=>{
          return(
            <Ionicons name="restaurant" size={25} color={focused ? color : '#fff'} />
          )
         },
         tabBarColor:Colors.primaryColor,
         tabBarLabel:(
          <Text style={{
           fontFamily:'OpenSans-Bold',
           color:'#fff'
          }} >Meals</Text>
         )
       

      }} />

      <Tab.Screen name='Favorites' component={FavNavigator} 
      
      options={{
         tabBarIcon:({focused,color})=>{
          return(
            <Ionicons name="star" size={25} color={focused ? color : '#fff'} />
          )
         },
         tabBarColor:Colors.accentColor,
         tabBarLabel:(
          <Text style={{
           fontFamily:'OpenSans-Bold',
           color:'#fff'
          }} >favorite</Text>
         )
       

      }}

      />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator()
const MainNavigator = ()=>{
  return(
    <Drawer.Navigator screenOptions={{
      drawerActiveTintColor:Colors.accentColor,
      drawerLabelStyle:{
        fontFamily:'OpenSans-Bold',
      },
      headerShown:false,

    }}>
      <Drawer.Screen  name='MealsFav' component={TabNavigator} options={{
        title:'Meals'
      }} />
      <Drawer.Screen name='Filters' component={FiltersStackNavigator} options={{

      }} />
    
    </Drawer.Navigator>

  )
}




// main=>app.js
const Navigator = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Navigator;

