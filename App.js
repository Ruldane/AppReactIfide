import React, {Component} from 'react';
// eslint-disable-next-line no-unused-vars
import {Button, StyleSheet, View, Text, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function Niveau({navigation}) {
  return (
    <View>
      <Text>Niveau:</Text>
    </View>
  );
}

const Stack = createStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {score: 0, niveau: 1};
  }

  getInitialState = () => {
    this.setState({
      score: 0,
      niveau: 1,
    });
  };

  Jeu({route, navigation}) {
    const {score, niveau} = route.params;
    return (
      <View>
        <View>
          <Button onPress={() => this.incrementScore()} title="Click moi" />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text>Score: {JSON.stringify(score)}</Text>
          <Text>Niveau: {JSON.stringify(niveau)}</Text>
        </View>
        <View>
          <Button onPress={() => this.getInitialState()} title="Redémare" />
        </View>
      </View>
    );
  }
//app container

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
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Jeu">
          <Stack.Screen
            name="Jeu"
            component={this.Jeu}
            initialParams={{score: 0, niveau: 1}}
          />
          <Stack.Screen
            name="Niveau"
            component={Niveau}
            initialParams={{score: 5, niveau: 2}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
