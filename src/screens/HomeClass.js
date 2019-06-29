import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Navigation } from 'react-native-navigation'

class HomeClass extends React.PureComponent {
  state = {
    value: '...',
  }

  componentDidMount() {
    this.listener = Navigation.events().registerComponentDidAppearListener(event => {
      if (event.componentId === this.props.componentId) {
        this.setState({ value: `${Date.now()}` })
      }
    })
  }

  componentWillUnmount() {
    if (this.listener) {
      this.listener.remove()
    }
  }

  handleBackPress = () => {
    Navigation.pop(this.props.componentId)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Class</Text>
        <Text>{this.state.value}</Text>
        <Button title="BACK" onPress={this.handleBackPress} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
})

export default HomeClass
