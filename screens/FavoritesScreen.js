import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import MealItem from '../components/MealItem'
import MealList from '../components/MealList'
import { useNavigation } from '@react-navigation/native'
import { HeaderButtons,Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'

const FavoritesScreen = () => {
  const navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({
      headerTitle:"Your Favorites",
      headerLeft:()=>(
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title='Menu' iconName='menu' onPress={()=>navigation.toggleDrawer()} />
        </HeaderButtons>
      )
    })
  })

  const favoriteMeals = useSelector((state)=>state.meals.favoriteMeals)
  if(favoriteMeals.length ===0 || !favoriteMeals){
    <View styles ={styles.content}>
      <Text style={styles.info}>No More content Please Add to start</Text>
    </View>
  }


  return <MealList displayedMeals={favoriteMeals} />
  
}

export default FavoritesScreen

const styles = StyleSheet.create({
  content:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  info:{
    fontFamily:'OpenSans-Bold',
  }
})