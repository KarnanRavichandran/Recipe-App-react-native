import { createSlice } from '@reduxjs/toolkit'
import {MEALS} from '../data/dummy'

const initialState = {
    meals: MEALS,
    filteredMeals:MEALS,
    favoriteMeals:[],
  };

  const mealsSlice = createSlice({
    name: 'meals',
    initialState,
    reducers:{
        toggleFavorite:(state,action)=>{
            const exsitingIndex = state.favoriteMeals.findIndex((meal)=>meal.id ==action.payload)
            if(exsitingIndex >=0){
                const updateedFavMeals=[...state.favoriteMeals];
                updateedFavMeals.splice(exsitingIndex,1)
                state.favoriteMeals = updateedFavMeals
            }
            else{
                const meal =state.meals.find((meal)=>meal.id == action.payload);
                state.favoriteMeals = state.favoriteMeals.concat(meal)
            }
        },
        setFilters(state,action){
            const appFilters = action.payload;
            const updatedFiltersMeals = state.meals.filter((meal)=>{
                if(appFilters.glutenFree && !meal.isGlutenFree){
                    return false;
                }
                if(appFilters.lactoseFree && !meal.isLactoseFree){
                    return false;
                }
                if(appFilters.vegan && !meal.isVegan){
                    return false;
                }
                if(appFilters.vegetarian && !meal.isVegetarian){
                    return false;
                }
                return true;
            })
            state.filteredMeals = updatedFiltersMeals;
        }
    }
  });

  export const {toggleFavorite,setFilters} = mealsSlice.actions;
  export default mealsSlice.reducer