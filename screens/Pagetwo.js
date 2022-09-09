import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Pagetwo() {
  return (
    <View style={styles.container}>
      <Text>Pagetwo</Text>
      <Text>Pagetwo</Text>
      <Text>Pagetwo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa0000',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
})