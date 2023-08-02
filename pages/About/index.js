import { View, Text, Button } from 'react-native'
import React from 'react'

export default function About({navigation}) {
  return (
    <View>
      <Text>sobre nos</Text>
      <Button onPress={()=>navigation.navigate('other')} title='Ir para NotFound' />
    </View>
  )
}