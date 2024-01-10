import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation()


  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title='User Screen' onPress={()=>navigation.navigate({name:'User'})}  />
      <Button title='Conatct Screen' onPress={()=>navigation.navigate({name:'Conatct'})}  />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})