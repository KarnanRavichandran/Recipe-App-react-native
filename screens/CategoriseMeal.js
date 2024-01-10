import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/dummy';
import MealList from '../components/MealList';

const CategoriseMeal = () => {

  const route = useRoute();
  const navigation = useNavigation()
  
  const {categoryId} = route.params;

const avlailableMeals = useSelector((state)=>{
  return state.meals.filteredMeals;
})

const displayedMeals = avlailableMeals.filter((meal)=>{
  return meal.categoryIds.indexOf(categoryId) >=0
})
const selectedCategory = CATEGORIES.find(cat=>cat.id ===categoryId);



useEffect(()=>{
    navigation.setOptions({
      headerTitle:selectedCategory.title,

    })
},[])



if(displayedMeals.length === 0){
  return(
    <View style={styles.content}>
      <Text style={{fontFamily: 'OpenSans-Regular'}}>No Need Found maybe check your Filtrers</Text>
    </View>
  )
}

  return (
   <MealList displayedMeals={displayedMeals} />
  )
}

export default CategoriseMeal

const styles = StyleSheet.create({
  content:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})