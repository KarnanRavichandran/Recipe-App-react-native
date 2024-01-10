import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeaderTitle = ({children,style}) => {
  return (
    <View>
      <Text style={{...styles.text,...style}}>{children}</Text>
    </View>
  )
}

export default HeaderTitle

const styles = StyleSheet.create({
    text:{
        fontSize:18,
        fontFamily:'OpenSans_SemiCondensed-Bold'
    }
})