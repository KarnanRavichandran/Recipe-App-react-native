import { StyleSheet, Text, View ,Image} from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import { ScrollView } from 'react-native-gesture-handler'
import { toggleFavorite } from '../slices/meal'

const ListItem = ({children})=>{
  return(
    <View style={styles.listItem}>
      <Text style={styles.info}>{children}</Text>
    </View>
  )
}

const MealDetailScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const { mealId } = route.params;

  const availableMeals = useSelector((state) => state.meals.meals);
  const selectedMeals = availableMeals.find((meal) => meal.id === mealId);
  const isFavoriteMeal = useSelector((state) => {
    return state.meals.favoriteMeals.some(meal => meal.id === mealId)
  })
  const dispatch = useDispatch();
  const  toggleFavHandler = ()=>{
    dispatch(toggleFavorite(mealId))
  }

  useEffect(() => {
    navigation.setOptions({
      headerTitle: selectedMeals.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item title='Favorite'
            iconName={isFavoriteMeal ? 'star' : 'star-outline'}
            onPress={toggleFavHandler}
          />
        </HeaderButtons>
      )
    })
  }, [isFavoriteMeal])

  const { affordability, complexity, duration, ingredients, imageUrl, steps } = selectedMeals


  return (
    <ScrollView contentContainerStyle={{
      paddingBottom:55
    }}
    showsVerticalScrollIndicator={false}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.info}>{duration} mins</Text>
        <Text style={styles.info}> {complexity.toUpperCase()} </Text>
        <Text style={styles.info}> {affordability.toUpperCase()} </Text>
      </View>
      <Text style={styles.title}>Ingridients</Text>
      {
        ingredients.map((ingredient,index)=>(
        <ListItem key={index}>{ingredient}</ListItem>
        ))
      }
      <Text style={styles.title}>Steps</Text>
      {
        steps.map((step,index)=>(
          <ListItem key={index}>{step}</ListItem>
        ))
      }
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  image:{
    width:'100%',
    height:200
  },
  details:{
    flexDirection:'row',
    padding:15,
    justifyContent:'space-around'
  },
  title:{
    fontFamily:'OpenSans-Bold',
    fontSize:22,
    textAlign:'center',
    color:'black'
  },
  listItem:{
    marginVertical:10,
    marginHorizontal:20,
    borderColor:"#ccc",
    borderWidth:1,
    padding:10
  },
  info:{
    fontFamily:'OpenSans-Regular',
  }
})