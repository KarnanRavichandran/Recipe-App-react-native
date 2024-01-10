import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import MealItem from './MealItem'
import { useNavigation } from '@react-navigation/native'


const MealList = ({ displayedMeals }) => {

    const navigation = useNavigation();
    const renderMealItem = (itemData) => {
        return <MealItem
            title={itemData.item.title}
            onSelectMeal={() => {
                navigation.navigate("MealDetails", {
                    mealId: itemData.item.id
                })
            }}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            imageUrl={itemData.item.imageUrl}
        />
    }
    return (
        <View>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </View>
    )
}

export default MealList

const styles = StyleSheet.create({})