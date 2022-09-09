import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Pageone() {
  return (
    <View style={styles.container}>
      <Text>Pageone</Text>
      <Text>Pageone</Text>
      <Text>Pageone</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a10ad',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
})