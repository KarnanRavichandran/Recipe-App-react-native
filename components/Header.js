import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderTitle from './HeaderTitle'
import Colors from '../constants/Colors'

const Header = ({title}) => {
  return (
    <View style={styles.header}>
<HeaderTitle style={styles.headerTitle}>{title}</HeaderTitle>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        alignItems:'center',
        justifyContent:'center',
        paddingTop:20,
        width:'100%',
        backgroundColor:Colors.primary,
        height:60
    },
    headerTitle:{
        color:'#fff',

    }

})