import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ContactScreen = () => {
    const navigation = useNavigation()
  return (
    <View>
      <Text>ContactScreen</Text>
      <Button title='Home Screen' onPress={()=>navigation.navigate({name:'Home'})}  />
    </View>
  )
}

export default ContactScreen

const styles = StyleSheet.create({})