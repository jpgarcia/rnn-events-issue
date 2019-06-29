import React, { useState, useEffect, memo } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Navigation } from 'react-native-navigation'

const HomeStateless = ({ componentId }) => {
  const [value, setValue] = useState('...')

  useEffect(() => {
    const listener = Navigation.events().registerComponentDidAppearListener(event => {
      if (event.componentId === componentId) {
        setValue(`${Date.now()}`)
      }
    })

    return () => listener.remove()
  }, [componentId])

  const handleBackPress = () => Navigation.pop(componentId)

  return (
    <View style={styles.container}>
      <Text>Home Stateless</Text>
      <Text>{value}</Text>
      <Button title="BACK" onPress={handleBackPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
})

export default memo(HomeStateless)
