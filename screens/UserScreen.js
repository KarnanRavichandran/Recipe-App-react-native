import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const UserScreen = () => {
    const navigation = useNavigation()

  return (
    <View>
      <Text>UserScreen</Text>
      <Button title='Contact Screen' onPress={()=>navigation.navigate({name:'Conatct'})}  />
    </View>
  )
}

export default UserScreen

const styles = StyleSheet.create({})