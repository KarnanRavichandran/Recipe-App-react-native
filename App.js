import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import Navigator from './navigation/Navigation'

const App = () => {
    return <Provider store={store}><Navigator /></Provider> 
}

export default App

