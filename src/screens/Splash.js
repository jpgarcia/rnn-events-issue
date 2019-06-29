import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation'

const Splash = ({ componentId }) => {
  const handleHomeStatelessPress = () => Navigation.push(componentId, { component: { name: 'HOME_STATELESS' } })

  const handleHomeClassPress = () => Navigation.push(componentId, { component: { name: 'HOME_CLASS' } })

  return (
    <View style={styles.container}>
      <Button title="Go Home Stateless" onPress={handleHomeStatelessPress} />
      <Button title="Go Home Class" onPress={handleHomeClassPress} />
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

export default Splash
