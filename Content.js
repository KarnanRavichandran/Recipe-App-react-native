import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Content = ({item}) => {
  return (
    <View>
      <Text
       style={{
        fontSize:18,
        fontWeight:'800',
        textTransform:'uppercase',
        textAlign:'center'}}
        numberOfLines={1}
        adjustsFontSizeToFit
      >{item.title}</Text>
      <Text style={{fontSize:12,opacity:0.4,}}>{item.subtitle}</Text>
 <View style={{flexDirection:'row',marginTop:20}}>
 <Text style={{fontSize:40,letterSpacing:3,fontWeight:'900',marginRight:8}}>{item.price}</Text>
 <Text style={{fontSize:16,lineHeight:36,fontWeight:'800',alignSelf:'flex-end'}} >USD</Text>
 </View>
    </View>
  )
}

export default Content

const styles = StyleSheet.create({})