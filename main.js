import exponent from 'exponent';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

//Imported TaskList Component to render
import TaskList from './TaskList';

class ToDo extends Component {
  constructor(props, context) {
      super(props, context);

      this.state = {
          todos: [
              {
                  task: 'Learn React Native'
              }
          ]
      };
  }
  render() {
      return (
          <View style={styles.container}>
            <TaskList/>
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
