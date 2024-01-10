import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BodyText = ({children,style}) => {
  return (
    <View>
      <Text style={{...styles.text,...style}}>{children}</Text>
    </View>
  )
}

export default BodyText

const styles = StyleSheet.create({
    text:{
        fontFamily:"OpenSans_SemiCondensed-Italic"
    }
})