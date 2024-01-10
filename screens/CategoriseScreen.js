import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useNavigation } from '@react-navigation/native';
import CustomHeaderButton from '../components/HeaderButton';
import {CATEGORIES} from '../data/dummy'
import { FlatList } from 'react-native-gesture-handler';
import CategoryTitle from './CategoryTitle';

const CategoriseScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item title='Menu' iconName='menu' onPress={() =>navigation.toggleDrawer()} />
        </HeaderButtons>
      ),
    });
  }, [navigation]);


  const renderGridItem = (itemData)=>{
    return(
   <CategoryTitle
    title={itemData.item.title} 
    color={itemData.item.color}
    onSelect={()=>{
      navigation.navigate("CategoryMeals",{
        categoryId:itemData.item.id
      })
    }}

    />
    )
  }


  return (
  <FlatList keyExtractor={item =>item.id}
  data={CATEGORIES}
  numColumns={2}
  renderItem={renderGridItem}
   />
  );
};

export default CategoriseScreen;
