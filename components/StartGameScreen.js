import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import HeaderTitle from './HeaderTitle'
import Card from './Card'
import BodyText from './BodyText'
import Input from './Input'

const StartGameScreen = () => {
  return (
    <ScrollView>
     <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30}  >
      <TouchableWithoutFeedback>
        <View style={styles.screen}>
       <HeaderTitle style={styles.title}>Start a New Game</HeaderTitle>
        <Card style={styles.inputConatiner}>
          <BodyText>Select Number</BodyText>
          <Input
           style={styles.input} 
           blurOnSubmit
           autoCapitalize="none"
           autoCorrect={false}
           keyboardType="number-pad"
           maxLength={2}
            />
        </Card>
        </View>
      </TouchableWithoutFeedback>
     </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({})