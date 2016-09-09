import exponent from 'exponent';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class ToDo extends Component {

  render() {
      return (
          <View style={styles.container}>
            <Text>ToDo App</Text>
          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
AppRegistry.registerComponent('main', () => ToDo);
