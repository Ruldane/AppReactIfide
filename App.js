import React, {Component} from 'react';
// eslint-disable-next-line no-unused-vars
import {Button, StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {score: 0, niveau: 1};
  }

  getInitialState = () => {
    this.setState({
      score: (this.state.score = 0),
      niveau: (this.state.niveau = 1),
    });
  };

  incrementScore = () => {
    this.IncrementNiveau();
    this.setState({
      score: this.state.score + 1,
    });
  };

  IncrementNiveau = () => {
    this.state.score === 5
      ? this.setState({
          niveau: this.state.niveau + 1,
        })
      : null;
  };

  render() {
    return (
      <View>
        <View>
          <Button
            onPress={() => this.incrementScore()}
            title="Click on the button"
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text>Score: {this.state.score}</Text>
          <Text>Niveau: {this.state.niveau}</Text>
        </View>
        <View>
          <Button onPress={() => this.getInitialState()} title="Start again" />
        </View>
        {this.state.niveau > 1 || this.state.niveau === 2 || this.state.niveau === 3 || this.state.niveau === 4 ? (
            alert('Bravoooooo vous avez passé un niveau, vous pouvez finalement accéder à votre fiche de score')
            <Button
            title="Go to Details"
            onPress={() => {
              navigation.navigate('Details', {
                niveau: this.state.niveau,
                otherParam: 'anything you want here',
              });
            }}
          />
        ) : null}
      </View>
    );
  }
}

export default App;
