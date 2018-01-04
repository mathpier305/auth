import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './component/common';

class App extends Component{
  render(){
    return(
      <View>
        <Header headerText="authentication" />
        <Text> An App!! </Text>
      </View>
    );
  }
}


export default App;
