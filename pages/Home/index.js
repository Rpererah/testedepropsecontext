import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  return (
    <View>
      <Text>bem vindo a pagina inicial</Text>
      <Button onPress={()=>navigation.navigate('about')} title='Ir para about' />
    </View>
  )
}